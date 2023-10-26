import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            
            Hello, I'm <span className="purple">Shafiulla Attar</span> , a passionate student pursuing Bachelor of Computer Applications (BCA) in Computer Science.
            <br /><br />
            I call the vibrant city of Saundatti, located in the beautiful state of Karnataka, India.<br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
