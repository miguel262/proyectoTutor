export const Ejercicio1 = {
    prob_id : 3000,
    titulo : "Factorización por diferencia de cuadrados.",
    dificultad:"1",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    pasos: [
        {
            id:"0",
            expresion: "9x^2-1",
            paso: "Paso 1: identificar terminos al cuadrado",
            explicacion:"",
            result_final:"(3x)^2-(1)^2",
            hint_solicitado:["Enfocarse en los valores que acompañan al cuadrado",
            "Un valor a ingresar es 1","Los cuadrados son: (3x)^2 - (1)^2, donde los valores a ingresar son 3x y 1"],
            soluciones:[{entrada:["3x","1"],pasoSiguiente:"1"}],
            error:"No se han ingresado correctamente los términos que al cuadrado dan como resultado la expresión",
            //validacion:"Haz encontrado los términos al cuadrado"
        },
        {
            id:"1",
            expresion: "(3x)^2-(1)^2",
            paso: "Paso 2: ingresar suma por diferencia",
            explicacion:"",
            result_final:"(3x+1)(3x-1)",
            hint_solicitado:["Primer paréntesis ingresar suma", "Segundo paréntesis ingresar resta","Factorización por suma y diferencia: (3x+1)(3x-1)"],
            entrada:["3x+1","3x-1"],
            error:"suma por diferencia mal ingresado",
            validacion:"Haz factorizado por diferencia de cuadradros"
        }
    ]
}

export const Ejercicio2 = {
    prob_id : 3001,
    titulo : "Factorización por diferencia de cuadrados.",
    dificultad:"1",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    pasos: [
        {
            expresion: "x^2-y^2",
            paso: "Paso 1: identificar terminos al cuadrado",
            explicacion:"",
            result_final:"(x)^2-(y)^2",
            hint_solicitado:["Enfocarse en los valores que acompañan al cuadrado",
            "Un valor a ingresar es x","Los cuadrados son: (x)^2 - (y)^2, donde los valores a ingresar son x e y"],
            soluciones:[{entrada:["x","y"],pasoSiguiente:"1"}],
            error:"no se han ingresado correctamente los términos que al cuadrado dan como resultado la expresión",
            //validacion:"Haz encontrado los términos al cuadrado"
        },
        {
            expresion: "(x)^2-(y)^2",
            paso: "Paso 2: ingresar suma por diferencia",
            explicacion:"",
            result_final:"(x+y)(x-y)",
            hint_solicitado:["Primer paréntesis ingresar suma", "Segundo paréntesis ingresar resta", "Factorización por suma y diferencia: (x+y)(x-y)"],
            entrada:["x+y","x-y"],
            error:"suma por diferencia mal ingresado",
            validacion:"Haz factorizado por diferencia de cuadradros"
        }
    ]
}

export const Ejercicio3 = {
    prob_id : 3001,
    titulo : "Factorización por diferencia de cuadrados.",
    dificultad:"1",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    pasos: [
        {
            expresion: "4x^2y^4-16x^2y^2",
            paso: "Paso 1: identificar terminos al cuadrado",
            explicacion:"",
            result_final:"(2xy^2)^2-(4xy)^2",
            hint_solicitado:["",
            "","los cuadrados son: (2xy^2)^2 - (4xy)^2, donde los valores a ingresar son 2xy^2 e 4xy"],
            soluciones:[{entrada:["2xy^2","4xy"],pasoSiguiente:"1"},
                        {entrada:["2y^2x","4xy"],pasoSiguiente:"1"},
                        {entrada:["2xy^2","4yx"],pasoSiguiente:"1"},
                        {entrada:["2y^2x","4yx"],pasoSiguiente:"1"}],
            error:"no se han ingresado correctamente los términos que al cuadrado dan como resultado la expresión",
            validacion:"Haz encontrado los términos al cuadrado"
        },
        {
            expresion: "(2xy^2)^2+(4xy)^2",
            paso: "Paso 2: ingresar suma por diferencia",
            explicacion:"",
            result_final:"(2xy^2+4xy)(2xy^2-4xy)",
            hint_solicitado:["Primer paréntesis ingresar suma", "Segundo paréntesis ingresar resta", "factorización por suma y diferencia:"],
            entrada:["(2xy^2+4xy)","(2xy^2-4xy)"],
            error:"suma por diferencia mal ingresado",
            validacion:"Haz encontrado la diferencia de cuadradros"
        }
    ]
}