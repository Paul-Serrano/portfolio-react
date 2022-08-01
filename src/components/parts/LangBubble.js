import codingLangList from "../../data/codingLangList";

function LangBubble(props) {

    for(let i = 0; i < codingLangList; i++) {
        const content = codingLangList[i].skills.map(item => {
            return (
                <div className="lang-bubble-content">
                    <p>{item.skills}</p>
                </div>
            )
            console.log(content)
        })
    }



    return (
        <div className="lang-block">
            <img className="lang-icon" src={props.src} alt={props.alt}/>
            <div className="lang-bubble">
                <p className="lang-bubble-title">{props.title}</p>
                <div className="lang-bubble-content">
                    <p>{props.skills}</p>
                </div>
            </div>
        </div>

    )
}

export default LangBubble;
