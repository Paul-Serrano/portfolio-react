//import codingLangList from "../../data/codingLangList";
import projectList from "../../data/projectList";
import ProjectLangIcon from "./ProjectLangIcon";

function Project(props) {

    let projectLangs = [];

    for(let i = 0; i < projectList.length; i++) {
        //for(let j = 0; j < projectList[i].lang.length; j++) {
            projectLangs[i] = projectList[i].lang.map(item => {
                return <ProjectLangIcon
                    key={item.key}
                    src={item.src}
                    alt={item.alt}
                    class="project-icon"
                />
            })
        //}
    }

    console.log(projectLangs)
    console.log(<ProjectLangIcon/>)

    return (
        <div className="project">
            <a href="src/components/parts/Project#" className="project-txt">{props.title}</a>
            <div className="project-content">
                {projectLangs}
            </div>
        </div>
    )
}


export default Project;
