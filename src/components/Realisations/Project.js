import codingLangList from "../../data/codingLangList";
import projectList from "../../data/projectList";
import ProjectLangIcon from "../parts/ProjectLangIcon";

function Project(props) {

    let projectLangs = [];
    let projectLang = [];

    for(let i = 0; i < projectList.length; i++) {
        for(let j = 0; j < projectList[i].lang.length; j++) {
            projectLangs[i] = projectList[i].lang.map(item => {
                return <ProjectLangIcon
                    key={item.key}
                    src={item.src}
                    alt={item.alt}
                    class="project-icon"
                />
            })
        }
    }

    console.log(projectLangs)

    return (
        <div className="project">
            <a href="#" className="project-txt">{props.title}</a>
            <div className="project-content">
                {projectLangs}
            </div>
        </div>
    )
}


export default Project;
