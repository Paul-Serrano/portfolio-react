import back from "../../img/back-arrow.png"

function BlockTitle(props) {
    return(
        <div className="block-title">
            <button onClick={props.close} className="block-title-return-btn">
                <img className="block-title-return-icon" src={back} alt="icone de retour"/>
            </button>
            <p className="block-title-txt">{props.title}</p>
        </div>
    )
}

export default BlockTitle;
