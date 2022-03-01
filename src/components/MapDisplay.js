export default function MapDisplay() {

    const dots = [
        [
            {   coord: "1",
                class: "map__dot map__dot_civilian map__dot_1",
                interactionClass: "map__dot_current",
                type: "civilian",
                connections: ["2a, 3b"],
            }
        ],
        [
            {   coord: "2a",
                class: "map__dot map__dot_civilian map__dot_2a",
                interactionClass: "map__dot_active",
                type: "civilian",
                connections: ["2a, 3b"],

            },
        ]
    ]

    // const mapCols = [dots1,lines1_2,dots2,lines2_3,dots3,lines3_4,dots4,lines4_5,dots5,lines5_6,dots6]

    return (
        <section className="map__display">

            <div className="map__dot map__dot_civilian map__dot_1 map__dot_current"></div>

            <div className="map__line map__line_up map__line_1-2a"></div>
            <div className="map__line map__line_down map__line_1-2b"></div>

            <div className="map__dot map__dot_civilian map__dot_2a"></div>
            <div className="map__dot map__dot_civilian map__dot_2b"></div>

            <div className="map__line map__line_up map__line_2a-3a"></div>
            <div className="map__line map__line_down map__line_2a-3b"></div>
            <div className="map__line map__line_up map__line_2b-3b"></div>
            <div className="map__line map__line_down map__line_2b-3c"></div>

            <div className="map__dot map__dot_nebula map__dot_3a"></div>
            <div className="map__dot map__dot_hostile map__dot_3b"></div>
            <div className="map__dot map__dot_hostile map__dot_3c"></div>

            <div className="map__line map__line_down map__line_3a-4a"></div>
            <div className="map__line map__line_up map__line_3b-4a"></div>
            <div className="map__line map__line_down map__line_3b-4b"></div>
            <div className="map__line map__line_up map__line_3c-4b"></div>

            <div className="map__dot map__dot_hostile map__dot_4a"></div>
            <div className="map__dot map__dot_civilian map__dot_4b"></div>

            <div className="map__line map__line_across map__line_4a-5a"></div>
            <div className="map__line map__line_across map__line_4b-5b"></div>

            <div className="map__dot map__dot_civilian map__dot_5a"></div>
            <div className="map__dot map__dot_nebula map__dot_5b"></div>

            <div className="map__line map__line_down map__line_5a-6"></div>
            <div className="map__line map__line_up map__line_5b-6"></div>

            <div className="map__dot map__dot_hostile map__dot_6"></div>

        </section>
    )
}