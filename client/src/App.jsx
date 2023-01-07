import { useState } from 'react';
import './App.css';

function App() {
  const [ values, setValues ] = useState();

  const handleChangeValues = ( value ) => {
    console.log("NAME VALUE ==> ", value.target.name);
    console.log("VALUE ==> ", value.target.value);

    let input = { 
      name: value.target.name, 
      value: value.target.value 
    };

    setValues(( preValues ) => ({
      ...preValues,
      [input.name]: input.value
    }));
  }

  const handleClickButton = () => {
    console.log("VALUES ==> ", values);
  }

  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--title">Scrim Shop</h1>

        <input 
          className="register--input"
          type="text" 
          name="name" 
          id="name" 
          placeholder="Name"
          onChange={handleChangeValues}
        />
        <input 
          className="register--input"
          type="text" 
          name="cost" 
          id="cost" 
          placeholder="Preço"
          onChange={handleChangeValues}
        />
        <input 
          className="register--input"
          type="text" 
          name="category" 
          id="category" 
          placeholder="Categoria"
          onChange={handleChangeValues}
        />

        <button
          className="register--button"
          onClick={handleClickButton}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default App;
