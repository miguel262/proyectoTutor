export const Ejercicio1 = {
    prob_id : 2000,
    titulo : "Factorización por factor común compuesto.",
    pasos: [
        {
            id:"0",
            expresion: "ax + bx + ay + by",
            paso: "Paso 1: agrupe los sumandos",
            explicacion:"agrupar los sumandos según los términos en común",
            grupos:"2",
            hint_grupos:["No es la cantidad de grupos adecuada","La cantidad de grupos de este ejercicio es 2"],
            result_final:["ax + ay","bx + by"],
            hint_solicitado:["agrupa los sumandos con términos que se repiten (comenzar con los primeros términos de los sumandos)",
            "agrupa los sumandos con constantes iguales","los grupos son: (ax + ay) + (bx + by)"],
            entrada:[["ax+ay","bx+by"],["ax+bx","ay+by"]],
            error:"no se ha agrupado correctamente la expresión",
            validacion:"Haz agrupado los sumandos"
        },
        {
            expresion: "(ax + ay) + (bx + by)",
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
            explicacion:"En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar",
            result_variable:[],
            hint_result_var:"",
            result_final:["(x+y)","(a+b)"],
            hint_solicitado:["ver variable que se repite en ambos sumandos","el factor común de la expresión es: x + y"],
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
            expresion: "2ax + 2bx - ay + 5a - by + 5b",
            paso: "Paso 1: agrupe los sumandos",
            explicacion:"agrupar los sumandos según los términos en común",
            grupos:"2",
            hint_grupos:["No es la cantidad de grupos adecuada","La cantidad de grupos de este ejercicio es 2"],
            result_final:["2ax - ay + 5a","2bx - by + 5b"],
            hint_solicitado:["agrupa los sumandos con términos que se repiten (comenzar con los primeros términos de los sumandos)",
            "agrupa los sumandos con constantes iguales","los grupos son: (2ax - ay + 5a) + (2bx - by + 5b)"],
            entrada:[["2ax-ay+5a","2bx-by+5b"],["ax+bx","ay+by"]],
            error:"no se ha agrupado correctamente la expresión",
            validacion:"Haz agrupado los sumandos"
        },
        {
            expresion: "(2ax-ay+5a) + (2bx-by+5b)",
            paso: "Paso 2: ingrese el factor común de cada grupo",
            explicacion:"a cada uno de los grupos de sumandos ingrese su factor común",
            result_variable:["dsfdsfds"],
            hint_result_var:"sdfdsfds",
            result_final:["a(2x-y+5)","b(2x-y+5)"],
            hint_solicitado:["los grupos de sumandos son los que estan en parentesis"],
            entrada:["a","b"],
            error:"factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
            validacion:"Haz encontrado el factor común"
        },
        {
            expresion: "a(2x-y+5)+b(2x-y+5)",
            paso: "Paso 3: ingrese el factor común",
            explicacion:"En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar",
            result_variable:[],
            hint_result_var:"",
            result_final:["(2x-y+5)","(a+b)"],
            hint_solicitado:["ver variable que se repite en ambos sumandos","el factor común de la expresión es: x + y"],
            entrada:["2x-y+5","2x+5-y","-y+2x+5","-y+5+2x","5+2x-y","5-y+2x"],
            error:"factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
            validacion:"Haz encontrado el factor común"
        }

    ]
    
}
