
import Scrambler from './scramble';
import React from 'react';
import Form from '../../styles/Formulario.module.css'

/*Codify tittle*/
class Tittle extends React.Component{
    render(){
        return(
            <h1 className={Form.aset}><Scrambler /></h1> 
        )
    }
}

export default Tittle;