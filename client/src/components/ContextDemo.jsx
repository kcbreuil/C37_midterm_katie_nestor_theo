import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ContextDemo = ({ data }) => {
  return (
    <Container>
      <Row>
        {data && data.map((book) => <a href={`/books/${book.authors}`}></a>)}
      </Row>
    </Container>
  );
};

export default ContextDemo;
