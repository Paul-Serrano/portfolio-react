import Gallery from "./Gallery";
import TravelList from "../../data/TravelList";
import {useMemo} from "react";

function Travel(props) {

    const gallery = useMemo(() => {
        return TravelList.map((photo) => (
            <Gallery
                key={photo.key}
                photos={photo.photos}
                close={photo.close}
            />
        ));
    }, []);

    return(
        <div className="travel-block">
            <img className="travel-cover-img" src={props.item.coverimg} alt={props.item.coveralt} onClick={props.open}/>
            <div className="travel-content">
                <p className="travel-title">{props.item.title}</p>
                <p className="travel-txt">{props.item.description}</p>
            </div>
            {gallery}
        </div>
    )
}

export default Travel
