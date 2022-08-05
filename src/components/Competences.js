import BlockTitle from "./parts/BlockTitle";
import BlockNav from "./parts/BlockNav";
import codingLangList from "../data/codingLangList";
import environmentList from "../data/environmentList"
import LangBubble from "./parts/LangBubble";
import EnvironmentBubble from "./parts/EnvironmentBubble";
import {useMemo} from "react";

function Competence() {

    const codingLangs = useMemo(() => {
        return codingLangList.map((item) => (
            <LangBubble
                key={item.key}
                src={item.src}
                alt={item.alt}
                name={item.name}
                skills={item.skills}
            />
        ));
    }, []);

    const environment = useMemo(() => {
        return environmentList.map((item) => (
            <EnvironmentBubble
                key={item.key}
                src={item.src}
                alt={item.alt}
                name={item.name}
                skills={item.skills}
            />
        ));
    }, []);

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
        <div className="skills pro-block">
            <BlockTitle
                title="Compétences"
                close={closeComp}
            />
            <div className="languages-block">
                <p className="skills-title">Langages de développement</p>
                <div className="languages">
                    {codingLangs}
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
