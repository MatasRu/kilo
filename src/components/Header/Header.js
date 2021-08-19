import "./style.sass"
import Logo from "./../../images/Logo.jpg"

function Header() {
    return (
        <div className="header d-flex justify-content-center align-items-center">
            <img className="logo" src={Logo} alt="logo"/>
        </div>
    );
}

export default Header;