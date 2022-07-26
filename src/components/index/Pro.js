import Block from "../../components/parts/Block"
import realisationIcon from "../../../public/img/website.png"
import competencesIcon from "../../../public/img/skills.png"
import proIcon from "../../../public/img/work.png"
import acadIcon from "../../../public/img/study.png"

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
