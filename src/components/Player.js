import playerShip from '../img/player.png'

export default function Player() {
    
    return(
        <section className="player">
            <img className="player__image" src={playerShip} alt="player ship" />
            <p className="player__weapons">Weapons: <span className="player__weapons-level">Operational</span></p>
            <p className="player__life-support">Life Support: <span className="player__life-support-level">Operational</span></p>
            <p className="player__power">Power: <span className="player__power-level">Operational</span></p>
            <p className="player__power">Engines: <span className="player__engines-level">Operational</span></p>
        </section>
    )
}