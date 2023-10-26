import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import csnwp from "../../Assets/Projects/csnwp.png";
import studhelp from "../../Assets/Projects/Studhelp.png";
import wanderlust from "../../Assets/Projects/wanderlust.png";
import foodie from "../../Assets/Projects/foodie.png";
import editor from "../../Assets/Projects/code-editor.png";
import movieApp from "../../Assets/Projects/moview app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={csnwp}
              isBlog={false}
              title="CSNWP"
              description="College social networking web app created among students and faculty. Students will be updated with new thoughts and views . Posting , Time-tables , notices and proper notes management is provided."
              ghLink="https://github.com/shafi78/CSNWP"
              demoLink="https://www.linkedin.com/posts/shafiulla-attar-b4a716252_webdeveloper-fullstackdevelopment-php-activity-7119320716650418176-psRA?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studhelp}
              isBlog={false}
              title="Student Helper"
              description="An E-learning platform created for computer science students to enhance their skills. Here main components are : QNA , Webinars , Blogs , Aptitude , DSA , Courses , Jobs and Chatbot."
              ghLink="https://github.com/shafi78/Student-Helper"
              demoLink="https://www.linkedin.com/posts/shafiulla-attar-b4a716252_webdeveloper-mernstack-reactnative-activity-7123311519794139137-WGpb?utm_source=share&utm_medium=member_desktop"              
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderlust}
              isBlog={false}
              title="Wander Lust"
              description="Wanderlust web app provides a seamless platform for travelers to discover unique accommodations worldwide, from cozy cottages to luxurious penthouses."
              ghLink=""
              demoLink=""              
              />
          </Col>
          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodie}
              isBlog={false}
              title="Foodie"
              description="Foodie is an simple Food delivery app created using React-native. It is my first react-native app which I created during my learning phase."
              ghLink="https://github.com/shafi78/Foodie"
              demoLink="https://www.linkedin.com/posts/shafiulla-attar-b4a716252_mernstack-fullstackdevelopment-webdeveloper-activity-7118780985088901121-gi5l?utm_source=share&utm_medium=member_desktop"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieApp}
              isBlog={false}
              title="Movie - App"
              description="Movie - App is a simple web app like IMDB which provides information and ratings about the movies , TV shows and much more. Here I used TMDB API's to fetch the data in our web app."
              ghLink="https://github.com/shafi78/movieapp"
              demoLink="https://www.linkedin.com/posts/shafiulla-attar-b4a716252_reactdeveloper-webdeveloper-mernstack-activity-7118135795642744832-0Eux?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Code editor"
              description="Online code editor to code Html , CSS and JavaSCript created using React js with code mirror packages. "
              ghLink="https://github.com/shafi78/code-editor"
              demoLink="https://www.linkedin.com/posts/shafiulla-attar-b4a716252_reactdeveloper-project-fullstackdevelopment-activity-7117575038584688640-KkOX?utm_source=share&utm_medium=member_desktop"              
            />
          </Col>

          

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
