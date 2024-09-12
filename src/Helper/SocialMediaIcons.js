import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Make sure to import Bootstrap Icons

const SocialMediaIcons = () => {
  return (

    <div className="social-icons">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-facebook facebook-icon" style={{fontSize:"1.5rem"}}></i>
    </a>

    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-instagram instagram-icon" style={{fontSize:"1.5rem"}}></i>
    </a>

     <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-youtube" style={{ fontSize: '1.5rem', color: 'red' }}></i>
      </a>
  </div>
  );
};

export default SocialMediaIcons;
