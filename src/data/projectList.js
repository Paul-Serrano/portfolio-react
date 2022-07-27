import cssIcon from "../img/css.png"
import htmlIcon from "../img/html.png"
import jsIcon from "../img/javascript.png"
import phpIcon from "../img/php.png"
import mySqlIcon from "../img/mysql.png"

const css = {
    name: "CSS",
    src: cssIcon,
    alt: "Icône CSS"
}

const html = {
    name: "HTML",
    src: htmlIcon,
    alt: "Icône HTML"
}

const javascript = {
    name: "Javascript",
    src: jsIcon,
    alt: "Icône Javascript"
}

const php = {
    name: "PHP",
    src: phpIcon,
    alt: "Icône PHP"
}

const mySql = {
    name: "mySql",
    src: mySqlIcon,
    alt: "Icône mySql"
}

const projectList = [
    {
        key: 1,
        name: "Site de mariage from scratch",
        link: "https://mariage-hugo-et-noemie.fr/view/index.php",
        lang: [css, html, javascript, php, mySql]

    },

    {
        key: 2,
        name: "Site de paris sportifs",
        link: "https://akkezxla.ae.lu/Akkezxla-Betting-Site/bet-list.php",
        lang: [css, html, javascript, php, mySql]
    },

    {
        key: 3,
        name: "Site de location d'appartement",
        link: "http://paris-island.com/",
        lang: [css, html, javascript]
    }
]

export default projectList;
