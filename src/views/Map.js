import React, {useContext} from 'react'
import {Context} from '../store/store'
// import ShortUniqueId from 'short-unique-id'
// import { sortByKey, addItemToCart } from '../utilities'
import MapHeader from '../components/MapHeader'
import MapDisplay from '../components/MapDisplay'

export default function Map() {
    const [state, dispatch] = useContext(Context)
   
    // const uid = new ShortUniqueId({length:10})
    


    return(
        <main className="map">
            <figure className="map__container">
                <MapHeader />
                <MapDisplay />
            </figure>
            {state.begin ? <p className="map__instructions">You are carrying vital intelligence for the Resistance! You must make it through the sector alive to deliver the intelligence and turn the tide of the war.</p> : null}
        </main>
    )
}