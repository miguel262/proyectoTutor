import React,{useRef,useState} from 'react'
import {Col, Row, Alert} from 'react-bootstrap';
import Hint from '../../herramientas/Hint';
import {MathComponent} from 'mathjax-react';

const FCCpaso2 = ({ejercicio, setPaso2Valido, paso2Valido, hintsTerminado, setHintsTerminado}) => {
    const respuesta1 = useRef(null);
    const respuesta2 = useRef(null);
    const correcta = ejercicio.soluciones.entrada;
    const [estado,setEstado] = useState(null);
    //let idPasoSiguiente = null;

    const comparar=()=>{
        const entrada = [respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),respuesta2.current.value.replace(/[*]| /g, "").toLowerCase()];

        if (entrada[0]===correcta[0]&& entrada[1]===correcta[1]) {
            setPaso2Valido(
                paso2Valido=ejercicio.soluciones.pasoSiguiente
            );
            setEstado(
                <div className="alert alert-success"> 
                        <p>{ejercicio.validacion}:&nbsp;
                        <MathComponent tex={ejercicio.result_final[0][0]+ejercicio.result_final[0][1]+"+"+ejercicio.result_final[1][0]+ejercicio.result_final[1][1]}  display={false}/>
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
                <MathComponent tex={ejercicio.expresion}  display={false}/>
            </Col>
            <Col xl= "5" style={{padding: 0}}> 
            {hintsTerminado===null&&<div className="input-group">
                    <label htmlFor="label1">(</label>
                    <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                        id="label1"
                        type="text" 
                        name="name"
                        className="form-control"
                        placeholder="Factor com??n 1"
                        autoComplete= "off"
                        ref= {respuesta1}
                        disabled = {paso2Valido!=null}
                    ></input>
                    <label htmlFor="label2">){<MathComponent tex={ejercicio.result_final[0][1]}  display={false}/>}&nbsp;+&nbsp;(</label>
                    <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                        id="label2"
                        type="text" 
                        name="name"
                        className="form-control"
                        placeholder="Factor com??n 2"
                        autoComplete= "off"
                        ref= {respuesta2}
                        disabled = {paso2Valido!=null}
                    ></input>
                    <label htmlFor="label3">){<MathComponent tex={ejercicio.result_final[1][1]} display={false}/>} &nbsp;</label>
                    {paso2Valido==null&&<button 
                        id="label3"
                        type="submit" 
                        className="btn btn-outline-success"
                        onClick={comparar}
                    >
                        Aceptar
                    </button>}
                </div>}
                {hintsTerminado!==null&& <div> <p>{ejercicio.hint_solicitado[hintsTerminado]}</p> </div>
                }        
            </Col>
            <Col xl="4" style={{padding: 0}}>
            {paso2Valido==null&&hintsTerminado===null&&<Hint ejercicio={ejercicio.hint_solicitado} setHintsTerminado ={setHintsTerminado}></Hint>}
            </Col> 
        </Row>
        {paso2Valido==null&&hintsTerminado===null&&estado}
    </>
    )
}
export default FCCpaso2;