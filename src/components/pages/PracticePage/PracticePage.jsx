import Navbar from "../../reusableUi/Navbar/Navbar";
import NarrowSidebar from "../../reusableUi/Sidebar/NarrowSidebar";
import './practice.css';

function PracticePage({ onNavigate }) {
    return (
        <div className="practice-container">
            <Navbar/>
            <div className="practice-test">
                <div className="practice-test-content">
                    <h2>Test Yourself, Aragon</h2>
                    <p>How well do you know these subjects? Let's find out!</p>
                </div>
            </div>
            <h2 className="header-text"> YOU CAN TEST YOURSELF ON AN ENTIRE SUBJECT</h2>

            <div className="subject-section">
                <div className="box eng-lang">
                    <img src="src/assets/images/book stack.jpeg" alt="book stack" className="eng-img" />
                    <h2>English Language</h2>
                    <button className="eng-btn" onClick={() => onNavigate("test", { subject: "English Language" })}>Take a full test <i className="fa-solid fa-pen"></i></button>
                </div>
                <div className="box maths">
                    <img src="src/assets/images/confused student.jpeg" alt="confused student" className="math-img" />
                    <h2>Mathematics</h2>
                    <button className="math-btn" onClick={() => onNavigate("test", { subject: "Mathematics" })}>Take a full test <i className="fa-solid fa-pen"></i></button>
                </div>
                <div className="box comp-sci">
                    <img src="src/assets/images/purple big guy.jpeg" alt="purple big guy" className="comp-img" />
                    <h2>Computer Science</h2>
                    <button className="comp-btn" onClick={() => onNavigate("test", { subject: "Computer Science" })}>Take a full test <i className="fa-solid fa-pen"></i></button>
                </div>
            </div>
            
            <h2 className="header-text"> YOU CAN ALSO TAKE A TEST ON ANY TOPIC IN A SUBJECT</h2>

            <div className="card-container">
                <div className="card english-section">
                    <h2>ENGLISH</h2>
                    <div className="topics">
                        <img src="src/assets/images/desk study.jpeg" alt="desk study" className="card-img" />
                        <ul className="list">
                            <li>Lexis and Structure</li>
                            <li>Oral English</li>
                            <li>Comprehension</li>
                        </ul>
                        <ul className="list">
                            <li>Essay Writing</li>
                            <li>Literature-in-English</li>
                        </ul>
                    </div>
                </div>

                <div className="card maths-section">
                    <h2>MATHEMATICS</h2>
                    <div className="topics">
                        <img src="src/assets/images/numbers.jpeg" alt="numbers" className="card-img" />
                        <ul className="list">
                            <li>Number and Numeration</li>
                            <li>Algebraic Processes</li>
                            <li>Geometry and Mensuration</li>
                        </ul>
                        <ul className="list">
                            <li>Trigonometry</li>
                            <li>Statistics and Probability</li>
                            <li>Calculus</li>
                        </ul>
                    </div>
                </div>

                <div className="card comp-sci-section">
                    <h2>COMPUTER SCIENCE</h2>
                    <div className="topics">
                        <img src="src/assets/images/computer motherboard.jpeg" alt="computer motherboard" className="card-img" />
                        <ul className="list">
                            <li>Introduction to Computer</li>
                            <li>Computer Hardware</li>
                            <li>Fundamental of Programming</li>
                        </ul>
                        <ul className="list">
                            <li>Computer Software</li>
                            <li>Computer Networks</li>
                            <li>Computer Security</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Floating Chat Icon */}
            <div className="floating-chat">
                <i className="fa-solid fa-comment-dots"></i>
            </div>

            <div className="footer">
                <p>Copyright &copy; <span>SmartEdu</span> 2026. All rights reserved.</p>
            </div>
        </div>
    );
}

export default PracticePage;