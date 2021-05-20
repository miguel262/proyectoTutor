import React from 'react'
import { Alert } from 'react-bootstrap';

export function ValidarEntradas(correcta, entrada, ejercicio,paso, setPasoValido, pasoValido, setEstado, mostrarCorrecta) {
    const valida = (element) => element === entrada;


        if (correcta.some(valida)) {
            //valida que la entrada es correcta
            if(paso==1){
                const setPaso1Valido=setPasoValido;
                const paso1Valido=pasoValido;
                setPaso1Valido(
                    paso1Valido
                );
            }
            setEstado(
                mostrarCorrecta
            )
        }
        else{
            setEstado(
                    <Alert variant="danger">{ejercicio.error} </Alert>
            )
        }
    
}
