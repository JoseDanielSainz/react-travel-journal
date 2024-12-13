function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="journal-entry-img"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>
      <div className="info-container">
        <div className="info-container-location">
          <i className="fa-solid fa-location-dot"></i>
          <span className="country">{props.country}</span>
          <a href={props.googleMapsLink}>View on Google Maps</a>
        </div>
        <h2 className="info-container-title">{props.title}</h2>
        <p className="info-container-dates">{props.dates}</p>
        <p className="info-container-description">{props.text}</p>
      </div>
      {/* <div className="separator-bar"></div> */}
    </article>
  )
}

export default Entry