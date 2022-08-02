import BlockNav from "./parts/BlockNav";
import BlockTitle from "./parts/BlockTitle";

function Apropos() {

    function closeApropos() {
        document.getElementsByClassName("perso")[0].style.display = "flex";
        document.getElementsByClassName("about")[0].style.display = "none";
    }

    function switchVoyages() {
        document.getElementsByClassName("travel")[0].style.display = "flex";
        document.getElementsByClassName("about")[0].style.display = "none";
    }

    function switchLoisirs() {
        document.getElementsByClassName("hobby")[0].style.display = "flex";
        document.getElementsByClassName("about")[0].style.display = "none";
    }

    function switchBonus() {
        document.getElementsByClassName("bonus")[0].style.display = "flex";
        document.getElementsByClassName("about")[0].style.display = "none";
    }

    return(
        <div className="about">
            <BlockTitle
                title="A propos"
                close={closeApropos}
            />
            <BlockNav
                left="Voyages"
                switchl={switchVoyages}
                center="Loisirs"
                switchc={switchLoisirs}
                right="Bonus"
                switchr={switchBonus}
            />
        </div>
    )
}

export default Apropos
