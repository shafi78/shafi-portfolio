import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Shafiulla Attar</span>, a
            passionate student pursuing a Bachelor of Computer Applications
            (BCA) in Computer Science.
            <br />
            <br />
            I call the vibrant city of Saundatti, located in the beautiful state
            of Karnataka, India, my home.
            <br />
            <br />
            I've gained practical experience through a 3-month internship as a
            Software Engineer (Feb 2024 - May 2024), where I honed my skills in
            real-world applications. Currently, I'm working full-time as a
            Software Engineer (June 2024 - present) at{" "}
            <span className="purple">Prakalpana Technologies Pvt Ltd , Bengaluru </span>,
            where I continue to grow and contribute to innovative projects.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
