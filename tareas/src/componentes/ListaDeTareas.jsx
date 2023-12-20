import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea.jsx'
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas() {
  
  /* Constante que contiene la lista (tareas) y 
  la función setTareasl. Donde useState([]) contiene un array vacio
  ya que al inicializarse va a ser un espacio vacio */
  
  const  [tareas, setTareas ] = useState([]);
  
  /* Cuando se haga clic en el boton de Agregar Tarea lo que va a hacer es que
  se va a agregar esa tarea al estado const [tareas, setTareas] = useState([]) */
  
  const agregarTarea = tarea => {
    
    /* Primero: Se verifica si la cadena de texto no está vacia.
       Segundo: Luego se le quitan los espacios innecesarios 
       Tercero: Se genera un arreglo con todas las tareas anteriores y la tarea nueva.
       Cuarto: Se actualiza el estado de las tareas con la funcion setTareas(tareasActualizadas);
    */  
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();

      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  /* Lo que hace esta función es básicamente filtrar las tareas, se va a excluir de la lista 
  de tareas la tarea que contenga el id proporcionado (crea un nuevo arreglo que contiene todas las tareas excepto la que tiene el id específico.), 
  se guarda la nueva lista de tareas, luego mediante
  la funcion setTareas se actualiza la lista definitivamente. 
  */
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  /* Se cambia el valor de la tarea  si el id de la tarea es el de la tarea seleccionada.
  Importante tener en cuenta que el va buscando id por id, ya que el arreglo se recorre
  con el método map. Cuando encuentra la tarea especificada procede a invertir el estado de la tarea
  (si la tarea no está completada entonces pasa a estar como completada y vice versa)
  cuando se retorna la tarea se crea un nuevo arreglo de tareas el cual se actualiza mediante
  la función setTareas
   */
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    <>
    <TareaFormulario onSubmit={agregarTarea} />
    <div className='tareas-lista-contenedor'>
      {/* map es un método que lo que va a tomar cada una de esas
      tareas, las va a pasar una por una como el argumento para otra función
      y va a realizar lo que especifiquemos con esas tareas. En este caso se crea 
      un componente <Tarea /> para cada una de las tareas en el arreglo. Se van a tomar esos datos 
      (la información de las tareas) Los cuales se van a representar como un objeto
      en el arreglo vacio definido en la const [tareas,setTareas] = useState([])
      y para cada uno de esos objetos se va a crear un componente de react <Tarea />
      donde se define que debe tener cada tarea: texto, , etc..  */}
      {
        tareas.map((tarea) =>
          <Tarea 
          key={tarea.id}
          id={tarea.id}
          texto={tarea.texto}
          completada={tarea.completada}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea} />
        )
      } 
    </div>
    </>
  );
}

export default ListaDeTareas;