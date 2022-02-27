export default function EncounterScene() {
    
    return(
        <section className="scene">
            <h2 className="scene__heading">Starspawn Attack!</h2>
            <p className="scene__event">A massive starspawn bears down on your ship, trying to swallow it whole.</p>
            <p className="scene__choices">You can try to fend it off by firing your weapons, or you can take evasive maneuvers and try to outrun it...</p>
            <button className="scene__button scene__button_a">Fire Your Weapons</button>
            <button className="scene__button scene__button_b">Take Evasive Manuevers</button>
            <p className="scene__resolution scene__resolution_a_success">You unleash a volley of missiles at the starspawn and manage to fire them directly into its gaping maw. The starspawn reels back in pain and anger and retreats, allowing you to continue on your way. </p>
            <button className="scene__button scene__continue-button">Continue</button>
        </section>
    )
}