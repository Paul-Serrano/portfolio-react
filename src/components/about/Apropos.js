import BlockNav from "../index/parts/BlockNav";
import BlockTitle from "../index/parts/BlockTitle";
import aboutList from "../../data/aboutList";
import profilPicture from "../../img/photo-paul.jpg"

function Apropos({language}) {

    function delay(a, b) {
        setTimeout(function fadeOn() {
            a.style.display = "flex";
            b.style.display = "none";
            a.style.animation = "fadeon 0.5s forwards linear";
        }, 500);
    }

    function fadeAway(a) {
        a.style.animation = "fadeaway 0.5s forwards linear";
    }

    function closeApropos() {
        const perso = document.getElementsByClassName("perso")[0];
        const about = document.getElementsByClassName("about")[0];
        fadeAway(about);
        delay(perso, about);
    }

    function switchVoyages() {
        const voyages = document.getElementsByClassName("travel")[0];
        const about = document.getElementsByClassName("about")[0];
        fadeAway(about);
        delay(voyages, about);
    }

    function switchLoisirs() {
        const loisirs = document.getElementsByClassName("hobby")[0];
        const about = document.getElementsByClassName("about")[0];
        fadeAway(about);
        delay(loisirs, about);
    }

    function switchBonus() {
        const bonus = document.getElementsByClassName("bonus")[0];
        const about = document.getElementsByClassName("about")[0];
        fadeAway(about);
        delay(bonus, about);
    }

    const about = aboutList.map(item => {
        return(
            <div key={item.key} className="about-content">
                <p className="about-title">{language && item.engTitle ? item.engTitle : item.title}</p>
                <p className="about-txt">{language && item.engDescription ? item.engDescription : item.description}</p>
            </div>
        )
    })

    return(
        <div className="about perso-block">
            <BlockTitle
                title={language ? "About" : "A propos"}
                close={closeApropos}
            />
            <div className="about-container">
                <div className="about-intro">
                    <img className="about-img" src={profilPicture} alt="Paul Serrano"/>
                    <div className="about-intro-content">
                        <p className="about-birth">{language ? "born in" : "né le"} 30/10/1992 -- Pau (64000)</p>
                        <p className="about-tel">{language ? "phone" : "téléphone"} : 0624232427</p>
                    </div>
                </div>
                <div className="about-block">
                    {about}
                </div>
            </div>
            <BlockNav
                left={language ? "Travel" : "Voyages"}
                switchl={switchVoyages}
                center={language ? "Hobby" : "Loisirs"}
                switchc={switchLoisirs}
                right="Bonus"
                switchr={switchBonus}
            />
        </div>
    )
}

export default Apropos
