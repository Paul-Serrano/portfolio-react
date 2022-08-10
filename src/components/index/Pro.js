import Block from "./parts/Block"
import realisationIcon from "../../img/website.png"
import competencesIcon from "../../img/skills.png"
import proIcon from "../../img/work.png"
import acadIcon from "../../img/study.png"
import React from "react";

function Pro(props) {

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

    return (
        <div className="pro">
            <p className="pro-title">Coté pro</p>
            <div className="pro-content">
                <Block
                    name="Réalisations"
                    src={realisationIcon}
                    alt="icône réalisation"
                    open={openReal}
                />
                <Block
                    name="Compétences"
                    src={competencesIcon}
                    alt="icône compétence"
                    open={openComp}
                />
                <Block
                    name="Parcours Professionnel"
                    src={proIcon}
                    alt="icône parcours professionnel"
                    open={openParcoursPro}
                />
                <Block
                    name="Parcours Académique"
                    src={acadIcon}
                    alt="icône parcours académique"
                    open={openParcoursAcad}
                />
            </div>
        </div>
    )
}

export default Pro;
