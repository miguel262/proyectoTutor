import React, { useRef, useState } from 'react';
import {MathComponent} from 'mathjax-react';
import { Col, Row,Alert } from 'react-bootstrap';
import Hint from '../../herramientas/Hint';

export const TCpaso2 = ({ejercicio, setIdSiguientePaso}) => {
    
    //hook para obtener un input
    const respuesta = useRef(null);
    //hook para volver a renderizar cuando el estudiante ingrese una respuesta 
    const [estado,setEstado] = useState(null);
    //resultado correcto (hay que validar para todas las entradas posibles)
    const correcta = ejercicio.soluciones[0].entrada;
    let idPasoSiguiente = null;
    //esta función se ejecuta cuando se oprime el boton aceptar 
    const comparar=()=>{
        //parametro de entrada recibido, replace elimina "espacios" y "*", trabajar todo en minuscula
        const entrada = respuesta.current.value.replace(/[*]| /g, "").toLowerCase();


        if (correcta===entrada) {
            //valida que la entrada es correcta
            setIdSiguientePaso(
                idPasoSiguiente=ejercicio.soluciones[0].pasoSiguiente
            );
            setEstado(
                <div className="alert alert-success"> 
                    <p>{ejercicio.validacion}:&nbsp;
                    <MathComponent tex={ejercicio.soluciones[0].entrada}  display={false}/>
                    </p>
                    <p>
                    Entonces el discriminante es:
                    &nbsp;
                    <MathComponent tex={ejercicio.result_final}  display={false}/>
                    </p>
                </div>
            );
        }
        else{
                setEstado(
                    //error cuando la entrada es incorrecta
                    <Alert variant="danger">
                        <p>{ejercicio.error}</p> 
                    </Alert>
                );
                console.log(correcta);
                console.log(entrada);
            
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
                        <label htmlFor="label3">Δ = &nbsp;</label>
                        <input
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese discriminante"
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
                    <Hint ayuda={ejercicio.hint_solicitado}></Hint>
                </Col> 
                {estado}
            </Row>  
           
        </>
    )
}