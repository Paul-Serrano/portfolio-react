import './App.css';
import Nav from "./components/index/Nav"
import Pro from "./components/index/Pro"
import Perso from "./components/index/Perso"
import Footer from "./components/index/Footer"
import ParcoursPro from "./components/ParcoursPro";
import Option from "./components/parts/Option";
import Realisation from "./components/Realisation";
import Competence from "./components/Competences";
import ParcoursAcad from "./components/ParcoursAcad";
import React from "react";
import Apropos from "./components/Apropos";
import Voyages from "./components/Voyages";
import Loisirs from "./components/Loisirs";
import Bonus from "./components/Bonus";


function App() {

    const [lightMode, setLightMode] = React.useState(false)

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
