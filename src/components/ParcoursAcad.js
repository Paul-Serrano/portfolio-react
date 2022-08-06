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

    function delay(a, b) {
        setTimeout(function fadeOn() {
            a.style.display = "flex";
            b.style.display = "none";
            a.style.animation = "fadeon 0.5s forwards linear";
        }, 500);
    }

    function fadeAway(a) {
        a.style.animation = "fadeaway 0.5s forwards linear";
    }

    function closeAcad() {
        const pro = document.getElementsByClassName("pro")[0];
        const parcoursAcad = document.getElementsByClassName("parcours-acad")[0];
        fadeAway(parcoursAcad)
        delay(pro, parcoursAcad);
    }

    function switchComp() {
        const comp = document.getElementsByClassName("skills")[0]
        const parcoursAcad = document.getElementsByClassName("parcours-acad")[0];
        fadeAway(parcoursAcad);
        delay(comp, parcoursAcad)
    }

    function switchParcoursPro() {
        const parcoursPro = document.getElementsByClassName("parcours-pro")[0]
        const parcoursAcad = document.getElementsByClassName("parcours-acad")[0];
        fadeAway(parcoursAcad);
        delay(parcoursPro, parcoursAcad)
    }

    function switchReal() {
        const real = document.getElementsByClassName("realisations")[0]
        const parcoursAcad = document.getElementsByClassName("parcours-acad")[0];
        fadeAway(parcoursAcad);
        delay(real, parcoursAcad)
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
