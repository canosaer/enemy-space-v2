import React, {useContext} from 'react';
import {Context} from '../store/store'
import { Link } from 'react-router-dom'

export default function Win() {
    const [state, dispatch] = useContext(Context)

    return(
        <main className="win">
            <h2 className="win__heading">You Win!</h2>
            <p className="win__text">Congraulations, captain! You have braved the perils of the sector and delivered vital intelligence to the Resistance that will surely turn the tide of the war!</p>
            <Link to="/" className="win__button">Play Again</Link>
        </main>
    )
}