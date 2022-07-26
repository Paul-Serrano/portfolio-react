import back from "../../../public/img/back-arrow.png"

function BlockTitle(props) {
    return(
        <div className="block-title">
            <button className="return-btn">
                <img className="return-icon" src={back} alt="icone de retour"/>
            </button>
            <h1 className="title">{props.title}</h1>
        </div>
    )
}

export default BlockTitle;
