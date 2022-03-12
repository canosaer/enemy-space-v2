import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import titleImage from '../img/title.png'
import {Context} from '../store/store'

export default function Title() {
    const [state, dispatch] = useContext(Context)
    const destination = state.encounter ? "/encounter" : "/map"

    // console.log(state)

    return(
        <main className="title-screen">
            <Link to={destination} className="title-screen__link">
                <h1 className="title-screen__text title-screen__text_title">Dark Moon</h1>
                <h2 className="title-screen__text title-screen__text_subtitle">Enemy Space</h2>
                <img className="title-screen__image" src={titleImage} alt="title image" />
                <figure className="title-screen__image-background"></figure>
            </Link>
        </main>
    )
}