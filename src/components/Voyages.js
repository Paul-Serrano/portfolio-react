import BlockNav from "./parts/BlockNav";
import BlockTitle from "./parts/BlockTitle";
import travelList from "../data/TravelList";
import Travel from "./parts/Travel";

function Voyages() {

    function closeVoyages() {
        document.getElementsByClassName("perso")[0].style.display = "flex";
        document.getElementsByClassName("travel")[0].style.display = "none";
    }

    function switchApropos() {
        document.getElementsByClassName("about")[0].style.display = "flex";
        document.getElementsByClassName("travel")[0].style.display = "none";
    }

    function switchLoisirs() {
        document.getElementsByClassName("hobby")[0].style.display = "flex";
        document.getElementsByClassName("travel")[0].style.display = "none";
    }

    function switchBonus() {
        document.getElementsByClassName("bonus")[0].style.display = "flex";
        document.getElementsByClassName("travel")[0].style.display = "none";
    }

    const travel = travelList.map(item => {
        return(
            <Travel
                key={item.key}
                item={item}
            />
        )
    })

    return(
        <div className="travel perso-block">
            <BlockTitle
                title="Voyages"
                close={closeVoyages}
            />
            <div className="travel-container">
                {travel}
            </div>
            <BlockNav
                left="A propos"
                switchl={switchApropos}
                center="Loisirs"
                switchc={switchLoisirs}
                right="Bonus"
                switchr={switchBonus}
            />
        </div>
    )
}

export default Voyages
