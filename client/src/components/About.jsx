import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <Container>
      <div className="about-team">
        <Row>
          <Col>
            <h1>About the team</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="" alt="Theo" />
            <p>Theodore McLean</p>
          </Col>
          <Col>
            <img src="" alt="Nestor" />
            <p>Nestor Rivera</p>
          </Col>
          <Col>
            <img src="" alt="Katie" />
            <p>Katie Breuil</p>
          </Col>
        </Row>
      </div>
      <br />
      <div className="about-app">
        <h1>About the App</h1>

        <p>
          This app is built during the pandemic where people were forced to stay
          home, when people stay home they have more time on there on hands to
          pick up a book and enter the world of imagination in a app that help
          you pick up books based upon your mood of the day.
        </p>
      </div>
    </Container>
  );
};

export default About;
