function Project(props) {
    return(
        <a href={props.item.link}>
            <h2>{props.item.name}</h2>
            <div>
                <img src={props.item.lang} alt=""/>
            </div>
        </a>
    )
}

export default Project();
