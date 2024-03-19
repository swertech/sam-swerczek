import { FaFacebook } from "react-icons/fa";
import { LeftSidebarData } from "./LeftSidebar";

function Footer() {

    return (
        <div className="content-body footer">
            <div className="inner-content ">
                <div className="footer-title"><span>Sam Swerczek</span></div>
                <div className="socials">
                    <a href="https://www.facebook.com/samswerczekmusic/" target="_blank" rel="noreferrer"><FaFacebook /></a>
                </div>
                {LeftSidebarData.map((route, idx) => {
                    let routeElem = <a href={route.path}>{route.title.toUpperCase()}</a>;
                    return (idx !== LeftSidebarData.length - 1 ? <>{routeElem}<span> | </span></> : routeElem);
                })}
            </div>
        </div>
    )
}

export default Footer;