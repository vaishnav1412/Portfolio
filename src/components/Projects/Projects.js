import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/desktop-ss2.png";
import emotion from "../../Assets/Projects/desktop-ss6.png";
import editor from "../../Assets/Projects/desktop-ss3.png";
import chatify from "../../Assets/Projects/desktop-ss1.png";
import suicide from "../../Assets/Projects/desktop-ss-4.png";
import bitsOfCode from "../../Assets/Projects/car-rental.png";
import simple from "../../Assets/Projects/desktop-ss-5.png";
import Olx from "../../Assets/Projects/desktop-ss7.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Weight Management"
              description="I developed a comprehensive weight management web application using the MERN stack. The application offers live training via video call, workout video management, personalized diet plans, and a BMI calculator. A subscription model is implemented, granting users access to premium features, including exclusive content and the e-commerce platform for purchasing related products. JWT is utilized for secure session management, ensuring user data protection and seamless access."
              ghLink="https://github.com/vaishnav1412/Fitnessapp-frontend"
              demoLink="https://weightmanagementpart-2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Car Rental Service"
              description="Developed a comprehensive MERN stack web application for a car rental service. The platform allows users to book cars from anywhere in Kerala, with a user-friendly interface featuring categorized car listings and advanced filtering options. Integrated a real-time chat system for user inquiries, ensuring seamless communication. The application also includes a robust user management system, an admin dashboard for managing offers, and other essential functionalities for an efficient and scalable service."
              ghLink="https://github.com/vaishnav1412/car-rental-UI"
              demoLink="https://github.com/vaishnav1412/car-rental-UI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fashion Cart"
              description="I developed a ladies' dress e-commerce web application using the MVC pattern, where EJS was used for the frontend (View), Node.js and Express for the backend (Controller), and MongoDB for the database (Model). This architecture ensures a modular and scalable design, making the application efficient and easy to maintain. The application includes a full range of e-commerce features, such as product listing and categorization, user authentication and authorization, shopping cart functionality, order processing, payment integration, and user account management, providing a comprehensive online shopping experience.  "
              ghLink="https://github.com/vaishnav1412/fashionCart"
              demoLink="https://www.shoppingcartbyvaishnav.online/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Herbalife "
              description="I developed a comprehensive weight management web application using the MERN stack. The application offers live training via video call, workout video management, personalized diet plans, and a BMI calculator. A subscription model is implemented, granting users access to premium features, including exclusive content and the e-commerce platform for purchasing related products. JWT is utilized for secure session management, ensuring user data protection and seamless access."
              ghLink="https://github.com/vaishnav1412/Herbalife"
              demoLink="https://herbalnutritionproject.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Netflix"
              description="I developed a Netflix clone using React for the frontend and Firebase for the backend, implementing features like authentication, real-time database, and cloud storage to recreate the streaming platform's functionality."
              ghLink="https://github.com/vaishnav1412/netflix"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Time Zone"
              description="I developed a watch e-commerce web application following the MVC pattern, utilizing react for the frontend , Node.js and Express for the backend (Controller), and MongoDB for the database (Model), ensuring a modular and scalable architecture for an efficient and maintainable online shopping experience."
              ghLink="https://github.com/vaishnav1412/miniEcommerse"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simple}
              isBlog={false}
              title="Password Generator"
              description="I built a password generator web application using React for the frontend. The application allows users to specify the desired number of characters and customize the password's security level by selecting options to include uppercase letters, lowercase letters, numbers, and special characters. Users can easily adjust their security preferences by checking the corresponding options."
              ghLink="https://github.com/vaishnav1412/password-generator"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Olx}
              isBlog={false}
              title="Olx Clone"
              description="I built an OLX clone using React for the frontend and Firebase for the backend, incorporating features such as user authentication, real-time database for product listings, and cloud storage for images, to replicate the functionalities of the online marketplace platform.."
              ghLink="https://github.com/vaishnav1412/olx-clone"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
