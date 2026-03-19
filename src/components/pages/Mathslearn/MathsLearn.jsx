import Navbar from '../../reusableUi/Navbar/Navbar'
import './mathslearn.css'

const MathsLearn = () => {
    return (
        <>
        <main className='maths-learn-main'>
            <Navbar />

            {/* maths-learn-header styling here */}
            <div className="maths-learn-header">
                <div className="maths-learn-header-content">
                <h2>Hi, {}Aragon <br /> Welcome to <span className='math-span'>Mathematics</span> Class </h2>
                <p>Master the language, unlock the world. Your words have power.</p>
                </div>
                <div className="maths-learn-header-img">
                <img src="src/assets/images/confused student.jpeg" alt="confused student" className='maths-learn-img' />
                </div>
            </div>
            {/* maths-learn-content styling here */}
            <div className="maths-learn-content">
                <div className="maths-box ">
                    <img src="src/assets/images/numbers.jpeg" alt="numbers" />
                    <h3>Numbers and Numeration</h3>
                    <ul className="maths-list">
                        <li>Number Bases</li>
                        <li>Fractions, Decimals and Percentages</li>
                        <li>Indices, Logarithms</li>
                        <li>Surds</li>
                        <li>Sequences and series</li>
                    </ul>
                </div>
                <div className="maths-box">
                    <img src="src/assets/images/equation.jpeg" alt="equation" />
                    <h3>Algebraic Processes</h3>
                    <ul className="maths-list">
                        <li>Algebraic Processes</li>
                        <li>Linear Equations and Inequalities</li>
                        <li>Quadratic Equations</li>
                        <li>Functions and Graphs</li>
                        <li>Matrices and Vectors</li> 
                    </ul>
                </div>
                <div className="maths-box">
                    <img src="src/assets/images/learners.jpeg" alt="learners" />
                    <h3>Geometry and Trigonometry</h3>
                    <ul className="maths-list">
                        <li>Plane Geometry</li>
                        <li>Trigonometric Ratios</li>
                        <li>Trigonometric Identities</li>
                        <li>Trigonometric Equations</li>
                    </ul>
                </div>
                <div className="maths-box">
                    <img src="src/assets/images/algebra.jpeg" alt="algebra" />
                    <h3>Calculus</h3>
                    <ul className="maths-list">
                        <li>Limits and Continuity</li>
                        <li>Differentiation</li>
                        <li>Integration</li>
                        <li>Applications of Calculus</li>
                    </ul>
                </div>
                <div className="maths-box">
                    <img src="src/assets/images/teacher with graph.jpeg" alt="teacher with graph" />
                    <h3>Statistics and Probability</h3>
                    <ul className="maths-list">
                        <li>Data Representation</li>
                        <li>Measures of Central Tendency</li>
                        <li>Probability</li>
                        <li>Measures of Dispersion</li>
                    </ul>
                </div>
            </div>
        </main>
        
        
        </>
    );
}

export default MathsLearn;