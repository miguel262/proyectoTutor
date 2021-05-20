export const Ejercicio1 = {
    prob_id : 4000,
    titulo : "Factorización por diferencia de cubos.",
    signo:"-",
    dificultad:"1",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    pasos: [
        {
            expresion: "x^3-y^3",
            paso: "Paso 1: identificar términos al cubo",
            explicacion:"",
            result_final:"(x)^3-(y)^3",
            hint_solicitado:["hint 1",
            "hint 2","los cubos son: (x)^3 - (y)^3"],
            soluciones:[{entrada:["x","y"],pasoSiguiente:"1"}],
            error:"no se han ingresado correctamente los términos que al cubos dan como resultado la expresión",
            validacion:"Haz encontrado los términos al cubo"
        },
        {
            expresion: "(x)^3-(y)^3",
            paso: "Paso 2: ingresar la identidad (diferencia de cubos)",
            explicacion:"",
            result_final:"(x-y)(x^2+xy+y^2)",
            hint_solicitado:["hint 1","hint 2","(x-y)(x^2+xy+y^2)"],
            entrada:["x-y","x^2+xy+y^2"],
            error:"valores mal ingresados",
            validacion:"Haz encontrado la diferencia de cubos"
        }
    ]
}
export const Ejercicio2 = {
    prob_id : 4001,
    titulo : "Factorización por suma de cubos.",
    signo:"+",
    dificultad:"1",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    pasos: [
        {
            expresion: "8x^3+y^3",
            paso: "Paso 1: identificar términos al cubo",
            explicacion:"",
            result_final:"(2x)^3+(y)^3",
            hint_solicitado:["hint 1","hint 2","los cubos son: (2x)^3 + (y)^3, donde los valores a ingresar son x e y"],
            soluciones:[{entrada:["2x","y"],pasoSiguiente:"1"}],
            error:"no se han ingresado correctamente los términos que al cubos dan como resultado la expresión",
            validacion:"Haz encontrado los términos al cubo"
        },
        {
            expresion: "(2x)^3+(y)^3",
            paso: "Paso 2: ingresar la identidad (suma de cubos)",
            explicacion:"",
            result_final:"(2x+y)(4x^2-2xy+y^2)",
            hint_solicitado:["hint 1","hint 2","Factorización por suma de cubos: (2x+y)(4x^2-2xy+y^2)"],
            entrada:["2x+y","4x^2-2xy+y^2"],
            error:"Valores mal ingresados",
            validacion:"Haz encontrado la diferencia de cubos"
        }
    ]
}