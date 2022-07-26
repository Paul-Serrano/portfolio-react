function EnvironmentBubble({src, alt, name, skills, language}) {

    const skillContent = skills.map((item) => (
            <li className="lang-bubble-txt" key={item.key}>{language && item.engSkill? item.engSkill : item.skill}</li>
        ));

        return (
        <div className="env-block">
            <img className="env-icon" src={src} alt={alt}/>
            <div className="env-bubble">
                <p className="env-bubble-title">{name}</p>
                <div className="env-bubble-content">
                    {skillContent}
                </div>
            </div>
        </div>

    )
}

export default EnvironmentBubble
