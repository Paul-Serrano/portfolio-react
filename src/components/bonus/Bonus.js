import BlockNav from "../index/parts/BlockNav";
import BlockTitle from "../index/parts/BlockTitle";
import bonusList from "../../data/bonusList";
import BonusBlock from "./BonusBlock";

function Bonus({language}) {

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

    const bonus = bonusList.map((item) => (
            <BonusBlock
                key={item.key}
                title={language ? item.engTitle : item.title}
                bonus={item.bonus}
            />
        ));

    return(
        <div className="bonus perso-block">
            <BlockTitle
                title="Bonus"
                close={closeBonus}
            />
            <div className="bonus-container">
                {bonus}
            </div>
            <BlockNav
                left={language ? "About" : "A propos"}
                switchl={switchApropos}
                center={language ? "Travel" : "Voyages"}
                switchc={switchVoyages}
                right={language ? "Hobby" : "Loisirs"}
                switchr={switchLoisirs}
            />
        </div>
    )
}

export default Bonus
