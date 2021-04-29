import React, { useRef, useState } from 'react';
import {MathComponent} from 'mathjax-react';
import { Col, Row,Alert } from 'react-bootstrap';
import Hint from '../../herramientas/Hint';

const FCpaso1 = props => {
    
    //hook para obtener un input
    const respuesta = useRef(null);
    //hook para volver a renderizar cuando el estudiante ingrese una respuesta 
    const [estado,setEstado] = useState(null);
    //resultado correcto (hay que validar para todas las entradas posibles)
    const correcta = props.ejercicio.entrada;
    const variable = props.ejercicio.result_variable;
    console.log(correcta);

    //esta función se ejecuta cuando se oprime el boton aceptar 
    const comparar=()=>{
        //parametro de entrada recibido, replace elimina "espacios" y "*", trabajar todo en minuscula
        const entrada = respuesta.current.value.replace(/[*]| /g, "").toLowerCase();
        
        //El método some() comprueba si al menos un elemento del array 
        //cumple con la condición implementada por la función proporcionada.
        const valida = (element) => element === entrada;

        if (correcta.some(valida)) {
            //valida que la entrada es correcta
            setEstado(
                <div className="alert alert-success"> 
                    <p>{props.ejercicio.validacion}:&nbsp;
                    <MathComponent tex={props.ejercicio.entrada[0]}  display={false}/>
                    </p>
                    <p>
                    Entonces la factorización queda de la forma:
                    &nbsp;
                    <MathComponent tex={props.ejercicio.result_final}  display={false}/>
                    </p>
                </div>
            );
        }
        else{
            //busca si es un resultado variable
            if (variable.some(valida)) {
                //valida que la entrada es correcta
                setEstado(
                    <div className="alert alert-warning"> 
                        <p>{props.ejercicio.hint_result_var}</p>
                    </div>
                );
            }
            else{
                setEstado(
                    //error cuando la entrada es incorrecta
                    <Alert variant="danger">
                        <p>{props.ejercicio.error}</p> 
                    </Alert>
                );
            }
        }
    };

    return (
        <>
            
            <Row  style={{color: "hotpink", padding: 0}}>
                <Col md="12" xl="3" style={{padding: 26.5}}>    
                    <MathComponent tex={String.raw`${props.ejercicio.expresion}`}  display={false}/>
                </Col>
                <Col md="5" xl="4" style={{padding: 0}}> 
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
                </Col>
                <Col md = "7" xl="5" style={{padding: 0}}> 
                    <Hint ayuda={props.ejercicio.hint_solicitado}></Hint>
                </Col> 
                {estado}
            </Row>  
           
        </>
    )
}
export default FCpaso1;