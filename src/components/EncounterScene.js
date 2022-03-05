import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../store/store'
import { Link } from 'react-router-dom'
import civilianEncounters from '../store/civilianEncounters'
import {getRandomInteger} from '../utilities'

export default function EncounterScene() {
    const [resolution, setResolution] = useState(null)
    const [state, dispatch] = useContext(Context)
    const [encounter, setEncounter] = useState(null)

    useEffect(() => {
        let encounters = null
        if(state.current.class.includes("civilian")) encounters = civilianEncounters
        const availableEncounters = encounters.filter(encounter => encounter.available)
        const random = getRandomInteger(0,availableEncounters.length-1)
        setEncounter(availableEncounters[random])
    }, [encounter]);

    


    
    return(
        <section className="scene">
            {/* <h2 className="scene__heading">Starspawn Attack!</h2>
            <figure className="scene__image-slot">
                <img className="scene__image" src={scenes[0].image} alt="space monster" />
            </figure>      
            <div className="scene__text">
                <p className="scene__event">A massive starspawn bears down on your ship, trying to swallow it whole!</p>
                <p className="scene__choices">You can try to fend it off by firing your weapons, or you can take evasive maneuvers and try to outrun it...</p>
                <div className="scene__button-row">
                    <button className="scene__button scene__button_action scene__button_a">Fire Your Weapons</button>
                    <button className="scene__button scene__button_action scene__button_b">Take Evasive Manuevers</button>
                </div>
                <section className="resolution">
                    <div className="resolution__a resolution__a_success">
                        <p className="resolution__text">You unleash a volley of missiles directly into the starspawn's gaping maw. It reels in pain and slinks away, allowing you to continue on your way.</p>
                    </div>
                    <div className="resolution__a resolution__a_failure hidden">
                        <p className="resolution__text">You unleash a volley of missiles that detonate across the starspawn's thick hide and it pulls back in pain. Deciding your ship is not food, it rams you spitfeully as it retreats.</p>                        
                    </div>
                    <div className="resolution__b resolution__b_success hidden">
                        <p className="resolution__text">Your ship swerves to narrowly avoid the attack and you punch the afterburner. The starspawn gives chase, but eventually recedes into the distance behind you.</p>                        
                    </div>
                    <div className="resolution__b resolution__b_failure hidden">
                        <p className="resolution__text">Your ship swerves to avoid the attack. You narrowly miss the jaws of the starspawn, but it gives your ship a jarring sideswipe as it passes by. You manage to punch the afterburner and get away before it can charge you again.</p>                        
                    </div>
                </section>
                <Link to="/map" className="scene__continue">Continue</Link>
            </div> */}
            
        </section>
    )
}