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


function App() {

    const [lightMode, setLightMode] = useState(false)

    function toggleDarkMode() {
        setLightMode(prevLightMode => !prevLightMode)
        const lightModeBtn = document.getElementsByClassName("settings-btn-block")[0];
        lightMode ? lightModeBtn.style.justifyContent = "flex-start" : lightModeBtn.style.justifyContent = "flex-end"
    }

  return (
    <div className="App">
        <main className={lightMode ? "main light-mode" : "main"}>
            <div className="left-side">
                <Nav/>
                <Option toggleDarkMode={toggleDarkMode}/>
                <Pro/>
                <Realisation/>
                <Competence/>
                <ParcoursPro/>
                <ParcoursAcad/>
            </div>
            <div className="right-side">
                <Perso/>
                <Apropos/>
                <Voyages/>
                <Loisirs/>
                <Bonus/>
                <Footer/>
            </div>
        </main>
    </div>
  );
}

export default App;
