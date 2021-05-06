import React, { useRef, useState } from 'react';
import {MathComponent} from 'mathjax-react';
import {Col, Row,Alert } from 'react-bootstrap';
import Hint from '../../herramientas/Hint';

const FCCpaso1 = ({ejercicio, setIdSiguientePaso}) => {
    const respuesta1 = useRef(null);
    const respuesta2 = useRef(null);
    const [estado,setEstado] = useState(null);
    let idPasoSiguiente = null;
    const correctas = ejercicio.soluciones.map((elemento)=>elemento.entrada);



    const comparar=()=>{
        //parametro de entrada recibido, replace elimina "espacios" y "*", trabajar todo en minuscula
        const entrada = [respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),respuesta2.current.value.replace(/[*]| /g, "").toLowerCase()];
    
        
        //valida que la entrada es correctas
        const valida = (element) =>((element[0] === entrada[0]) && (element[1] === entrada[1])) || ((element[0] === entrada[1]) && (element[1] === entrada[0]));
        //El método some() comprueba si al menos un elemento del array 
        //cumple con la condición implementada por la función proporcionada.
        if (correctas.some(valida)) {
            setIdSiguientePaso(
                idPasoSiguiente=ejercicio.soluciones[correctas.findIndex(valida)].pasoSiguiente
            );
            setEstado(
                <div className="alert alert-success"> 
                        <p>{ejercicio.validacion}:&nbsp;
                        <MathComponent tex={ejercicio.result_final[idPasoSiguiente-1]}  display={false}/>
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
        }

    };

    return (
        <>
            
            <Row  style={{color: "hotpink", padding: 0}}>
                <Col xl= "3" style={{padding: 26.5}}>    
                    <MathComponent tex={String.raw`${ejercicio.expresion}`}  display={false}/>
                </Col>
                <Col xl= "5" style={{padding: 0}}> 
                    <div className="input-group">
                        <label htmlFor="label1">(</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label1"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese grupo 1"
                            autoComplete= "off"
                            ref= {respuesta1}
                        ></input>
                        <label htmlFor="label2">)&nbsp;+&nbsp;(</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label2"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese grupo 2"
                            autoComplete= "off"
                            ref= {respuesta2}
                        ></input>
                        <label htmlFor="label3">) &nbsp;</label>
                        <button 
                            id="label3"
                            type="submit" 
                            className="btn btn-outline-success"
                            onClick={comparar}
                        >
                            Aceptar
                        </button>
                    </div>       
                </Col>
                <Col xl="4" style={{padding: 0}}> 
                    <Hint ayuda={ejercicio.hint_solicitado}></Hint>
                </Col> 
            </Row>
            {estado} 
        </>
    )

}
export default FCCpaso1;