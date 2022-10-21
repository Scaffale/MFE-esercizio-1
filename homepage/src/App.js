import React from 'react';
import './App.css';
import Cart from '../node_modules/cart/dist/App.js';
import Product from '../node_modules/product/dist/App.js';
import { Container, Row, Col } from 'react-bootstrap';
import { faker } from '@faker-js/faker';

function App() {
  return (
    <div className="App">
      <h1>Il nostro ecommerce:</h1>
      <Container>
        <Row>
          { [...Array(faker.datatype.number({ min: 1, max: 20 }))].map((e, i) => <Col key={i} md={3} ><Product /></Col>)}
        </Row>
      </Container>
      <Cart></Cart>
    </div>
  );
}

export default App;
