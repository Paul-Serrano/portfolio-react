import BlockNav from "./parts/BlockNav";
import BlockTitle from "./parts/BlockTitle";

function Loisirs() {

    function closeLoisirs() {
        document.getElementsByClassName("perso")[0].style.display = "flex";
        document.getElementsByClassName("hobby")[0].style.display = "none";
    }

    function switchApropos() {
        document.getElementsByClassName("about")[0].style.display = "flex";
        document.getElementsByClassName("hobby")[0].style.display = "none";
    }

    function switchVoyages() {
        document.getElementsByClassName("travel")[0].style.display = "flex";
        document.getElementsByClassName("hobby")[0].style.display = "none";
    }

    function switchBonus() {
        document.getElementsByClassName("bonus")[0].style.display = "flex";
        document.getElementsByClassName("hobby")[0].style.display = "none";
    }

    return(
        <div className="hobby perso-block">
            <BlockTitle
                title="Loisirs"
                close={closeLoisirs}
            />
            <BlockNav
                left="A propos"
                switchl={switchApropos}
                center="Voyages"
                switchc={switchVoyages}
                right="Bonus"
                switchr={switchBonus}
            />
        </div>
    )
}

export default Loisirs
