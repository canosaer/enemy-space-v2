import debris from '../img/debris.png'
import monster from '../img/monster.png'
    
let civilianEncounters = [
    {   id: 'c00',
        available: true,
        heading: "Distress Beacon",
        image: debris,
        event: "As you fly near the debris of a past space battle, your sensors pick up a distress beacon coming from somewhere inside the field of wreckage.",
        choices: "You can fly into the debris field to investigate, or you can fly cautiously around it...",
        buttons: [ "Investigate", "Fly Around It" ],
        resolutions:[
            {   pass: "You venture into the debris field and find a salvage vessel with disabled engines. You help them with repairs and they gratefully offer to upgrade your ship.",
                fail: "It's harder than you thought to navigate the debris field and space junk cascades against the hull of your ship. Once you reach the distress beacon, you find a wrecked salvage vessel with no life signs aboard.",
            },
            {   pass: "You skirt around the debris field and discover that the beacon was a trap! A hidden raider emerges from the debris and attacks, but it didn't count on your ace combat skills. After you destroy it, you salvage some equipment and improve your life support!",
                fail: "You skirt around the debris field and discover that the beacon was a trap! A hidden raider emerges from the debris and attacks! You manage to destroy it, but not without taking a few hits first.",
            },
        ], 
    },
    {   id: 'c01',
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