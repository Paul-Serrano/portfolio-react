import Block from "../../components/parts/Block"
import aProposIcon from "../../img/self.png"
import voyageIcon from "../../img/travel.png"
import loisirIcon from "../../img/hobby.png"
import bonusIcon from "../../img/bonus.png"

function Perso() {

    function openApropos() {
        document.getElementsByClassName("perso")[0].style.display = "none";
        document.getElementsByClassName("about")[0].style.display = "flex";
    }

    function openVoayges() {
        document.getElementsByClassName("perso")[0].style.display = "none";
        document.getElementsByClassName("travel")[0].style.display = "flex";
    }

    function openLoisirs() {
        document.getElementsByClassName("perso")[0].style.display = "none";
        document.getElementsByClassName("hobby")[0].style.display = "flex";
    }

    function openBonus() {
        document.getElementsByClassName("perso")[0].style.display = "none";
        document.getElementsByClassName("bonus")[0].style.display = "flex";
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
                    open={openVoayges}
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
