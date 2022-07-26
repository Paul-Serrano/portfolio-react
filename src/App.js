import './App.css';
import Nav from "./components/index/Nav"
import Pro from "./components/index/Pro"
import Perso from "./components/index/Perso"
import Footer from "./components/index/Footer"
import Option from "./components/Option";
import Realisation from "./components/Realisation";

function App() {

  return (
    <div className="App">
        <main className="main">
            <div className="left-side">
                <Nav/>
                <Realisation/>
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
