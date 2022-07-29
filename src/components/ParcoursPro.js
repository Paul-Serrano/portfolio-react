import BlockTitle from "./parts/BlockTitle";
import BlockNav from "./parts/BlockNav";
import workList from "../data/workList";
import Work from "./parts/Work";

function ParcoursPro() {

    const work = workList.map(item => {
        return <Work
            key={item.key}
            item={item}
        />
    })

    function closePro() {
        document.getElementsByClassName("pro")[0].style.display = "flex";
        document.getElementsByClassName("parcours-pro")[0].style.display = "none";
    }

    function switchComp() {
        document.getElementsByClassName("skills")[0].style.display = "flex";
        document.getElementsByClassName("parcours-pro")[0].style.display = "none";
    }

    function switchReal() {
        document.getElementsByClassName("realisations")[0].style.display = "flex";
        document.getElementsByClassName("parcours-pro")[0].style.display = "none";
    }

    function switchParcoursAcad() {
        document.getElementsByClassName("parcours-acad")[0].style.display = "flex";
        document.getElementsByClassName("parcours-pro")[0].style.display = "none";
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
