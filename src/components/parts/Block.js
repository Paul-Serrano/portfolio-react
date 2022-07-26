function Block(props) {
    return(
        <div className="index-block">
            <p className="index-block-title">{props.name}</p>
            <img className="index-block-icon" src={props.src} alt={props.alt}/>
        </div>
    )
}

export default Block;
