import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Make sure to import Bootstrap Icons

const SocialMediaIcons = () => {
  return (
    // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
    //   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    //     <i className="bi bi-facebook" style={{ fontSize: '24px', color: 'blue' }}></i>
    //   </a>
    //   <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    //     <i className="bi bi-twitter" style={{ fontSize: '24px', color: 'skyblue' }}></i>
    //   </a>
    //   <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    //     <i className="bi bi-instagram" style={{ fontSize: '24px', color: 'purple' }}></i>
    //   </a>
    //   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    //     <i className="bi bi-linkedin" style={{ fontSize: '24px', color: 'blue' }}></i>
    //   </a>
    // </div>
    <div className="social-icons">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-facebook facebook-icon"></i>
    </a>
    {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-twitter twitter-icon"></i>
    </a> */}
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-instagram instagram-icon"></i>
    </a>
    {/* <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-linkedin linkedin-icon"></i>
    </a> */}
     <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-youtube" style={{ fontSize: '24px', color: 'red' }}></i>
      </a>
  </div>
  );
};

export default SocialMediaIcons;
