import React, {useRef,useState} from 'react';
import {Col, Row,Alert } from 'react-bootstrap';
import {MathComponent} from 'mathjax-react';
import Hint from '../../herramientas/Hint';

export const TCpaso6 = ({ejercicio,setPaso6Valido, paso6Valido}) => {
    const respuesta1 = useRef(null);
    const respuesta2 = useRef(null);
    const [estado,setEstado] = useState(null);
    const correctas = ejercicio.entrada;
    const comparar=()=>{
        const entrada = [respuesta1.current.value.replace(/[*]| /g, "").toLowerCase(),respuesta2.current.value.replace(/[*]| /g, "").toLowerCase()];
        const valida = (element) =>(((element[0] === entrada[0]) && (element[1] === entrada[1])) || ((element[0] === entrada[1]) && (element[1] === entrada[0])));
        if (correctas.some(valida)) {
            setEstado(
                <div className="alert alert-success"> 
                        <p>{ejercicio.validacion}:&nbsp;
                        <MathComponent tex={ejercicio.result_final}  display={false}/>
                        </p>
                </div>
            );
            setPaso6Valido(
                paso6Valido="Terminado"
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
                            placeholder="Ingrese cuadrado 1"
                            autoComplete= "off"
                            ref= {respuesta1}
                            disabled = {paso6Valido!=null}
                        ></input>
                        <label htmlFor="label2">)(</label>
                        <input style={{backgroundColor: "#21232A",border: "none",color:"white",textAlign:"center"}}
                            id="label2"
                            type="text" 
                            name="name"
                            className="form-control"
                            placeholder="Ingrese cuadrado 2"
                            autoComplete= "off"
                            ref= {respuesta2}
                            disabled = {paso6Valido!=null}
                        ></input>
                        <label htmlFor="label3">) &nbsp;</label>
                        {paso6Valido==null&&<button 
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
                {paso6Valido==null&&<Hint ayuda={ejercicio.hint_solicitado}></Hint>}
                </Col> 
            </Row>
            {estado} 
        </>
    )
}
