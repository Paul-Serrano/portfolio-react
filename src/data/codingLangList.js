import cssIcon from "../img/css.png"
import htmlIcon from "../img/html.png"
import jsIcon from "../img/javascript.png"
import phpIcon from "../img/php.png"
import mySqlIcon from "../img/mysql.png"
import java from "../img/java.png"
import react from "../img/react.png"
import jquery from "../img/jquery.png"



const codingLangList = [
    {
        key: 1,
        name: "CSS",
        src: cssIcon,
        alt: "Icône CSS",
        skills: [
            {
                key: 1,
                skill: "flexbox"
            },
            {
                key: 2,
                skill: "grid"
            },
            {
                key: 3,
                skill: "animations"
            },
            {
                key: 4,
                skill: "responsive design"
            }
            ]
    },
    {
        key: 2,
        name: "HTML",
        src: htmlIcon,
        alt: "Icône HTML",
        skills: [
            {
                key: 1,
                skill: "balises"
            }
        ]
    },
    {
        key: 3,
        name: "Javascript",
        src: jsIcon,
        alt: "Icône Javascript",
        skills: []
    },
    {
        key: 4,
        name: "PHP",
        src: phpIcon,
        alt: "Icône PHP",
        skills: []
    },
    {
        key: 5,
        name: "mySql",
        src: mySqlIcon,
        alt: "Icône mySql",
        skills: []
    },
    {
        key: 6,
        name: "React",
        src: react,
        alt: "Icône React",
        skills: []
    },
    {
        key: 7,
        name: "Java",
        src: java,
        alt: "Icône Java",
        skills: []
    },
    {
        key: 8,
        name: "jQuery",
        src: jquery,
        alt: "Icône jQuery",
        skills: []
    }
]

export default codingLangList;
