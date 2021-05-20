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
    const [paso1Valido, setPaso1Valido] = useState(null);
    const [paso2Valido, setPaso2Valido] = useState(null);
    const [hintsTerminado,setHintsTerminado] = useState(null);
    const [hintsTerminado2,setHintsTerminado2] = useState(null);
    
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
                <Card bg={paso1Valido==null?(hintsTerminado===null?"secondary":"danger"):"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso1Valido==null?"0":"1"}>
                        {ejercicio.pasos[0].paso}
                        {paso1Valido!=null&&"    ✔ "}
                        {hintsTerminado!=null&&"    ❌ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso1Valido==null?"0":"1"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <DSCpaso1 ejercicio={ejercicio.pasos[0]} setPaso1Valido={setPaso1Valido} paso1Valido={paso1Valido} signo={ejercicio.signo} hintsTerminado={hintsTerminado} setHintsTerminado={setHintsTerminado}></DSCpaso1>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg={paso2Valido==null?(hintsTerminado2===null?"secondary":"danger"):"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso1Valido!=null?"0":"1"}>
                        {ejercicio.pasos[1].paso}
                        {paso2Valido!=null&&"    ✔ "}
                        {hintsTerminado2!=null&&"    ❌ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso1Valido!=null?"0":"1"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        {paso1Valido!=null&&<DSCpaso2 ejercicio={ejercicio.pasos[paso1Valido]} setPaso2Valido={setPaso2Valido} paso2Valido={paso2Valido} hintsTerminado={hintsTerminado2} setHintsTerminado={setHintsTerminado2}></DSCpaso2>}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default DSC;