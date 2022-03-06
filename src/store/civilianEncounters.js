import monster from '../img/monster.png'
    
const civilianEncounters = [
    {   id: 'c00',
        available: true,
        heading: "Starspawn Attack!",
        image: monster,
        event: "A massive starspawn bears down on your ship, trying to swallow it whole!",
        choices: "You can try to fend it off by firing your weapons, or you can take evasive maneuvers and try to outrun it...",
        buttons: [ "Fire Your Weapons", "Take Evasive Manuevers" ],
        resolutions:[
            {   pass: "You unleash a volley of missiles directly into the starspawn's gaping maw. It reels in pain and slinks away, allowing you to continue on your way.",
                fail: "You unleash a volley of missiles that detonate across the starspawn's thick hide and it pulls back in pain. Deciding your ship is not food, it rams you spitfeully as it retreats.",
            },
            {   pass: "Your ship swerves to narrowly avoid the attack and you punch the afterburner. You are surprised by the speed of your ship as the starspawn quickly fades into the distance behind you. Your engines improve!",
                fail: "Your ship swerves to avoid the attack. You narrowly miss the jaws of the starspawn, but it gives your ship a jarring sideswipe as it passes by. You punch the afterburner and get away before it can charge you again.",
            },
        ], 
    }
]

export default civilianEncounters