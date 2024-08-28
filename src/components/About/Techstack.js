import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiBootstrap,
  DiCss3
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
  SiSvelte,
  SiTailwindcss,
  SiHtml5    
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiSvelte />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiCss3 />
      </Col>
      
    </Row>
  );
}

export default Techstack;
