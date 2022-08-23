import Gallery from "./Gallery";
import travelList from "../../data/travelList";
import {useMemo} from "react";

function Travel({coverimg, coveralt, open, title, description}) {

    const gallery = useMemo(() => {
        return travelList.map((photo) => (
            <Gallery
                key={photo.key}
                photos={photo.photos}
                close={photo.close}
            />
        ));
    }, []);

    return(
        <div className="travel-block">
            <img className="travel-cover-img" src={coverimg} alt={coveralt} onClick={open}/>
            <div className="travel-content">
                <p className="travel-title">{title}</p>
                <p className="travel-txt">{description}</p>
            </div>
            {gallery}
        </div>
    )
}

export default Travel
