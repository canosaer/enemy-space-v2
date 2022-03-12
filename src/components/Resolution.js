import React, {useContext} from 'react';
import {Context} from '../store/store'
import { Link } from 'react-router-dom'
import civilianEncounters from '../store/civilianEncounters'
import nebulaEncounters from '../store/nebulaEncounters'
import hostileEncounters from '../store/hostileEncounters'

export default function Resolution() {
    const [state, dispatch] = useContext(Context)

    const resetEncounter = () => {
        dispatch({type:'UPDATE_ENCOUNTER', payload: null})
        dispatch({type:'UPDATE_RESOLUTION', payload: null})
    }

    const resetGame = () => {
        let initial = {
            coord: '1',
            class: 'map__dot map__dot_civilian map__dot_1 map__dot_current',
        }
        
        dispatch({type:'UPDATE_CURRENT', payload: initial})
        // dispatch({type:'RESET_GAME', payload: null})

        civilianEncounters.map((civilianEncounter, i) => {
            civilianEncounter.available = true
        })
        nebulaEncounters.map((nebulaEncounter, i) => {
            nebulaEncounter.available = true
        })
        hostileEncounters.map((hostileEncounter, i) => {
            hostileEncounter.available = true
        })
    }

    if(state.resolution){
        let gameOverText = "Play Again"
        let continueText = "Continue"
        return(
            <>
                <section className="resolution">
                    <p className="resolution__text">{state.resolution}</p>
                    {state.gameOver ? <p className="resolution__text resolution__text_game-over">Your ship has been destroyed.</p> : null}
                </section>
                <Link to={state.gameOver ? "/" : "/map"} onClick={() => state.gameOver ? resetGame() : resetEncounter()} className="scene__continue">{state.gameOver ? gameOverText : continueText}</Link>
            </>
        )
    }
    else return(
        <>
        </>
    )
}