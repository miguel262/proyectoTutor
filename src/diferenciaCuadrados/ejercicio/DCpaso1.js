import React, {useRef,useState} from 'react';
import Hint from '../../herramientas/Hint';
import {Col, Row,Alert } from 'react-bootstrap';
import {MathComponent} from 'mathjax-react';

export const DCpaso1 = ({ejercicio, setPaso1Valido, paso1Valido,  hintsTerminado, setHintsTerminado}) => {
    const respuesta1 = useRef(null);
    const respuesta2 = useRef(null);
    const [estado,setEstado] = useState(null);
    //let idPasoSiguiente = null;
    const correctas = ejercicio.soluciones.map((elemento)=>elemento.entrada);
    
    

    const comparar=()=>{
        const entrada = [respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),respuesta2.current.value.replace(/[*]| /g, "").toLowerCase()];
        const valida = (element) =>((element[0] === entrada[0]) && (element[1] === entrada[1]));
        if (correctas.some(valida)) {
            setPaso1Valido(
                paso1Valido=ejercicio.soluciones[correctas.findIndex(valida)].pasoSiguiente
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
                //error cuando la entrada es incorrecta
        
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
                {hintsTerminado===null&&<div className="input-group">
                        <label htmlFor="label1">(</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label1"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese cuadrado 1"
                            autoComplete= "off"
                            ref= {respuesta1}
                            disabled = {paso1Valido!=null}
                        ></input>
                        <label htmlFor="label2">){<MathComponent tex={String.raw`^2`}  display={false}/>}  - (</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label2"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese cuadrado 2"
                            autoComplete= "off"
                            ref= {respuesta2}
                            disabled = {paso1Valido!=null}
                        ></input>
                        <label htmlFor="label3">){<MathComponent tex={String.raw`^2`}  display={false}/>} &nbsp;</label>
                        {paso1Valido==null&&<button 
                            id="label3"
                            type="submit" 
                            className="btn btn-outline-success"
                            onClick={comparar}
                        >
                            Aceptar
                        </button>}
                    </div>}
                    {hintsTerminado!==null&& <div> <p>{ejercicio.hint_solicitado[hintsTerminado]}</p> </div>}         
                </Col>
                <Col xl="4" style={{padding: 0}}> 
                    {paso1Valido==null&&hintsTerminado===null&&<Hint ejercicio={ejercicio.hint_solicitado} setHintsTerminado ={setHintsTerminado}></Hint>}
                </Col> 
            </Row>
            {paso1Valido==null&&hintsTerminado===null&&estado} 
        </>
    )
}
