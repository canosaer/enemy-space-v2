import playerShip from '../img/player.png'
import React, {useContext, useEffect} from 'react';
import {Context} from '../store/store'

export default function Player() {
    const [state, dispatch] = useContext(Context)

    let weapons = "Operational"
    let lifeSupport = "Operational"
    let power = "Operational"
    let engines = "Operational"

    const translateStatus = (value) => {
        if(value === 6) return "Superior"
        else if(value === 5) return "Improved"
        else if(value === 4) return "Operational"
        else if(value === 3) return "Damaged"
        else if(value === 2) return "Impaired"
        else if(value === 1) return "Critical"
    }

    useEffect(() => {
        weapons = translateStatus(state.weapons)
        lifeSupport = translateStatus(state.lifeSupport)
        power = translateStatus(state.power)
        engines = translateStatus(state.engines)
    }, []);
    
    return(
        <section className="player">
            <figure className="player__background">
                <img className="player__image" src={playerShip} alt="player ship" />
            </figure>
            <div className="player__stats">
                <p className="player__weapons">Weapons: <span className="player__weapons-level">{weapons}</span></p>
                <p className="player__life-support">Life Support: <span className="player__life-support-level">{lifeSupport}</span></p>
                <p className="player__power">Power: <span className="player__power-level">{power}</span></p>
                <p className="player__power">Engines: <span className="player__engines-level">{engines}</span></p>
            </div>
        </section>
    )
}