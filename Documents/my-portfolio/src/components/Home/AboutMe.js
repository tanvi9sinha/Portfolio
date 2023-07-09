import React from 'react';
// import './styles.css';

import cisco from '../../Assets/cisco.jpg';
import aspida from '../../Assets/aspida.jpeg';
import ncsu from '../../Assets/ncsu.png';
import pes from '../../Assets/pes.png';

const AboutMe = () => {
  return (
    <div>
      <h2 className="section-heading">About Me</h2>
      <p className="section-description">
        A passionate and creative individual on a mission to make a positive impact through technology. I thrive on
        challenges and enjoy turning ideas into innovative solutions. With a strong background in web development and a
        passion for designing solutions, I strive to create exceptional digital experiences!
      </p>

      <div className="section">
        <h3 className="subsection-heading">Education</h3>
        <div className="timeline">
          <div className="timeline-item">
            <img src={ncsu} alt="Education" className="timeline-image" />
            <div className="timeline-content">
              <h4 className="timeline-heading">NC State University</h4>
              <p className="timeline-dates"> August 2022 - December 2023</p>
              <p className="timeline-description">
                I'm currently pursuing my Master's in Computer Science at North Carolina State University here in Raleigh.
                <br />
                Courses:
                <ul>
                  <li>CSC 505: Software Engineering</li>
                  <li>CSC 510: Design & Analysis of Algorithms</li>
                  <li>CSC 561: Computer Graphics</li>
                  <li>CSC 547: Database Management Systems</li>
                  <li>CSC 517: Object-Oriented Design & Development</li>
                  <li>CSC 591: Neural Networks & Deep Learning</li>
                </ul>
                GPA: 4.0
              </p>
            </div>
          </div>
          <hr className="divider" />

          <div className="timeline-item">
            <img src={pes} alt="Past Education" className="timeline-image" />
            <div className="timeline-content">
              <h4 className="timeline-heading">PES University</h4>
              <p className="timeline-dates">August 2016 - May 2020</p>
              <p className="timeline-description">I completed my Bachelor's in Technology back in India where I majored in Electronics 
              & Communication Engineering and Minored in Computer Science Engineering (which I ended up liking more lol)</p>
            </div>
          </div>
          <hr className="divider" />
        </div>
      </div>

      <div className="section">
        <h3 className="subsection-heading">Professional Experience</h3>
        <div className="timeline">
          <div className="timeline-item">
            <img src={aspida} alt="Professional Experience" className="timeline-image" />
            <div className="timeline-content">
              <h4 className="timeline-heading">Software Engineer Intern</h4>
              <p className="timeline-dates">May 2023 - July 2023</p>
              <p className="timeline-description">I'm working on building APIs and UIs for a full stack web application. I'm also working 
              on building infrastructure as code with Terraform & have already helped reduce the terrform plan time by 50%!</p>
            </div>
          </div>
          <hr className="divider" />

          <div className="timeline-item">
            <img src={cisco} alt="Past Experience" className="timeline-image" />
            <div className="timeline-content">
              <h4 className="timeline-heading">Software Engineer II, Software Engineer, Software Engineer Intern</h4>
              <p className="timeline-dates">January 2020 - July 2022</p>
              <p className="timeline-description">As a Software Engineer, I worked on a project that predicts device crashes
               using an ensemble of machine learning algorithms. Leveraging AWS services,  I developed methods in python and 
               java to enhance the features for this project. My work entailed creating and optimizing APIs for microservices 
               using Spring Boot and involved extensive use of JPA on a MySQL database. I was also the team’s lead for all 
               security-related operations, as part of which I collaborated across teams for security scans, creation of threat 
               and architecture models before any release.
              </p>
            </div>
          </div>
          <hr className="divider" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
