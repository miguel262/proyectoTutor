import React from 'react';
import {Ejercicio1, Ejercicio2} from './EjerciciosFCC';
import {MathComponent} from 'mathjax-react';
import { Breadcrumb, Accordion,Card } from 'react-bootstrap';
import FCCpaso1 from './ejercicio/FCCpaso1';
//import FCCejemplo from './ejercicio/FCCejemplo';

const FCC= ()=>{
    //const ejemplo = Ejercicio1;
    const ejercicio = Ejercicio1;
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
                        <FCCpaso1 ejercicio={ejercicio}></FCCpaso1>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card bg="secondary" style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        {ejercicio.pasos[1].paso}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1" style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <p>aqui va el contenido del paso 2</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default FCC;