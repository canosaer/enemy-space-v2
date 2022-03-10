import drone from '../img/drone.png'
import dreadnought from '../img/dreadnought.png'
import mine from '../img/mine.png'
    
let hostileEncounters = [
    {   id: 'h00',
        available: true,
        heading: "Drone Swarm!",
        image: drone,
        event: "A swarm of hostile drones surround your ship and begin attaching themselves to your hull!",
        choices: "You can vent pressurized air into the area they've landed to try and blow them away, or you can do a barrel roll to try to shake them off...",
        buttons: [ "Blast Them With Air", "Do A Barrel Roll" ],
        resolutions:[
            {   pass: "You blast them with pressurized air and they go flying off into space, unable to regain control of their thrusters in time before you get away. Afterward, you find a disabled drone floating in your wake. You salvage it and improve your weapons!",
                fail: "You blast them with pressurized air and they go flying off into space, unable to regain control of their thrusters in time before you get away. Your ship's life support systems are damaged during the effort!",
            },
            {   pass: "You jerk your ship into an abrupt barrel roll and drones go flying off your hull in every direction. You punch the afterburners and get away before the drones can recover.",
                fail: "You jerk your ship into an abrupt barrel roll. The drones are scattered, but one manages to stay attached to your ship long enough to electrocute the hull with a sudden spike of energy. You punch the afterburner to get away, but your life support system is damaged!",
            },
        ], 
    },
    {   id: 'h01',
        available: true,
        heading: "Dreadnought",
        image: dreadnought,
        event: "A hulking enemy dreadnought comes out of hyperspace right in front of you! There's no hope of winning a head-on fight against it.",
        choices: "You can punch the afterburners to try to outrun it, or power down your life support to try to hide from its scanners...",
        buttons: [ "Punch The Afterburners", "Hide From Scanners" ],
        resolutions:[
            {   pass: "You set a course in the opposite direction punch the afterburners! The dreadnought fires a volley of missiles at you, but you nimbly evade them. You manage to scan the dreadnought's systems before you get away and find useful schematics. Your engines are improved!",
                fail: "You set a course in the opposite direction punch the afterburners! The dreadnought fires a volley of missiles at you, and gets in a solid hit before you manage to get away.",
            },
            {   pass: "You power down your life support systems and stay absolutely still as the dreadnought passes by. Finally, it gets far enough away that you can power back up and continue on your way. Just before it's out of range, you scan the dreanought's systems and find useful schematics. Your life support system is improved!",
                fail: "You power down your life support systems and stay absolutely still as the dreadnought passes by. Finally, it gets far enough away that you can power back up and continue on your way. A quick scan of your ship's systems shows that a few components froze over while your life support was powered down.",
            },
        ], 
    },
    {   id: 'h02',
        available: true,
        heading: "Mine Field",
        image: mine,
        event: "Your ship's autopilot computer starts beeping wildly and you realize you've navigated directly into a field of space mines!",
        choices: "You can try to blow up the mines with your autocannon to clear a path, or you can try to overload your reactor to emit a pulse wave that detonates them all at once...",
        buttons: [ "Clear A Path", "Emit A Pulse Wave" ],
        resolutions:[
            {   pass: "After an hour of careful shooting, you manage to escape the minefield without taking damage. You feel you've gotten a lot better with your autocannon. Your weapons are improved!",
                fail: "You fire away, but it's difficult to detonate the mines without taking damage to your ship. You ship has plenty of scars to show for it once you finally make it to the end of the minefield.",
            },
            {   pass: "You overload your reactor and emit a pulse wave that detonates all the mines at once. After that, it's smooth sailing again and you find that pulse wave let off some pressure that was building up in the reactor. Your power system is improved!",
                fail: "You overload your reactor and emit a pulse wave that detonates all the mines at once. The explosion is a lot bigger than you thought, and your ship is rocked by the massive detonation.",
            },
        ], 
    },
]

export default hostileEncounters