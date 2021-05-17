import React, {useRef,useState} from 'react'
import Hint from '../../herramientas/Hint';
import {Col, Row,Alert } from 'react-bootstrap';
import {MathComponent} from 'mathjax-react';

export const DSCpaso2 = ({ejercicio,setPaso2Valido, paso2Valido}) => {
    const respuesta1 = useRef(null);
    const respuesta2 = useRef(null);
    const correcta = ejercicio.entrada;
    const [estado, setEstado] = useState(null)
    const comparar=()=>{
        const entrada = [respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),respuesta2.current.value.replace(/[*]| /g, "").toLowerCase()];
     
        if (entrada[0]===correcta[0]&& entrada[1]===correcta[1]){
            setPaso2Valido(
                paso2Valido="Terminado"
            );
            setEstado(
                <div className="alert alert-success"> 
                        <p>{ejercicio.validacion}:&nbsp;
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
                        <label htmlFor="label1">(</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label1"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese factores binomios"
                            autoComplete= "off"
                            ref= {respuesta1}
                            disabled = {paso2Valido!=null}
                        ></input>
                        <label htmlFor="label2">)(</label>
                        <input 
                            style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label2"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese factores trinomios"
                            autoComplete= "off"
                            ref= {respuesta2}
                            disabled = {paso2Valido!=null}
                        ></input>
                        <label htmlFor="label3">) &nbsp;</label>
                        {paso2Valido==null&&<button 
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
                    {paso2Valido==null&&<Hint ayuda={ejercicio.hint_solicitado}></Hint>}
                </Col> 
            </Row>
            {estado}
        </>
    )
}