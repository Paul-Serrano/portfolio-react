function Work({title, company, description, city, date}) {

    return (
        <div className="work">
            <div className="work-title-block">
                <span className="work-title">{title}</span>
                <span> -- </span>
                <span className="work-company">{company}</span>
            </div>
            <p className="work-description">{description}</p>
            <div className="work-info">
                <span className="work-city">{city}</span>
                <span> // </span>
                <span className="work-date">{date}</span>
            </div>
        </div>
    )
}

export default Work;
