import React from 'react'
import '../hojas-de-estilo/Pantalla.css'

// Se recibe el prop input desde el archivo App.js
const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
);

export default Pantalla;