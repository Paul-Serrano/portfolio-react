import BlockTitle from "../index/parts/BlockTitle";
import BlockNav from "../index/parts/BlockNav";
import workList from "../../data/workList";
import Work from "./Work";

function ParcoursPro() {

    const work = workList.map(item => {
        return <Work
            key={item.key}
            item={item}
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

    function closePro() {
        const pro = document.getElementsByClassName("pro")[0];
        const parcoursPro = document.getElementsByClassName("parcours-pro")[0];
        fadeAway(parcoursPro)
        delay(pro, parcoursPro);
    }

    function switchComp() {
        const comp = document.getElementsByClassName("skills")[0]
        const parcoursPro = document.getElementsByClassName("parcours-pro")[0];
        fadeAway(parcoursPro);
        delay(comp, parcoursPro)
    }

    function switchReal() {
        const real = document.getElementsByClassName("realisations")[0]
        const parcoursPro = document.getElementsByClassName("parcours-pro")[0];
        fadeAway(parcoursPro);
        delay(real, parcoursPro)
    }

    function switchParcoursAcad() {
        const parcoursAcad = document.getElementsByClassName("parcours-acad")[0]
        const parcoursPro = document.getElementsByClassName("parcours-pro")[0];
        fadeAway(parcoursPro);
        delay(parcoursAcad, parcoursPro)
    }

    return(
        <div className="parcours-pro pro-block">
            <BlockTitle
                title="Parcours Professionnel"
                close={closePro}
            />
            <div className="work-content">
                {work}
            </div>
            <BlockNav
                left="Réalisations"
                switchl={switchReal}
                center="Compétences"
                switchc={switchComp}
                right="Parcours Académique"
                switchr={switchParcoursAcad}
            />
        </div>
    )
}

export default ParcoursPro;
