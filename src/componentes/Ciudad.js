import React, { Component } from 'react'

class Ciudad extends Component {
    render() { 
        return (
            <div className='col-12 col-md-6 mb-4'>
                <div className='card'>
                    <div className='card-body text-center'>
                        <h3 className='card-title'>
                            {this.props.nombre}
                        </h3>
                        <hr></hr>
                        <div className='card-body'>
                            {this.props.descripcion}
                            <br></br>
                            Temperatura máxima: {this.props.max}
                            <br></br>
                            Temperatura mínima: {this.props.min}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Ciudad;