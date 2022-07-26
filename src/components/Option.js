import sun from "../../public/img/sun.png"
import moon from "../../public/img/moon.png"
import french from "../../public/img/france.png"
import english from "../../public/img/uk.png"
import back from "../../public/img/back-arrow.png"

function Option() {
    return (
        <div className="settings">
            <button className="settings-return-btn">
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
