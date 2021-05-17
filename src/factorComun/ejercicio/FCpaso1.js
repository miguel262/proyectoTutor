import React, { useRef, useState } from 'react';
import {MathComponent} from 'mathjax-react';
import { Col, Row,Alert } from 'react-bootstrap';
import Hint from '../../herramientas/Hint';

const FCpaso1 = ({ejercicio, setPaso1Valido, paso1Valido}) => {
    
    //hook para obtener un input
    const respuesta = useRef(null);
    //hook para volver a renderizar cuando el estudiante ingrese una respuesta 
    const [estado,setEstado] = useState(null);
    //resultado correcto (hay que validar para todas las entradas posibles)
    const correcta = ejercicio.entrada;
    //const variable = ejercicio.result_variable;
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
                    <p>{ejercicio.validacion}:&nbsp;
                    <MathComponent tex={ejercicio.entrada[0]}  display={false}/>
                    </p>
                    <p>
                    Entonces la factorización queda de la forma:
                    &nbsp;
                    <MathComponent tex={ejercicio.result_final}  display={false}/>
                    </p>
                </div>
            );
            setPaso1Valido(
                paso1Valido="Terminado"
            );
        }
        else{
            
            setEstado(
                    //error cuando la entrada es incorrecta
                    <Alert variant="danger">{ejercicio.error} </Alert>
            );
        }
    };

    return (
        <>
            
            <Row  style={{ padding: 0}}>
                <Col md="12" xl="3" style={{padding: 26.5}}>    
                    <MathComponent tex={String.raw`${ejercicio.expresion}`}  display={false}/>
                </Col>
                <Col md="5" xl="4" style={{padding: 0}}> 
                    <div className="input-group">
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese factor común"
                            autoComplete= "off"
                            ref= {respuesta}
                            disabled = {paso1Valido!=null}
                        ></input>
                        {paso1Valido==null&&<button 
                            type="submit" 
                            className="btn btn-outline-success"
                            onClick={comparar}
                        >
                            Aceptar
                        </button>}
                      </div>        
                </Col>
                <Col md = "7" xl="5" style={{padding: 0}}> 
                {paso1Valido==null&&<Hint ayuda={ejercicio.hint_solicitado}></Hint>}
                </Col> 
                {estado}
            </Row>  
           
        </>
    )
}
export default FCpaso1;