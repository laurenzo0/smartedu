import "./LandingPage.css";

function Navbar({ onNavigate }) {
    return (
        <div className="landing-navbar" > 
            <img src="src/assets/logo/IMG-20260312-WA0010.png" alt="logo" className="landing-logo-img"/> 
            <ul className="nav-links">
                <li onClick={() => onNavigate("login")}>Login</li>
                <li onClick={() => onNavigate("signup")}>Sign Up</li>
            </ul>
        </div>
    );
}

export default Navbar;  