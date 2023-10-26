import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgPinBottom, CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

function CertificateCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.imgPath} target="">
        <BsEye />
        </Button>
        {"\n"}
        {"\n"}


        
      </Card.Body>
    </Card>
  );
}
export default CertificateCard;
