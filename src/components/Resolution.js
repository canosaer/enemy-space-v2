import React, {useContext} from 'react';
import {Context} from '../store/store'
import { Link } from 'react-router-dom'

export default function Resolution() {
    const [state, dispatch] = useContext(Context)

    const resetEncounter = () => {
        dispatch({type:'UPDATE_ENCOUNTER', payload: null})
        dispatch({type:'UPDATE_RESOLUTION', payload: null})
    }

    if(state.resolution){
        return(
            <>
                <section className="resolution">
                        <p className="resolution__text">{state.resolution}</p>
                </section>
                <Link to="/map" onClick={() => resetEncounter()} className="scene__continue">Continue</Link>
            </>
        )
    }
    else return(
        <>
        </>
    )
}