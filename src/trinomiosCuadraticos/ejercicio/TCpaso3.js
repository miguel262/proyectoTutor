import React,{useState} from 'react'
import { Col, Row, Form, Alert } from 'react-bootstrap';
import {MathComponent} from 'mathjax-react';

export const TCpaso3 = ({ejercicio,setIdSiguientePaso}) => {
    let idPasoSiguiente = null;
    const [estado,setEstado] = useState(null);
    const comparar = () =>{
        if(document.getElementById(ejercicio.soluciones[0].entrada).checked){
            setIdSiguientePaso(
                idPasoSiguiente=ejercicio.soluciones[0].pasoSiguiente
             );
            setEstado(
                <div className="alert alert-success"> 
                        <p>{ejercicio.validacion}:&nbsp;
                        {ejercicio.result_final}
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
            <Row  style={{padding: 0}}>
                <Col style={{padding: 40}}>
                    <Form.Check
                    type="radio"
                    label="Factorizable con diferentes raices"
                    name="formHorizontalRadios"
                    id="1" style={{padding: 0}}
                    />
                    <Form.Check
                    type="radio"
                    label="Factorizable con raices iguales"
                    name="formHorizontalRadios"
                    id="2" style={{padding: 0}}
                    />
                    <Form.Check
                    type="radio"
                    label="No es factorizable (raíces complejas)"
                    name="formHorizontalRadios"
                    id="3" style={{padding: 0}}
                    />
                </Col>
                <Col style={{margin: 40}}>

                    <button className="btn btn-outline-success" onClick={comparar}>Aceptar</button>
                </Col>
            </Row>
            {estado}
        </>
    )
}
