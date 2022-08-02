import BlockNav from "./parts/BlockNav";
import BlockTitle from "./parts/BlockTitle";

function Bonus() {

    function closeBonus() {
        document.getElementsByClassName("perso")[0].style.display = "flex";
        document.getElementsByClassName("bonus")[0].style.display = "none";
    }

    function switchApropos() {
        document.getElementsByClassName("about")[0].style.display = "flex";
        document.getElementsByClassName("bonus")[0].style.display = "none";
    }

    function switchVoyages() {
        document.getElementsByClassName("travel")[0].style.display = "flex";
        document.getElementsByClassName("bonus")[0].style.display = "none";
    }

    function switchLoisirs() {
        document.getElementsByClassName("hobby")[0].style.display = "flex";
        document.getElementsByClassName("bonus")[0].style.display = "none";
    }

    return(
        <div className="bonus">
            <BlockTitle
                title="Bonus"
                close={closeBonus}
            />
            <BlockNav
                left="A propos"
                switchl={switchApropos}
                center="Voyages"
                switchc={switchVoyages}
                right="Loisirs"
                switchr={switchLoisirs}
            />
        </div>
    )
}

export default Bonus
