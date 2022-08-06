import Project from "./parts/Project";
import BlockTitle from "./parts/BlockTitle";
import projectList from "../data/projectList";
import BlockNav from "./parts/BlockNav";
import {useMemo} from "react";

function Realisation() {

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

    function closeReal() {
        const pro = document.getElementsByClassName("pro")[0];
        const real = document.getElementsByClassName("realisations")[0];
        fadeAway(real)
        delay(pro, real);
    }

    function switchComp() {
        const comp = document.getElementsByClassName("skills")[0]
        const real = document.getElementsByClassName("realisations")[0];
        fadeAway(real);
        delay(comp, real)
    }

    function switchParcoursPro() {
        const parcoursPro = document.getElementsByClassName("parcours-pro")[0]
        const real = document.getElementsByClassName("realisations")[0];
        fadeAway(real);
        delay(parcoursPro, real)
    }

    function switchParcoursAcad() {
        const parcoursAcad = document.getElementsByClassName("parcours-acad")[0]
        const real = document.getElementsByClassName("realisations")[0];
        fadeAway(real);
        delay(parcoursAcad, real)
    }

    const projects = useMemo(() => {
        return projectList.map((item) => (
            <Project
                key={item.key}
                title={item.name}
                link={item.link}
                langs={item.lang}
            />
        ));
    }, []);

    return (
        <div className="realisations pro-block">
            <BlockTitle
                title="Réalisations"
                close={closeReal}
            />
            <div className="realisation-content">
                {projects}
            </div>
            <BlockNav
                left="Compétences"
                switchl={switchComp}
                center="Parcours Porfessionnel"
                switchc={switchParcoursPro}
                right="Parcours Académique"
                switchr={switchParcoursAcad}
            />
        </div>
    )
}

export default Realisation;
