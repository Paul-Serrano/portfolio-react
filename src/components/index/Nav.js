import menu from "../../img/menu.png"

function Nav() {

    function openOption() {
        document.getElementsByClassName("settings")[0].style.display = "flex"
        document.getElementsByClassName("nav")[0].style.display = "none"
    }

    return (
        <div className="nav">
            <button className="nav-button" onClick={openOption}>
                <img className="nav-icon" src={menu} alt="menu"/>
            </button>
            <p>Paul Serrano Développeur</p>
        </div>
    )
}

export default Nav;
