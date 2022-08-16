import {useMemo} from "react";

function Project({engTitle, title, link, langs, language}) {

    const projectLang = useMemo(() => {
        return langs.map((lang) => (
            <img className="project-icon" key={lang.key} src={lang.src} alt={lang.alt} />
        ));
    }, [langs]);

    return (
        <div className="project">
            <a href={link} className="project-txt" target="_blank">
                {language ? engTitle : title}
            </a>
            <div className="project-content">{projectLang}</div>
        </div>
    );
}


export default Project;
