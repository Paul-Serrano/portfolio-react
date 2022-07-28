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

    return(
        <div className="parcours-acad">
            <BlockTitle
                title="Parcours Académique"
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
