import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiGit,
  DiAngularSimple,
  DiRuby,
  DiDocker,
  DiMysql,
  DiSqllite,
  DiGo,
  DiAws,
} from "react-icons/di";
import { SiPostgresql } from "react-icons/si";

function Skills() {
  return (
    <div style={{ paddingTop: "70px" }}>
      <section className="skills-section">
        <h2 className="heading">Languages & Frameworks</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiJava size={70} color="#61DBFB" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiPython size={70} color="#306998" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 size={70} color="#F7DF1E" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiAws size={70} color="#FF9900" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs size={70} color="#68A063" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiGo size={70} color="#00ADD8" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact size={70} color="#61DAFB" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiAngularSimple size={70} color="#C3002F" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiRuby size={70} color="#CC342D" />
          </Col>
        </Row>

        <h2 className="heading">Database</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiMongodb size={70} color="#439743" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiMysql size={70} color="#4479A1" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiSqllite size={70} color="#003B57" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostgresql size={70} color="#336791" />
          </Col>
        </Row>

        <h2 className="heading">Cloud & Virtualization</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiDocker size={70} color="#2496ED" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiAws size={70} color="#FF9900" />
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Skills;
