import React from 'react';
import './Settings.css';
import Navbar from '../../reusableUi/Navbar/Navbar';
import { FaFacebook, FaGoogle, FaEnvelope } from 'react-icons/fa';

const Settings = ({ onNavigate }) => {
  return (
    <main className="settings-container">
      <Navbar />
      
      <div className="settings-banner">
        <div className="banner-content">
          <h2>Welcome Back, Aragon</h2>
          <p>Knowledge is the key to tomorrow, so keep growing and exploring every day!</p>
        </div>
      </div>

      <div className="settings-grid">
        <div className="settings-left-column">
          <section className="settings-section">
            <h3>Account Settings</h3>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Aragon" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Middle Name" />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Aragon123@gmail.com" />
            </div>
            <div className="form-group">
              <label>Focus Area</label>
              <select defaultValue="Mathematics">
                <option value="Mathematics">Mathematics</option>
                <option value="English">English</option>
                <option value="Computer">Computer</option>
              </select>
            </div>
          </section>

          <section className="settings-section">
            <h3>Password & Security</h3>
            <div className="password-fields">
              <div className="form-group">
                <label>New Password</label>
                <div className="password-input-wrapper">
                  <input type="password" placeholder="••••••••" />
                  <div className="password-strength strength-mid"></div>
                </div>
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <div className="password-input-wrapper">
                  <input type="password" placeholder="••••••••" />
                  <div className="password-strength strength-full"></div>
                </div>
              </div>
            </div>
            <button className="logout-btn" onClick={() => onNavigate('login')}>
              <span className="logout-icon">⏻</span> Logout
            </button>
          </section>
        </div>

        <div className="settings-right-column">
          <section className="settings-section">
            <h3>Account Preference</h3>
            <div className="preference-item">
              <span>Theme</span>
              <div className="theme-toggle">
                <button className="toggle-btn active">Light mode <span className="indicator"></span></button>
                <button className="toggle-btn">Dark mode</button>
              </div>
            </div>
          </section>

          <section className="settings-section">
            <h3>Social Accounts</h3>
            <ul className="social-list">
              <li>
                <FaFacebook className="social-icon facebook" />
                <span>Facebook</span>
              </li>
              <li>
                <FaGoogle className="social-icon google" />
                <span>Google</span>
              </li>
              <li>
                <FaEnvelope className="social-icon contact" />
                <span>Contact</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
      
      {/* Floating Chat Icon for consistency */}
      <div className="floating-chat">
        <span className="chat-icon">💬</span>
      </div>
    </main>
  );
};

export default Settings;
