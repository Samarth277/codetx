import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About <span className="text-warning">Us</span></h3>
              <p className="text-muted">Know more about Titan Intech</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Titan Intech Limited, is a global leader in IT based services products and

electrical solutions & services. We have the necessary expertise in the implementation of information technology, we provide a multi discipline design, engineering, supply, installation, commissioning and project management for electrical system. We develop high quality, spiritual, conventional content on OTT

smart devices across the globe.</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;