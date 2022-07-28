import './App.css';
import Nav from "./components/index/Nav"
import Pro from "./components/index/Pro"
import Perso from "./components/index/Perso"
import Footer from "./components/index/Footer"
import Option from "./components/parts/Option";
import Realisation from "./components/Realisation";
import Competence from "./components/Competences";
import ParcoursAcad from "./components/ParcoursAcad";
import ParcoursPro from "./components/ParcoursPro";

function App() {

  return (
    <div className="App">
        <main className="main">
            <div className="left-side">
                <Nav/>
                <ParcoursPro/>
            </div>
            <div className="right-side">
                <Perso/>
                <Footer/>
            </div>
        </main>
    </div>
  );
}

export default App;
