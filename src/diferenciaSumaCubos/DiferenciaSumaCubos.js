import React,{useState} from 'react';
import {Ejercicio1,Ejercicio2} from './EjerciciosDSC';
import {MathComponent} from 'mathjax-react';
import { DSCejemplo } from './ejercicios/DSCejemplo';
import { Breadcrumb, Accordion,Card } from 'react-bootstrap';
import { DSCpaso1 } from './ejercicios/DSCpaso1';
import { DSCpaso2 } from './ejercicios/DSCpaso2';
//import './DiferenciaCuadrados.css';


//react functional component
const DSC= ()=>{
    //const ejemplo = Ejercicio1;
    const ejercicio = Ejercicio2;
    const [idSiguientePaso, setIdSiguientePaso] = useState(null);
    return(
        <div>
            {/*
           <DSCejemplo ejemplo={ejemplo}></DSCejemplo>
            */}
            <Breadcrumb>
                <Breadcrumb.Item >Factorización</Breadcrumb.Item>
                <Breadcrumb.Item active>Diferencia y suma de cubos</Breadcrumb.Item>
            </Breadcrumb>

            <h3> {ejercicio.textoProblema} </h3>
            <center><MathComponent tex={ejercicio.pasos[0].expresion} display={false} /></center>

            <Accordion defaultActiveKey="0">
                <Card bg="secondary" style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        {ejercicio.pasos[0].paso}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <DSCpaso1 ejercicio={ejercicio.pasos[0]} setIdSiguientePaso={setIdSiguientePaso} signo={ejercicio.signo}></DSCpaso1>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                {idSiguientePaso!=null&&<Card bg="secondary" style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        {ejercicio.pasos[idSiguientePaso].paso}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1" style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <DSCpaso2 ejercicio={ejercicio.pasos[idSiguientePaso]}></DSCpaso2>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>}
            </Accordion>
        </div>
    )
}

export default DSC;