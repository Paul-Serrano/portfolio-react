import codingLangList from "../../data/codingLangList";
import projectList from "../../data/projectList";
import ProjectLangIcon from "../parts/ProjectLangIcon";

function Project(props) {

    const codingLang = codingLangList.map(item => {
        return <ProjectLangIcon
            key={item.key}
            src={item.src}
            alt={item.alt}
        />
    })


    return (
        <div className="project">
            <a href="#" className="project-txt">{props.title}</a>
            <div className="project-content">
                {codingLang}
            </div>
        </div>
    )
}

export default Project;
