import Block from "./parts/Block"
import persoBlockList from "../../data/persoBlockList";

function Perso({language}) {

    const block = persoBlockList.map(block => {
        return(
            <Block
                key={block.key}
                name={language ? block.engName : block.name }
                src={block.src}
                alt={block.alt}
                open={block.open}
            />
        )
    })

    return (
        <div className="perso perso-initial">
            <p className="perso-title">{language ? "Personnal Side" : "Coté Perso"}</p>
            <div className="perso-content">
                <div className="index-cross">
                    <div className="index-cross-part index-cross-horizontal"></div>
                    <div className="index-cross-part index-cross-vertical"></div>
                </div>
                {block}
            </div>
        </div>
    )
}

export default Perso;
