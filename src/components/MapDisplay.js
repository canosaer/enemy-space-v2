import React, {useContext} from 'react'
import dots from '../store/dots'
import lines from '../store/lines'
// import ShortUniqueId from 'short-unique-id'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import {Context} from '../store/store'

export default function MapDisplay() {

    const [sectorMap, setSectorMap] = useState([])
    const [current, setCurrent] = useState(1)
    const [state, dispatch] = useContext(Context)

    const buildMap = (path) => {
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
    }

    if(!sectorMap[0]){
        buildMap(null)
    }

    return (
        <section className="map__display">

            {sectorMap.map((element, i) => {
                const key = `element--${i}`

                if(element.interactionClass && element.interactionClass.includes('active')){
                    return(
                        <>
                            <Link key={key} to="/encounter" data-coord={element.coord}

                                onMouseEnter={(e) => {
                                    let arg=`${current}-${e.target.getAttribute('data-coord')}`
                                    buildMap(arg)
                                }}

                                onMouseLeave={() => {
                                    buildMap(null)
                                }}

                                onClick={(e) => {
                                    dispatch({type:'UPDATE_CURRENT', payload: e.target.getAttribute('data-coord')})
                                }}

                                className={`${element.class} ${element.interactionClass}`}

                            >
                            </Link>
                        </>
                    )
                }
                else{
                    return(
                        <>
                            <div key={key} className={element.interactionClass ? `${element.class} ${element.interactionClass}` : element.class}></div>
                        </>
                    )
                }

                
            })}

        </section>
    )
}