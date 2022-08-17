import {useMemo} from "react";

function Project({name, link, langs}) {

    const projectLang = useMemo(() => {
        return langs.map((lang) => (
            <img className="project-icon" key={lang.key} src={lang.src} alt={lang.alt} />
        ));
    }, [langs]);

    return (
        <div className="project">
            <a href={link} className="project-txt" target="_blank">
                {name}
            </a>
            <div className="project-content">{projectLang}</div>
        </div>
    );
}


export default Project;
