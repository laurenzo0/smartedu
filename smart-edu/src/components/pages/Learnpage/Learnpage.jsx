import React from 'react';
import Button from '../../reusableUi/Button/Button';
import './Learnpage.css';

function Learnpage() {
  return (
    <div className="learn-page">
      <header className="page-header">
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
