import {useMemo} from "react";
import {useState} from "react";
import prev from "../../img/prev.png"
import next from "../../img/next.png"
import closeGallery from "../../img/back-arrow.png"

function Gallery({photos, close}) {

    const photo = useMemo(() => {
        return photos.map((photo) => (
            <div className="photo-block" key={photo.key}>
                <p className="photo-title">{photo.key}</p>
                <img className="photo" src={photo.src} alt={photo.alt} />
            </div>
        ));
    }, [photos]);

    const [activeIndex, setActiveIndex] = useState(0)


    function prevPhoto() {
        activeIndex == 0 ? setActiveIndex(photo.length - 1) : setActiveIndex(prevIndex => prevIndex - 1)
    }


    function nextPhoto() {
        activeIndex == photo.length - 1 ? setActiveIndex(0) : setActiveIndex(prevIndex => prevIndex + 1)
    }

    return(
        <div className="gallery">
            <div className="gallery-container">
                <img className="close-gallery" src={closeGallery} alt="" onClick={close}/>
                <img className="gallery-icon prev-icon" onClick={prevPhoto} src={prev} alt="précendente"/>
                {photo[activeIndex]}
                <img className="gallery-icon next-icon" onClick={nextPhoto} src={next} alt="suivante"/>
            </div>
        </div>
    )
}

export default Gallery;
