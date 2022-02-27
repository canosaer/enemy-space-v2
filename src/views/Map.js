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
        </main>
    )
}