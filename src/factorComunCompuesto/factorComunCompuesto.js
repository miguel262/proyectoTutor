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
    const [paso1Valido, setPaso1Valido] = useState(null);
    const [paso2Valido, setPaso2Valido] = useState(null);
    const [paso3Valido, setPaso3Valido] = useState(null);
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

            <Accordion defaultActiveKey={"0"}>
                <Card bg={paso1Valido==null?"secondary":"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso1Valido==null?"0":"1"}>
                        {ejercicio.pasos[0].paso}
                        {paso1Valido!=null&&"    ✔ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso1Valido==null?"0":"1"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <FCCpaso1 ejercicio={ejercicio.pasos[0]} setPaso1Valido={setPaso1Valido} paso1Valido={paso1Valido}>
                        </FCCpaso1>
                        
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg={paso2Valido==null?"secondary":"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso1Valido!=null?(paso2Valido!=null?"2":"0"):"2"}>
                        {ejercicio.pasos[1].paso}
                        {paso2Valido!=null&&"    ✔ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso1Valido!=null?(paso2Valido!=null?"2":"0"):"2"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                    {paso1Valido!=null&&<FCCpaso2 ejercicio={ejercicio.pasos[1]}  setPaso2Valido={setPaso2Valido} paso2Valido={paso2Valido}></FCCpaso2>}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg={paso3Valido==null?"secondary":"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso2Valido!=null?"0":"3"}>
                        {ejercicio.pasos[ejercicio.pasos[1].soluciones.pasoSiguiente].paso}
                        {paso3Valido!=null&&"    ✔ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso2Valido!=null?"0":"3"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                    {paso2Valido!=null&&<FCpaso1 ejercicio={ejercicio.pasos[paso2Valido]} setPaso1Valido={setPaso3Valido} paso1Valido={paso3Valido}></FCpaso1>}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default FCC;