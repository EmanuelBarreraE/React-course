import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear.jsx'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  /* Se crea un estado llamado input y una funcion setInput para poder actualizar el input 
  inicialmente ese input va a ser una cadena vacia ('')*/
  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para realizar los cálculos')
    }
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img  
         src = {freeCodeCampLogo}
         className='freecodecamp-logo'
         alt ='Logo de freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>
        {/* Se le asigna el estado (input) al componente pantalla 
        a su prop input*/}
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>

        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>

          <BotonClear manejarClear={() => setInput('')}>
            Limpiar
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
