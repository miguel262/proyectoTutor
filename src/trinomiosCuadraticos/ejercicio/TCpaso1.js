import React, {useState,useRef} from 'react'
import Hint from '../../herramientas/Hint';
import {Col, Row,Alert } from 'react-bootstrap';
import {MathComponent} from 'mathjax-react';

export const TCpaso1 = ({ejercicio, setPaso1Valido, paso1Valido}) => {
    const respuesta1 = useRef(null);
    const [estado,setEstado] = useState(null);
    //let idPasoSiguiente = null;
    const correcta = ejercicio.soluciones.map((elemento)=>elemento.entrada);

    const comparar=()=>{
        const entrada = [respuesta1.current.value.replace(/[*]| /g, "").toLowerCase()];
        const valida = (element) =>(element[0] === entrada[0]);
        if (correcta.some(valida)) {
            setPaso1Valido(
                paso1Valido=ejercicio.soluciones[correcta.findIndex(valida)].pasoSiguiente
            );
            /*setEstado(
                <div className="alert alert-success"> 
                        <p>{ejercicio.validacion}:&nbsp;
                        <MathComponent tex={ejercicio.result_final}  display={false}/>
                        </p>
                </div>
            );*/
        }
        else{
                setEstado(
                    //error cuando la entrada es incorrecta
                    <Alert variant="danger">
                        <p>{ejercicio.error}</p> 
                    </Alert>
                );
        }
    }
    return (
        <>
            
            <Row  style={{color: "hotpink", padding: 0}}>
                <Col xl= "3" style={{padding: 26.5}}>    
                    <MathComponent tex={String.raw`${ejercicio.expresion}`}  display={false}/>
                </Col>
                <Col xl= "5" style={{padding: 0}}> 
                    <div className="input-group">
                        <label htmlFor="label1">a =</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label1"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese a"
                            autoComplete= "off"
                            ref= {respuesta1}
                            disabled = {paso1Valido!=null}
                        ></input>
                        {paso1Valido==null&&<button 
                            id="label3"
                            type="submit" 
                            className="btn btn-outline-success"
                            onClick={comparar}
                        >
                            Aceptar
                        </button>}
                    </div>       
                </Col>
                <Col xl="4" style={{padding: 0}}> 
                {paso1Valido==null&&<Hint ayuda={ejercicio.hint_solicitado}></Hint>}
                </Col> 
            </Row>
            {paso1Valido==null&&estado} 
        </>
    )
}
