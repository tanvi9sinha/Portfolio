import React from "react";
import ncsu from '../../Assets/ncsu.png';
import pes from '../../Assets/pes.png';

function Education() {
  return (
    <div className="education-section">
      <section>
        <div>
          <img src={ncsu} alt="North Carolina State University" />
          <h2>
            North Carolina State University
            <span className="college-name">Raleigh, NC</span>
            <span className="years">Aug 2022 - Dec 2023 (Expected)</span>
          </h2>
          <p>
            Major: Computer Science
            <br />
            Relevant Coursework: Object Oriented Design & Development, DBMS, Algorithms, Neural Networks, Software Engineering
            <br />
            GPA: 4.0 / 4.0
          </p>
        </div>
      </section>
      <section>
        <div>
          <img src={pes} alt="Your College Name" />
          <h2>
            PES University
            <span className="college-name">Bangalore, India</span>
            <span className="years">Aug 2016 - May 2020</span>
          </h2>
          <p>
            Major: Electronics & Communication Engineering
            <br />
            Minor: Computer Science Engineering
            <br />
            GPA: 9.15 / 10.0
          </p>
        </div>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
}

export default Education;
