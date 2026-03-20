import Navbar from "./Navbar"; 
import "./LandingPage.css";
 

function LandingPage() {
    return (
        <>
        <div className="landing-page"> 
            <Navbar />  

            <div className="content-section">
                <div className="text-content">
                    <p className="text-sticker">100% Satisfaction Guaranteed</p>
                    <h2>Embark on a Fun, Learning Journey !!!</h2>
                    <p><span>SmartEdu</span> the ultimate destination for knowledge seekers and educators alike.</p>
                    {/* <i className="fa-solid fa-reply"></i> */}
                    <img src="src/assets/images/arrow-thick-thin-down-svgrepo-com.svg" alt="" />
                    <button>Get Started</button>
                </div>
                <div className="img-content">
                    <div className="img-square"> </div>
                    <img src="src/assets/images/smiling-boy.png" alt="smiling-boy" />
                </div>
            </div>
        </div>

        {/* features section here */}
        <div className="features-section">
            <div className="free-section">
                <div className="text-section">
                    <h3>Free Fun Effective</h3>
                    <p>Learning with samrtedu is fun, and research shows
                        that it works! with quick bite-sized,  you will earn points and
                        unlock new levels while gaining world-level communication skills.
                    </p>
                </div>
                <div className="img-section">
                    <img src="src/assets/images/WhatsApp Image 2026-03-13 at 14.15.23.jpeg" alt="" />
                </div>
            </div>

            {/* second feature section here */}
            <div className="motivative-section">
                <div className="img-section">
                    <img src="src/assets/images/WhatsApp Image 2026-03-13 at 14.15.32.jpeg" alt="" />
                </div>
              <div className="text-section">
                    <h3>Stay Motivated</h3>
                    <p> We make it easy to form a habit of language learningwith
                        game-like features, fun challenges, and  reminders that keep you coming back.
                    </p>
                </div>
                </div>

                {/* third feature section here */}
            
            <div className="personalize-section">
                <div className="text-section">
                    <h3>Personalized Learning</h3>
                    <p>Combining proven teaching methods with smart technology,
                        lessons are tailored to your learning style and pace. 
                    </p>
                </div>
                <div className="img-section">   
                    <img src="src/assets/images/WhatsApp Image 2026-03-13 at 14.15.14.jpeg" alt="" />
                </div>
            </div>

            {/* fourth feature section here */}

            <div className="innovative-section"> 
                <div className="img-section">
                    <img src="src/assets/images/WhatsApp Image 2026-03-13 at 14.15.46.jpeg" alt="" />
                </div>
                 <div className="text-section">
                    <h3>Innovative Learning</h3>
                    <p>SmartEdu offers innovative learning experiences with bite-sized lessons,
                        gamification, and adaptive technology.
                    </p>
                </div>
            </div>
        </div>

        {/* footer section here */}
        <footer className="landing-footer">
            <h3>Get in Touch</h3>
            <div className="footer-content">
                <div className="one">
                    <p><i className="fa-solid fa-arrow-right"></i>  FAQ</p>
                    <p><i className="fa-solid fa-arrow-right"></i> Help Center</p>
                    <p><i className="fa-solid fa-arrow-right"></i> Account</p>
                    <p><i className="fa-solid fa-arrow-right"></i> Privacy</p>
                </div>
                <div className="one">
                    <p><i className="fa-solid fa-arrow-right"></i> Ways to Learn</p>
                    <p><i className="fa-solid fa-arrow-right"></i> Media Center</p>
                    <p><i className="fa-solid fa-arrow-right"></i> Speed Test</p>  
                    <p><i className="fa-solid fa-arrow-right"></i> Cookie Preference</p>
                </div>
                <div className="one">
                    <p><i className="fa-solid fa-arrow-right"></i> Terms of Use</p>
                    <p><i className="fa-solid fa-arrow-right"></i> Corporate Information</p>
                    <p><i className="fa-solid fa-arrow-right"></i> Legal Notices</p>
                    <p><i className="fa-solid fa-arrow-right"></i> Contact Us</p>
                </div>
            </div>

            <div className="line"></div>
            <div className="bottom-content">
            <p className="copy-right">© 2026 <span>SmartEdu</span>. All rights reserved.</p>
            <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            </div>
        </div>
        </footer>
        </>
    );
}

export default LandingPage; 