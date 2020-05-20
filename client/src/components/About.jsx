import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <div className="about">
      <h1 style={{ textAlign: 'center',marginTop: '10rem' }}>About the team</h1>

      <div className="about-team">
        <div>
          <img src="" alt="Theo" />
          <p>Theodore McLean</p>
        </div>
        <div>
          <img src="" alt="Nestor" />
          <p>Nestor Rivera</p>
        </div>
        <div>
          <img src="" alt="Katie" />
          <p>Katie Breuil</p>
        </div>
      </div>
      <br />
      <div className="about-app">
        <div class="aboutapp"></div>

        <h1>About the App</h1>

        <p>
          This app is built during the pandemic where people were forced to stay
          home, when people stay home they have more time on there on hands to
          pick up a book and enter the world of imagination in a app that help
          you pick up books based upon your mood of the day.
        </p>
      </div>
    </div>
  );
};

export default About;
