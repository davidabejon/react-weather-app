import React, { Component } from 'react'

class Provincia extends Component {

    cambiarDatos = () => {
        this.props.consultarApiCiudades(this.props.cod_prov, this.props.nombre)
    }

    render() { 
        return (
            <div className='col-12 col-md-6 col-lg-3 mb-4'>
                <div className='card text-center'>
                    <div className='card-body d-grid'>
                        <h3 className='card-title'>{this.props.nombre}</h3>
                        <p className='card-text'>Capital: {this.props.capital}</p>
                        <button onClick={this.cambiarDatos} className='btn btn-primary'>Ver ciudades</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Provincia;