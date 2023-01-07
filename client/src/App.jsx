import { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="app-container">
      <div className="register-container">
        <h1>Scrim Shop</h1>

        <input 
          className="register--input"
          type="text" 
          name="name" 
          id="name" 
          placeholder="Name"
        />
        <input 
          className="register--input"
          type="text" 
          name="cost" 
          id="cost" 
          placeholder="Preço"
        />
        <input 
          className="register--input"
          type="text" 
          name="category" 
          id="category" 
          placeholder="Categoria"
        />

        <button>
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default App;
