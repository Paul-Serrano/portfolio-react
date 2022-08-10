import wordpress from "../img/wordpress.png"
import visualstudio from "../img/visual-studio.png"
import jetbrains from "../img/intelligi.png"
import figma from "../img/figma.png"
import jira from "../img/jira.png"
import github from "../img/github-link.png"


const environmentList = [
    {
        key: 1,
        name: "Wordpress",
        src: wordpress,
        alt: "Icône Wordpress",
        skills: [
            {
                key: 1,
                skill: "Utiliser un thème"
            },
            {
                key: 2,
                skill: "Installer des plugs-ins"
            }
        ]
    },
    {
        key: 2,
        name: "Visual Studio",
        src: visualstudio,
        alt: "Icône Visual Studio",
        skills: [
            {
                key: 1,
                skill: "Paramétrer un projet en ASP/C#"
            },
            {
                key: 2,
                skill: "Utiliser VSCode pour développer"
            }
        ]
    },
    {
        key: 3,
        name: "Jetbrains",
        src: jetbrains,
        alt: "Icône Jetbrains",
        skills: [
            {
                key: 1,
                skill: "Utiliser la suite Jetbrains"
            },
            {
                key: 2,
                skill: "Webstorm pour les projets webs"
            },
            {
                key: 3,
                skill: "Intelligi pour coder en Java"
            }
        ]
    },
    {
        key: 4,
        name: "Figma",
        src: figma,
        alt: "Icône Figma",
        skills: [
            {
                key: 1,
                skill: "Création de maquettes Web"
            },
            {
                key: 2,
                skill: "Animations entre les pages"
            }
        ]
    },
    {
        key: 5,
        name: "Jira",
        src: jira,
        alt: "Icône Jira",
        skills: [
            {
                key: 1,
                skill: "Méthodologie agile/Scrum"
            },
            {
                key: 2,
                skill: "Création de feuilles de route"
            },
            {
                key: 3,
                skill: "Gestion des Backlogs"
            },
            {
                key: 4,
                skill: "Implémentation de Sprints / Tickets"
            },
        ]
    },
    {
        key: 6,
        name: "Github",
        src: github,
        alt: "Icône Github",
        skills: [
            {
                key: 1,
                skill: "Gestion de versions"
            },
            {
                key: 2,
                skill: "Pull / Push / Fork"
            },
            {
                key: 3,
                skill: "Utilisation de GitKraken"
            },
            {
                key: 4,
                skill: "Hébergement de projets"
            }

        ]
    }
]

export default environmentList
