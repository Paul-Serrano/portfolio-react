import sun from "../../img/sun.png"
import moon from "../../img/moon.png"
import french from "../../img/france.png"
import english from "../../img/uk.png"
import back from "../../img/back-arrow.png"

function Option(props) {

    function closeOption() {
        document.getElementsByClassName("settings")[0].style.display = "none"
        document.getElementsByClassName("nav")[0].style.display = "flex"
    }

    return (
        <div className="settings">
            <button className="settings-return-btn" onClick={closeOption}>
                <img className="settings-return-icon" src={back} alt="Icône retour"/>
            </button>
            <div className="settings-block settings-border-block">
                <img className="settings-icon" src={moon} alt="Icône lune"/>
                <div className="settings-btn-block" onClick={props.toggleDarkMode}>
                    <div className="settings-btn-bubble"></div>
                </div>
                <img className="settings-icon" src={sun} alt="Icône soleil"/>
            </div>
            <div className="settings-block">
                <img className="settings-icon" src={french} alt="Icône français"/>
                <div className="settings-btn-block">
                    <div className="settings-btn-bubble"></div>
                </div>
                <img className="settings-icon" src={english} alt="Icône anglais"/>
            </div>
        </div>
    )
}

export default Option;

