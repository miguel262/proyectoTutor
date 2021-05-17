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
import { TCpaso6 } from './ejercicio/TCpaso6';


//react functional component
const TC= ()=>{
    //const ejemplo = Ejercicio1;
    const ejercicio = Ejercicio1;
    const [paso1Valido, setPaso1Valido] = useState(null);
    const [paso2Valido, setPaso2Valido] = useState(null);
    const [paso3Valido, setPaso3Valido] = useState(null);
    const [paso4Valido, setPaso4Valido] = useState(null);
    const [paso5Valido, setPaso5Valido] = useState(null);
    const [paso6Valido, setPaso6Valido] = useState(null);


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

                <Card bg={paso1Valido==null?"secondary":"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso1Valido==null?"0":"1"}>
                        {ejercicio.pasos[0].paso}
                        {paso1Valido!=null&&"    ✔ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso1Valido==null?"0":"1"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <TCpaso1 ejercicio={ejercicio.pasos[0]} setPaso1Valido={setPaso1Valido} paso1Valido={paso1Valido}>
                        </TCpaso1>
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
                    {paso1Valido!=null&&<TCpaso2 ejercicio={ejercicio.pasos[1]} setPaso2Valido={setPaso2Valido} paso2Valido={paso2Valido}>
                        </TCpaso2>}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg={paso3Valido==null?"secondary":"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso2Valido!=null?(paso3Valido!=null?"3":"0"):"3"}>
                        {ejercicio.pasos[ejercicio.pasos[1].soluciones[0].pasoSiguiente].paso}
                        {paso3Valido!=null&&"    ✔ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso2Valido!=null?(paso3Valido!=null?"3":"0"):"3"}  style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                    {paso2Valido!=null&&<TCpaso3 ejercicio={ejercicio.pasos[2]} setPaso3Valido={setPaso3Valido} paso3Valido={paso3Valido}></TCpaso3>}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>


                <Card bg={paso4Valido==null?"secondary":"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso3Valido!=null?(paso4Valido!=null?"4":"0"):"4"}>
                        {ejercicio.pasos[3].paso}
                        {paso4Valido!=null&&"    ✔ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso3Valido!=null?(paso4Valido!=null?"4":"0"):"4"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                    {paso3Valido!=null&&<TCpaso4 ejercicio={ejercicio.pasos[3]} setPaso4Valido={setPaso4Valido} paso4Valido={paso4Valido}></TCpaso4>}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg={paso5Valido==null?"secondary":"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso4Valido!=null?(paso5Valido!=null?"5":"0"):"5"}>
                        {ejercicio.pasos[4].paso}
                        {paso5Valido!=null&&"    ✔ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso4Valido!=null?(paso5Valido!=null?"5":"0"):"5"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                    {paso4Valido!=null&&<TCpaso5 ejercicio={ejercicio.pasos[4]} setPaso5Valido={setPaso5Valido} paso5Valido={paso5Valido}></TCpaso5>}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg={paso6Valido==null?"secondary":"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey={paso5Valido!=null?"0":"6"}>
                        {ejercicio.pasos[5].paso}
                        {paso6Valido!=null&&"    ✔ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={paso5Valido!=null?"0":"6"} style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                    {paso5Valido!=null&&<TCpaso6 ejercicio={ejercicio.pasos[5]} setPaso6Valido={setPaso6Valido} paso6Valido={paso6Valido}></TCpaso6>}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </div>
    )
}

export default TC; 