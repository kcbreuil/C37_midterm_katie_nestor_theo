import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Katie from '../Katie.jpg';
import Theo from '../Theo.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-team">
        <Row>
          <Col>
            <h1>About the team</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={Theo}
              alt="Theo"
              style={{ maxWidth: 200, height: 'auto' }}
            />
            <p>Theodore McLean</p>
          </Col>
          <Col>
            <img src="" alt="Nestor" />
            <p>Nestor Rivera</p>
          </Col>
          <Col>
            <img
              src={Katie}
              alt="Katie"
              style={{ maxWidth: 200, height: 'auto' }}
            />
            <p>Katie Breuil</p>
          </Col>
        </Row>
      </div>
      <br />
      <div className="about-app">
        <div class="aboutapp"></div>

        <h1>About the App</h1>
        <p>
          This app was built during the COVID-19 pandemic. The team built the
          quaranREAD app to give people a place where they can find new books
          inspired by their mood of the day.
        </p>
      </div>
    </div>
  );
};

export default About;
