import React from 'react'

import { Link } from 'react-router-dom';
// import Header from '../components/Header'


export default function Title() {

    return(
        <main className="title-screen">
            <Link to="/play" className="title-screen__link">
                <h1 className="title-screen__title">Dark Moon</h1>
                <h2 className="title-screen__subtitle">Enemy Space</h2>
                <img src="../img/title.png" alt="title image" />
            </Link>
        </main>
    )
}