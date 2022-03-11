import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../store/store'
import civilianEncounters from '../store/civilianEncounters'
import nebulaEncounters from '../store/nebulaEncounters'
import hostileEncounters from '../store/hostileEncounters'
import {getRandomInteger, resolveAttack, rollStat, rollDice} from '../utilities'
import Resolution from '../components/Resolution'

export default function EncounterScene() {
    // const [resolution, setResolution] = useState(null)
    const [encounter, setEncounter] = useState(null)
    const [state, dispatch] = useContext(Context)

    useEffect(() => {
        if(!encounter){
            let encounters = null
            if(state.current.class.includes("civilian")) encounters = civilianEncounters
            else if(state.current.class.includes("nebula")) encounters = nebulaEncounters
            else encounters = hostileEncounters
            const availableEncounters = encounters.filter(availableEncounter => availableEncounter.available)
            const random = getRandomInteger(0,availableEncounters.length-1)
            setEncounter(availableEncounters[random])
            dispatch({type:'UPDATE_ENCOUNTER', payload: encounter})
            // console.log(state)
        }
        
        if(encounter && encounter.available === true){
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

    // useEffect(() => {
    //     console.log(state)
    // }, [state])
    

    // useEffect(() => {
    //     dispatch({
    //         type: 'MOUNT_STATE',
    //         payload: JSON.parse(window.localStorage.getItem('state')),
    //     })
    // }, [])

    // useEffect(() => {
    //     window.localStorage.setItem('state', JSON.stringify(state))
    // }, [state])

    const modifyStat = (stat, change) => {
        if(stat === "weapons"){
            dispatch({type:'UPDATE_WEAPONS', payload: state.weapons + change})
        }
        else if(stat === "lifeSupport"){
            dispatch({type:'UPDATE_LIFESUPPORT', payload: state.lifeSupport + change})
        }
        else if(stat === "power"){ 
            dispatch({type:'UPDATE_POWER', payload: state.power + change})
        }
        else{
            dispatch({type:'UPDATE_ENGINES', payload: state.engines + change})
        }
    }

    const improveLifeSupport = (value, resolution) => {
        modifyStat("lifeSupport", value)
        return resolution.pass + ' Your life support system is improved!'
    }

    const improvePower = (value, resolution) => {
        modifyStat("power", value)
        return resolution.pass + ' Your power system is improved!'
    }

    const damagePhysicalComponents = (damage, resolution) => {
        if(damage > 0){
            const rnd = getRandomInteger(0,1)
            if(rnd === 1){
                modifyStat("weapons", -damage)
                return resolution = resolution.fail + ' You take damage to your weapons!'
            }
            else{
                modifyStat("engines", -damage)
                return resolution = resolution.fail + ' You take damage to your engines!'
            }
        }
        else return resolution = resolution.fail
    }

    const damageSystems = (damage, resolution) => {
        if(damage > 0){
            const rnd = getRandomInteger(0,1)
            if(rnd === 1){
                modifyStat("power", -damage)
                return resolution = resolution.fail + ' You take damage to your power system!'
            }
            else{
                modifyStat("lifeSupport", -damage)
                return resolution = resolution.fail + ' You take damage to your life support system!'
            }
        }
        else return resolution = resolution.fail
    }

    const resolveEncounter = (choice) => {
        let resolution = ""
        if(encounter.id === "c00"){
            if(choice==="Investigate"){
                const roll = rollDice(2)
                if(roll===4){
                    resolution = improveLifeSupport(1, civilianEncounters[0].resolutions[0])
                }
                else if(roll===3){
                    resolution = improvePower(1, civilianEncounters[0].resolutions[0])
                }
                else if(roll===0){
                    const damage = rollDice(2)
                    resolution = damagePhysicalComponents(damage, civilianEncounters[0].resolutions[0])
                }
                else{
                    const damage = rollDice(1)
                    resolution = damageSystems(damage, civilianEncounters[0].resolutions[0])
                }
            }
            else{
                const roll = rollStat(state.weapons)
                if(roll>3){
                    modifyStat("lifeSupport", 1)
                    resolution = civilianEncounters[0].resolutions[1].pass
                }
                else if(roll>1 && roll <4){
                    const damage = rollDice(1)
                    resolution = damageSystems(rollDice(1), civilianEncounters[0].resolutions[1])
                }
                else{
                    resolution = civilianEncounters[0].resolutions[1].fail
                    const physicalDamage = rollDice(1)
                    const systemsDamage = rollDice(1)
                    if(physicalDamage > 0 && systemsDamage > 0){
                        damagePhysicalComponents(physicalDamage, null)
                        damageSystems(systemsDamage, null)
                        resolution = civilianEncounters[0].resolutions[1].fail + ' You take damage to multiple systems!'
                    }
                    else{
                        if(physicalDamage > 0){
                            resolution = damagePhysicalComponents(physicalDamage, civilianEncounters[0].resolutions[1])
                        }
                        else if(systemsDamage > 0){
                            resolution = damageSystems(systemsDamage, civilianEncounters[0].resolutions[1])
                        }
                    }
                }
            }
        }
        else if(encounter.id === "c01"){
            if(choice==="Fire Your Weapons"){
                const damage = resolveAttack(state.weapons,4)
                if(damage === 0){
                    resolution = civilianEncounters[1].resolutions[0].pass
                }
                else{
                    resolution = damagePhysicalComponents(damage, civilianEncounters[1].resolutions[0])
                }
                
            }
            else{
                let roll = rollStat(state.engines)
                if(roll > 3){
                    modifyStat("weapons", 1)
                    resolution = civilianEncounters[0].resolutions[1].pass
                }
                else if(roll>0 && roll<4){
                    modifyStat("weapons", -1)
                    resolution = civilianEncounters[0].resolutions[1].fail + ' You take damage to your weapons!'
                }
                else{
                    modifyStat("weapons", -1)
                    modifyStat("engines", -1)
                    resolution = civilianEncounters[0].resolutions[1].fail + ' You take damage to your weapons and engines!'
                }
            }
        }
        else if(encounter.id === "n00"){
            if(choice==="Fire Your Afterburners"){
                const roll = rollStat(state.engines)
                if(roll>3){
                    modifyStat("lifeSupport", 1)
                    resolution = nebulaEncounters[0].resolutions[0].pass
                }
                else if(roll>1 && roll<4){
                    modifyStat("weapons", -1)
                    resolution = nebulaEncounters[0].resolutions[0].fail + ' You take damage to your life support system!'
                }
                else{
                    modifyStat("lifeSupport", -1)
                    modifyStat("weapons", -1)
                    resolution = nebulaEncounters[0].resolutions[0].fail + ' You take damage to your weapons and your life support system!'
                }
            }
            else{
                const roll = rollStat(state.power)
                if(roll>3){
                    modifyStat("power", 1)
                    resolution = nebulaEncounters[0].resolutions[1].pass
                }
                else{
                    const damage = resolveAttack(state.weapons, 4)
                    if(damage === 0){
                        resolution = nebulaEncounters[0].resolutions[1].fail + ' Your systems glitch for a minute, but you are able to repair them and continue on your way.'
                    }
                    else{
                        damagePhysicalComponents(damage, nebulaEncounters[0].resolutions[1])
                    }
                }
            }
        }
        else if(encounter.id === "h00"){
            if(choice === "Blast Them With Air"){
                const roll = rollStat(state.lifeSupport)
                if(roll > 4){
                    modifyStat("weapons", 1)
                    resolution = hostileEncounters[0].resolutions[0].pass
                }
                else if(roll > 0 && roll < 5){
                    modifyStat("lifeSupport", -1)
                    resolution = hostileEncounters[0].resolutions[0].fail
                }
                else{
                    modifyStat("lifeSupport", -2)
                    resolution = hostileEncounters[0].resolutions[0].fail
                }
            }
            else{
                const roll = rollStat(state.engines)
                if(roll > 3){
                    resolution = hostileEncounters[0].resolutions[1].pass
                }
                else if(roll > 0 && roll < 4){
                    const damage = rollDice(1)
                    resolution = damageSystems(damage, hostileEncounters[0].resolutions[1].fail)
                }
                else{
                    const damage = rollDice(2)
                    resolution = damageSystems(damage, hostileEncounters[0].resolutions[1].fail)
                }
            }
        }
        else if(encounter.id === "h01"){
            if(choice === "Punch The Afterburners"){
                const roll = rollStat(state.engines)
                if(roll > 3){
                    modifyStat("engines", 1)
                    resolution = hostileEncounters[1].resolutions[0].pass
                }
                else if(roll === 0){
                    const damage = rollDice(2)
                    resolution = damagePhysicalComponents(damage, hostileEncounters[1].resolutions[0])
                }
                else{
                    const damage = rollDice(1)
                    resolution = damagePhysicalComponents(damage, hostileEncounters[1].resolutions[0])
                }
            }
            else{
                const roll = rollStat(state.lifeSupport)
                if(roll > 3){
                    modifyStat("power", 1)
                    resolution = hostileEncounters[1].resolutions[1].pass
                }
                else if(roll === 0){
                    const damage = rollDice(2)
                    resolution = damagePhysicalComponents(damage, hostileEncounters[1].resolutions[1])
                }
                else{
                    const damage = rollDice(1)
                    resolution = damagePhysicalComponents(damage, hostileEncounters[1].resolutions[1])
                }
            }
        }
        else if(encounter.id === "h02"){
            if(choice === "Clear A Path"){
                const roll = rollStat(state.weapons)
                if(roll >2){
                    modifyStat("weapons", 1)
                    resolution = hostileEncounters[2].resolutions[0].pass
                }
                else if(roll === 0){
                    const damage = rollDice(2)
                    resolution = damagePhysicalComponents(damage, hostileEncounters[2].resolutions[0])
                }
                else{
                    const damage = rollDice(1)
                    resolution = damagePhysicalComponents(damage, hostileEncounters[2].resolutions[0])
                }
            }
            else{
                const roll = rollStat(state.power)
                if(roll>4){
                    modifyStat("power", 1)
                    resolution = hostileEncounters[2].resolutions[1].pass
                }
                else if(roll >1 && roll<5){
                    modifyStat("weapons", -1)
                    resolution = hostileEncounters[2].resolutions[1].fail + " You take damage to your weapons!"
                }
                else if(roll === 1){
                    modifyStat("weapons", -1)
                    modifyStat("engines", -1)
                    resolution = hostileEncounters[2].resolutions[1].fail + " You take damage to your weapons and engines!"
                }
                else{
                    modifyStat("weapons", -1)
                    modifyStat("engines", -1)
                    modifyStat("power", -1)
                    modifyStat("lifeSupport", -1)
                    resolution = hostileEncounters[2].resolutions[1].fail + " You take damage to all your systems!"
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