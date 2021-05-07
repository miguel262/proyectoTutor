import React,{useState} from 'react';
import {Ejercicio1} from './EjerciciosTC';
import {MathComponent} from 'mathjax-react';
import { TCejemplo } from './ejercicio/TCejemplo';
import { Breadcrumb, Accordion,Card } from 'react-bootstrap';
import { TCpaso1 } from './ejercicio/TCpaso1';
import { TCpaso2 } from './ejercicio/TCpaso2';
import { TCpaso3 } from './ejercicio/TCpaso3';
import { TCpaso4 } from './ejercicio/TCpaso4';
import { TCpaso5 } from './ejercicio/TCpaso5';


//react functional component
const TC= ()=>{
    //const ejemplo = Ejercicio1;
    const ejercicio = Ejercicio1;
    const [idSiguientePaso, setIdSiguientePaso] = useState(null);
    const [idSiguientePaso2, setIdSiguientePaso2] = useState(null);
    const [idSiguientePaso3, setIdSiguientePaso3] = useState(null);
    const [idSiguientePaso4, setIdSiguientePaso4] = useState(null);


    return(
        <div>
            {/*Ejemplo diferencia de cubos 
            <TCejemplo ejemplo={ejemplo}></TCejemplo>
            */}
            <Breadcrumb>
                <Breadcrumb.Item >Factorización</Breadcrumb.Item>
                <Breadcrumb.Item active>Trinomios cuadráticos</Breadcrumb.Item>
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
                        <TCpaso1 ejercicio={ejercicio.pasos[0]} setIdSiguientePaso={setIdSiguientePaso}>
                        </TCpaso1>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                {idSiguientePaso!=null&&<Card bg="secondary" style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        {ejercicio.pasos[idSiguientePaso].paso}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1" style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <TCpaso2 ejercicio={ejercicio.pasos[idSiguientePaso]} setIdSiguientePaso={setIdSiguientePaso2}></TCpaso2>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>}
                {idSiguientePaso2!=null&&<Card bg="secondary" style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        {ejercicio.pasos[idSiguientePaso2].paso}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2" style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <TCpaso3 ejercicio={ejercicio.pasos[idSiguientePaso2]} setIdSiguientePaso={setIdSiguientePaso3}></TCpaso3>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>}
                {idSiguientePaso3!=null&&<Card bg="secondary" style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        {ejercicio.pasos[idSiguientePaso3].paso}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3" style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <TCpaso4 ejercicio={ejercicio.pasos[idSiguientePaso3]} setIdSiguientePaso={setIdSiguientePaso4}></TCpaso4>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>}
                {idSiguientePaso4!=null&&<Card bg="secondary" style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        {ejercicio.pasos[idSiguientePaso4].paso}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4" style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <TCpaso5 ejercicio={ejercicio.pasos[idSiguientePaso4]}></TCpaso5>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>}
            </Accordion>

        </div>
    )
}

export default TC; 