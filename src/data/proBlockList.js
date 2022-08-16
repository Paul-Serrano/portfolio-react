import realisationIcon from "../img/website.png"
import competencesIcon from "../img/skills.png"
import proIcon from "../img/work.png"
import acadIcon from "../img/study.png"
import aProposIcon from "../img/self.png";
import voyageIcon from "../img/travel.png";
import loisirIcon from "../img/hobby.png";
import bonusIcon from "../img/bonus.png";

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

function openReal() {
    const pro = document.getElementsByClassName("pro")[0];
    const real = document.getElementsByClassName("realisations")[0];
    fadeAway(pro);
    delay(real, pro);
}

function openComp() {
    const pro = document.getElementsByClassName("pro")[0];
    const comp = document.getElementsByClassName("skills")[0];
    fadeAway(pro);
    delay(comp, pro);
}

function openParcoursPro() {
    const pro = document.getElementsByClassName("pro")[0];
    const parcoursPro = document.getElementsByClassName("parcours-pro")[0];
    fadeAway(pro);
    delay(parcoursPro, pro);
}

function openParcoursAcad() {
    const pro = document.getElementsByClassName("pro")[0];
    const parcoursAcad = document.getElementsByClassName("parcours-acad")[0]
    fadeAway(pro);
    delay(parcoursAcad, pro);
}

const persoBlockList = [
    {
        key: 1,
        name: "Réalisations",
        engName: "Projects",
        src: realisationIcon,
        alt: "réalisations",
        open: openReal
    },
    {
        key: 2,
        name: "Compétences",
        engName: "Skills",
        src: competencesIcon,
        alt: "compétences",
        open: openComp
    },
    {
        key: 3,
        name: "Parcours Professionnel",
        engName: "Work Experiences",
        src: proIcon,
        alt: "parcours professionnel",
        open: openParcoursPro
    },
    {
        key: 4,
        name: "Parcours Académique",
        engName: "Academic Learning",
        src: acadIcon,
        alt: "parcours académique",
        open: openParcoursAcad
    }
]

export default persoBlockList;
