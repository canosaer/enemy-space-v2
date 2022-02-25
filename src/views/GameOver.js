import React, {useContext} from 'react';
import {Context} from '../store/store'

export default function GameOver() {
    const [state, dispatch] = useContext(Context)

    return(
        <main className="game-over">

        </main>
    )
}