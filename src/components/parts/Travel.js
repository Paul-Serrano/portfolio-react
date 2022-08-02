function Travel(props) {
    return(
        <div className="travel-block">
            <img className="travel-cover-img" src={props.item.coverimg} alt={props.item.coveralt}/>
            <div className="travel-content">
                <p className="travel-title">{props.item.title}</p>
                <p className="travel-txt">{props.item.description}</p>
            </div>
        </div>
    )
}

export default Travel
