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

    return (
        <div className="project">
            <a href={props.link} className="project-txt" target="_blank">{props.title}</a>
            <div className="project-content">
                {projectLangs}
            </div>
        </div>
    )
}


export default Project;
