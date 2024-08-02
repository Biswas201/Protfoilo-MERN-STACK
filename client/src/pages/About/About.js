import React from 'react'
import "./About.css";
import second from "../../Images/Second.jpeg";
import Jump from 'react-reveal/Jump';

const About = () => {
  return (
    <>
    <Jump>
     <div className="about" id='about'>
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src={second} alt="" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                <h1>About Me</h1>
                <p>Hi, my name is Anurup Biswas. I'm from Kharagpur.I have completed my post-graduation in MCA from Adamas University 8.93 CGPA.
                  I passed my graduation in BCA from Kharagpur College with 79.31%. My hobbies is Drawing, Photography, listing story like sunday suspance and travelling. While Starting mca my focus area has been MERN STACK, Web Technology, core java and python.
                  Moreover, I have done my project work on the follwing topic - Online Programming Platform using MERN STACK, Doctor Appointment System using MERN Stack, Real Time Chat Application using MERN STACK & Socket.io.
                  My strength is i'm very self motivated. I am hardworking and carrier oriented person. 
                  </p>
            </div>
        </div>
     </div>
     </Jump>
    </>
  )
}

export default About
