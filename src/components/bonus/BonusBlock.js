import {useMemo} from "react";

function BonusBlock({title, bonus}) {

    const bonusType = useMemo(() => {
        return bonus.map((bonus) => (
            <a className="bonus-link" href={bonus.link} key={bonus.key} target="_blank">
                <img className="bonus-img"src={bonus.src} alt={bonus.alt} />
            </a>
        ));
    }, [bonus]);

    return (
        <div className="bonus-block">
            <p className="bonus-title">{title}</p>
            <div className="bonus-content">
                {bonusType}
            </div>
        </div>
    )
}

export default BonusBlock
