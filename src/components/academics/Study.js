function Study({title, city, date, location}) {
    return(
        <div className="study">
            <p className="study-title">{title}</p>
            <span className="study-location">{location}</span>
            <span> -- </span>
            <span className="study-city">{city}</span>
            <p className="study-date">{date}</p>
        </div>
    )
}

export default Study;
