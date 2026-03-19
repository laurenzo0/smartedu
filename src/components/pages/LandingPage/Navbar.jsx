import "./LandingPage.css";

function Navbar() {
    return (
        <div className="navbar" > 
            <img src="src/assets/logo/IMG-20260312-WA0010.png" alt="logo" className="logo-img"/> 
            <ul className="nav-links">
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </div>
    );
}

export default Navbar;  