import BlockNav from "./parts/BlockNav";
import BlockTitle from "./parts/BlockTitle";

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

    return(
        <div className="travel">
            <BlockTitle
                title="Voyages"
                close={closeVoyages}
            />
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
