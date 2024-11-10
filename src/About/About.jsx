import React, { useState } from 'react';
import aboutStyle from "./About.module.css";

const About = () => {

  const [skill, setSkill] = useState([
    { skill: "HTML5", id: "1" },
    { skill: "CSS3", id: "2" },
    { skill: "JAVASCRIPT", id: "3" },
    { skill: "BOOTSTRAP", id: "4" },
    { skill: "REACT JS", id: "5" },
    { skill: "TAILWINND CSS", id: "6" }
  ]);

  return (
    <>
      <div className={aboutStyle.container_width}>
        
        <div className={aboutStyle.left_about}>
        
          {/* Objective Section */}
          <div className={aboutStyle.objective}>
            <h2>Objective:-</h2>
            <p className={aboutStyle.about}>
              I'm Sachin Thak, a passionate web developer. I believe in the power of technology to transform businesses and bring ideas to life.
              I am best in front-end development, where I specialize in <span>HTML5, CSS3, JavaScript, Bootstrap, React JS</span> and 
              <span> responsive design</span>. I strive to stay updated with the latest web development trends and techniques to deliver high-quality, 
              user-friendly websites that engage and captivate audiences.
            </p>
          </div>

          {/* Skills Section */}
          <div className={aboutStyle.skills}>
            <h2>Skills:-</h2>
            <ul className={aboutStyle.ulSkill}>
              {skill.map((skill) => {
                return (
                  <li key={skill.id} className={aboutStyle.skill}>
                    {skill.skill}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Qualifications Section */}
          <div className={aboutStyle.qualification}>
            <h2>Qualification:-</h2>
            <ul>
              <li><h5><u>SSC</u> - <span>Maharashtra State Board, Nagpur Division, Passing year:- 2014, Percentage:- 66.20%</span></h5></li>
              <li><h5><u>HSC</u> - <span>Maharashtra State Board, Nagpur Division, Passing year:- 2016, Percentage:- 52.46%</span></h5></li>
              <li><h5><u>Diploma in Electronics and TeleCommunication</u> - <span>MSBTE, Passing year:- 2019, Percentage:- 73.12%</span></h5></li>
              <li><h5><u>BTECH</u> - <span>DBATU, Passing year:- 2022, Percentage:- 88.92%</span></h5></li>
            </ul>
          </div>

          {/* Language Section */}
          <div className={aboutStyle.language}>
            <h2>Communication Language:-</h2>
            <ul>
              <li>MARATHI</li>
              <li>HINDI</li>
              <li>ENGLISH</li>
            </ul>
          </div>

          {/* Projects Section */}
          <div className={aboutStyle.projects}>
            <h2>Projects:-</h2>
            <div className={aboutStyle.first_project}>
              <div className={aboutStyle.projectName}>
                <h4><ul><li>E-Commerce</li></ul></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div>
              <div className={aboutStyle.projectName}>
                <h4><ul><li>CRUD</li></ul></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className={aboutStyle.address}>
            <h2>Address:-</h2>
            <div className={aboutStyle.currentAddress}>
              <h5>Current Address:-</h5>
              <h6>Shivtej Colony, Medankarwadi, Balaginagar, Chakan, Pune Pin-410501</h6>
            </div>
            <div className={aboutStyle.permanantAddress}>
              <h5>Permanant Address:-</h5>
              <h6>At-Chalbardi, Post-Kondha, Tah-Bhadrawati, Dist-Chandrapur Pin-442503</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
