import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
          <div className='container mx-auto px-4 z-10'>
          <div className='max-w-[450px] text-white flex-col gap-[40px]'>
            <div className="pr-lg-5">
              <h1 className="text-uppercase text-primary font-weight-medium ftext-5xl font-semibold tracking-wider">Best <br/>Service <br/> Forever</h1>
              <p className="text-muted mb-10 pb-2">Titan Intech now completeing their 25th year of 
              <br/> providing the best IT and OTT Services.</p>
              <a href="#" className="btn btn-warning">
                About us<span className="ml-2 right-icon"></span>
              </a>
            </div>
            </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/imghero.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;