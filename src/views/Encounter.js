import React, {useContext} from 'react'
import {Context} from '../store/store'
// import ShortUniqueId from 'short-unique-id'
// import { sortByKey, addItemToCart } from '../utilities'
import Player from '../components/Player'
import EncounterScene from '../components/EncounterScene'

export default function Encounter() {
    const [state, dispatch] = useContext(Context)
   
    // const uid = new ShortUniqueId({length:10})
    


    return(
        <main className="encounter">
            <h2 className="encounter__game-title">Dark Moon</h2>
            <Player />
            <EncounterScene /> 
        </main>
    )
}