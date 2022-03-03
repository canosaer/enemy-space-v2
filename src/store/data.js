
const data = [
    
]

const dots = [
    {   coord: "1",
        class: "map__dot map__dot_civilian map__dot_1",
        interactionClass: "map__dot_current",
        connections: ["2a", "3b"],
    },
    {   coord: "2a",
        class: "map__dot map__dot_civilian map__dot_2a",
        interactionClass: "map__dot_active",
        connections: ["3a", "3b"],
    },
    {   coord: "2b",
        class: "map__dot map__dot_civilian map__dot_2b",
        interactionClass: "map__dot_active",
        connections: ["3b", "3c"],
    },
    {   coord: "3a",
        class: "map__dot map__dot_nebula map__dot_3a",
        interactionClass: "map__dot_available",
        connections: ["4a"],
    },
    {   coord: "3b",
        class: "map__dot map__dot_hostile map__dot_3b",
        interactionClass: "map__dot_available",
        connections: ["4a", "4b"],
    },
    {   coord: "3c",
        class: "map__dot map__dot_hostile map__dot_3c",
        interactionClass: "map__dot_available",
        connections: ["4b"],
    },
    {   coord: "4a",
        class: "map__dot map__dot_hostile map__dot_4a",
        interactionClass: "map__dot_available",
        connections: ["5a"],
    },
    {   coord: "4b",
        class: "map__dot map__dot_civilian map__dot_4b",
        interactionClass: "map__dot_available",
        connections: ["5b"],
    },
    {   coord: "5a",
        class: "map__dot map__dot_civilian map__dot_5a",
        interactionClass: "map__dot_available",
        connections: ["6"],
    },
    {   coord: "5b",
        class: "map__dot map__dot_nebula map__dot_5b",
        interactionClass: "map__dot_available",
        connections: ["6"],
    },
    {   coord: "6",
        class: "map__dot map__dot_hostile map__dot_6",
        interactionClass: "map__dot_available",
        connections: [null],
    }
]

const lines = [
    {
        path: "1-2a",
        class: "map__line map__line_up map__line_1-2a",
    },
    {
        path: "1-2b",
        class: "map__line map__line_down map__line_1-2b",
    },
    {
        path: "2a-3a",
        class: "map__line map__line_up map__line_2a-3a",
    },
    {
        path: "2a-3b",
        class: "map__line map__line_down map__line_2a-3b",
    },
    {
        path: "2b-3b",
        class: "map__line map__line_up map__line_2b-3b",
    },
    {
        path: "2b-3c",
        class: "map__line map__line_down map__line_2b-3c",
    },

    {
        path: "3a-4a",
        class: "map__line map__line_down map__line_3a-4a",
    },
    {
        path: "3b-4a",
        class: "map__line map__line_up map__line_3b-4a",
    },
    {
        path: "3b-4b",
        class: "map__line map__line_down map__line_3b-4b",
    },
    {
        path: "3c-4b",
        class: "map__line map__line_up map__line_3c-4b",
    },
    {
        path: "4a-5a",
        class: "map__line map__line_across map__line_4a-5a",
    },
    {
        path: "4b-5b",
        class: "map__line map__line_across map__line_4b-5b",
    },

    {
        path: "5a-6",
        class: "map__line map__line_down map__line_5a-6",
    },
    {
        path: "5b-6",
        class: "map__line map__line_up map__line_5b-6",
    },
]

export { dots, lines, data }