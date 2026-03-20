import React from 'react';
import Button from '../../reusableUi/Button/Button';
import './Learnpage.css';

function Learnpage({ onNavigate }) {
  return (
    <div className="learn-page">
      <header className="page-header">
        <div className="top-bar-icons">
           <img src="/assets/learning.png" alt="practice" onClick={() => onNavigate("practice")} />
           <img src="/assets/profile.png" alt="profile" onClick={() => onNavigate("profile")} />
        </div>
        <h1>Components Library</h1>
        <p>Previewing the reusable components for SmartEdu</p>
      </header>
      
      <section className="component-section">
        <h2>Button Component</h2>
        <div className="button-demo">
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
          <Button variant="live-preview" icon="▶">Live Preview</Button>
        </div>
      </section>
    </div>
  );
}

export default Learnpage;
