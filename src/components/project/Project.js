import {useMemo} from "react";

function Project({name, link, langs}) {

    const projectLang = useMemo(() => {
        return langs.map((lang) => (
            <img className="project-icon" key={lang.key} src={lang.src} alt={lang.alt} />
        ));
    }, [langs]);

    return (
        <a href={link} className="project" target="_blank">
            <p className="project-txt">
                {name}
            </p>
            <div className="project-content">{projectLang}</div>
        </a>
    );
}


export default Project;
