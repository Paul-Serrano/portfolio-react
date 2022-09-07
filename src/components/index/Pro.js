import Block from "./parts/Block"
import React from "react";
import proBlockList from "../../data/proBlockList";

function Pro({language}) {

    const block = proBlockList.map(block => {
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
        <div className="pro">
            <p className="perso-title">{language ? "Professionnal Side" : "Côté Professionnel"}</p>
            <div className="pro-content">
                <div className="index-cross">
                    <div className="index-cross-part index-cross-horizontal"></div>
                    <div className="index-cross-part index-cross-vertical"></div>
                </div>
                {block}
            </div>
        </div>
    )
}

export default Pro;
