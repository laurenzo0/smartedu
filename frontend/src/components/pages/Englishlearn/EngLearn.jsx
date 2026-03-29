import React from 'react'
import Navbar from '../../reusableUi/Navbar/Navbar'
import './englearn.css'
import { useUser } from '../../../contexts/UserContext'

const engTopicsData = [
    {
        title: 'Lexis and Structure',
        imgSrc: '/assets/images/lesson.jpeg',
        topicsList: ['Synonyms and Antonyms', 'Homophones', 'Idioms and Adages', 'Sentence Structure', 'Clauses and Phrases'],
        learnTopics: [
            { id: 1, title: '1. Synonyms and Antonyms', status: 'completed', videoUrl: 'https://www.youtube.com/embed/-WymV5VC88U' },
            { id: 2, title: '2. Homophones', status: 'completed', videoUrl: 'https://www.youtube.com/embed/oZ_lAqPq630' },
            { id: 3, title: '3. Idioms and Adages', status: 'active', videoUrl: 'https://www.youtube.com/embed/zH0_J_6r_Lg' },
            { id: 4, title: '4. Sentence Structure', status: 'locked', videoUrl: 'https://www.youtube.com/embed/8oXQebH9HqM' },
            { id: 5, title: '5. Clauses and Phrases', status: 'locked', videoUrl: 'https://www.youtube.com/embed/wzPoyq7_oTQ' },
        ]
    },
    {
        title: 'Oral English',
        imgSrc: '/assets/images/group english.jpeg',
        topicsList: ['Vowels and Consonants', 'Rhymes', 'Stress and Intonation', 'Phonetics symbols', 'Word Stress'],
        learnTopics: [
            { id: 1, title: '1. Vowels and Consonants', status: 'completed', videoUrl: 'https://www.youtube.com/embed/fyVefygZnu4' },
            { id: 2, title: '2. Rhymes', status: 'completed', videoUrl: 'https://www.youtube.com/embed/_1mKBtLVb3A' },
            { id: 3, title: '3. Stress and Intonation', status: 'active', videoUrl: 'https://www.youtube.com/embed/VDGxFRAatp8' },
            { id: 4, title: '4. Phonetics symbols', status: 'locked', videoUrl: 'https://www.youtube.com/embed/fyVefygZnu4' },
            { id: 5, title: '5. Word Stress', status: 'locked', videoUrl: 'https://www.youtube.com/embed/VDGxFRAatp8' },
        ]
    },
    {
        title: 'Comprehension and Summary',
        imgSrc: '/assets/images/study.jpeg',
        topicsList: ['Reading Comprehension', 'Summarizing', 'Note Making', 'Registers'],
        learnTopics: [
            { id: 1, title: '1. Reading Comprehension', status: 'completed', videoUrl: 'https://www.youtube.com/embed/Xq4-jI4QvI8' },
            { id: 2, title: '2. Summarizing', status: 'active', videoUrl: 'https://www.youtube.com/embed/zVv1s1qHqE4' },
            { id: 3, title: '3. Note Making', status: 'locked', videoUrl: 'https://www.youtube.com/embed/6iQ-g_X0m3I' },
            { id: 4, title: '4. Registers', status: 'locked', videoUrl: 'https://www.youtube.com/embed/vH8v9hV_qH0' },
        ]
    },
    {
        title: 'Essay Writing',
        imgSrc: '/assets/images/desk study.jpeg',
        topicsList: ['Letter Writing', 'Narrative Essay', 'Argumentative Essay', 'Descriptive Essay', 'Expository Essay'],
        learnTopics: [
            { id: 1, title: '1. Letter Writing', status: 'completed', videoUrl: 'https://www.youtube.com/embed/j_E-D2e2K3E' },
            { id: 2, title: '2. Narrative Essay', status: 'active', videoUrl: 'https://www.youtube.com/embed/5D3x5p_sTUE' },
            { id: 3, title: '3. Argumentative Essay', status: 'locked', videoUrl: 'https://www.youtube.com/embed/-lzGy5gizKg' },
            { id: 4, title: '4. Descriptive Essay', status: 'locked', videoUrl: 'https://www.youtube.com/embed/c1fNl_n9uN8' },
            { id: 5, title: '5. Expository Essay', status: 'locked', videoUrl: 'https://www.youtube.com/embed/S_8qKxRY_lU' },
        ]
    },
    {
        title: 'Literature-in-English',
        imgSrc: '/assets/images/student group.jpeg',
        topicsList: ['Poetry', 'Prose', 'Drama', 'Figurative Language'],
        learnTopics: [
            { id: 1, title: '1. Poetry', status: 'completed', videoUrl: 'https://www.youtube.com/embed/oPzGZ604zW0' },
            { id: 2, title: '2. Prose', status: 'active', videoUrl: 'https://www.youtube.com/embed/8oXQebH9HqM' },
            { id: 3, title: '3. Drama', status: 'locked', videoUrl: 'https://www.youtube.com/embed/0X9R6z3XRYs' },
            { id: 4, title: '4. Figurative Language', status: 'locked', videoUrl: 'https://www.youtube.com/embed/O-Lw6vB68U8' },
        ]
    }
];

const EngLearn = ({ onNavigate }) => {
    const { user } = useUser();
    return (
        <div className='eng-learn-container'>
            <Navbar />

            {/* eng-learn-header styling here */}
            <div className="eng-learn-header">
                <div className="eng-learn-header-content">
                <h2>Hi, {user?.first_name || 'Student'} <br /> Welcome to <span className='eng-span'>English</span> Class </h2>
                <p>Master the language, unlock the world. Your words have power.</p>
                </div>
                <div className="eng-learn-header-img">
                <img src="/assets/images/book stack.jpeg" alt="book stack" className='eng-learn-img' />
                </div>
            </div>
            {/* eng-learn-content styling here */}
            <div className="eng-learn-content">
                {engTopicsData.map((topic, index) => (
                    <div 
                        className="eng-box" 
                        key={index}
                        onClick={() => onNavigate && onNavigate('learn', { topics: topic.learnTopics, courseTitle: topic.title })}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={topic.imgSrc} alt={topic.title} />
                        <h3>{topic.title}</h3>
                        <ul className="eng-list">
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

export default EngLearn;