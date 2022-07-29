import BlockTitle from "./parts/BlockTitle";
import BlockNav from "./parts/BlockNav";
import ProjectLangIcon from "./parts/ProjectLangIcon";
import projectList from "../data/projectList";
import codingLangList from "../data/codingLangList";
import environmentList from "../data/environmentList"

function Competence() {

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

    function closeComp() {
        document.getElementsByClassName("pro")[0].style.display = "flex";
        document.getElementsByClassName("skills")[0].style.display = "none";
    }

    function switchReal() {
        document.getElementsByClassName("realisations")[0].style.display = "flex";
        document.getElementsByClassName("skills")[0].style.display = "none";
    }

    function switchParcoursPro() {
        document.getElementsByClassName("parcours-pro")[0].style.display = "flex";
        document.getElementsByClassName("skills")[0].style.display = "none";
    }

    function switchParcoursAcad() {
        document.getElementsByClassName("parcours-acad")[0].style.display = "flex";
        document.getElementsByClassName("skills")[0].style.display = "none";
    }

    return(
        <div className="skills comp">
            <BlockTitle
                title="Compétences"
                close={closeComp}
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
                switchl={switchReal}
                center="Parcours Professionnel"
                switchc={switchParcoursPro}
                right="Parcours Académique"
                switchr={switchParcoursAcad}
            />
        </div>
    )
}

export default Competence;
