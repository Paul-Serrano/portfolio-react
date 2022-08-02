import codingLangList from "../../data/codingLangList";
import projectList from "../../data/projectList";

function ProjectLangIcon(props) {
    return (
        <img className="project-icon" src={props.item.src} alt={props.item.alt}/>
    )
}

export default ProjectLangIcon;
