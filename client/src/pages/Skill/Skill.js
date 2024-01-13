import React from 'react'
import { SkillList } from '../../utils/SkillList';
import "./Skill.css";
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';
const Skill = () => {
  return (
    <>
    <div className="container skill" id='skill'>
      <RubberBand>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technical Skill</h2>
        <hr/>
        <p className='pb-3 text-center'>👉 Including programming language, framworkss, databases, front-end tools, 
           and APIs
        </p>
        </RubberBand>
        <div className="row">
        {SkillList.map((skill) => (
          <Fade left>
            <div key={skill._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media-flex justify-content-center">
                      <div className="alig-self-center">
                      <skill.icon className='skill-icon' />
                      </div>
                      <div className="media-body">
                        <h5>{skill.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Fade>
        ))}
    </div>
    </div>
    </>
  )
}
export default Skill;
