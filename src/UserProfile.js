// src/UserProfile.js

import React from 'react';
import './UserProfile.css';

const UserProfile = ({ name, bio, profilePic, location, hobbies, background, email, phone, socialLinks, recentActivities }) => {
  return (
    <div className="user-profile" style={{ backgroundImage: `url(${background})` }}>
      <div className="overlay">
        <div className="profile-header">
          <img src={profilePic} alt={`${name}'s profile`} className="profile-pic" />
          <h1>{name}</h1>
          <p className="location">{location}</p>
        </div>
        <div className="profile-body">
          <p className="bio">{bio}</p>
          
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
            <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
          </div>
          
          <div className="social-links">
            <h2>Social Media</h2>
            <ul>
              {socialLinks.map((link, index) => (
                <li key={index}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.platform}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="hobbies-section">
            <h2>Hobbies</h2>
            <ul className="hobbies-list">
              {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>

          <div className="recent-activities">
            <h2>Recent Activities</h2>
            <ul>
              {recentActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
