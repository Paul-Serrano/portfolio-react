import Option from "../settings/Option";
import introBoardList from "./introBoardList";
import profilPicture from "../../img/photo-paul.jpg"
import introBoard from "./IntroBoard";

function IntroBoard({lightMode, language, toggleDarkMode, toggleEnglishMode}) {

    const intro = introBoardList.map(intro => {
            return (
                <div className="intro-block" key={intro.key}>
                    <p className="intro-block-title">{language? intro.engTitle : intro.title}</p>
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
