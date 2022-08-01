function EnvironmentBubble(props) {
    return (
        <div className="env-block">
            <img className="env-icon" src={props.src} alt={props.alt}/>
            <div className="env-bubble">
                <p className="env-bubble-title">{props.title}</p>
                <div className="env-bubble-content">
                    <p>{props.skills}</p>
                </div>
            </div>
        </div>

    )
}

export default EnvironmentBubble
