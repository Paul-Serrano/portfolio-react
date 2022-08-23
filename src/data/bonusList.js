import clarkImg from "../img/Clark s bowling club.png"
import etincelleImg from "../img/Le temps d une étincelle.png"
import virlanieImg from "../img/Virlanie.png"
import franceImg from "../img/France Volontaire.png"

const clark = {
    key: "Clark's Bowling Club",
    link: "https://www.facebook.com/ClarksBowlingClub",
    src: clarkImg,
    alt: "Clark's Bowling Club couverture album"
}

const etincelle = {
    key: "Le temps d'une étincelle",
    link: "https://www.letempsduneetincelle.com/",
    src: etincelleImg,
    alt: "Le temps d'une étincelle couverture album"
}

const virlanie = {
    key: "Virlanie",
    link: "https://virlanie.org/",
    src: virlanieImg,
    alt: "Virlanie"
}

const france = {
    key: "France Volontaire",
    link: "https://www.france-volontaires.org/",
    src: franceImg,
    alt: "France Volontaire"
}


const bonusList = [
    {
        key: 1,
        title: "Découvrez ces groupes fantastiques !",
        engTitle: "Checkt out those amazing bands",
        bonus: [clark, etincelle]
    },
    {
        key: 2,
        title: "Envie d'aider les plus démunis ? Ces associations sont faites pour vous !",
        engTitle: "Feel like halping people in need ? Those fondations are meant for you !",
        bonus: [virlanie, france]
    }
]

export default bonusList
