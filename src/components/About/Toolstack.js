import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows,
  SiFigma,
  SiMongodb,
  SiEclipseide
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiFigma/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMongodb/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiEclipseide/>
      </Col>
    </Row>
  );
}

export default Toolstack;
