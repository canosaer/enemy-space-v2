import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../store/store'
import civilianEncounters from '../store/civilianEncounters'
import nebulaEncounters from '../store/nebulaEncounters'
import hostileEncounters from '../store/hostileEncounters'
import {getRandomInteger, resolveAttack, rollStat} from '../utilities'
import Resolution from '../components/Resolution'

export default function EncounterScene() {
    // const [resolution, setResolution] = useState(null)
    const [encounter, setEncounter] = useState(null)
    const [state, dispatch] = useContext(Context)

    useEffect(() => {
        let encounters = null
        if(state.current.class.includes("civilian")) encounters = civilianEncounters
        else if(state.current.class.includes("nebula")) encounters = nebulaEncounters
        else encounters = hostileEncounters
        const availableEncounters = encounters.filter(availableEncounter => availableEncounter.available)
        const random = getRandomInteger(0,availableEncounters.length-1)
        setEncounter(availableEncounters[random])
        dispatch({type:'UPDATE_ENCOUNTER', payload: encounter})
        if(encounter){
            civilianEncounters.map((civilianEncounter, i) => {
                if(civilianEncounter.id === encounter.id) civilianEncounter.available = false
            })
            nebulaEncounters.map((nebulaEncounter, i) => {
                if(nebulaEncounter.id === encounter.id) nebulaEncounter.available = false
            })
            hostileEncounters.map((hostileEncounter, i) => {
                if(hostileEncounter.id === encounter.id) hostileEncounter.available = false
            })
        }
    }, [encounter]);

    const resolveEncounter = (choice) => {
        let resolution = ""
        if(encounter.id === "n00"){
            if(choice==="Fire Your Weapons"){
                const damage = resolveAttack(state.weapons,4)
                if(damage === 0){
                    resolution = nebulaEncounters[0].resolutions[0].pass
                }
                else{
                    let rnd = getRandomInteger(0,1)
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
                    resolution = nebulaEncounters[0].resolutions[0].fail + ` You take damage to your ${type}!`
                }
                
            }
            else{
                let roll = rollStat(state.engines)
                if(roll > 3){
                    const newValue = state.engines + 1
                    dispatch({type:'UPDATE_ENGINES', payload: newValue})
                    resolution = nebulaEncounters[0].resolutions[1].pass
                }
                else if(roll>0 && roll<4){
                    const newValue = state.weapons - 1
                    dispatch({type:'UPDATE_WEAPONS', payload: newValue})
                    resolution = nebulaEncounters[0].resolutions[1].fail + 'You take damage to your weapons!'
                }
                else{
                    const newWeaponsValue = state.weapons - 1
                    const newEnginesValue = state.engines - 1
                    dispatch({type:'UPDATE_WEAPONS', payload: newWeaponsValue})
                    dispatch({type:'UPDATE_ENGINES', payload: newEnginesValue})
                    resolution = nebulaEncounters[0].resolutions[1].fail + 'You take damage to your weapons and engines!'
                }
            }
        }
        else if(encounter.id === "c00"){
            if(choice==="Investigate"){
                const roll = getRandomInteger(0,2) + getRandomInteger(0,2)
                if(roll===4){
                    const newValue = state.lifeSupport + 1
                    dispatch({type:'UPDATE_LIFESUPPORT', payload: newValue})
                    resolution = civilianEncounters[0].resolutions[0].pass + 'Your life support system is improved!'
                }
                else if(roll===3){
                    const newValue = state.power + 1
                    dispatch({type:'UPDATE_POWER', payload: newValue})
                    resolution = civilianEncounters[0].resolutions[0].pass + 'Your power system is improved!'
                }
                else if(roll===0){
                    const damage = getRandomInteger(0,2) + getRandomInteger(0,2)
                    if(damage > 0){
                        const rnd = getRandomInteger(0,1)
                        if(rnd === 1){
                            const newValue = state.weapons - damage
                            dispatch({type:'UPDATE_WEAPONS', payload: newValue})
                            resolution = civilianEncounters[0].resolutions[0].fail + 'You take damage to your weapons!'
                        }
                        else{
                            const newValue = state.engines - damage
                            dispatch({type:'UPDATE_ENGINES', payload: newValue})
                            resolution = civilianEncounters[0].resolutions[0].fail + 'You take damage to your engines!'
                        }
                    }
                    else resolution = civilianEncounters[0].resolutions[0].fail
                }
                else{
                    const damage = getRandomInteger(0,2)
                    if(damage > 0){
                        const rnd = getRandomInteger(0,1)
                        if(rnd === 1){
                            const newValue = state.lifeSupport - damage
                            dispatch({type:'UPDATE_LIFESUPPORT', payload: newValue})
                            resolution = civilianEncounters[0].resolutions[0].fail + 'You take damage to your life support system!'
                        }
                        else{
                            const newValue = state.power - damage
                            dispatch({type:'UPDATE_POWER', payload: newValue})
                            resolution = civilianEncounters[0].resolutions[0].fail + 'You take damage to your power system!'
                        }
                    }
                    else resolution = civilianEncounters[0].resolutions[0].fail
                }
            }
            else{
                const roll = rollStat(state.weapons)
                if(roll>3){
                    const newValue = state.lifeSupport + 1
                    dispatch({type:'UPDATE_LIFESUPPORT', payload: newValue})
                    resolution = civilianEncounters[0].resolutions[1].pass
                }
                else if(roll>1 && roll <4){
                    const damage = getRandomInteger(0,2)
                    if(damage > 0){
                        const rnd = getRandomInteger(0,1)
                        if(rnd === 1){
                            const newValue = state.lifeSupport - damage
                            dispatch({type:'UPDATE_LIFESUPPORT', payload: newValue})
                            resolution = civilianEncounters[0].resolutions[1].fail + 'You take damage to your life support system!'
                        }
                        else{
                            const newValue = state.power - damage
                            dispatch({type:'UPDATE_POWER', payload: newValue})
                            resolution = civilianEncounters[0].resolutions[1].fail + 'You take damage to your power system!'
                        }
                    }
                    else resolution = civilianEncounters[0].resolutions[1].fail
                }
                else{
                    resolution = civilianEncounters[0].resolutions[1].fail
                    const physicalDamage = getRandomInteger(0,2)
                    const systemsDamage = getRandomInteger(0,2)
                    if(physicalDamage > 0 || systemsDamage > 0){
                        if(physicalDamage > 0){
                            const rnd = getRandomInteger(0,1)
                            if(rnd === 1){
                                const newValue = state.weapons - physicalDamage
                                dispatch({type:'UPDATE_WEAPONS', payload: newValue})
                                resolution = civilianEncounters[0].resolutions[1].fail + 'You take damage to your weapons!'
                            }
                            else{
                                const newValue = state.engines - physicalDamage
                                dispatch({type:'UPDATE_ENGINES', payload: newValue})
                                resolution = civilianEncounters[0].resolutions[1].fail + 'You take damage to your engines!'
                            }
                        }
                        if(systemsDamage > 0){
                            const rnd = getRandomInteger(0,1)
                            if(rnd === 1){
                                const newValue = state.lifeSupport - systemsDamage
                                dispatch({type:'UPDATE_LIFESUPPORT', payload: newValue})
                                resolution = civilianEncounters[0].resolutions[1].fail + 'You take damage to your life support system!'
                            }
                            else{
                                const newValue = state.power - systemsDamage
                                dispatch({type:'UPDATE_POWER', payload: newValue})
                                resolution = civilianEncounters[0].resolutions[1].fail + 'You take damage to your power system!'
                            }
                        }
                    }
                }
            }
        }
        dispatch({type:'UPDATE_RESOLUTION', payload: resolution})
    }

    if(encounter){
        return(
            <section className="scene">
                <h2 className="scene__heading">{encounter.heading}</h2>
                <figure className="scene__image-slot">
                    <img className="scene__image" src={encounter.image} id={encounter.id} alt="encounter image" />
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