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
                skill: "Flexbox"
            },
            {
                key: 2,
                skill: "Grid"
            },
            {
                key: 3,
                skill: "Animations"
            },
            {
                key: 4,
                skill: "Media queries"
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
                skill: "Balises"
            },
            {
                key: 2,
                skill: "Links"
            },
            {
                key: 3,
                skill: "iframe"
            }
        ]
    },
    {
        key: 3,
        name: "Javascript",
        src: jsIcon,
        alt: "Icône Javascript",
        skills: [
            {
                key: 1,
                skill: "Maîtrise du DOM"
            },
            {
                key: 2,
                skill: "Objects / array"
            },
            {
                key: 3,
                skill: "Méthode map"
            },
            {
                key: 4,
                skill: "if - else / switch"
            },
            {
                key: 5,
                skill: "Boucles for / while"
            }
        ]
    },
    {
        key: 4,
        name: "PHP",
        src: phpIcon,
        alt: "Icône PHP",
        skills: [
            {
                key: 1,
                skill: "Gestion formulaires"
            },
            {
                key: 2,
                skill: "Intéractions BDD"
            },
            {
                key: 3,
                skill: "if - else / switch"
            },
            {
                key: 4,
                skill: "Boucles for / while"
            }
        ]
    },
    {
        key: 5,
        name: "mySql",
        src: mySqlIcon,
        alt: "Icône mySql",
        skills: [
            {
                key: 1,
                skill: "CRUD"
            },
            {
                key: 2,
                skill: "Opérateurs logiques"
            },
            {
                key: 3,
                skill: "Lier tables (foreign key)"
            }
        ]
    },
    {
        key: 6,
        name: "React",
        src: react,
        alt: "Icône React",
        skills: [
            {
                key: 1,
                skill: "JSX"
            },
            {
                key: 2,
                skill: "Composants React"
            },
            {
                key: 3,
                skill: "Passer propriétés (props)"
            },
            {
                key: 4,
                skill: "useState / useEffect"
            }
        ]
    },
    {
        key: 7,
        name: "Java",
        src: java,
        alt: "Icône Java",
        skills: [
            {
                key: 1,
                skill: "if - else / switch"
            },
            {
                key: 2,
                skill: "Boucles for / while"
            },
            {
                key: 3,
                skill: "Classes / Métohdes"
            },
            {
                key: 4,
                skill: "Constructeurs"
            },
            {
                key: 5,
                skill: "Polymorphisme"
            }
        ]
    },
    {
        key: 8,
        name: "jQuery",
        src: jquery,
        alt: "Icône jQuery",
        skills: [
            {
                key: 1,
                skill: "Animations"
            },
            {
                key: 2,
                skill: "Gestion du DOM"
            },
        ]
    }
]

export default codingLangList;
