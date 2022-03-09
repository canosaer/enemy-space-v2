import debris from '../img/debris.png'

// 2 civilian encounters
    
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
    }
]

export default civilianEncounters