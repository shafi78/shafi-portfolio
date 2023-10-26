import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import webDevMimo from "../../Assets/certificates/webMimo.png";
import sqlMimo from "../../Assets/certificates/sqlMimo.png";
import fullstack from "../../Assets/certificates/full stack infosys.png";
import frontEnd from "../../Assets/certificates/frontendInfosys.png";
import webDevSL from "../../Assets/certificates/webDevSL.png";
import cssInfosys from "../../Assets/certificates/cssInfosys.png";
import jsInfosys from "../../Assets/certificates/jsInfosys.png";
import boostrapInfosys from "../../Assets/certificates/boostrapInfosys.png";
import javaInfosys from "../../Assets/certificates/javaInfosys.png";
import mysqlInfosys from "../../Assets/certificates/mysqlInfosys.png";
import pythonInfosys from "../../Assets/certificates/pythonInfosys.png";
import htmlProhub from "../../Assets/certificates/htmlProhub.png";
import cssProhub from "../../Assets/certificates/cssProhub.png";
import jsProhub from "../../Assets/certificates/jsProhub.png";
import sqlProhub from "../../Assets/certificates/sqlProhub.png";
import javaProhub from "../../Assets/certificates/javaProhub.png";
import cppProhub from "../../Assets/certificates/cppProhub.png";
import htmlSL from "../../Assets/certificates/htmlSL.png";
import cssSL from "../../Assets/certificates/cssSL.png";
import webDesignSL from "../../Assets/certificates/webDesignSL.png";
import phpSL from "../../Assets/certificates/phpSL.png";
import sqlSL from "../../Assets/certificates/sqlSL.png";
import cSL from "../../Assets/certificates/cSL.png";
import htmlcssUp from "../../Assets/certificates/htmlcssUp.png";
import jsUP from "../../Assets/certificates/jsUP.png";
import sqlGL from "../../Assets/certificates/sqlGL.png";


function Certificates() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certfications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certification courses I've have done.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={fullstack}
              isBlog={false}
              title="The Full Stack Web Development"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={frontEnd}
              isBlog={false}
              title="Front-end Development Bootcamp"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={webDevSL}
              isBlog={false}
              title="Web Development"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cssInfosys}
              isBlog={false}
              title="Mastering CSS"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={jsInfosys}
              isBlog={false}
              title="JavaScript"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={boostrapInfosys}
              isBlog={false}
              title="Mastering Boostrap"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={javaInfosys}
              isBlog={false}
              title="Java"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={mysqlInfosys}
              isBlog={false}
              title="Mysql"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={pythonInfosys}
              isBlog={false}
              title="Python"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={htmlProhub}
              isBlog={false}
              title="HTML"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cssProhub}
              isBlog={false}
              title="CSS"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={jsProhub}
              isBlog={false}
              title="JavaScript"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={sqlProhub}
              isBlog={false}
              title="SQL"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={javaProhub}
              isBlog={false}
              title="Java"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cppProhub}
              isBlog={false}
              title="C++"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={htmlSL}
              isBlog={false}
              title="HTML"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cssSL}
              isBlog={false}
              title="CSS"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={webDesignSL}
              isBlog={false}
              title="Web Design"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={phpSL}
              isBlog={false}
              title="PHP"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={sqlSL}
              isBlog={false}
              title="SQL"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cSL}
              isBlog={false}
              title="C"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={htmlcssUp}
              isBlog={false}
              title="HTML & CSS"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={jsUP}
              isBlog={false}
              title="JavaScript"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={sqlGL}
              isBlog={false}
              title="Advanced SQL"
              
            />
          </Col>
          
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={webDevMimo}
              isBlog={false}
              title="Web Development"
              
            />
          </Col>
          
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={sqlMimo}
              isBlog={false}
              title="SQL"
              
            />
          </Col>
          

         

          
        </Row>
      </Container>
     </Container>
    
  );
}

export default Certificates;
