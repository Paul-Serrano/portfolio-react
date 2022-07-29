function Work(props) {
    return (
        <div className="work">
            <div className="work-title-block">
                <span className="work-title">{props.item.title}</span>
                <span> -- </span>
                <span className="work-company">{props.item.company}</span>
            </div>
            <p className="work-description">{props.item.description}</p>
            <div className="work-info">
                <span className="work-city">{props.item.city}</span>
                <span> // </span>
                <span className="work-date">{props.item.date}</span>
            </div>
        </div>
    )
}

export default Work;
