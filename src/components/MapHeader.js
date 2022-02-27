export default function MapHeader() {

  return (
    <section className="map__header">
      <h2 className="map__title">Sectors</h2>
      <figure className="map__legend">
        <div className="map__dot map__dot_civilian"></div>
        <p className="map__caption map__caption_civilian">Civilian</p>

        <div className="map__dot map__dot_hostile"></div>
        <p className="map__caption map__caption_hostile">Hostile</p>

        <div className="map__dot map__dot_nebula"></div>
        <p className="map__caption map__caption_nebula">Nebula</p>
      </figure>
    </section>
  )
}