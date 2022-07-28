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

    return(
        <div className="parcours-pro">
            <BlockTitle
                title="Parcours Professionnel"
                close={closePro}
            />
            <div className="work-content">
                {work}
            </div>
            <BlockNav
                left="Réalisations"
                center="Compétences"
                right="Parcours Académique"
            />
        </div>
    )
}

export default ParcoursPro;
