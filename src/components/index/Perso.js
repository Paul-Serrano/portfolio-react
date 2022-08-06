import Block from "../../components/parts/Block"
import aProposIcon from "../../img/self.png"
import voyageIcon from "../../img/travel.png"
import loisirIcon from "../../img/hobby.png"
import bonusIcon from "../../img/bonus.png"

function Perso() {

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

    function openApropos() {
        const perso = document.getElementsByClassName("perso")[0];
        const about = document.getElementsByClassName("about")[0];
        fadeAway(perso);
        delay(about, perso);
    }

    function openVoyages() {
        const perso = document.getElementsByClassName("perso")[0];
        const voyage = document.getElementsByClassName("travel")[0];
        fadeAway(perso);
        delay(voyage, perso);
    }

    function openLoisirs() {
        const perso = document.getElementsByClassName("perso")[0];
        const loisirs = document.getElementsByClassName("hobby")[0];
        fadeAway(perso);
        delay(loisirs, perso);
    }

    function openBonus() {
        const perso = document.getElementsByClassName("perso")[0];
        const bonus = document.getElementsByClassName("bonus")[0];
        fadeAway(perso);
        delay(bonus, perso);
    }

    return (
        <div className="perso">
            <p className="perso-title">Coté perso</p>
            <div className="perso-content">
                <Block
                    name="A Propos"
                    src={aProposIcon}
                    alt="icône à propos"
                    open={openApropos}
                />
                <Block
                    name="Voyages"
                    src={voyageIcon}
                    alt="icône voyages"
                    open={openVoyages}
                />
                <Block
                    name="Loisirs"
                    src={loisirIcon}
                    alt="icône loisirs"
                    open={openLoisirs}
                />
                <Block
                    name="Bonus"
                    src={bonusIcon}
                    alt="icône bonus"
                    open={openBonus}
                />
            </div>
        </div>
    )
}

export default Perso;
