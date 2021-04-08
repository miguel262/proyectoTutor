export const Ejercicio1 = {
    prob_id : 2000,
    titulo : "Factorización por factor común compuesto.",
    pasos: [
        {
            expresion: "ax + bx + ay + by",
            paso: "Paso 1: agrupe los sumandos",
            explicacion:"agrupar los sumandos según los términos en común",
            grupos:"2",
            hint_grupos:["No es la cantidad de grupos adecuada","La cantidad de grupos de este ejercicio es 2"],
            result_final:["ax + ay","bx + by"],
            hint_solicitado:["agrupa los sumandos con términos que se repiten (comenzar con los primeros términos de los sumandos)",
            "agrupa los sumandos con constantes iguales","los grupos son: ax + ay  y  bx + by"],
            entrada:[["ax+ay","bx+by"],["ax+bx","ay+by"]],
            error:"no se ha agrupado correctamente la expresión",
            validacion:"Haz agrupado los sumandos"
        },
        {
            expresion: "ax + ay + bx + by",
            paso: "Paso 2: ingrese el factor común de cada grupo",
            explicacion:"a cada uno de los grupos de sumandos ingrese su factor común",
            result_variable:["dsfdsfds"],
            hint_result_var:"sdfdsfds",
            result_final:["a(x+y)","b(x+y)"],
            hint_solicitado:["los grupos de sumandos son los del paso 1"],
            entrada:[["a","b"],["x","y"]],
            error:"factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
            validacion:"Haz encontrado el factor común"
        },
        {
            expresion: "a(x+y)+b(x+y)",
            paso: "Paso 3: ingrese el factor común",
            explicacion:"fasfsaf",
            result_variable:[],
            hint_result_var:"",
            result_final:["(x+y)","(a+b)"],
            hint_solicitado:["el factor común de la expresión es: x + y"],
            entrada:["x+y","a+b"],
            error:"factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
            validacion:"Haz encontrado el factor común"
        }

    ]
    
}

export const Ejercicio2 = {
    prob_id : 2001,
    titulo : "Factorización por factor común compuesto.",
    pasos: [
        {
            expresion: "ax + bx + ay + by",
            paso: "Paso 1: agrupe los sumandos",
            explicacion:"agrupar los sumandos según los términos en común",
            grupos:"2",
            hint_grupos:["No es la cantidad de grupos adecuada","La cantidad de grupos de este ejercicio es 2"],
            result_final:["ax + ay","bx + by"],
            hint_solicitado:["agrupa los sumandos con términos que se repiten (comenzar con los primeros términos de los sumandos)",
            "agrupa los sumandos con constantes iguales","los grupos son: ax + ay  y  bx + by"],
            entrada:[["ax+ay","bx+by"],["ax+bx","ay+by"]],
            error:"no se ha agrupado correctamente la expresión",
            validacion:"Haz agrupado los sumandos"
        },
        {
            expresion: "ax + ay + bx + by",
            paso: "Paso 2: ingrese el factor común de cada grupo",
            explicacion:"a cada uno de los grupos de sumandos ingrese su factor común",
            result_variable:["dsfdsfds"],
            hint_result_var:"sdfdsfds",
            result_final:["a(x+y)","b(x+y)"],
            hint_solicitado:["los grupos de sumandos son los del paso 1"],
            entrada:[["a","b"],["x","y"]],
            error:"factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
            validacion:"Haz encontrado el factor común"
        },
        {
            expresion: "a(x+y)+b(x+y)",
            paso: "Paso 3: ingrese el factor común",
            explicacion:"fasfsaf",
            result_variable:[],
            hint_result_var:"",
            result_final:["(x+y)","(a+b)"],
            hint_solicitado:["el factor común de la expresión es: x + y"],
            entrada:["x+y","a+b"],
            error:"factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
            validacion:"Haz encontrado el factor común"
        }

    ]
    
}
