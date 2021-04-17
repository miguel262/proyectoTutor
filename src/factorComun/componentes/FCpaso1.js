import React, { useRef } from 'react';
import {MathComponent} from 'mathjax-react';

const FCpaso1 = props => {
    
    const respuesta = useRef(null);

    const comparar=()=>{
        const entrada = respuesta.current.value;
        alert(entrada);
    }

    return (
        <>
            <p>{props.ejercicio.enunciado}</p>
            <MathComponent tex={String.raw`${props.ejercicio.expresion}`} />

            <div className="input-group">
                <input
                    type="text" 
                    name="name"
                    className="form-control"
                    placeholder="Ingrese factor común"
                    autoComplete= "off"
                    ref= {respuesta}
                ></input>

                <button 
                    type="submit" 
                    className="btn btn-outline-success"
                    onClick={comparar}
                >
                    Aceptar
                </button>    
            </div>
            <hr/>
        </>
    
    )
}
export default FCpaso1;