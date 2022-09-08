import './App.css';
import Nav from "./components/index/Nav"
import Pro from "./components/index/Pro"
import Perso from "./components/index/Perso"
import Footer from "./components/index/Footer"
import ParcoursPro from "./components/jobs/ParcoursPro";
import Option from "./components/settings/Option";
import Realisation from "./components/project/Realisation";
import Competence from "./components/skills/Competences";
import ParcoursAcad from "./components/academics/ParcoursAcad";
import {useState} from "react";
import Apropos from "./components/about/Apropos";
import Voyages from "./components/travel/Voyages";
import Loisirs from "./components/hobby/Loisirs";
import Bonus from "./components/bonus/Bonus";
import IntroBoard from "./components/index/IntroBoard";


function App() {

    const [lightMode, setLightMode] = useState(false)
    const [langMode, setLangMode] = useState(false)

    function toggleDarkMode() {
        setLightMode(prevLightMode => !prevLightMode)
        const introLightModeBtn = document.getElementsByClassName("settings-btn-block")[0];
        const lightModeBtn = document.getElementsByClassName("settings-btn-block")[2]
        lightMode ? introLightModeBtn.style.justifyContent = "flex-start" : introLightModeBtn.style.justifyContent = "flex-end"
        lightMode ? lightModeBtn.style.justifyContent = "flex-start" : lightModeBtn.style.justifyContent = "flex-end"
    }

    function toggleEnglishMode() {
        setLangMode(prevLangMode => !prevLangMode)
        const introLangModeBtn = document.getElementsByClassName("settings-btn-block")[1];
        const langModeBtn = document.getElementsByClassName("settings-btn-block")[3];
        langMode ? introLangModeBtn.style.justifyContent = "flex-start" : introLangModeBtn.style.justifyContent = "flex-end"
        langMode ? langModeBtn.style.justifyContent = "flex-start" : langModeBtn.style.justifyContent = "flex-end"
    }

  return (
    <div className="App">
        <main className={lightMode ? "main light-mode" : "main"}>
            <IntroBoard lightMode={lightMode} language={langMode} toggleDarkMode={toggleDarkMode} toggleEnglishMode={toggleEnglishMode}/>
            <div className="left-side">
                <Nav language={langMode}/>
                <Option class="settings" toggleDarkMode={toggleDarkMode} toggleEnglishMode={toggleEnglishMode}/>
                <Pro language={langMode}/>
                <Realisation language={langMode}/>
                <Competence language={langMode}/>
                <ParcoursPro language={langMode}/>
                <ParcoursAcad language={langMode}/>
            </div>
            <div className="right-side">
                <Perso language={langMode}/>
                <Apropos language={langMode}/>
                <Voyages language={langMode}/>
                <Loisirs language={langMode}/>
                <Bonus language={langMode}/>
                <Footer/>
            </div>
        </main>
    </div>
  );
}

export default App;
