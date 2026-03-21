import React from 'react';
import './dashboard.css';
import Navbar from '../../reusableUi/Navbar/Navbar';

const DashBoard = ({ onNavigate }) => {
  return (
    <main className='dashboard-container'>
        <Navbar />
        <div className="dashboard-test">
            <div className="dashboard-test-content">
            <h2>Welcome back, Aragon</h2>
            <p>Knowledge is the key to tomorrow, so keep growing and <br /> exploring everyday </p>
            </div>
        </div>
        <h3 className="dash-text">Current running subjects</h3>
        <div className="dash-cards">
            <div className="dash-card">
                
                <h3 className='eng-color'>English</h3>
                <p>Lexis and structure</p>
                <span>0%</span>
                <div className="chart eng-bar">
                    <div className="progress"></div>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('test', { subject: 'English' });
                      }}
                    >
                      Take a test <i className="fa-solid fa-pen"></i>
                    </a>
                </div>
            </div>
            <div className="dash-card">
                
                <h3 className='math-color'>Mathematics</h3>
                <p>Numbers and Numeration</p>
                <span>0%</span>
                <div className="chart math-bar">
                    <div className="progress"></div>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('test', { subject: 'Mathematics' });
                      }}
                    >
                      Take a test <i className="fa-solid fa-pen"></i>
                    </a>
                </div>
            </div>
            <div className="dash-card">
                
                <h3 className='comp-color'>Computer Science</h3>
                <p>Introduction to Computer</p>
                <span>50%</span>
                <div className="chart comp-bar">
                    <div className="progress"></div>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('test', { subject: 'Computer Science' });
                      }}
                    >
                      Take a test <i className="fa-solid fa-pen"></i>
                    </a>
                </div>
            </div>
        </div>
        
        <div className="dash-bottom-section">
            <div className="performance-container">
                <div className="performance-card">
                    <div className="performance-header">
                        <h3 className="performance-title">Overall Performance</h3>
                        <div className="performance-stats">
                            <div className="stat-item">
                                <span className="stat-label">Hours Spent</span>
                                <span className="stat-pill green-pill">85%</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Lessons Taken</span>
                                <span className="stat-pill green-pill">75%</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Tests Passed</span>
                                <span className="stat-pill green-pill">50%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="chart-container">
                        <div className="y-axis">
                            <span>100</span>
                            <span>80</span>
                            <span>60</span>
                            <span>40</span>
                            <span>20</span>
                            <span>0</span>
                        </div>
                        <div className="chart-content">
                            <div className="chart-bars">
                                <div className="bar-group">
                                    <div className="bar orange" style={{height: '40%'}}></div>
                                    <div className="bar blue" style={{height: '25%'}}></div>
                                    <span className="day">Sun</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar orange" style={{height: '60%'}}></div>
                                    <div className="bar blue" style={{height: '35%'}}></div>
                                    <div className="bar green" style={{height: '65%'}}></div>
                                    <span className="day">Mon</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar orange" style={{height: '40%'}}></div>
                                    <div className="bar purple" style={{height: '60%'}}></div>
                                    <span className="day">Tue</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar purple" style={{height: '50%'}}></div>
                                    <div className="bar green" style={{height: '35%'}}></div>
                                    <span className="day">Wed</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar orange" style={{height: '30%'}}></div>
                                    <div className="bar green" style={{height: '20%'}}></div>
                                    <span className="day">Thu</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar purple" style={{height: '45%'}}></div>
                                    <div className="bar green" style={{height: '30%'}}></div>
                                    <span className="day">Fri</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar blue" style={{height: '15%'}}></div>
                                    <div className="bar purple" style={{height: '45%'}}></div>
                                    <span className="day">Sat</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="upcoming-container">
                <div className="upcoming-header-row">
                    <h3 className="upcoming-title">Upcoming Lessons</h3>
                    <a href="#" className="view-all">View All</a>
                </div>
                
                <div className="upcoming-cards">
                    <div className="upcoming-card purple-card">
                        <div className="upcoming-top">
                            <div className="icon-wrapper purple-icon">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <div className="upcoming-info">
                                <h4>Oral English</h4>
                                <p>Speak confidently</p>
                            </div>
                        </div>
                        <div className="upcoming-bottom">
                            <a 
                              href="#" 
                              className="watch-btn purple-text"
                              onClick={(e) => {
                                e.preventDefault();
                                onNavigate('learn');
                              }}
                            >
                              WATCH A VIDEO <i className="fa-solid fa-tv"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="upcoming-card orange-card">
                        <div className="upcoming-top">
                            <div className="icon-wrapper orange-icon">
                                <i className="fa-solid fa-calculator"></i>
                            </div>
                            <div className="upcoming-info">
                                <h4>Algebraic Processes</h4>
                                <p>Become an expert in simplifying expressions</p>
                            </div>
                        </div>
                        <div className="upcoming-bottom">
                            <a 
                              href="#" 
                              className="watch-btn orange-text"
                              onClick={(e) => {
                                e.preventDefault();
                                onNavigate('learn');
                              }}
                            >
                              WATCH A VIDEO <i className="fa-solid fa-tv"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="upcoming-card green-card">
                        <div className="upcoming-top">
                            <div className="icon-wrapper green-icon">
                                <i className="fa-solid fa-desktop"></i>
                            </div>
                            <div className="upcoming-info">
                                <h4>Software and Systems</h4>
                                <p>Know what goes on behind your screen</p>
                            </div>
                        </div>
                        <div className="upcoming-bottom">
                            <a 
                              href="#" 
                              className="watch-btn green-text"
                              onClick={(e) => {
                                e.preventDefault();
                                onNavigate('learn');
                              }}
                            >
                              WATCH A VIDEO <i className="fa-solid fa-tv"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Floating Chat Icon */}
        <div className="floating-chat">
            <i className="fa-solid fa-comment-dots"></i>
        </div>
    </main>
  )
}

export default DashBoard;