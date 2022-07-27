import Block from "../../components/parts/Block"
import realisationIcon from "../../img/website.png"
import competencesIcon from "../../img/skills.png"
import proIcon from "../../img/work.png"
import acadIcon from "../../img/study.png"

function Pro() {
    return (
        <div className="pro">
            <p className="pro-title">Coté pro</p>
            <div className="pro-content">
                <Block
                    name="Réalisations"
                    src={realisationIcon}
                    alt="icône réalisation"
                />
                <Block
                    name="Compétences"
                    src={competencesIcon}
                    alt="icône compétence"
                />
                <Block
                    name="Parcours Professionnel"
                    src={proIcon}
                    alt="icône parcours professionnel"
                />
                <Block
                    name="Parcours Académique"
                    src={acadIcon}
                    alt="icône parcours académique"
                />
            </div>
        </div>
    )
}

export default Pro;
