import React from "react";
import cisco from '../../Assets/cisco.jpg';
import aspida from '../../Assets/aspida.jpeg';

function WorkExperience() {
  return (
    <div className="work-experience-section">
      <section>
        <div>
          <img src={aspida} alt="Work Experience 1" />
          <h2>
            Aspida Financial Services
            <span className="place-name">Durham, NC</span>
            <span className="years-worked"> May 2023 - July 2023</span>
          </h2>
        </div>
        <ul>
          <li>Working as a full stack engineer, developing different portals for the company.</li>
          <li>Building infrastructure as code using Terraform, optimizing the fetching of parameters to reduce plan time by 50%.</li>
          <li>Developing architecture diagrams and collaborating across teams for the same.</li>
        </ul>
      </section>
      <section>
        <div>
          <img src={cisco} alt="Work Experience 2" />
          <h2>
            Cisco Systems
            <span className="place-name">Bangalore, India</span>
            <span className="years-worked"> Jan 2020 - July 2022 </span>
          </h2>
        </div>
        <ul>
          <li>Worked on a project predicting device crashes using an ensemble of machine learning algorithms.</li>
          <li>Developed methods in Python and Java to enhance features, leveraging AWS services.</li>
          <li>Created and optimized APIs for microservices using Spring Boot and JPA on a MySQL database.</li>
          <li>Lead for all security-related operations, collaborating across teams for security scans and threat models.</li>
        </ul>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
}

export default WorkExperience;
