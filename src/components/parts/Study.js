function Study(props) {
    return(
        <div className="study">
            <p className="study-title">{props.title}</p>
            <span className="study-location">{props.location}</span>
            <span> -- </span>
            <span className="study-city">{props.city}</span>
            <p className="study-date">{props.date}</p>
        </div>
    )
}

export default Study;
