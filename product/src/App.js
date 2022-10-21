import React from 'react';
import './App.css';
import { faker } from '@faker-js/faker';


function App() {
  return (
    <div>
        <img src={faker.image.cats()} class="rounded img-thumbnail" />
        <p>
          Nome prodotto: {faker.commerce.product()} {faker.commerce.productAdjective()}.
        </p>
        <p>
          Descrizione: {faker.commerce.productDescription()}.
        </p>
    </div>
  );
}

export default App;
