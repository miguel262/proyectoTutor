export const Ejercicio1 = {
    prob_id : 2000,
    titulo : "Factorización por factor común compuesto.",
    dificultad:"3",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    //enunciado
    pasos: [
        {
            id:"0",
            expresion: "ax + bx + ay + by",
            paso: "Paso 1: agrupe los sumandos",
            explicacion:"agrupar los sumandos según los términos en común",
            result_final:["(ax + ay) + (bx + by)","(ax + bx) + (ay + by)"],
            hint_solicitado:["agrupa los sumandos con términos que se repiten (comenzar con los primeros términos de los sumandos)",
            "agrupa los sumandos con constantes iguales","los grupos son: (ax + ay) + (bx + by)"],
            soluciones:[{entrada:["ax+ay","bx+by"],pasoSiguiente:"1"},
                        {entrada:["ay+ax","bx+by"],pasoSiguiente:"1"},
                        {entrada:["ax+ay","by+bx"],pasoSiguiente:"1"},
                        {entrada:["ay+ax","by+bx"],pasoSiguiente:"1"},
                        {entrada:["ax+bx","ay+by"],pasoSiguiente:"2"},
                        {entrada:["bx+ax","ay+by"],pasoSiguiente:"2"},
                        {entrada:["ax+bx","by+ay"],pasoSiguiente:"2"},
                        {entrada:["bx+ax","by+ay"],pasoSiguiente:"2"}],
            error:"no se ha agrupado correctamente la expresión",
            validacion:"Haz agrupado los sumandos"
        },
        {
            id:"1",
            expresion: "(ax + ay) + (bx + by)",
            paso: "Paso 2: ingrese el factor común de cada grupo",
            explicacion:"a cada uno de los grupos de sumandos ingrese su factor común",
            result_final:[["(a)","(x+y)"],["(b)","(x+y)"]],
            hint_solicitado:["Hint 1", "hint 2", "hint 3"],
            soluciones: {entrada:["a","b"], pasoSiguiente: "3"} ,
            error:"factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
            validacion:"Haz encontrado el factor común"
        }, 
        {
            id:"2",
            expresion: "(ax + bx) + (ay + by)",
            paso: "Paso 2: ingrese el factor común de cada grupo",
            explicacion:"a cada uno de los grupos de sumandos ingrese su factor común",
            result_final:[["(x)","(a+b)"],["(y)","(a+b)"]],
            hint_solicitado:["hint 1", "hint 2", "hint3"],
            soluciones: {entrada:["x","y"], pasoSiguiente: "4"} ,
            error:"factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
            validacion:"Haz encontrado el factor común"
        },
        {
            id:"3",
            expresion: "a(x+y)+b(x+y)",
            paso: "Paso 3: ingrese el factor común",
            explicacion:"En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar",
            //result_variable:[],
            //hint_result_var:"",
            result_final:"(x+y)(a+b)",
            hint_solicitado:["ver variable que se repite en ambos sumandos","el factor común de la expresión es: x + y"],
            entrada:["x+y"],
            error:"factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
            validacion:"Haz encontrado el factor común"
        },
        {
            id:"4",
            expresion: "x(a+b)+y(a+b)",
            paso: "Paso 3: ingrese el factor común",
            explicacion:"En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar",
            //result_variable:[],
            //hint_result_var:"",
            result_final:"(a+b)(x+y)",
            hint_solicitado:["ver variable que se repite en ambos sumandos","el factor común de la expresión es: x + y"],
            entrada:["a+b"],
            error:"factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
            validacion:"Haz encontrado el factor común"
        }

    ]
    
}

