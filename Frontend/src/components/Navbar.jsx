import React, { useEffect, useState } from 'react'
import '../CSS/Navbar.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { BsFillMoonFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { IoBriefcase } from 'react-icons/io5'
import { RiUser3Fill, RiUserSettingsFill } from 'react-icons/ri'
import { MdMail, MdSunny } from 'react-icons/md'

export const Navbar = ({ theme, setTheme }) => {

  const [showNavbar, setShowNavbar] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();

  const navigate = useNavigate();

  const scrollUp = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  const toggleMode = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark")
  }

  useEffect(() => {

    // Contact page
    if (location.pathname === "/contact") {
      setActiveSection("contact");
      return;
    }

    // Home page 
    if (location.pathname !== "/") {
      return;
    }

    const handleSectionScroll = () => {

      const sections = ["home", "about", "skills", "projects"];

      const marker = window.innerHeight * 0.35;

      let currentSection = "home";

      sections.forEach((id) => {

        const section = document.getElementById(id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= marker) {
          currentSection = id;
        }

      });

      setActiveSection(currentSection);
    };

    handleSectionScroll();

    window.addEventListener("scroll", handleSectionScroll);

    window.addEventListener("resize", handleSectionScroll);

    return () => {
      window.removeEventListener("scroll", handleSectionScroll);
      window.removeEventListener("resize", handleSectionScroll);
    };

  }, [location.pathname]);


  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 50) {
        setShowNavbar(true)
      } else {

        // Scroll Down
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false);
        }
        // Scroll Up
        else {
          setShowNavbar(true);
        }
        lastScrollY = currentScrollY;
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])


  return (
    <>
      <div className='navbar-section'>
        <div className='navbar-cont'>

          <NavLink to={"/"}>
            <div className='logo-cont'>

              <h1 className='gradient'>ABDULLAH.</h1>
            </div>
          </NavLink>

          <div className={`nav-link-cont ${showNavbar ? "show" : "hide"}`}>
            <ul>
              <NavLink to={"/"} end
                className={({ isActive }) =>
                  isActive && activeSection === "home" ? "active" : ""} onClick={scrollUp} ><li>Home</li>
              </NavLink>
              <li onClick={() => navigate("/")}><a href="#about" className={activeSection === "about" ? "active" : ""}>About</a></li>
              <li onClick={() => navigate("/")}><a href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a></li>
              <li onClick={() => navigate("/")}><a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a></li>
              <NavLink to={"/contact"} className={({ isActive }) =>
                isActive ? "active" : ""
              }><li>Contact</li>
              </NavLink>
            </ul>
          </div>

          <div className='btn-theme-icon'>
            <div>
              <NavLink to={"/contact"}><button>Let's Talk</button></NavLink>
            </div>
            <div>
              {theme == "dark" ? <MdSunny className='theme-icon' onClick={() => { toggleMode() }} aria-label="Switch to light theme" /> : <BsFillMoonFill className='theme-icon' onClick={() => { toggleMode() }} aria-label="Switch to dark theme" />}
            </div>

          </div>

        </div>

        {/* Mobile Menu Navbar */}

        <div className="nav-mobile-section">
          <div className={`nav-mobile-cont ${showNavbar ? "show" : "hide"}`}>
            <div className="nav-links">
              <NavLink to={"/"} end
                className={({ isActive }) =>
                  isActive && activeSection === "home" ? "active" : ""
                } onClick={scrollUp}>
                <AiFillHome className='nav-mobile-icon' />
              </NavLink>

              <a onClick={() => navigate("/")} href="#about" className={activeSection === "about" ? "active" : ""} >
                <RiUser3Fill className='nav-mobile-icon' />
              </a>

              <a onClick={() => navigate("/")} href="#skills" className={activeSection === "skills" ? "active" : ""} >
                <RiUserSettingsFill className='nav-mobile-icon' />
              </a>

              <a onClick={() => navigate("/")} href="#projects" className={activeSection === "projects" ? "active" : ""} >
                <IoBriefcase className='nav-mobile-icon' />
              </a>

              <NavLink to={"/contact"} className={({ isActive }) =>
                isActive ? "active" : ""
              }>
                <MdMail className='nav-mobile-icon' />
              </NavLink>



            </div>
          </div>
        </div>
      </div>
    </>
  )
}
