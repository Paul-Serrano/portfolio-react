import menu from "../../img/menu.png"
import back from "../../img/back-arrow.png"

function Nav({language}) {

    function openOption() {
        document.getElementsByClassName("settings")[0].style.display = "flex"
        document.getElementsByClassName("nav")[0].style.display = "none"
    }

    function openIntroBoard() {
        const pro = document.getElementsByClassName("pro-initial")[0];
        const perso = document.getElementsByClassName("perso-initial")[0];
        pro.style.animation = "slidebackright 1s forwards ease";
        perso.style.animation = "slidebackleft 1s forwards ease";
        setTimeout(function positionBack() {
            pro.style.right = "100%";
            perso.style.left = "100%";
        }, 1000)
        const introBoard = document.getElementsByClassName("intro-board")[0];
        setTimeout(function fadeOn() {
            introBoard.style.display = "flex";
            introBoard.style.animation = "fadeon 0.5s forwards linear";
            }, 250
        )
        const main = document.getElementsByTagName("main")[0];
        main.style.animation = "positionswitchback 0.01s forwards linear";
        console.log(main);
    }

    return (
        <div className="nav">
            <div className="nav-btn-block">
                <button className="nav-button" onClick={openIntroBoard}>
                    <img src={back} alt="boutton retour"/>
                </button>
                <button className="nav-button" onClick={openOption}>
                    <img className="nav-icon" src={menu} alt="menu"/>
                </button>
            </div>
            <p>{language ? "Paul Serrano Developper" : "Paul Serrano Développeur"}</p>
        </div>
    )
}

export default Nav;
