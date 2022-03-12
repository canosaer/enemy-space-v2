import React, {useContext, useState, useEffect, useCallback} from 'react'
import dots from '../store/dots'
import lines from '../store/lines'
import { Link, useNavigate } from 'react-router-dom'
import {Context} from '../store/store'

export default function MapDisplay() {

    const [sectorMap, setSectorMap] = useState([])
    const [state, dispatch] = useContext(Context)

    let navigate = useNavigate();

    // console.log(state)

    useEffect(() => {
        if(!sectorMap[0]) buildMap(null)
        if(state.gameOver){
            resetData()
        }
        else if(state.win){
            resetData()
            navigate('/win')
        }
        
    }, [sectorMap]);

    const resetData = () => {
        updateDots('reset')
        dispatch({type:'RESET_GAME', payload: null})
    }

    const buildMap = useCallback((path) => {
        let tempMap = []
        for(let i=1;i<7;i++){
            dots.forEach(dot => {
                if(dot.coord[0]===i.toString()){
                    tempMap.push(dot)
                }
            });
            lines.forEach(line => {
                if(line.path[0]===i.toString()){
                    if(path && path === line.path){
                        line.class = line.class + ' map__line_active'
                    }
                    if(!path && line.class.includes('active')){
                        let endSlice = line.class.lastIndexOf('map__line_active')
                        line.class = line.class.slice(0,endSlice)
                    }
                    tempMap.push(line)
                }
            });
        }
        setSectorMap(tempMap)
    })

    const updateDots = (newCurrent) => {
        if(newCurrent === 'reset'){
            dots.map((dot, i) => {
                if(i===0) dot.interactionClass = "map__dot_current"
                else if(i===1) dot.interactionClass = "map__dot_active"
                else if(i===2) dot.interactionClass = "map__dot_active"
                else dot.interactionClass = "map__dot_available"
            })
        }
        else{
            let newActiveDots = []
            dots.map((dot, i) => {
                if(dot.interactionClass === "map__dot_current") dot.interactionClass = "map__dot_unavailable"
                else if(dot.interactionClass === "map__dot_active"){
                    if(dot.coord === newCurrent){
                        dot.interactionClass = "map__dot_current"
                        newActiveDots = dot.connections
                    }
                    else dot.interactionClass = "map__dot_unavailable"
                }
                if(dot.interactionClass === "map__dot_available"){
                    if(parseInt(dot.coord[0]) <= parseInt(newCurrent[0])) dot.interactionClass = "map__dot_unavailable"
                    else{
                        newActiveDots.forEach(newActive => {
                            if(dot.coord === newActive) dot.interactionClass = "map__dot_active"
                        });
                    }
                }
                // if(dot.interactionClass === "map__dot_available" && dot.coord[0] === newCurrent[0]) dot.interactionClass = "map__dot_unavailable"
            })
            dispatch({type:'UPDATE_BEGIN', payload: false})
        }
    }

    return (
        <section className="map__display">

            {sectorMap.map((element, i) => {
                const key = `element--${i}`

                if(element.interactionClass && element.interactionClass.includes('active')){
                    return(
                        <Link key={key} to="/encounter" data-coord={element.coord}

                            onMouseEnter={(e) => {
                                let arg=`${state.current.coord}-${e.target.getAttribute('data-coord')}`
                                buildMap(arg)
                            }}

                            onMouseLeave={() => {
                                buildMap(null)
                            }}

                            onClick={(e) => {
                                let target = {
                                    coord: e.target.getAttribute('data-coord'),
                                    class: e.target.className,
                                }
                                dispatch({type:'UPDATE_CURRENT', payload: target})
                                updateDots(target.coord)
                            }}

                            className={`${element.class} ${element.interactionClass}`}

                        >
                        </Link>
                    )
                }
                else{
                    return(
                        <div key={key} className={element.interactionClass ? `${element.class} ${element.interactionClass}` : element.class}></div>
                    )
                }

                
            })}

        </section>
    )
}