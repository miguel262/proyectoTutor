import React,{useState} from 'react';
import {Ejercicio1,Ejercicio2} from './EjerciciosDC';
import {MathComponent} from 'mathjax-react';
import './DiferenciaCuadrados.css';
import { DCejemplo } from './ejercicio/DCejemplo';
import { Breadcrumb, Accordion,Card } from 'react-bootstrap';
import { DCpaso1 } from './ejercicio/DCpaso1';
import { DCpaso2 } from './ejercicio/DCpaso2';

//react functional component
const DC= ()=>{
    //const ejemplo = Ejercicio1;
    const ejercicio = Ejercicio1;
    const [idSiguientePaso, setIdSiguientePaso] = useState(null);

    return(
        <div>
            {/*
            <DCejemplo ejemplo={ejemplo}></DCejemplo>
            */}
            <Breadcrumb>
                <Breadcrumb.Item >Factorización</Breadcrumb.Item>
                <Breadcrumb.Item active>Diferencia de cuadrados</Breadcrumb.Item>
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
                        <DCpaso1 ejercicio={ejercicio.pasos[0]} setIdSiguientePaso={setIdSiguientePaso}>
                        </DCpaso1>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                {idSiguientePaso!=null&&<Card bg="secondary" style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        {ejercicio.pasos[idSiguientePaso].paso}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1" style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <DCpaso2 ejercicio={ejercicio.pasos[idSiguientePaso]}></DCpaso2>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>}
            </Accordion>
        </div>
    )
}

export default DC;