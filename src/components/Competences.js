import BlockTitle from "./parts/BlockTitle";
import BlockNav from "./parts/BlockNav";
import ProjectLangIcon from "./parts/ProjectLangIcon";
import projectList from "../data/projectList";
import codingLangList from "../data/codingLangList";
import environmentList from "../data/environmentList"

function Competence() {

    console.log(codingLangList)

    const codingLang = codingLangList.map(item => {
        return (
            <ProjectLangIcon
                key={item.key}
                src={item.src}
                class="lang-icon"
            />
        )
    })

    const environment = environmentList.map(item => {
        return (
            <ProjectLangIcon
                key={item.key}
                src={item.src}
                class="environment-icon"
            />
        )
    })

    return(
        <div className="skills">
            <BlockTitle
                title="Compétences"
            />
            <div className="languages-block">
                <p className="skills-title">Langages de développement</p>
                <div className="languages">
                    {codingLang}
                </div>
            </div>
            <div className="environment-block">
                <p className="skills-title">Environnement technique</p>
                <div className="environment">
                    {environment}
                </div>
            </div>
            <BlockNav
                left="Réalisations"
                center="Parcours Professionnel"
                right="Parcours Académique"
            />
        </div>
    )
}

export default Competence;
