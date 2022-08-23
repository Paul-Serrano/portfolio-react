import BlockNav from "../index/parts/BlockNav";
import BlockTitle from "../index/parts/BlockTitle";
import travelList from "../../data/travelList";
import Travel from "./Travel";

function Voyages({language}) {

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
                coverimg={item.coverimg}
                coveralt={item.coveralt}
                title={language && item.engTitle ? item.engTitle : item.title}
                description={language && item.engDescription ? item.engDescription : item.description}
                open={item.open}
                language={language}
            />
        )
    })

    return(
        <div className="travel perso-block">
            <BlockTitle
                title={language ? "Travel" : "Voyages"}
                close={closeVoyages}
            />
            <div className="travel-container">
                {travel}
            </div>
            <BlockNav
                left={language ? "About" : "A propos"}
                switchl={switchApropos}
                center={language ? "Hobby" : "Loisirs"}
                switchc={switchLoisirs}
                right="Bonus"
                switchr={switchBonus}
            />
        </div>
    )
}

export default Voyages
