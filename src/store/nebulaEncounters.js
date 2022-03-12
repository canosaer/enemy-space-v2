import singularity from '../img/singularity.png'

let nebulaEncounters = [
    {   id: 'n00',
        available: true,
        heading: "Singularity",
        image: singularity,
        event: "As you carefully navigate through the clouds of the nebula, suddenly a yawning singularity looms up ahead of you. You hit full reverse thrusters and narrowly avoid the event horizon, but the gravitational pull of the singularity has you trapped in place!",
        choices: "You can punch your afterburners up to full blast to try to escape, or you can overcharge your reactor to emit a gravitational pulse that will hopefully push you free...",
        buttons: [ "Fire Your Afterburners", "Emit Gravitational Wave" ],
        resolutions:[
            {   pass: "You punch the afterburners and your ship groans violently against the pull of the singularity until finally it breaks free. Your afterburners draw in some of the dust from the nebula, which happens to contain elements you can use for fuel. Your engines are improved!",
                fail: "You punch the afterburners and your ship groans violently against the pull of the singularity until finally it breaks free. The strain takes a toll on your ship's systems.",
            },
            {   pass: "The gravitational pulse spreads out from your ship in a wave, knocking you free from the singularity's pull. A strange energy is returned from the singularity, washing over your ship. Your power system is improved!",
                fail: "The gravitational pulse spreads out from your ship in a wave, knocking you free from the singularity's pull. A strange energy is returned from the singularity, washing over your ship.",
            },
        ],
    }
]

export default nebulaEncounters