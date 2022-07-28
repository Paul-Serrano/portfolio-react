function Work(props) {
    return (
        <div className="work">
            <div className="work-title-block">
                <span className="work-title">{props.item.title}</span>
                <span> -- </span>
                <span className="work-company">{props.item.company}</span>
            </div>
            <p className="work-description">{props.item.description}</p>
            <p className="work-city">{props.item.city}</p>
            <p className="work-date">{props.item.date}</p>
        </div>
    )
}

export default Work;
