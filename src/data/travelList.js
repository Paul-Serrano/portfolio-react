import coverPhilippines from "../img/banaue.png"

import coverItalie from "../img/florence.png"
import italie01 from "../img/florence-01.png"
import italie02 from "../img/florence-02.png"
import italie03 from "../img/florence-03.png"
import italie04 from "../img/florence-04.png"
import italie05 from "../img/florence-05.png"
import italie06 from "../img/florence-06.png"
import italie07 from "../img/florence-07.png"
import italie08 from "../img/florence-08.png"

import coverMaroc from "../img/marrakech.png"
import maroc01 from "../img/marrakech01.png"
import maroc02 from "../img/marrakech02.png"
import maroc03 from "../img/marrakech03.png"
import maroc04 from "../img/marrakech04.png"
import maroc05 from "../img/marrakech05.png"
import maroc06 from "../img/marrakech06.png"
import maroc07 from "../img/marrakech07.png"
import maroc08 from "../img/marrakech08.png"
import maroc09 from "../img/marrakech09.png"
import maroc10 from "../img/marrakech10.png"
import maroc11 from "../img/marrakech11.png"

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
        key: "Basilica Santa Croce",
        src: italie01,
        alt: "Basilica Santa Croce"
    },
    {
        key: "Chiesa Santa Maria Novella",
        src: italie02,
        alt: "Chiesa Santa Maria Novella"
    },
    {
        key: "Ponte Vecchio",
        src: italie03,
        alt: "Ponte Vecchio"
    },
    {
        key: "Cupola del Brunelleschi, interno",
        src: italie04,
        alt: "Cupola del Brunelleschi, interno"
    },
    {
        key: "Cupola del Brunelleschi",
        src: italie05,
        alt: "Cupola del Brunelleschi"
    },
    {
        key: "Campanile di Giotto",
        src: italie06,
        alt: "Campanile di Giotto"
    },
    {
        key: "Pallazzo Vecchio",
        src: italie07,
        alt: "Pallazzo Vecchio"
    },
    {
        key: "Duomo, Santa Maria del Fiore",
        src: italie08,
        alt: "Duomo, Santa Maria del Fiore"
    },
]

const photosMaroc = [
    {
        key: "Palais El Badi",
        src: maroc01,
        alt: "Palais El Badi"
    },
    {
        key: "Palais Bahia",
        src: maroc02,
        alt: "Palais Bahia"
    },
    {
        key: "Mosquée de Koutoubia, intérieur",
        src: maroc03,
        alt: "Mosquée de Koutoubia, intérieur"
    },
    {
        key: "Place Jemaa el Fna",
        src: maroc04,
        alt: "Place Jemaa el Fna"
    },
    {
        key: "Minaret Koutoubia",
        src: maroc05,
        alt: "Minaret Koutoubia"
    },
    {
        key: "Jardin Majorelles",
        src: maroc06,
        alt: "Jardin Majorelles"
    },
    {
        key: "Jardin Majorelles",
        src: maroc07,
        alt: "Jardin Majorelles"
    },
    {
        key: "Jardin Majorelles",
        src: maroc08,
        alt: "Jardin Majorelles"
    },
    {
        key: "Désert Marocain",
        src: maroc09,
        alt: "Désert Marocain"
    },
    {
        key: "Place Jemaa el Fna",
        src: maroc10,
        alt: "Place Jemaa el Fna"
    },
    {
        key: "Désert Marocain",
        src: maroc11,
        alt: "Désert Marocain"
    },
]

const gallery = document.getElementsByClassName("gallery");

const travelList = [
    {
        key: 1,
        title: "Philippines",
        description: "J’ai vécu 1 ans aux Philippines entre 2019 & 2020. J’y ai découvert les rizières de Banaue, les plages de Mindoro et Baler, mais aussi  la vie nocturne de Manille.",
        engDescription: "I lived ine the Philippines for a year between 2019 & 2020. I've discovered Banaue rice farms, Mindoro and Baler beaches, but also the Manila nightlife.",
        coverimg: coverPhilippines,
        coveralt: "Rizières de Banaue",
        photos: [...photosPhilippines],
        open: () => gallery[0].style.display = "flex",
        close: () => gallery[0].style.display = "none"
    },
    {
        key: 2,
        title: "Italie",
        engTitle: "Italia",
        description: "Je suis resté 6 mois à Florence grâce au programme Erasmus, pour terminer ma licence de Mathématiques. Coeur de la Renaissance, ses rues sont empreintes d’Histoire.",
        engDescription: "I stayed 6 months in Firenze thanks to the Erasmus programm, to end my Mathematics degree. Heart of the Renaissance, its streets are full of History",
        coverimg: coverItalie,
        coveralt: "Duomo de Florence",
        photos: [...photosItalie],
        open: () => gallery[1].style.display = "flex",
        close: () => gallery[1].style.display = "none"

    },
    {
        key: 3,
        title: "Maroc",
        engTitle: "Morocco",
        description: "J’ai passé 4 jours à Marrakech. Se perdre dans les labyrinthes du Souk de la Medina, visiter des édifices spirituels vieux de plusieurs siècles, diner en plein milieux du désert...",
        engDescription: "I spent 4 days in Marrakech. Losing yourself inside the Souk labyrinth, discovering spirituals building several century older than you, dining in the middle of the desert...",
        coverimg: coverMaroc,
        coveralt: "Souk de Marrakech",
        photos: [...photosMaroc],
        open: () => gallery[2].style.display = "flex",
        close: () => gallery[2].style.display = "none"
    }
]

export default travelList
