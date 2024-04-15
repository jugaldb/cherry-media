import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar() {

    const [showMenu, setShowMenu] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 978);



    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };


    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 978);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    useEffect(() => {
      if (isMobile) {
        setShowMenu(false);
      }
    }, [isMobile]);
  
  return (
    <div className='navBarWrapper'>
      <div className="container mx-auto">
        <div className="navBar flex justify-between">
            <div className="logo">
              <h3 className='logoName'>Cherry Media</h3>
            </div>

            <div className="navMenu">
            {isMobile && (
                <div className="responsiveIcons menu-toggle" onClick={toggleMenu}>
                  <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            )}
            {(!isMobile || showMenu) &&(
                    <ul className="menuList flex justify-between">
                      <li className='active'><Link to='/'>Home</Link></li>
                      <li><Link to='/'>About Us</Link></li>
                      <li><Link to='/'>Services</Link></li>
                      <li><Link to='/'>Testimonials</Link></li>
                    </ul>
              )}

            

            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar