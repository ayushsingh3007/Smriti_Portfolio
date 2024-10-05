import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Menu icon from react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the visibility of the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='container navbar nav_bar'>
        <div className='left nav_items'>Portfolio</div>
        
        {/* Menu icon for small devices */}
        <div className='menu-icon' onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Links for large screens and mobile when menu is open */}
        <div className={`right nav_items ${isOpen ? 'open' : ''}`}>
          <Link to="/" className='right nav_link' onClick={toggleMenu}> Home</Link>
          <Link to="/project" className='right nav_link' onClick={toggleMenu}> Project</Link>
          <Link to="/skills" className='right nav_link' onClick={toggleMenu}> Skills</Link>
          <Link to="/experience" className='right nav_link' onClick={toggleMenu}> Experience</Link>
          <Link to="/contact" className='right nav_link' onClick={toggleMenu}> Contact Me</Link>
        </div>
      </div>
    </>
  );
}
