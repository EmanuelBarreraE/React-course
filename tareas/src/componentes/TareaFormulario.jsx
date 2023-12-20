import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario(props) {

  /* Constante que contiene el texto que ingresa el usuario y 
  la función setInput. Donde useState('') contiene una cadena de
  caracteres vacia ya que al inicio el usuario no ha escrito nada*/
  const[input, setInput] = useState('');

  const manejarCambio = evento => {
    /* Se usa la función setInput ya definida anteriormente
    y se le pasan unos parametros los cuales me permiten extraer el valor del input
    es decir, lo que se encuentra escrito (ese es el evento que se obtiene) */
    setInput(evento.target.value);
  };

  /* Esta funcion manejarEnvio se va a llamar cuando se intente enviar el formulario
  mediante el boton de Agregar Tarea (el evento que se obtiene es una accion de submit) */
  const manejarEnvio = evento => {
    evento.preventDefault();

    /* Se define el objeto para la tarea nueva */
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false 
    };

    props.onSubmit(tareaNueva);
  };


  return(
    <form 
    className='tarea-formulario'
    onSubmit={manejarEnvio}>
      <input 
      className='tarea-input'
      type='text'
      placeholder='Escribe una Tarea'
      name='texto'
      onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        agregar tarea
      </button>
    </form>
  );
}

export default TareaFormulario