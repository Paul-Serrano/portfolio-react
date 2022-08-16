import BlockTitle from "../index/parts/BlockTitle";
import BlockNav from "../index/parts/BlockNav";
import codingLangList from "../../data/codingLangList";
import environmentList from "../../data/environmentList";
import LangBubble from "./LangBubble";
import EnvironmentBubble from "./EnvironmentBubble";
import {useMemo} from "react";

function Competence({language}) {

    const codingLangs = useMemo(() => {
        return codingLangList.map((item) => (
            <LangBubble
                key={item.key}
                src={item.src}
                alt={item.alt}
                name={item.name}
                skills={item.skills}
                language={language}
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

    function closeComp() {
        const pro = document.getElementsByClassName("pro")[0];
        const comp = document.getElementsByClassName("skills")[0];
        fadeAway(comp)
        delay(pro, comp);
    }

    function switchReal() {
        const comp = document.getElementsByClassName("skills")[0]
        const real = document.getElementsByClassName("realisations")[0];
        fadeAway(comp);
        delay(real, comp)
    }

    function switchParcoursPro() {
        const comp = document.getElementsByClassName("skills")[0]
        const parcoursPro = document.getElementsByClassName("parcours-pro")[0];
        fadeAway(comp);
        delay(parcoursPro, comp)
    }

    function switchParcoursAcad() {
        const comp = document.getElementsByClassName("skills")[0]
        const parcoursAcad = document.getElementsByClassName("parcours-acad")[0];
        fadeAway(comp);
        delay(parcoursAcad, comp)
    }

    return(
        <div className="skills pro-block">
            <BlockTitle
                title={language ? "Skills" : "Compétences"}
                close={closeComp}
            />
            <div className="languages-block">
                <p className="skills-title">{language ? "Coding Languages" : "Language de Développement"}</p>
                <div className="languages">
                    {codingLangs}
                </div>
            </div>
            <div className="environment-block">
                <p className="skills-title">{language ? "Technical Environment" : "Environnement Technique"}</p>
                <div className="environment">
                    {environment}
                </div>
            </div>
            <BlockNav
                left={language ? "Projects" : "Réalisations"}
                switchl={switchReal}
                center={language ? "Work Experiences" : "Parcours Professionnel"}
                switchc={switchParcoursPro}
                right={language ? "Academic Learning" : "Parcours Académique"}
                switchr={switchParcoursAcad}
            />
        </div>
    )
}

export default Competence;
