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

    return (
        <div className="realisations">
            <BlockTitle
                title="Réalisations"
                close={closeReal}
            />
            <div className="realisation-content">
                {projects}
            </div>
            <BlockNav
                left="Compétences"
                center="Parcours Porfessionnel"
                right="Parcours Académique"
            />
        </div>
    )
}

export default Realisation;
