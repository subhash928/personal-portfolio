import React from 'react';
import './Header.css'; // Import the CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="initials">
        SP
      </div>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li className='resume'><a href="Resume">Resume</a></li>
      </ul>
    </header>
  );
}

export default Header;
