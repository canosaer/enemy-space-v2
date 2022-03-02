import {dots, lines} from '../store/data'
import ShortUniqueId from 'short-unique-id'
import { Link } from 'react-router-dom'

export default function MapDisplay() {

    const sectorMap = []
    const uid = new ShortUniqueId({length:10})

    for(let i=0;i<dots.length;i++){
        console.log(uid)
        if(dots[i]){
            dots[i].forEach(dot => {
                sectorMap.push(`${dot.class} ${dot.interactionClass}`)
            });
        }
        if(lines[i]){
            lines[i].forEach(line => {
                sectorMap.push(line.class)
            });
        }
    }

    return (
        <section className="map__display">

            {sectorMap.map((elementClass, i) => {
                const key = `element--${i}`

                if(elementClass.includes("active")){
                    return(
                        <>
                            <Link key={key} to="/encounter" className={elementClass}></Link>
                        </>
                    )
                }
                else{
                    return(
                        <>
                            <div key={key} className={elementClass}></div>
                        </>
                    )
                }

                
            })}

            {/* <div className="map__dot map__dot_civilian map__dot_1 map__dot_current"></div>

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

            <div className="map__dot map__dot_hostile map__dot_6"></div> */}

        </section>
    )
}