import socialMediaList from "../../data/socialMediaList";

function Footer() {

    const socialMedia = socialMediaList.map(item => {
        return (
            <a key={item.key} href={item.link} className="footer-link" target="_blank">
                <img className="footer-icon" src={item.src} alt={item.alt}/>
            </a>
        )
    })

    return(
        <div className="footer">
            {socialMedia}
        </div>
    )
}

export default Footer;
