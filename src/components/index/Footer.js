import facebookIcon from "../../../public/img/facebook.png"
import mailIcon from "../../../public/img/gmail.png"
import twitterIcon from "../../../public/img/twitter.png"
import linkedinIcon from "../../../public/img/linkedin.png"
import githubIcon from "../../../public/img/github.png"

function Footer() {
    return(
        <div className="footer">
            <a href="src/components/index/Footer#" className="footer-link">
                <img className="footer-icon" src={linkedinIcon} alt="icone"/>
            </a>
            <a href="src/components/index/Footer#" className="footer-link">
                <img className="footer-icon" src={githubIcon} alt="icone"/>
            </a>
            <a href="src/components/index/Footer#" className="footer-link">
                <img className="footer-icon" src={mailIcon} alt="icone"/>
            </a>
            <a href="src/components/index/Footer#" className="footer-link">
                <img className="footer-icon" src={twitterIcon} alt="icone"/>
            </a>
            <a href="src/components/index/Footer#" className="footer-link">
                <img className="footer-icon" src={facebookIcon} alt="icone"/>
            </a>
        </div>
    )
}

export default Footer;