export const Ejercicio2 = {
    prob_id : 2001,
    titulo : "Factorización por factor común compuesto.",
    dificultad:"3",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    pasos: [
        {
            id:"0",
            expresion: "2ax + 2bx - ay + 5a - by + 5b",
            paso: "Paso 1: agrupe los sumandos",
            explicacion:"agrupar los sumandos según los términos en común",
            result_final:["(2ax - ay + 5a) + (2bx - by + 5b)"],
            hint_solicitado:["agrupa los sumandos con términos que se repiten (comenzar con los primeros términos de los sumandos)",
            "agrupa los sumandos con constantes iguales","los grupos son: (2ax - ay + 5a) + (2bx - by + 5b)"],
            soluciones:[{entrada:["2ax-ay+5a","2bx-by+5b"],pasoSiguiente:"1"},
                        {entrada:["2ax-ay+5a","2bx+5b-by"],pasoSiguiente:"1"},
                        {entrada:["2ax-ay+5a","-by+2bx+5b"],pasoSiguiente:"1"},
                        {entrada:["2ax-ay+5a","-by+5b+2bx"],pasoSiguiente:"1"},
                        {entrada:["2ax-ay+5a","5b+2bx-by"],pasoSiguiente:"1"},
                        {entrada:["2ax-ay+5a","5b-by+2bx"],pasoSiguiente:"1"},

                        {entrada:["2ax+5a-ay","2bx-by+5b"],pasoSiguiente:"1"},
                        {entrada:["2ax+5a-ay","2bx+5b-by"],pasoSiguiente:"1"},
                        {entrada:["2ax+5a-ay","-by+2bx+5b"],pasoSiguiente:"1"},
                        {entrada:["2ax+5a-ay","-by+5b+2bx"],pasoSiguiente:"1"},
                        {entrada:["2ax+5a-ay","5b+2bx-by"],pasoSiguiente:"1"},
                        {entrada:["2ax+5a-ay","5b-by+2bx"],pasoSiguiente:"1"},

                        {entrada:["-ay+2ax+5a","2bx-by+5b"],pasoSiguiente:"1"},
                        {entrada:["-ay+2ax+5a","2bx+5b-by"],pasoSiguiente:"1"},
                        {entrada:["-ay+2ax+5a","-by+2bx+5b"],pasoSiguiente:"1"},
                        {entrada:["-ay+2ax+5a","-by+5b+2bx"],pasoSiguiente:"1"},
                        {entrada:["-ay+2ax+5a","5b+2bx-by"],pasoSiguiente:"1"},
                        {entrada:["-ay+2ax+5a","5b-by+2bx"],pasoSiguiente:"1"},

                        {entrada:["-ay+5a+2ax","2bx-by+5b"],pasoSiguiente:"1"},
                        {entrada:["-ay+5a+2ax","2bx+5b-by"],pasoSiguiente:"1"},
                        {entrada:["-ay+5a+2ax","-by+2bx+5b"],pasoSiguiente:"1"},
                        {entrada:["-ay+5a+2ax","-by+5b+2bx"],pasoSiguiente:"1"},
                        {entrada:["-ay+5a+2ax","5b+2bx-by"],pasoSiguiente:"1"},
                        {entrada:["-ay+5a+2ax","5b-by+2bx"],pasoSiguiente:"1"},

                        {entrada:["5a+2ax-ay","2bx-by+5b"],pasoSiguiente:"1"},
                        {entrada:["5a+2ax-ay","2bx+5b-by"],pasoSiguiente:"1"},
                        {entrada:["5a+2ax-ay","-by+2bx+5b"],pasoSiguiente:"1"},
                        {entrada:["5a+2ax-ay","-by+5b+2bx"],pasoSiguiente:"1"},
                        {entrada:["5a+2ax-ay","5b+2bx-by"],pasoSiguiente:"1"},
                        {entrada:["5a+2ax-ay","5b-by+2bx"],pasoSiguiente:"1"},

                        {entrada:["5a-ay+2ax","2bx-by+5b"],pasoSiguiente:"1"},
                        {entrada:["5a-ay+2ax","2bx+5b-by"],pasoSiguiente:"1"},
                        {entrada:["5a-ay+2ax","-by+2bx+5b"],pasoSiguiente:"1"},
                        {entrada:["5a-ay+2ax","-by+5b+2bx"],pasoSiguiente:"1"},
                        {entrada:["5a-ay+2ax","5b+2bx-by"],pasoSiguiente:"1"},
                        {entrada:["5a-ay+2ax","5b-by+2bx"],pasoSiguiente:"1"},
                    ],
            error:"no se ha agrupado correctamente la expresión",
            validacion:"Haz agrupado los sumandos"
        },
        {
            id:"1",
            expresion: "(2ax-ay+5a) + (2bx-by+5b)",
            paso: "Paso 2: ingrese el factor común de cada grupo",
            explicacion:"a cada uno de los grupos de sumandos ingrese su factor común",
            result_final:[["(a)","(2x-y+5)"],["(b)","(2x-y+5)"]],
            hint_solicitado:["los grupos de sumandos son los que estan en parentesis","hint2","hint3"],
            soluciones: {entrada:["a","b"], pasoSiguiente: "2"},
            error:"factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
            validacion:"Haz encontrado el factor común"
        },
        {
            expresion: "a(2x-y+5)+b(2x-y+5)",
            paso: "Paso 3: ingrese el factor común",
            explicacion:"En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar",
            //result_variable:[],
            //hint_result_var:"",
            result_final:"(2x-y+5)(a+b)",
            hint_solicitado:["ver variable que se repite en ambos sumandos","el factor común de la expresión es: x + y"],
            entrada:["2x-y+5","2x+5-y","-y+2x+5","-y+5+2x","5+2x-y","5-y+2x"],
            error:"factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
            validacion:"Haz encontrado el factor común"
        }

    ]
    
}
