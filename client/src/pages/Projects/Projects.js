import React from "react";
import "./Projects.css";
import project1  from "../../Images/project1.jpg";
import project2  from "../../Images/project2.jpg";
import project3  from "../../Images/project3.png";
import LightSpeed from 'react-reveal/LightSpeed';
import Spin from 'react-reveal/Spin';

const Projects = () => {
  return (
    <>
    <div className="continer project" id="projects">
      <LightSpeed left>
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        TOP RECENT PROJECTS
      </h2>
      <hr />
      <p className="pb-3 text-center">
      Here are my 4 projects which i have done BCA & MCA. Out of which my first project was <strong>Online Programming Platform </strong> which was my BCA final year project.
      Then while studying MCA I did two private projects which are <strong>Doctor Appointment System</strong> & <strong>University Management System</strong>.
      And also I have done my chat application project which is <strong>Real Time Chat Application</strong> for Practice.
      </p>
      </LightSpeed>
      {/* card design */}
      <div className="row" id="ads">
       <Spin>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN STACK</span>
                <img src={ project1 } alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">ReactJs</span>
                <span className="card-detail-badge">NodeJs</span>
                <span className="card-detail-badge">ExpressJs</span>
                <span className="card-detail-badge">MongoDB</span>

              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">
                    Online Programming Platform
                  </h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Biswas201"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          </Spin>
          <Spin>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN STACK</span>
                <img
                  src={project2}
                  alt="project2"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Doctor Appointment System</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Biswas201/Airlines"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          </Spin>
          <Spin>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Desktop Base Application(JAVA)</span>
                <img
                  src={project3}
                  alt="project3"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">JAVA</span>
                <span className="card-detail-badge">Apache Netbeans</span>
                <span className="card-detail-badge">MySql 8.0 CE</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">University Management System</h6>
                </div>
                <a className="ad-btn" href="view">
                  View
                </a>
              </div>
            </div>
          </div>
          </Spin>
      </div>
    </div>
  </>
      );
}

export default Projects;





