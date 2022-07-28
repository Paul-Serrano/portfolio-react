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

    return(
        <div className="parcours-acad">
            <BlockTitle
                title="Parcours Académique"
                close={closeAcad}
            />
            {studies}
            <BlockNav
                left="Réalisations"
                center="Compétences"
                right="Parcours Professionnel"
            />
        </div>
    )
}

export default ParcoursAcad;
