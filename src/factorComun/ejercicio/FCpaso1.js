import React, { useRef, useState } from 'react';
import {MathComponent} from 'mathjax-react';

const FCpaso1 = props => {
    
    //hook para obtener un input
    const respuesta = useRef(null);
    //hook para volver a renderizar cuando el estudiante ingrese una respuesta 
    const [estado,setEstado] = useState(null);
    //resultado correcto (hay que validar para todas las entradas posibles)
    const correcta = props.ejercicio.entrada;
    console.log(correcta);

    //esta función se ejecuta cuando se oprime el boton aceptar 
    const comparar=()=>{
        //parametro de entrada recibido
        const entrada = respuesta.current.value.trim();

        //El método some() comprueba si al menos un elemento del array 
        //cumple con la condición implementada por la función proporcionada.
        const valida = (element) => element == entrada;

        if (correcta.some(valida)) {
            //valida que la entrada es correcta
            setEstado(
                <div className="alert alert-success"> 
                    <p>{props.ejercicio.validacion}</p>
                    <MathComponent tex={props.ejercicio.result_final} />
                </div>
            );
        }
        else{
            setEstado(
                //error cuando la entrada es incorrecta
                <div className="alert alert-danger"> 
                    <p>{props.ejercicio.error}</p> 
                </div>
            );
        }
    };

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
            {estado}
        </>
    
    )
}
export default FCpaso1;