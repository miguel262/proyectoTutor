export const Ejercicio1 = {
    prob_id : 4000,
    titulo : "Factorización por diferencia de cubos.",
    pasos: [
        {
            expresion: "x^3-y^3",
            paso: "Paso 1: identificar términos al cubo",
            explicacion:"",
            result_final:["x","y"],
            hint_solicitado:["",
            "","los cubos son: (x)^3 - (y)^3, donde los valores a ingresar son x e y"],
            entrada:[["x","(x)"],["y","(y)"]],
            error:"no se han ingresado correctamente los términos que al cubos dan como resultado la expresión",
            validacion:"Haz encontrado los términos al cubo"
        },
        {
            expresion: "(x)^3-(y)^3",
            paso: "Paso 2: ingresar la identidad (diferencia de cubos)",
            explicacion:"",
            result_final:["(x-y)","(x^2+xy+y^2)"],
            hint_solicitado:["(x-y)(x^2+xy+y^2)"],
            entrada:["x-y","x^2+xy+y^2"],
            error:"valores mal ingresados",
            validacion:"Haz encontrado la diferencia de cubos"
        }
    ]
}
export const Ejercicio2 = {
    prob_id : 4001,
    titulo : "Factorización por suma de cubos.",
    pasos: [
        {
            expresion: "8x^3+y^3",
            paso: "Paso 1: identificar términos al cubo",
            explicacion:"",
            result_final:["2x","y"],
            hint_solicitado:["",
            "","los cubos son: (2x)^3 + (y)^3, donde los valores a ingresar son x e y"],
            entrada:[["2x","(2x)"],["y","(y)"]],
            error:"no se han ingresado correctamente los términos que al cubos dan como resultado la expresión",
            validacion:"Haz encontrado los términos al cubo"
        },
        {
            expresion: "(2x)^3+(y)^3",
            paso: "Paso 2: ingresar la identidad (suma de cubos)",
            explicacion:"",
            result_final:["(2x+y)","(4x^2-2xy+y^2)"],
            hint_solicitado:["(2x+y)(4x^2-2xy+y^2)"],
            entrada:["2x+y","4x^2-2xy+y^2"],
            error:"valores mal ingresados",
            validacion:"Haz encontrado la diferencia de cubos"
        }
    ]
}