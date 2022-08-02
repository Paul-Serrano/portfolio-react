import Block from "../../components/parts/Block"
import realisationIcon from "../../img/website.png"
import competencesIcon from "../../img/skills.png"
import proIcon from "../../img/work.png"
import acadIcon from "../../img/study.png"
import React from "react";

function Pro(props) {

    const [openedBlock, setOpenedBlock] = React.useState()

    function openReal() {
        document.getElementsByClassName("pro")[0].style.display = "none";
        document.getElementsByClassName("realisations")[0].style.display = "flex";
    }

    function openComp() {
        document.getElementsByClassName("pro")[0].style.display = "none";
        document.getElementsByClassName("skills")[0].style.display = "flex";
    }

    function openParcoursPro() {
        document.getElementsByClassName("pro")[0].style.display = "none";
        document.getElementsByClassName("parcours-pro")[0].style.display = "flex";
    }

    function openParcoursAcad() {
        document.getElementsByClassName("pro")[0].style.display = "none";
        document.getElementsByClassName("parcours-acad")[0].style.display = "flex";
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
