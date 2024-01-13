import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import Typewriter from 'typewriter-effect';
import {BsFillMoonFill,BsFillSunFill} from "react-icons/bs";
import Fade from 'react-reveal/Fade';
const Home = () => {
  const [theme,setTheme] = useTheme();

  //handleTheme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === 'light' ? <BsFillMoonFill size={25} /> : <BsFillSunFill size={25} />}
        </div>
        <div className="container home-contant">
          <Fade top>
          <h2>Hi 👋 I,m a</h2>
          <h1>
          <Typewriter
            options={{
            strings: ['MCA Student', 'of Adamas University'],
            autoStart: true,
            loop: true,
          }}
         />
          </h1>
          </Fade>
          <Fade bottom>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a href="CV.pdf">
            <button className="btn btn-cv">My CV</button>
            </a>
          </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;