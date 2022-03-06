import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../store/store'
import civilianEncounters from '../store/civilianEncounters'
import {getRandomInteger, resolveAttack} from '../utilities'
import Resolution from '../components/Resolution'

export default function EncounterScene() {
    const [resolution, setResolution] = useState(null)
    const [encounter, setEncounter] = useState(null)
    const [state, dispatch] = useContext(Context)

    useEffect(() => {
        let encounters = null
        if(state.current.class.includes("civilian")) encounters = civilianEncounters
        const availableEncounters = encounters.filter(encounter => encounter.available)
        const random = getRandomInteger(0,availableEncounters.length-1)
        setEncounter(availableEncounters[random])
        dispatch({type:'UPDATE_ENCOUNTER', payload: encounter})

    }, [encounter]);

    const resolveEncounter = (choice) => {
        let resolution = ""
        if(encounter.id === "c00"){
            if(choice==="Fire Your Weapons"){
                const damage = resolveAttack(state.weapons,4)
                if(damage === 0){
                    resolution = civilianEncounters[0].resolutions[0].pass
                }
                else{
                    const rnd = getRandomInteger(0,1)
                    let type = ""
                    let newValue = null
                    if(rnd = 0){
                        type = "weapons"
                        newValue = state.weapons - damage
                        dispatch({type:'UPDATE_WEAPONS', payload: newValue})
                    }
                    else{
                        type = "engines"
                        newValue = state.engines - damage
                        dispatch({type:'UPDATE_ENGINES', payload: newValue})
                    }
                    resolution = civilianEncounters[0].resolutions[0].fail + ` You take damage to your ${type}!`
                }
                
            }
        }
        dispatch({type:'UPDATE_RESOLUTION', payload: resolution})
    }

    // <p className="resolution__text">You unleash a volley of missiles directly into the starspawn's gaping maw. It reels in pain and slinks away, allowing you to continue on your way.</p>
//     <div className="resolution__a resolution__a_failure hidden">
//     <p className="resolution__text">You unleash a volley of missiles that detonate across the starspawn's thick hide and it pulls back in pain. Deciding your ship is not food, it rams you spitfeully as it retreats.</p>                        
// </div>
// <div className="resolution__b resolution__b_success hidden">
//     <p className="resolution__text">Your ship swerves to narrowly avoid the attack and you punch the afterburner. The starspawn gives chase, but eventually recedes into the distance behind you.</p>                        
// </div>
// <div className="resolution__b resolution__b_failure hidden">
//     <p className="resolution__text">Your ship swerves to avoid the attack. You narrowly miss the jaws of the starspawn, but it gives your ship a jarring sideswipe as it passes by. You manage to punch the afterburner and get away before it can charge you again.</p>                        
// </div>

    if(encounter){
        return(
            <section className="scene">
                <h2 className="scene__heading">{encounter.heading}</h2>
                <figure className="scene__image-slot">
                    <img className="scene__image" src={encounter.image} alt="encounter image" />
                </figure>      
                <div className="scene__text">
                    <p className="scene__event">{encounter.event}</p>
                    <p className="scene__choices">{encounter.choices}</p>
                    <div className="scene__button-row">
                        <button className="scene__button scene__button_action scene__button_a" onClick={() => resolveEncounter(encounter.buttons[0])}>{encounter.buttons[0]}</button>
                        <button className="scene__button scene__button_action scene__button_b" onClick={() => resolveEncounter(encounter.buttons[1])}>{encounter.buttons[1]}</button>
                    </div>
                    <Resolution />
                </div>
                
            </section>
        )
    }
    else return(
        <section className="scene"></section>
    )
    
}