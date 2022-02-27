import React from 'react'
import { Link } from 'react-router-dom'
import titleImage from '../img/title.png'

export default function Title() {

    return(
        <main className="title-screen">
            <Link to="/map" className="title-screen__link">
                <h1 className="title-screen__text title-screen__text_title">Dark Moon</h1>
                <h2 className="title-screen__text title-screen__text_subtitle">Enemy Space</h2>
                <img className="title-screen__image" src={titleImage} alt="title image" />
                <figure className="title-screen__image-background"></figure>
            </Link>
        </main>
    )
}