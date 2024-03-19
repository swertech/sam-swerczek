import { LeftSidebarData } from "../models/LeftSidebar";
import { SocialData } from "../models/Socials";

function Footer() {

    return (
        <div className="content-body footer">
            <div className="inner-content ">
                <div className="footer-title"><span>Sam Swerczek</span></div>
                <div className="socials">
                    {SocialData.map((socialLink, idx) => {
                        return <a href={socialLink.path} className={socialLink.title.toLowerCase()}>{socialLink.icon}</a>
                    })}
                </div>
                <div className="routes">
                    {LeftSidebarData.map((route, idx) => {
                        let routeElem = <a href={route.path}>{route.title.toUpperCase()}</a>;
                        return (idx !== LeftSidebarData.length - 1 ? <>{routeElem}<span> | </span></> : routeElem);
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer;