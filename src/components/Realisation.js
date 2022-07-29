import Project from "./parts/Project";
import BlockTitle from "./parts/BlockTitle";
import projectList from "../data/projectList";
import BlockNav from "./parts/BlockNav";

function Realisation() {

    const projects = projectList.map(item => {
        return <Project
            key={item.key}
            title={item.name}
        />
    })

    function closeReal() {
        document.getElementsByClassName("pro")[0].style.display = "flex";
        document.getElementsByClassName("realisations")[0].style.display = "none";
    }

    function switchComp() {
        document.getElementsByClassName("skills")[0].style.display = "flex";
        document.getElementsByClassName("realisations")[0].style.display = "none";
    }

    function switchParcoursPro() {
        document.getElementsByClassName("parcours-pro")[0].style.display = "flex";
        document.getElementsByClassName("realisations")[0].style.display = "none";
    }

    function switchParcoursAcad() {
        document.getElementsByClassName("parcours-acad")[0].style.display = "flex";
        document.getElementsByClassName("realisations")[0].style.display = "none";
    }

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
