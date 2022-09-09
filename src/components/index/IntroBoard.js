import Option from "../settings/Option";
import introBoardList from "./introBoardList";
import profilPicture from "../../img/photo-paul.jpg"

function IntroBoard({lightMode, language, toggleDarkMode, toggleEnglishMode}) {

    const intro = introBoardList.map(intro => {
            return (
                <div className="intro-block" key={intro.key}>
                    <p className={intro.name ? "intro-title" : "noDisplay"}>{intro.name}</p>
                    <p className="intro-title">{language? intro.engTitle : intro.title}</p>
                    <p className="intro-block-txt">{language ? intro.engDescription : intro.description}</p>
                </div>
            )
        }
    )

    function closeIntro() {
        const introBoard = document.getElementsByClassName("intro-board")[0];
        introBoard.style.animation = "fadeaway 0.5s forwards linear";
        setTimeout(function fadeOn() {
            introBoard.style.display = "none";
        }, 500);
        const pro = document.getElementsByClassName("pro-initial")[0];
        const perso = document.getElementsByClassName("perso-initial")[0];
        pro.style.animation = "slideright 1.5s forwards ease";
        pro.style.right = "0";
        setTimeout(function fadeBottom() {
            perso.style.animation = "slideleft 1.5s forwards ease";
            perso.style.left = "0";
        }, 750);
        const main = document.getElementsByTagName("main")[0];
        main.style.display = "flex";
        main.style.animation = "positionswitch 1s forwards linear";
        main.style.animationDelay = "2s";
    }

    return(
        <div className={lightMode ? "intro-board light-mode" : "intro-board"}>
            <Option intro={true} class="intro-settings" toggleDarkMode={toggleDarkMode} toggleEnglishMode={toggleEnglishMode}/>
            <div className="intro-content">
                {intro}
            </div>
            <div className="intro-btn-block">
                <img className="intro-picture" src={profilPicture} alt="Photo profil"/>
                <button className="intro-btn" onClick={closeIntro}>
                    <p className="intro-btn-txt">{language ? "Start the Navigation" : "Commencez la Navigation"}</p>
                </button>
                <div className="intro-react">
                    <p className="intro-react-txt">{language ? "JSX Synthax" : "Synthaxe JSX"}</p>
                    <p className="intro-react-txt">React Props</p>
                    <p className="intro-react-txt">React State</p>
                    <p className="intro-react-txt">API Spotify</p>
                </div>
            </div>
        </div>
    )
}

export default IntroBoard
