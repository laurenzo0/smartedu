import Navbar from "./Navbar";
import "./LandingPage.css";

function LandingPage({ onNavigate }) {
    return (
        <div className="landing-container">
            <Navbar onNavigate={onNavigate} />

            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-left">
                    <div className="satisfaction-badge">
                        <i className="fa-solid fa-check"></i>
                        <span>100% Satisfaction Guarantee</span>
                    </div>
                    
                    <h1 className="hero-title">
                        Embark on a Fun,<br />
                        Learning Journey !!!
                    </h1>
                    
                    <p className="hero-subtitle">
                        <span>SmartEdu</span> the ultimate destination for knowledge<br />
                        seekers and educators alike.
                    </p>
                    
                    <div className="hero-action">
                        <img 
                            src="src/assets/images/arrow-thick-thin-down-svgrepo-com.svg" 
                            alt="arrow" 
                            className="green-arrow" 
                        />
                        <button className="get-started-btn" onClick={() => onNavigate("signup")}>
                            GET STARTED
                        </button>
                    </div>
                </div>
                
                <div className="hero-right">
                    <div className="purple-shape">
                        <img 
                            src="src/assets/images/smiling-boy.png" 
                            alt="Smiling student" 
                            className="hero-image" 
                        />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-container">
                {/* Feature 1 */}
                <div className="feature-row">
                    <div className="feature-text">
                        <h2>Free Fun Effective</h2>
                        <p>
                            Learning with SmartEdu is fun, and research shows that it<br />
                            works! With quick, bite-sized lessons, you'll earn points and<br />
                            unlock new levels while gaining real-world communication skills.
                        </p>
                    </div>
                    <div className="feature-image right-image">
                        <img src="src/assets/images/WhatsApp Image 2026-03-13 at 14.15.23.jpeg" alt="Free Fun Effective" />
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="feature-row reverse">
                    <div className="feature-image left-image">
                        <img src="src/assets/images/WhatsApp Image 2026-03-13 at 14.15.32.jpeg" alt="Stay Motivated" />
                    </div>
                    <div className="feature-text">
                        <h2>Stay Motivated</h2>
                        <p>
                            We make it easy to form a habit of language learning with game-like<br />
                            features, fun challenges, and reminders from our friendly mascot, Duo<br />
                            the owl.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="feature-row">
                    <div className="feature-text">
                        <h2>Personalized Learning</h2>
                        <p>
                            Combining the best of AI and language science, lessons are tailored to<br />
                            help you learn at just the right level and pace.
                        </p>
                    </div>
                    <div className="feature-image right-image">
                        <img src="src/assets/images/WhatsApp Image 2026-03-13 at 14.15.14.jpeg" alt="Personalized Learning" />
                    </div>
                </div>

                {/* Feature 4 */}
                <div className="feature-row reverse">
                    <div className="feature-image left-image">
                        <img src="src/assets/images/WhatsApp Image 2026-03-13 at 14.15.46.jpeg" alt="Innovative Learning" />
                    </div>
                    <div className="feature-text">
                        <h2>Innovative and Effective<br/>Learning</h2>
                        <p>
                            Educate the ultimate destination for knowledge seekers and educators<br />
                            alike. We are committed to transforming special education impact<br />
                            global channels without standards-compliant systems
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="site-footer">
                <div className="footer-container">
                    <h3 className="footer-heading">Get in Touch</h3>
                    
                    <div className="footer-links-grid">
                        <div className="footer-col">
                            <a href="#"><i className="fa-solid fa-arrow-right"></i> FAQ</a>
                            <a href="#"><i className="fa-solid fa-arrow-right"></i> Privacy</a>
                            <a href="#"><i className="fa-solid fa-arrow-right"></i> Speed Test</a>
                            <a href="#"><i className="fa-solid fa-arrow-right"></i> Corporate Information</a>
                        </div>
                        <div className="footer-col">
                            <a href="#"><i className="fa-solid fa-arrow-right"></i> Help Center</a>
                            <a href="#"><i className="fa-solid fa-arrow-right"></i> Ways to learn</a>
                            <a href="#"><i className="fa-solid fa-arrow-right"></i> Cookie Preference</a>
                            <a href="#"><i className="fa-solid fa-arrow-right"></i> Legal Notices</a>
                        </div>
                        <div className="footer-col">
                            <a href="#"><i className="fa-solid fa-arrow-right"></i> Account</a>
                            <a href="#"><i className="fa-solid fa-arrow-right"></i> Media Center</a>
                            <a href="#"><i className="fa-solid fa-arrow-right"></i> Terms of use</a>
                            <a href="#"><i className="fa-solid fa-arrow-right"></i> Contact Us</a>
                        </div>
                    </div>

                    <div className="footer-divider"></div>

                    <div className="footer-bottom">
                        <p className="copyright">© 2026 <span>SmartEdu</span>. All Rights Reserved</p>
                        <div className="social-icons">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-x-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;