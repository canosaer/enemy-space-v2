import React, {useContext} from 'react';
import {Context} from '../store/store'
import { Link } from 'react-router-dom'

export default function Resolution() {
    const [state, dispatch] = useContext(Context)

    if(state.resolution){
        return(
            <>
                <section className="resolution">
                        <p className="resolution__text">{state.resolution}</p>
                </section>
                <Link to="/map" className="scene__continue">Continue</Link>
            </>
        )
    }
    else return(
        <>
        </>
    )
}