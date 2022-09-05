import BlockNav from "../index/parts/BlockNav";
import BlockTitle from "../index/parts/BlockTitle";
import Player from "./Player";

function Loisirs({language}) {

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

    function closeLoisirs() {
        const perso = document.getElementsByClassName("perso")[0];
        const loisirs = document.getElementsByClassName("hobby")[0];
        fadeAway(loisirs);
        delay(perso, loisirs);
    }

    function switchApropos() {
        const about = document.getElementsByClassName("about")[0];
        const loisirs = document.getElementsByClassName("hobby")[0];
        fadeAway(loisirs);
        delay(about, loisirs);
    }

    function switchVoyages() {
        const voyages = document.getElementsByClassName("travel")[0];
        const loisirs = document.getElementsByClassName("hobby")[0];
        fadeAway(loisirs);
        delay(voyages, loisirs);
    }

    function switchBonus() {
        const bonus = document.getElementsByClassName("bonus")[0];
        const loisirs = document.getElementsByClassName("hobby")[0];
        fadeAway(loisirs);
        delay(bonus, loisirs);
    }

    return(
        <div className="hobby perso-block">
            <BlockTitle
                title={language ? "Hobby" : "Loisirs"}
                close={closeLoisirs}
            />
            <Player/>
            <BlockNav
                left={language ? "About" : "A propos"}
                switchl={switchApropos}
                center={language ? "Travel" : "Voyages"}
                switchc={switchVoyages}
                right="Bonus"
                switchr={switchBonus}
            />
        </div>
    )
}

export default Loisirs
