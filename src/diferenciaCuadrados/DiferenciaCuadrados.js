import React,{useState} from 'react';
import {Ejercicio2} from './EjerciciosDC';
import {MathComponent} from 'mathjax-react';
import './DiferenciaCuadrados.css';
//import { DCejemplo } from './ejercicio/DCejemplo';
import { Breadcrumb, Accordion,Card } from 'react-bootstrap';
import { DCpaso1 } from './ejercicio/DCpaso1';
import { DCpaso2 } from './ejercicio/DCpaso2';

//react functional component
const DC= ()=>{
    //const ejemplo = Ejercicio1;
    const ejercicio = Ejercicio2;
    const [paso1Valido, setPaso1Valido] = useState(null);
    const [paso2Valido, setPaso2Valido] = useState(null);
    //const [eventKeys, setEventKeys] = useState("0");
    const [hintsTerminado,setHintsTerminado] = useState(null);
    const [hintsTerminado2,setHintsTerminado2] = useState(null);
    
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

            
            <Accordion defaultActiveKey={paso1Valido==null?"0":"1"} >
                <Card bg= {paso1Valido==null?(hintsTerminado===null?"secondary":"danger"):"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso1Valido==null?"0":"1"}>
                        {ejercicio.pasos[0].paso}
                        {paso1Valido!=null&&"    ✔ "}
                        {hintsTerminado!=null&&"    ❌ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso1Valido==null?"0":"1"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <DCpaso1 ejercicio={ejercicio.pasos[0]} setPaso1Valido={setPaso1Valido} paso1Valido={paso1Valido} hintsTerminado={hintsTerminado} setHintsTerminado={setHintsTerminado}>
                        </DCpaso1>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg={paso2Valido==null?(hintsTerminado2===null?"secondary":"danger"):"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header}  eventKey={paso1Valido!=null?"0":"1"} >
                        {ejercicio.pasos[1].paso}
                        {paso2Valido!=null&&"    ✔ "}
                        {hintsTerminado2!=null&&"    ❌ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso1Valido!=null?"0":"1"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                    {paso1Valido!=null&&<DCpaso2 ejercicio={ejercicio.pasos[paso1Valido]} setPaso2Valido={setPaso2Valido} paso2Valido={paso2Valido} hintsTerminado={hintsTerminado2} setHintsTerminado={setHintsTerminado2}></DCpaso2>}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default DC;