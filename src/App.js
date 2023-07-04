import React, { Component } from 'react'
import './App.css';
import Vista from './componentes/Vista';
import Footer from './componentes/Footer';

class App extends Component {
  state = {
    titulo: 'provincias'
  };

  cambiarTitulo = titulo => {
    this.setState({
      titulo
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='text-center mt-5 mb-5 pt-2 pb-2'>Lista de {this.state.titulo}</h1>
        <div className='container'>
          <div className='col-12 row'>
            <Vista
              cambiarTitulo = {this.cambiarTitulo}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
