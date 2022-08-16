import aProposIcon from "../img/self.png"
import voyageIcon from "../img/travel.png"
import loisirIcon from "../img/hobby.png"
import bonusIcon from "../img/bonus.png"

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

function openApropos() {
    const perso = document.getElementsByClassName("perso")[0];
    const about = document.getElementsByClassName("about")[0];
    fadeAway(perso);
    delay(about, perso);
}

function openVoyages() {
    const perso = document.getElementsByClassName("perso")[0];
    const voyage = document.getElementsByClassName("travel")[0];
    fadeAway(perso);
    delay(voyage, perso);
}

function openLoisirs() {
    const perso = document.getElementsByClassName("perso")[0];
    const loisirs = document.getElementsByClassName("hobby")[0];
    fadeAway(perso);
    delay(loisirs, perso);
}

function openBonus() {
    const perso = document.getElementsByClassName("perso")[0];
    const bonus = document.getElementsByClassName("bonus")[0];
    fadeAway(perso);
    delay(bonus, perso);
}

const persoBlockList = [
    {
        key: 1,
        name: "A propos",
        engName: "About",
        src: aProposIcon,
        alt: "à propos",
        open: openApropos
    },
    {
        key: 2,
        name: "Voyages",
        engName: "Travel",
        src: voyageIcon,
        alt: "voyage",
        open: openVoyages
    },
    {
        key: 3,
        name: "Loisirs",
        engName: "Hobby",
        src: loisirIcon,
        alt: "loisirs",
        open: openLoisirs
    },
    {
        key: 4,
        name: "Bonus",
        engName: "Bonus",
        src: bonusIcon,
        alt: "bonus",
        open: openBonus
    }
]

export default persoBlockList;
