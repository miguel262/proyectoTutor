import React from 'react';
import {Ejercicio1,Ejercicio2} from './EjerciciosDC';
import {MathComponent} from 'mathjax-react';
import './DiferenciaCuadrados.css';


//react functional component
const DC= ()=>{
    const ejemplo = Ejercicio1;
    const ejercicio = Ejercicio2;
    return(
        <div>
            <hr/>
            <h2> {ejemplo.titulo} </h2>
            <p>{ejemplo.pasos[0].paso}</p>
            <p> Ejemplo:</p>
            <MathComponent tex={String.raw`${ejemplo.pasos[0].expresion}`} />
            <p>Solución: </p> 
            <MathComponent tex={"("+ejemplo.pasos[0].result_final[0]+")^2-("+ejemplo.pasos[0].result_final[1]+")^2"}/>
            <p>donde {ejemplo.pasos[0].result_final[0]} y {ejemplo.pasos[0].result_final[1]} son los términos al cuadrado</p>
            
            <hr/>
            <p>{ejemplo.pasos[1].paso}</p>
            <p> Ejemplo:</p>
            <MathComponent tex={String.raw`${ejemplo.pasos[1].expresion}`} />
            <p>Solución: </p> 
            <MathComponent tex={ejemplo.pasos[1].result_final[0]+ejemplo.pasos[1].result_final[1]}/>
            <p>donde {ejemplo.pasos[0].result_final[0]} y {ejemplo.pasos[0].result_final[1]} son los términos al cuadrado que se ingresan en la suma por diferencia</p>

            <hr/>
            <h2> {ejercicio.titulo} </h2>
            <p>{ejercicio.pasos[0].paso}</p>
            <MathComponent tex={String.raw`${ejercicio.pasos[0].expresion}`} />
            <div className="input-group">
                <input
                    type="text" 
                    name="name"
                    className="form-control"
                    placeholder="Ingrese factor común"
                    autoComplete= "off"
                ></input>

                <button 
                    type="submit" 
                    className="btn btn-outline-success">
                    Aceptar
                </button>    
            </div>
        </div>
    )
}

export default DC;