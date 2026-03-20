

function PracticePage({ onNavigate }) {
    return (
        <>
            <div className="test">
                <div className="top-bar-icons">
                   <img src="/assets/learning.png" alt="practice" onClick={() => onNavigate("practice")} />
                   <img src="/assets/profile.png" alt="profile" onClick={() => onNavigate("profile")} />
                </div>
                <h2>Test Yourself, Aragon</h2>
                <p>How well do you know these subjects? Let's find out!</p>
            </div>
            <h2 className="header-text"> YOU CAN TEST YOURSELF ON AN ENTIRE SUBJECT</h2>

            {/* ENGLISH SECTION HERE */}
            <div className="english-section">
                <h2>ENGLISH</h2>
                <div className="english-topics">
                    <img src="" alt="" />
                    <ul className="list">
                        <li onClick={() => onNavigate("test", { subject: "English", topic: "Lexis and Structure" })}>Lexis and Structure</li>
                        <li onClick={() => onNavigate("test", { subject: "English", topic: "Oral English" })}>Oral English</li>
                        <li onClick={() => onNavigate("test", { subject: "English", topic: "Comprehension" })}>Comprehension</li>
                        <li onClick={() => onNavigate("test", { subject: "English", topic: "Essay Writing" })}>Essay Writing</li>
                        <li onClick={() => onNavigate("test", { subject: "English", topic: "Literature-in-English" })}>Literature-in-English</li>
                    </ul>

                </div>
            </div>
        </>
    );
}

export default PracticePage;