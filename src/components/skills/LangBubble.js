import {useMemo} from "react";

function LangBubble({src, alt, name, skills, language}) {

    const skillContent = useMemo(() => {
        return skills.map((item) => (
                <li className="lang-bubble-txt" key={item.key}>{language ? item.engSkill : item.skill}</li>
        ));
    }, [skills]);

    const englishSkillContent = useMemo(() => {
        return skills.map((item) => (
            <li className="lang-bubble-txt" key={item.key}>{item.engSkill}</li>
        ));
    }, [skills]);

    console.log(language)

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
