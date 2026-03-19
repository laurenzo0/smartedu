import React from 'react'
import Navbar from '../../reusableUi/Navbar/Navbar'
import './englearn.css'

const EngLearn = () => {
    return (
        <>
        <main className='eng-learn-main'>
            <Navbar />

            {/* eng-learn-header styling here */}
            <div className="eng-learn-header">
                <div className="eng-learn-header-content">
                <h2>Hi, {}Aragon <br /> Welcome to <span className='eng-span'>English</span> Class </h2>
                <p>Master the language, unlock the world. Your words have power.</p>
                </div>
                <div className="eng-learn-header-img">
                <img src="src/assets/images/book stack.jpeg" alt="book stack" className='eng-learn-img' />
                </div>
            </div>
            {/* eng-learn-content styling here */}
            <div className="eng-learn-content">
                <div className="eng-box ">
                    <img src="src/assets/images/lesson.jpeg" alt="lesson" />
                    <h3>Lexis and Structure</h3>
                    <ul className="eng-list">
                        <li>Synonyms and Antonyms</li>
                        <li>Homophones</li>
                        <li>Idioms and Adages</li>
                        <li>Sentence Structure</li>
                        <li>Clauses and Phrases</li>
                    </ul>
                </div>
                <div className="eng-box">
                    <img src="src/assets/images/group english.jpeg" alt="group english" />
                    <h3>Oral English</h3>
                    <ul className="eng-list">
                        <li>Vowels and Consonants</li>
                        <li>Rhymes</li>
                        <li>Stress and Intonation</li>
                        <li>Phonetics symbols</li>
                        <li>Word Stress</li> 
                    </ul>
                </div>
                <div className="eng-box">
                    <img src="src/assets/images/study.jpeg" alt="study" />
                    <h3>Comprehension and Summary</h3>
                    <ul className="eng-list">
                        <li>Reading Comprehension</li>
                        <li>Summarizing</li>
                        <li>Note Making</li>
                        <li>Registers</li>
                    </ul>
                </div>
                <div className="eng-box">
                    <img src="src/assets/images/desk study.jpeg" alt="desk study" />
                    <h3>Essay Writing</h3>
                    <ul className="eng-list">
                        <li>Letter Writing</li>
                        <li>Narrative Essay</li>
                        <li>Argumentative Essay</li>
                        <li>Descriptive Essay</li>
                        <li>Expository Essay</li>
                    </ul>
                </div>
                <div className="eng-box">
                    <img src="src/assets/images/student group.jpeg" alt="student group" />
                    <h3>Literature-in-English</h3>
                    <ul className="eng-list">
                        <li>Poetry</li>
                        <li>Prose</li>
                        <li>Drama</li>
                        <li>Figurative Language</li>
                    </ul>
                </div>
            </div>
        </main>
        
        
        </>
    );
}

export default EngLearn;