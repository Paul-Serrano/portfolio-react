import BlockNav from "./parts/BlockNav";
import BlockTitle from "./parts/BlockTitle";

function Bonus() {

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

    function closeBonus() {
        const perso = document.getElementsByClassName("perso")[0];
        const bonus = document.getElementsByClassName("bonus")[0];
        fadeAway(bonus);
        delay(perso, bonus);
    }

    function switchApropos() {
        const about = document.getElementsByClassName("about")[0];
        const bonus = document.getElementsByClassName("bonus")[0];
        fadeAway(bonus);
        delay(about, bonus);
    }

    function switchVoyages() {
        const voyages = document.getElementsByClassName("travel")[0];
        const bonus = document.getElementsByClassName("bonus")[0];
        fadeAway(bonus);
        delay(voyages, bonus);
    }

    function switchLoisirs() {
        const loisirs = document.getElementsByClassName("hobby")[0];
        const bonus = document.getElementsByClassName("bonus")[0];
        fadeAway(bonus);
        delay(loisirs, bonus);
    }

    return(
        <div className="bonus perso-block">
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
