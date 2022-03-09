import drone from '../img/drone.png'
    
let hostileEncounters = [
    {   id: 'h00',
        available: true,
        heading: "Drone Swarm!",
        image: drone,
        event: "A swarm of hostile drones surround your ship and begin attaching themselves to your hull!",
        choices: "You can vent pressurized air from your ship into the area they've landed to try and blow them away, or you can do a barrel roll to try to shake them off...",
        buttons: [ "Blast Them With Air", "Do A Barrel Roll" ],
        resolutions:[
            {   pass: "You blast them with pressurized air and they go flying off into space, unable to regain control of their thrusters in time before you get away. Afterward, you find a disabled drone floating in your wake. You salvage it and improve your weapons!",
                fail: "You blast them with pressurized air and they go flying off into space, unable to regain control of their thrusters in time before you get away. Your ship's life support systems are damaged during the effort!",
            },
            {   pass: "You jerk your ship into an abrupt barrel roll and drones go flying off your hull in every direction. You punch the afterburners and get away before the drones can recover.",
                fail: "You jerk your ship into an abrupt barrel roll. The drones are scattered, but one manages to stay attached to your ship long enough to electrocute the hull with a sudden spike of energy. You punch the afterburner to get away, but your life support system is damaged!",
            },
        ], 
    }
]

export default hostileEncounters