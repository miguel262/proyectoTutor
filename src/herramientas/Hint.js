import { Alert, OverlayTrigger, Popover } from 'react-bootstrap';
import React, {useState } from 'react';

const Hint = ({ejercicio,setHintsTerminado}) => {

    const [hint,setHint] = useState(null);
    
    const [i,setI] = useState(0);

    const ayuda = () =>{
        if (ejercicio[i+1]!= null){
            setI(i+1);
        }
        else{
            setHintsTerminado(
                i
            )
        }
        
        setHint(
            <Popover   style={{ padding: 0}}>
                <Popover.Content style={{ padding: 0}}>
                    <Alert variant="info">
                        <p>{ejercicio[i]}</p>
                    </Alert>
                </Popover.Content>
            </Popover>
        )
         
    }

    return(
        <div>
            <p>
           
                <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={hint} >
                        <button id="boton" type="submit" className="btn btn-outline-info"  onClick={ayuda}>Hint</button>
                </OverlayTrigger> 
                &nbsp; Ayuda
                
            </p>
        </div>
        
    );

}

export default Hint;