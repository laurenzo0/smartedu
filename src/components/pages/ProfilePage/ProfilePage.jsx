import React from "react";
import "./ProfilePage.css";
import { FaSearch, FaBell, FaUser, FaSlidersH, FaCamera, FaGraduationCap } from "react-icons/fa";

function ProfilePage({ onNavigate }) {
  const [isEditing, setIsEditing] = React.useState(false);
  
  const profileData = {
    name: "Argon Arathon",
    email: "aragonarathon@smartedu.com",
    role: "Student",
    location: "Techyjaunt quarters, Ikeja, Lagos",
    subjects: ["Mathematics", "English", "Computer"],
    avatar: "/assets/profile-avatar.png", 
  };

  return (
    <div className="profile-container">
      {/* Top Bar */}
      <div className="profile-top-bar">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="action-icons">
          <div className="icon-box" onClick={() => onNavigate("practice")}><FaBell /></div>
          <div className="icon-box" onClick={() => onNavigate("profile")}><FaUser /></div>
          <div className="icon-box"><FaSlidersH /></div>
        </div>
      </div>

      <div className="profile-header-text">
        <h1>Profile Settings</h1>
        <p>Manage your account information and preferences</p>
      </div>

      <div className="profile-content-grid">
        {/* Left Card: Profile Summary */}
        <div className="profile-card summary-card">
          <div className="avatar-section">
            <div className="avatar-wrapper">
              <img src={profileData.avatar} alt="Profile" />
              <div className="camera-badge"><FaCamera /></div>
            </div>
            <h2>{profileData.name}</h2>
            <p className="profile-email">{profileData.email}</p>
            <div className="role-badge">
              <FaGraduationCap /> {profileData.role}
            </div>
          </div>
          
          <div className="subjects-section">
            <h3>Subjects</h3>
            <div className="subjects-list">
              {profileData.subjects.map((sub, idx) => (
                <div key={idx} className="subject-item">{sub}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Card: Account Information */}
        <div className="profile-card info-card">
          <div className="card-header">
            <h3>Account information</h3>
            <button className="edit-link" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "Save Changes" : "Edit profile"}
            </button>
          </div>
          
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              {isEditing ? (
                <input className="field-input" defaultValue={profileData.name} />
              ) : (
                <div className="field-box">{profileData.name}</div>
              )}
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              {isEditing ? (
                <input className="field-input" defaultValue={profileData.email} />
              ) : (
                <div className="field-box">{profileData.email}</div>
              )}
            </div>
            
            <div className="form-group full-width">
              <label>Location</label>
              {isEditing ? (
                <input className="field-input" defaultValue={profileData.location} />
              ) : (
                <div className="field-box">{profileData.location}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
