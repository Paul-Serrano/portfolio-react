import Block from "../../components/parts/Block"
import aProposIcon from "../../img/self.png"
import voyageIcon from "../../img/travel.png"
import loisirIcon from "../../img/hobby.png"
import bonusIcon from "../../img/bonus.png"

function Perso() {
    return (
        <div className="perso">
            <p className="perso-title">Coté perso</p>
            <div className="perso-content">
                <Block
                    name="A Propos"
                    src={aProposIcon}
                    alt="icône à propos"
                />
                <Block
                    name="Voyages"
                    src={voyageIcon}
                    alt="icône voyages"
                />
                <Block
                    name="Loisirs"
                    src={loisirIcon}
                    alt="icône loisirs"
                />
                <Block
                    name="Bonus"
                    src={bonusIcon}
                    alt="icône bonus"
                />
            </div>
        </div>
    )
}

export default Perso;
