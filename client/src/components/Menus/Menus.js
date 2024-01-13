import React from "react";
import "./Menus.css";
import pic from "../../Images/Anurup_Biswas.jpg";
import {FcHome,FcAbout, FcReading,FcAutomatic, FcVideoProjector, FcContacts} from "react-icons/fc";
import { Link } from "react-scroll";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Menus = ({toggle}) => {
  return (
    <>
     {toggle ? (
      <>
      <Zoom>
      <div className="navbar-profile-pic">
        <img src={pic} alt="profile pic" />
       </div>
      </Zoom>
      <Fade left>
       <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            <FcHome />
             Home
            </Link>
          </div>
          <div className="nav-link">
            <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
            <FcAbout/>
             About
            </Link>
          </div>
          <div className="nav-link">
            <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
            <FcReading />
             Education
            </Link>
          </div>
          <div className="nav-link">
            <Link to="skill" spy={true} smooth={true} offset={-100} duration={100}>
            <FcAutomatic />
             Skill
            </Link>
          </div>
          <div className="nav-link">
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
            <FcVideoProjector />
             Projects
            </Link>
          </div>
          <div className="nav-link">
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
            <FcContacts />
             Contact
            </Link>
          </div>
        </div>
       </div>
       </Fade>
      </>
     ):(
      <>
       <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            <FcHome />
            </Link>
          </div>
          <div className="nav-link">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
            <FcAbout/>
            </Link>
          </div>
          <div className="nav-link">
          <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
            <FcReading />
            </Link>
          </div>
          <div className="nav-link">
          <Link to="skill" spy={true} smooth={true} offset={-100} duration={100}>
            <FcAutomatic />
            </Link>
          </div>
          <div className="nav-link">
          <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
            <FcVideoProjector />
            </Link>
          </div>
          <div className="nav-link">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
            <FcContacts />
            </Link>
          </div>
        </div>
       </div>
      </>
     )}
    </>
  );
};

export default Menus;