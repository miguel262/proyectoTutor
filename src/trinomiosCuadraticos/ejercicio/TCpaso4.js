import React,{useState} from 'react'
import { Col, Row, Form, Alert } from 'react-bootstrap';

export const TCpaso4 = ({ejercicio,setPaso4Valido, paso4Valido}) => {
    let idPasoSiguiente = null;
    const [estado,setEstado] = useState(null);
    const comparar = () =>{
        if(document.getElementById(ejercicio.soluciones[0].entrada).checked){
             setPaso4Valido(
                paso4Valido=ejercicio.soluciones[0].pasoSiguiente
            );
            /*setEstado(
                <div className="alert alert-success"> 
                        <p>{ejercicio.validacion}:&nbsp;
                        {ejercicio.result_final}
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
            <Row  style={{padding: 0}}>
                <Col style={{padding: 40}}>
                    <Form.Check
                    type="radio"
                    label="Factorizable con diferentes raices"
                    name="formHorizontalRadios"
                    id="1" style={{padding: 0}}
                    disabled = {paso4Valido!=null}
                    />
                    <Form.Check
                    type="radio"
                    label="Factorizable con raices iguales"
                    name="formHorizontalRadios"
                    id="2" style={{padding: 0}}
                    disabled = {paso4Valido!=null}
                    />
                    <Form.Check
                    type="radio"
                    label="No es factorizable (raíces complejas)"
                    name="formHorizontalRadios"
                    id="3" style={{padding: 0}}
                    disabled = {paso4Valido!=null}
                    />
                </Col>
                <Col style={{margin: 40}}>

                {paso4Valido==null&&<button className="btn btn-outline-success" onClick={comparar}>Aceptar</button>}
                </Col>
            </Row>
            {paso4Valido==null&&estado}
        </>
    )
}
