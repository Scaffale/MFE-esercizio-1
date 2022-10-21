import React from 'react';
import './App.css';
import { faker } from '@faker-js/faker';

function App() {
  return (
    <p>
      Hai {faker.datatype.number()} prodotti nel tuo carrello.
    </p>
  );
}

export default App;
