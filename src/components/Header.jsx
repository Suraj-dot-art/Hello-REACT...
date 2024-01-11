import { LOGO_URL } from "../utils/contants";


const Header = () => {
    return (
        <div className="header" >
            <div className="logoContainer">
            <img src= {LOGO_URL} alt="Website Logo" id="imageLogo"/>
            </div>
            <div className="navItems" >
                <ul>
                    <li>Home  </li>
                    <li> About Us </li>
                    <li> Contact Us </li>
                    <li> Cart </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;