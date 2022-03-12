import playerShip from '../img/player.png'
import React, {useContext, useEffect, useCallback, useState} from 'react';
import {Context} from '../store/store'

export default function Player() {
    const [state, dispatch] = useContext(Context)

    const translateStatus = (value) => {
        if(value > 4 && value < 999) return "Superior"
        else if(value === 4) return "Improved"
        else if(value === 3) return "Operational"
        else if(value === 2) return "Damaged"
        // else if(value === 2) return "Impaired"
        else if(value === 1) return "Critical"
        else if(value === 999) return "Destroyed"
    }

    const weapons = translateStatus(state.weapons)
    const engines = translateStatus(state.engines)
    const lifeSupport = translateStatus(state.lifeSupport)
    const power = translateStatus(state.power)
    
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