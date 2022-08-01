import sun from "../../img/sun.png"
import moon from "../../img/moon.png"
import french from "../../img/france.png"
import english from "../../img/uk.png"
import back from "../../img/back-arrow.png"

function Option() {

    function closeOption() {
        document.getElementsByClassName("settings")[0].style.display = "none"
        document.getElementsByClassName("nav")[0].style.display = "flex"
    }

    return (
        <div className="settings">
            <button className="settings-return-btn" onClick={closeOption}>
                <img className="settings-return-icon" src={back} alt="Icône retour"/>
            </button>
            <div className="settings-block">
                <img className="settings-icon" src={moon} alt="Icône lune"/>
                <img className="settings-icon" src={sun} alt="Icône soleil"/>
            </div>
            <div className="settings-block">
                <img className="settings-icon" src={french} alt="Icône français"/>
                <img className="settings-icon" src={english} alt="Icône anglais"/>
            </div>
        </div>
    )
}

export default Option;
