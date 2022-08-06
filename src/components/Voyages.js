import BlockNav from "./parts/BlockNav";
import BlockTitle from "./parts/BlockTitle";
import travelList from "../data/TravelList";
import Travel from "./parts/Travel";

function Voyages() {

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

    function closeVoyages() {
        const perso = document.getElementsByClassName("perso")[0];
        const voyages = document.getElementsByClassName("travel")[0];
        fadeAway(voyages);
        delay(perso, voyages);
    }

    function switchApropos() {
        const about = document.getElementsByClassName("about")[0];
        const voyages = document.getElementsByClassName("travel")[0];
        fadeAway(voyages);
        delay(about, voyages);
    }

    function switchLoisirs() {
        const loisirs = document.getElementsByClassName("hobby")[0];
        const voyages = document.getElementsByClassName("travel")[0];
        fadeAway(voyages);
        delay(loisirs, voyages);
    }

    function switchBonus() {
        const bonus = document.getElementsByClassName("bonus")[0];
        const voyages = document.getElementsByClassName("travel")[0];
        fadeAway(voyages);
        delay(bonus, voyages);
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
