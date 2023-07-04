import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() { 
        return (
            <footer className='text-center'>
                Información meteorológica creada por © AEMET (<a href='https://www.aemet.es' target='_blank'>aemet.es</a>)
                <br></br>
                API desarrollada por <a href='https://www.el-tiempo.net/api' target='_blank'>el-tiempo-net</a>
            </footer>
        );
    }
}
 
export default Footer;