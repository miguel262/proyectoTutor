export const Ejercicio1 = {
    prob_id : 3000,
    titulo : "Factorización por diferencia de cuadrados.",
    pasos: [
        {
            expresion: "9x^2-1",
            paso: "Paso 1: identificar terminos al cuadrado",
            explicacion:"",
            result_final:["3x","1"],
            hint_solicitado:["",
            "","los cuadrados son: (3x)^2 - (1)^2, donde los valores a ingresar son 3x y 1"],
            entrada:[["3x","(3x)"],["1","(1)"]],
            error:"no se han ingresado correctamente los términos que al cuadrado dan como resultado la expresión",
            validacion:"Haz encontrado los términos al cuadrado"
        },
        {
            expresion: "3x^2+1^2",
            paso: "Paso 2: ingresar suma por diferencia",
            explicacion:"",
            result_final:["(3x+1)","(3x-1)"],
            hint_solicitado:["(3x+1)(3x-1)"],
            entrada:["3x+1","3x-1"],
            error:"suma por diferencia mal ingresado",
            validacion:"Haz encontrado la diferencia de cuadradros"
        }
    ]
}

export const Ejercicio2 = {
    prob_id : 3001,
    titulo : "Factorización por diferencia de cuadrados.",
    pasos: [
        {
            expresion: "x^2-y^2",
            paso: "Paso 1: identificar terminos al cuadrado",
            explicacion:"",
            result_final:["x","y"],
            hint_solicitado:["",
            "","los cuadrados son: (x)^2 - (y)^2, donde los valores a ingresar son x e y"],
            entrada:[["x","(x)"],["y","(y)"]],
            error:"no se han ingresado correctamente los términos que al cuadrado dan como resultado la expresión",
            validacion:"Haz encontrado los términos al cuadrado"
        },
        {
            expresion: "(x)^2+(y)^2",
            paso: "Paso 2: ingresar suma por diferencia",
            explicacion:"",
            result_final:["(x+y)","(x-y)"],
            hint_solicitado:["los grupos de sumandos son los que estan dentro de los paréntesis"],
            entrada:["a","b"],
            error:"suma por diferencia mal ingresado",
            validacion:"Haz encontrado la diferencia de cuadradros"
        }
    ]
}

export const Ejercicio3 = {
    prob_id : 3001,
    titulo : "Factorización por diferencia de cuadrados.",
    pasos: [
        {
            expresion: "4x^2y^4-16x^2y^2",
            paso: "Paso 1: identificar terminos al cuadrado",
            explicacion:"",
            result_final:["2xy^2","4xy"],
            hint_solicitado:["",
            "","los cuadrados son: (2xy^2)^2 - (4xy)^2, donde los valores a ingresar son 2xy^2 e 4xy"],
            entrada:[["2xy^2","(2xy^2)","2y^2x","(2y^2x)"],["4xy","(4xy)","4yx","(4yx)"]],
            error:"no se han ingresado correctamente los términos que al cuadrado dan como resultado la expresión",
            validacion:"Haz encontrado los términos al cuadrado"
        },
        {
            expresion: "(2xy^2)^2+(4xy)^2",
            paso: "Paso 2: ingresar suma por diferencia",
            explicacion:"",
            result_final:["(2xy^2+4xy)","(2xy^2-4xy)"],
            hint_solicitado:["los grupos de sumandos son los que estan dentro de los paréntesis"],
            entrada:["(2xy^2+4xy)(2xy^2-4xy)"],
            error:"suma por diferencia mal ingresado",
            validacion:"Haz encontrado la diferencia de cuadradros"
        }
    ]
}