import Project from "./Realisations/Project";
import projectList from "../data/projectList";

function Realisation() {

    const projects = projectList.map(item => {
        return <Project
            key={item.key}
            name={item.project1.name}
            link={item.project1.link}
            lang={item.project1.lang[0].src}
        />
    })

    return(
        <div className="realisations">
            {projects}
        </div>
    )
}

export default Realisation;
