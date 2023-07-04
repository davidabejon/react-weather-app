import React, { Component } from 'react'

class BackButton extends Component {
    render() { 
        return (
            <button
                onClick={this.props.consultarApiProvincias}
                className='btn btn-secondary mt-4 mb-3'>
                Atrás
            </button>
        );
    }
}
 
export default BackButton;