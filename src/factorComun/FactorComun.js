import React, { useState } from 'react';
//import {Ejercicio1, Ejercicio2,Ejercicio3,Ejercicio4,Ejercicio5,Ejercicio6,Ejercicio7} from './EjerciciosFC';
import './FactorComun.css';
import FCpaso1 from './ejercicio/FCpaso1';
//import FCejemplo from './ejercicio/FCejemplo';


import {MathComponent} from 'mathjax-react';
import {Accordion,Card,Breadcrumb} from 'react-bootstrap';
//react functional component
const FC= ({ejercicio})=>{

    //const ejemplo = Ejercicio2;
    //const ejercicio=Ejercicio1;
    const [paso1Valido, setPaso1Valido] = useState(null);
    const [hintsTerminado,setHintsTerminado] = useState(null);

    return (
        <div>
            
            {//crear el boton para ver el ejemplo
            //<FCejemplo ejemplo={ejemplo}></FCejemplo>
            }
            <Breadcrumb>
                <Breadcrumb.Item style={{color: "red"}}>Factorización</Breadcrumb.Item>
                <Breadcrumb.Item active>Factor común</Breadcrumb.Item>
            </Breadcrumb>


            <h3>{ejercicio.textoProblema}</h3>
            <MathComponent tex={ejercicio.expresion} display={true} />
     
            <Accordion defaultActiveKey="0">
                <Card bg={paso1Valido==null?(hintsTerminado===null?"secondary":"danger"):"success"} style={{padding: 0}}>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        {ejercicio.paso}
                        {paso1Valido!=null&&"    ✔ "}
                        {hintsTerminado!=null&&"    ❌ "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" style={{padding: 1}}>
                    <Card.Body style={{padding: 0}}>
                        <FCpaso1 ejercicio={ejercicio} setPaso1Valido={setPaso1Valido} paso1Valido={paso1Valido} hintsTerminado={hintsTerminado} setHintsTerminado={setHintsTerminado}></FCpaso1>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            
        </div>
            

    )
}

export default FC;