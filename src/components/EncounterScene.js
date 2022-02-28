import monster from '../img/monster.png'

export default function EncounterScene() {
    
    return(
        <section className="scene">
            <h2 className="scene__heading">Starspawn Attack!</h2>
            <figure className="scene__image-slot">
                <img className="scene__image" src={monster} alt="space monster" />
            </figure>      
            <div className="scene__text">
                <p className="scene__event">A massive starspawn bears down on your ship, trying to swallow it whole!</p>
                <p className="scene__choices">You can try to fend it off by firing your weapons, or you can take evasive maneuvers and try to outrun it...</p>
                <div className="scene__button-row">
                    <button className="scene__button scene__button_action scene__button_a">Fire Your Weapons</button>
                    <button className="scene__button scene__button_action scene__button_b">Take Evasive Manuevers</button>
                </div>
                <div className="resolution">
                    <p className="resolution__text scene__resolution_a_success">You unleash a volley of missiles directly into the starspawn's gaping maw. It reels in pain and slinks away, allowing you to continue on your way. </p>
                    <button className="scene__button scene__button_continue">Continue</button>
                </div>
            </div>
            
        </section>
    )
}