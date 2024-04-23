import React, {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const menuItems = [
  {
    label: "Home",
    url: "#footer",
  },
  {
    label: "About Us",
    url: "",
  },
  {
    label: "Services",
    url: "",
  },
  {
    label: "Testimonials",
    url: "",
  },
];

function Header() {
  const [showMenu, setShowMenu] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 978);
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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    // after:absolute after:w-[8px] after:h-[8px] after:rounded after:bg-[#FF5757] after:bottom-[10px] after:right-[-9px] max-[978px]:after:bottom-[25%]
    
        <div className="container mx-auto flex justify-between py-4">
          <div className="logo relative">
            <Link to="/">
             <h3 className="logoName text-[23px] font-bold">Cherry Media<span className="text-[#ff5757] text-3xl">.</span></h3>
            </Link>
          </div>


          {isMobile && (
                <div className="responsiveIcons menu-toggle max-[978px]:absolute max-[978px]:right-2" onClick={toggleMenu}>
                  <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            )}

          { (!isMobile || showMenu) && (
              <ul className="menuList flex justify-between gap-[20px] max-[978px]:flex-col" >
                {menuItems.length &&
                 menuItems.map((item, index) => {
                   return (
                     <li key={index}>
                       <NavLink to={item.url} className="font-bold font-[20px] relative transition duration-[0.2s] origin-left before:absolute left-0 before:w-[0%] before:h-[2px] before:bg-[#FF5757] before:bottom-0 before:hover:w-[100%]  ">{item.label}</NavLink>
                     </li>
                   );
                 })}
               
              </ul>
          )}
        

      
        </div>


  );
}

export default Header;