import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Katie from '../Katie.jpg';
import Nestor from '../Nestor.jpg';
import Theo from '../Theo.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-team">
        <Row>
          <Col>
            <h1 style={{ marginBottom: 20 }}>About the team</h1>
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
            <img
              src={Nestor}
              alt="Nestor"
              style={{ width: 'auto', height: 267 }}
            />
            <p>Nestor Rivera</p>
          </Col>
          <Col>
            <img
              src={Katie}
              alt="Katie"
              style={{ width: 200, height: 'auto' }}
            />
            <p>Katie Breuil</p>
          </Col>
        </Row>
        <div>
          We are Web Development students at Wyncode, excited to create
          solutions to every day problems with technology.
        </div>
      </div>

      <hr
        style={{
          marginTop: 40,
          width: 800,
          borderColor: '#344960',
          boxShadow: 5
        }}
      />

      <div className="about-app">
        <h1 style={{ textAlign: 'center' }}>About the App</h1>
        <p>
          This app was built during the COVID-19 pandemic. The team built the
          <b> QuaranREAD</b> app to provide users the opportunity to discover
          new books during the worldwide quarantine. The app would field results
          depending on the users input: words relating to places, feelings or
          activities.
        </p>
      </div>
    </div>
  );
};

export default About;
