import menu from "../../img/menu.png"

function Nav() {
    return (
        <div className="nav">
            <button className="nav-button">
                <img className="nav-icon" src={menu} alt="menu"/>
            </button>
            <p>Paul Serrano Développeur</p>
        </div>
    )
}

export default Nav;
