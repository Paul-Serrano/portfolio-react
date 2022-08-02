function EnvironmentBubble(props) {
    return (
        <div className="env-block">
            <img className="env-icon" src={props.item.src} alt={props.item.alt}/>
            <div className="env-bubble">
                <p className="env-bubble-title">{props.item.name}</p>
                <div className="env-bubble-content">
                    <p>{props.item.skills}</p>
                </div>
            </div>
        </div>

    )
}

export default EnvironmentBubble
