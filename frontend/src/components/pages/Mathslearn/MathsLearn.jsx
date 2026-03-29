import Navbar from '../../reusableUi/Navbar/Navbar'
import './mathslearn.css'
import { useUser } from '../../../contexts/UserContext'

const mathsTopicsData = [
    {
        title: 'Numbers and Numeration',
        imgSrc: '/assets/images/numbers.jpeg',
        topicsList: ['Number Bases', 'Fractions, Decimals and Percentages', 'Indices, Logarithms', 'Surds', 'Sequences and series'],
        learnTopics: [
            { id: 1, title: '1. Number Bases', status: 'completed', videoUrl: "https://www.youtube.com/embed/QpZIUDBMhg8?si=fPu183LyQ_t4SC19" },
            { id: 2, title: '2. Fractions, Decimals and Percentages', status: 'completed', videoUrl: "https://www.youtube.com/embed/eUCRCS7hcvM?si=zYvc6nufn8fvu3ur" },
            { id: 3, title: '3. Indices, Logarithms', status: 'active', videoUrl: "https://www.youtube.com/embed/IG46YvEX404?si=MgyyJgaO-TCjTkWb"},
            { id: 4, title: '4. Surds', status: 'locked', videoUrl: "https://www.youtube.com/embed/bAerID24QJ0" },
            { id: 5, title: '5. Sequences and series', status: 'locked', videoUrl: "https://www.youtube.com/embed/NybHckSEQBI" },
        ]
    },
    {
        title: 'Algebraic Processes',
        imgSrc: '/assets/images/equation.jpeg',
        topicsList: ['Algebraic Processes', 'Linear Equations and Inequalities', 'Quadratic Equations', 'Functions and Graphs', 'Matrices and Vectors'],
        learnTopics: [
            { id: 1, title: '1. Algebraic Processes', status: 'completed', videoUrl: 'https://www.youtube.com/embed/NybHckSEQBI' },
            { id: 2, title: '2. Linear Equations and Inequalities', status: 'completed', videoUrl: 'https://www.youtube.com/embed/bAerID24QJ0' },
            { id: 3, title: '3. Quadratic Equations', status: 'completed', videoUrl: "https://www.youtube.com/embed/eUCRCS7hcvM?si=zYvc6nufn8fvu3ur"},
            { id: 4, title: '4. Functions and Graphs', status: 'active', videoUrl: 'https://www.youtube.com/embed/gOcZgRkP8P0' },
            { id: 5, title: '5. Matrices and Vectors', status: 'locked', videoUrl: 'https://www.youtube.com/embed/5F2v8zWn5E4' },
        ]
    },
    {
        title: 'Geometry and Trigonometry',
        imgSrc: '/assets/images/learners.jpeg',
        topicsList: ['Plane Geometry', 'Trigonometric Ratios', 'Trigonometric Identities', 'Trigonometric Equations'],
        learnTopics: [
            { id: 1, title: '1. Plane Geometry', status: 'completed', videoUrl: 'https://www.youtube.com/embed/gOcZgRkP8P0' },
            { id: 2, title: '2. Trigonometric Ratios', status: 'active', videoUrl: 'https://www.youtube.com/embed/5F2v8zWn5E4' },
            { id: 3, title: '3. Trigonometric Identities', status: 'locked', videoUrl: 'https://www.youtube.com/embed/NybHckSEQBI' },
            { id: 4, title: '4. Trigonometric Equations', status: 'locked', videoUrl: 'https://www.youtube.com/embed/bAerID24QJ0' },
        ]
    },
    {
        title: 'Calculus',
        imgSrc: '/assets/images/algebra.jpeg',
        topicsList: ['Limits and Continuity', 'Differentiation', 'Integration', 'Applications of Calculus'],
        learnTopics: [
            { id: 1, title: '1. Limits and Continuity', status: 'completed', videoUrl: 'https://www.youtube.com/embed/VDGxFRAatp8' },
            { id: 2, title: '2. Differentiation', status: 'active', videoUrl: 'https://www.youtube.com/embed/5F2v8zWn5E4' },
            { id: 3, title: '3. Integration', status: 'locked', videoUrl: 'https://www.youtube.com/embed/NybHckSEQBI' },
            { id: 4, title: '4. Applications of Calculus', status: 'locked', videoUrl: 'https://www.youtube.com/embed/bAerID24QJ0' },
        ]
    },
    {
        title: 'Statistics and Probability',
        imgSrc: '/assets/images/teacher with graph.jpeg',
        topicsList: ['Data Representation', 'Measures of Central Tendency', 'Probability', 'Measures of Dispersion'],
        learnTopics: [
            { id: 1, title: '1. Data Representation', status: 'completed', videoUrl: 'https://www.youtube.com/embed/gOcZgRkP8P0' },
            { id: 2, title: '2. Measures of Central Tendency', status: 'active', videoUrl: 'https://www.youtube.com/embed/VDGxFRAatp8' },
            { id: 3, title: '3. Probability', status: 'locked', videoUrl: 'https://www.youtube.com/embed/5F2v8zWn5E4' },
            { id: 4, title: '4. Measures of Dispersion', status: 'locked', videoUrl: 'https://www.youtube.com/embed/bAerID24QJ0' },
        ]
    }
];

const MathsLearn = ({ onNavigate }) => {
    const { user } = useUser();
    return (
        <div className='maths-learn-container'>
            <Navbar />

            {/* maths-learn-header styling here */}
            <div className="maths-learn-header">
                <div className="maths-learn-header-content">
                <h2>Hi, {user?.first_name || 'Student'} <br /> Welcome to <span className='math-span'>Mathematics</span> Class </h2>
                <p>Master the language, unlock the world. Your words have power.</p>
                </div>
                <div className="maths-learn-header-img">
                <img src="/assets/images/confused student.jpeg" alt="confused student" className='maths-learn-img' />
                </div>
            </div>
            {/* maths-learn-content styling here */}
            <div className="maths-learn-content">
                {mathsTopicsData.map((topic, index) => (
                    <div 
                        className="maths-box" 
                        key={index}
                        onClick={() => onNavigate && onNavigate('learn', { topics: topic.learnTopics, courseTitle: topic.title })}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={topic.imgSrc} alt={topic.title} />
                        <h3>{topic.title}</h3>
                        <ul className="maths-list">
                            {topic.topicsList.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MathsLearn;
