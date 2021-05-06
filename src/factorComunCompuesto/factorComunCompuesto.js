import React, { useState} from 'react';
import {Ejercicio1, Ejercicio2} from './EjerciciosFCC';
import {MathComponent} from 'mathjax-react';
import { Breadcrumb, Accordion,Card } from 'react-bootstrap';
import FCCpaso1 from './ejercicio/FCCpaso1';
import FCCpaso2 from './ejercicio/FCCpaso2';
import FCpaso1 from '../factorComun/ejercicio/FCpaso1';
//import FCCejemplo from './ejercicio/FCCejemplo';

const FCC= ()=>{
    //const ejemplo = Ejercicio1;
    const ejercicio = Ejercicio1;
    const [idSiguientePaso, setIdSiguientePaso] = useState(null);
    const [idSiguientePaso2, setIdSiguientePaso2] = useState(null);

    return (
        <div>
            {//<FCCejemplo ejemplo={ejemplo}></FCCejemplo>
            }

            <Breadcrumb>
                <Breadcrumb.Item style={{color: "hotpink"}}>Factorización</Breadcrumb.Item>
                <Breadcrumb.Item active>Factor común compuesto</Breadcrumb.Item>
            </Breadcrumb>

            <h3>{ejercicio.textoProblema}</h3>
            <MathComponent tex={ejercicio.pasos[0].expresion} display={true} />

            <Accordion defaultActiveKey="0">
                <Card bg="secondary" style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        {ejercicio.pasos[0].paso}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <FCCpaso1 ejercicio={ejercicio.pasos[0]} setIdSiguientePaso={setIdSiguientePaso}>
                        </FCCpaso1>
                        
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {idSiguientePaso!=null&&<Card bg="secondary" style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        {ejercicio.pasos[idSiguientePaso].paso}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1" style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <FCCpaso2 ejercicio={ejercicio.pasos[idSiguientePaso]} setIdSiguientePaso2={setIdSiguientePaso2}></FCCpaso2>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>}

                {idSiguientePaso2!=null&&<Card bg="secondary" style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        {ejercicio.pasos[idSiguientePaso2].paso}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2" style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <FCpaso1 ejercicio={ejercicio.pasos[idSiguientePaso2]}></FCpaso1>
 
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>}
            </Accordion>
        </div>
    )
}

export default FCC;