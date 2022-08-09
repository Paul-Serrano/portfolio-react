import coverPhilippines from "../img/banaue.png"
import coverItalie from "../img/florence.png"
import coverMaroc from "../img/marrakech.png"

const photosPhilippines = [
    {
        key: "Rizières de Banaue",
        src: coverPhilippines,
        alt: "Rizières de Banaue"
    },
    {
        key: 2,
        src: coverItalie,
        alt: ""
    },
    {
        key: 3,
        src: coverMaroc,
        alt: ""
    },
    {
        key: 4,
        src: coverPhilippines,
        alt: ""
    },
    {
        key: 5,
        src: coverItalie,
        alt: ""
    },
    {
        key: 6,
        src: coverMaroc,
        alt: ""
    },
]

const photosItalie = [
    {
        key: "Duomo de Florence",
        src: coverItalie,
        alt: "Duomo de Florence"
    },
    {
        key: 2,
        src: coverMaroc,
        alt: ""
    },
    {
        key: 3,
        src: coverPhilippines,
        alt: ""
    },
    {
        key: 4,
        src: coverItalie,
        alt: ""
    },
    {
        key: 5,
        src: coverMaroc,
        alt: ""
    },
    {
        key: 6,
        src: coverPhilippines,
        alt: ""
    },
]

const photosMaroc = [
    {
        key: "Souk de Marrakech",
        src: coverMaroc,
        alt: "Souk de Marrakech"
    },
    {
        key: 2,
        src: coverPhilippines,
        alt: ""
    },
    {
        key: 3,
        src: coverItalie,
        alt: ""
    },
    {
        key: 4,
        src: coverMaroc,
        alt: ""
    },
    {
        key: 5,
        src: coverPhilippines,
        alt: ""
    },
    {
        key: 6,
        src: coverItalie,
        alt: ""
    },
]

const gallery = document.getElementsByClassName("gallery");

const travelList = [
    {
        key: 1,
        title: "Philippines",
        description: "J’ai vécu 1 ans aux Philippines entre 2019 et 2020. J’y ai découvert les rizières de Banaue, les plages de Mindoro et Baler, mais aussi  la vie nocturne de Manille.",
        coverimg: coverPhilippines,
        coveralt: "Rizières de Banaue",
        photos: [...photosPhilippines],
        open: () => gallery[0].style.display = "flex",
        close: () => gallery[0].style.display = "none"
    },
    {
        key: 2,
        title: "Italie",
        description: "Je suis resté 6 mois à Florence grâce au programme Erasmus, pour terminer ma licence de mathématiques. Coeur de la Renaissance, ses rues sont empreintes d’histoire.",
        coverimg: coverItalie,
        coveralt: "Duomo de Florence",
        photos: [...photosItalie],
        open: () => gallery[1].style.display = "flex",
        close: () => gallery[1].style.display = "none"

    },
    {
        key: 3,
        title: "Maroc",
        description: "J’ai passé 4 jours à Marrakech. Se perdre dans les labyrinthes du Souk de la Medina, visiter des édifices spirituels vieux de plusieurs siècles, diner en plein milieux du désert...",
        coverimg: coverMaroc,
        coveralt: "Souk de Marrakech",
        photos: [...photosMaroc],
        open: () => gallery[2].style.display = "flex",
        close: () => gallery[2].style.display = "none"
    }
]

export default travelList
