import React, { Component } from 'react'
import Provincia from './Provincia';
import Ciudad from './Ciudad';
import BackButton from './BackButton';

class Vista extends Component {
    state = {
        jsonCompleto: [],
        datos: [],
        esProvincias: true
    };

    componentDidMount() {
        this.consultarApiProvincias();
    }

    consultarApiProvincias = () => {
        let url = 'https://www.el-tiempo.net/api/json/v2/provincias'
        fetch(url)
          .then(respuesta => respuesta.json())
          .then(resultado => this.setState({
            datos: resultado.provincias,
            esProvincias: true
        }));
        this.props.cambiarTitulo('provincias')
        window.scroll(0, 0);
    }
    
    consultarApiCiudades = (codigo, nombre) => {
        let url = `https://www.el-tiempo.net/api/json/v2/provincias/${codigo}`
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => this.setState({
            datos: resultado.ciudades,
            esProvincias: false
        }));
        this.props.cambiarTitulo(`ciudades de ${nombre}`)
        window.scroll(0, 0);
    }


    render() { 
        if (this.state.esProvincias) {
            return (
                <div className='col-12 row'>
                    {
                        this.state.datos.map(provincia => {
                            return (
                                <Provincia
                                    key = {provincia.CODPROV}
                                    cod_prov = {provincia.CODPROV}
                                    nombre = {provincia.NOMBRE_PROVINCIA}
                                    capital = {provincia.CAPITAL_PROVINCIA}
                                    consultarApiCiudades = {this.consultarApiCiudades}
                                />
                            );
                        })
                    }
                </div>
            );
        }
        else {
            return (
                <div className='col-12 row'>
                    {
                        this.state.datos.map(ciudad => {
                            return (
                                <Ciudad
                                    key = {ciudad.id}
                                    nombre = {ciudad.name}
                                    descripcion = {ciudad.stateSky.description}
                                    max = {ciudad.temperatures.max}
                                    min = {ciudad.temperatures.min}
                                />
                            );
                        })
                    }
                <BackButton
                    consultarApiProvincias = {this.consultarApiProvincias}
                />
                </div>
            );
        }
    }
}
 
export default Vista;