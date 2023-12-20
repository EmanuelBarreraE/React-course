import React from 'react';
import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClics: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic() {
    this.setState(( {numClics }) => ({ numClics: numClics + 1}));
  }

  reiniciarContador() {
    this.setState({ numClics: 0});
  }
  
  render() {
    return (
      <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img 
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='Logo de freeCodeCamp'/>
        </div>
        <div className='contenedor-del-contador'>
          <Contador numClics={this.state.numClics} /> {/* Se pasa la variable numClics la cual se inicializa arriba
          La cual inicia en 0*/}
          <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={this.manejarClic} />
          <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}


// function App() {

//   const[numClics, setNumClics] = useState(0); /* Se crea una constante donde se le inicializan una variable
//   (numClics la cual es un estado) y una función (setNumClics) y se le asigna un valor al hook de 0 */

//   // Se crea una función la cual me va a permitir cambiar el valor del contador mediante un estado
//   const manejarClic = () => {
//     setNumClics(numClics + 1); /* Se le asignan los parametros a la función setNumClics 
//     donde se suma el valor de la variable numClics + 1*/
//   }

//   // Se crea una funcion la cual me va a permitir reiniciar el valor del contador mediante un estado
//   const reiniciarContador = () => {
//     setNumClics(0); /* Se le da un valor de 0 a la funcion 
//     setNumClics para reiniciar el contador*/
//   }

  
// }

export default App;
