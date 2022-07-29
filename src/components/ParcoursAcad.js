import Study from "./parts/Study";
import studyList from "../data/studyList";
import BlockTitle from "./parts/BlockTitle";
import BlockNav from "./parts/BlockNav";

function ParcoursAcad() {

    const studies = studyList.map(item => {
        return <Study
            key={item.key}
            title={item.title}
            location={item.location}
            city={item.city}
            date={item.date}
        />
    })

    function closeAcad() {
        document.getElementsByClassName("pro")[0].style.display = "flex";
        document.getElementsByClassName("parcours-acad")[0].style.display = "none";
    }

    function switchComp() {
        document.getElementsByClassName("skills")[0].style.display = "flex";
        document.getElementsByClassName("parcours-acad")[0].style.display = "none";
    }

    function switchParcoursPro() {
        document.getElementsByClassName("parcours-pro")[0].style.display = "flex";
        document.getElementsByClassName("parcours-acad")[0].style.display = "none";
    }

    function switchReal() {
        document.getElementsByClassName("realisations")[0].style.display = "flex";
        document.getElementsByClassName("parcours-acad")[0].style.display = "none";
    }

    return(
        <div className="parcours-acad pro-block">
            <BlockTitle
                title="Parcours Académique"
                close={closeAcad}
            />
            {studies}
            <BlockNav
                left="Réalisations"
                switchl={switchReal}
                center="Compétences"
                switchc={switchComp}
                right="Parcours Professionnel"
                switchr={switchParcoursPro}
            />
        </div>
    )
}

export default ParcoursAcad;
