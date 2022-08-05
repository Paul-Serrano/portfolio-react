import BlockNav from "./parts/BlockNav";
import BlockTitle from "./parts/BlockTitle";
import aboutList from "../data/aboutList";
import profilPicture from "../img/photo-paul.jpg"

function Apropos() {

    function closeApropos() {
        document.getElementsByClassName("perso")[0].style.display = "flex";
        document.getElementsByClassName("about")[0].style.display = "none";
    }

    function switchVoyages() {
        document.getElementsByClassName("travel")[0].style.display = "flex";
        document.getElementsByClassName("about")[0].style.display = "none";
    }

    function switchLoisirs() {
        document.getElementsByClassName("hobby")[0].style.display = "flex";
        document.getElementsByClassName("about")[0].style.display = "none";
    }

    function switchBonus() {
        document.getElementsByClassName("bonus")[0].style.display = "flex";
        document.getElementsByClassName("about")[0].style.display = "none";
    }

    const about = aboutList.map(item => {
        return(
            <div key={item.key} className="about-content">
                <p className="about-title">{item.title}</p>
                <p className="about-txt">{item.description}</p>
            </div>
        )
    })

    return(
        <div className="about perso-block">
            <BlockTitle
                title="A propos"
                close={closeApropos}
            />
            <div className="about-container">
                <div className="about-intro">
                    <img className="about-img" src={profilPicture} alt="Paul Serrano"/>
                    <div className="about-intro-content">
                        <p className="about-birth">né le 30/10/1992 à Pau (64000)</p>
                        <p className="about-tel">téléphone : 0624232427</p>
                    </div>
                </div>
                <div className="about-block">
                    {about}
                </div>
            </div>
            <BlockNav
                left="Voyages"
                switchl={switchVoyages}
                center="Loisirs"
                switchc={switchLoisirs}
                right="Bonus"
                switchr={switchBonus}
            />
        </div>
    )
}

export default Apropos
