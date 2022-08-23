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
                skill: "Utiliser un thème",
                engSkill: "Use a theme"
            },
            {
                key: 2,
                skill: "Installer des plugs-ins",
                engSkill: "Install plug-ins"
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
                skill: "Paramétrer un projet en ASP/C#",
                engSkill: "Set up an ASP/C# project"
            },
            {
                key: 2,
                skill: "Utiliser VSCode pour coder",
                engSkill: "Use VSCode to code"
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
                skill: "Utiliser la suite Jetbrains",
                engSkill: "Use Jetbrains products"
            },
            {
                key: 2,
                skill: "Webstorm pour les projets webs",
                engSkill: "Webstorm for web projects"
            },
            {
                key: 3,
                skill: "Intelligi pour coder en Java",
                engSkill: "intelligi for java coding"
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
                skill: "Création de maquettes Web",
                engSkill: "Make websites sketches"
            },
            {
                key: 2,
                skill: "Animations entre les pages",
                engSkill: "Animations between pages"
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
                skill: "Méthodologie agile/Scrum",
                engSkill: "Scrum/agile methodology"
            },
            {
                key: 2,
                skill: "Création de feuilles de route",
                engSkill: "Create Backlog"
            },
            {
                key: 3,
                skill: "Gestion des Backlogs",
                engSkill: "Backlogs management"
            },
            {
                key: 4,
                skill: "Implémentation de Sprints / Tickets",
                engSkill: "Creation of Srpints / Tickets"
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
                skill: "Gestion de versions",
                engSkill: "Versionning"
            },
            {
                key: 2,
                skill: "Pull / Push / Fork"
            },
            {
                key: 3,
                skill: "Utilisation de GitKraken",
                engSkill: "Use GitKraken"
            },
            {
                key: 4,
                skill: "Hébergement de projets",
                engSkill: "Hosting proejcts"
            }

        ]
    }
]

export default environmentList
