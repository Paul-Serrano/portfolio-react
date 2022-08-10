import {useMemo} from "react";

function LangBubble({src, alt, name, skills}) {

    const skillContent = useMemo(() => {
        return skills.map((item) => (
                <li className="lang-bubble-txt" key={item.key}>{item.skill}</li>
        ));
    }, [skills]);

    return (
        <div className="lang-block">
            <img className="lang-icon" src={src} alt={alt}/>
            <div className="lang-bubble">
                <p className="lang-bubble-title">{name}</p>
                <ul className="lang-bubble-content">
                    {skillContent}
                </ul>
            </div>
        </div>

    )
}

export default LangBubble;
