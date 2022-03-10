import React, {useContext} from 'react'
import {Context} from '../store/store'
import Player from '../components/Player'
import EncounterScene from '../components/EncounterScene'
import { Link } from 'react-router-dom'

export default function Encounter() {
    const [state, dispatch] = useContext(Context)

    return(
        <main className="encounter">
            <Link to="/" className="encounter__game-title">Dark Moon</Link>
            <Player />
            <EncounterScene /> 
        </main>
    )
}