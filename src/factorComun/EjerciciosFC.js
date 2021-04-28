export const Ejercicio1 = {
    prob_id : 1000,
    titulo : "Factorización por factor común.",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    expresion: "6xy^2 - 15x^2y + 21x^2y^2",
    paso: "Paso 1: Ingrese el factor común de la siguiente expresión: ",
    //explicacion:"En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar.",
    result_variable:["3","x","y","3x","3y","xy"],
    hint_result_var:"Aún la ecuación es factorizable, añada otro factor común",
    result_final:"(3xy)(2y-5x+7xy)",
    hint_solicitado:["Un factor común de esta ecuación es 3, pero la ecuación todavía es factorizable","Otro factor común es 3x, pero todavía se puede agregar otro valor al factor común","El factor común de la expresión es 3xy"],
    entrada:["3xy","3yx"],
    error:"Factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
    validacion:"Haz encontrado el factor común",
    dificultad:"3"
}

export const Ejercicio2 = {
    prob_id : 1001,
    titulo : "Factorización por factor común",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    expresion: "\\frac{5x^6}{3y^2} - \\frac{10x^2}{21y}- \\frac{20x^3}{9y^4}",
    paso: "Ingrese el factor común de la siguiente expresión: ",
    //explicacion:"En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar",
    result_variable:["5","5x","5x^2","1/3","(1)/(3)","5/3","(5)/(3)","5x/3","(5x)/(3)","5x^2/3","(5x^2)/(3)","5/(3y)","(5)/(3y)","5x/(3y)","(5x)/(3y)"],
    hint_result_var:"Aún la ecuación es factorizable, añada otro factor común",
    result_final:"( \\frac{5x^2}{3y} )( \\frac{x^4}{y} - \\frac{2}{7} - \\frac{4x}{3y^3} )",
    hint_solicitado:["Un factor común de esta ecuación es 5/3, pero la ecuación todavía es factorizable","Otro factor común es 5x^2/3, pero todavía se puede agregar otro valor al factor común","El factor común de la expresión es (5x^2)/(3y)"],
    entrada:["(5x^2)/(3y)" ,"5x^2/(3y)"],
    error:"Factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
    validacion:"Haz encontrado el factor común",
    dificultad:"3"
  
}
export const Ejercicio3 = {
    prob_id : 1002,
    titulo : "Factorización por factor común",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    expresion: "2x^2y+3x^2z",
    enunciado: "Ingrese el factor común de la siguiente expresión: ",
    //explicacion:"En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar",
    result_variable:["x"],
    hint_result_var:"Aún la ecuación es factorizable, añada otro factor común",
    result_final:"(x^2)(2y+3z)",
    hint_solicitado:["Un factor común de esta ecuación es x, pero la ecuación todavía es factorizable","Es un valor elevado al cuadrado","El factor común de la expresión es x^2"],
    entrada:["x^2"],
    error:"Factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
    validacion:"Haz encontrado el factor común",
    dificultad:"1"
}
export const Ejercicio4 = {
    prob_id : 1003,
    titulo : "Factorización por factor común",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    expresion: "12x+18y-24z",
    enunciado: "Ingrese el factor común de la siguiente expresión: ",
    //explicacion:"En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar",
    result_variable:["3"],
    hint_result_var:"Aún la ecuación es factorizable, añada otro factor común",
    result_final:"(6)(2x+3y-4z)",
    hint_solicitado:["El factor común de esta expresión es una constante","Un factor común de esta ecuación es 3, pero la ecuación todavía es factorizable","El factor común de la expresión es 6"],
    entrada:["6"],
    error:"factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
    validacion:"Haz encontrado el factor común",
    dificultad:"1"
}

export const Ejercicio5 = {
    prob_id : 1004,
    titulo : "Factorización por factor común",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    expresion: "\\frac{x^20}{20} + \\frac{x^10}{10} - \\frac{x^5}{5}",
    enunciado: "Ingrese el factor común de la siguiente expresión: ",
    //explicacion:"En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar",
    result_variable:["1/5","x","x^2","x^3","x^4","x^5","x/5","x^2/5","x^3/5","x^4/5"],
    hint_result_var:"Aún la ecuación es factorizable, añada otro factor común",
    result_final:"(\\frac{x^5}{5})(\\frac{x^15}{4} + \\frac{x^5}{2} - 1)",
    hint_solicitado:["Un factor común de esta ecuación es 1/5, pero la ecuación todavía es factorizable","Otro factor común es x/5, pero todavía se puede agregar otro valor al factor común","El factor común de la expresión es x^5/5"],
    entrada:["x^5/5","(x^5)/5","(x^5)/(5)"],
    error:"Factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
    validacion:"Haz encontrado el factor común",
    dificultad:"4"
}

export const Ejercicio6 = {
    prob_id : 1005,
    titulo : "Factorización por factor común",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    expresion: "10y^5-30xy^5-15xy^6",
    enunciado: "Ingrese el factor común de la siguiente expresión: ",
    //explicacion:"En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar",
    result_variable:["5","y","y^2","y^3","y^4","y^5","5y","5y^2","5y^3","5y^4"],
    hint_result_var:"Aún la ecuación es factorizable, añada otro factor común",
    result_final:"(5y^5)(2-6x-3xy)",
    hint_solicitado:["Un factor común de esta ecuación es 5, pero la ecuación todavía es factorizable","Otro factor común es 5y, pero todavía se puede agregar otro valor al factor común","El factor común de la expresión es 5y^5"],
    entrada:["5y^5"],
    error:"Factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
    validacion:"Haz encontrado el factor común",
    dificultad:"3"
}

export const Ejercicio7 = {
    prob_id : 1006,
    titulo : "Factorización por factor común",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    expresion: "6x^2yz-30xy^2z^2+12x^2y^2z^2",
    enunciado: "Ingrese el factor común de la siguiente expresión: ",
    //explicacion:"En este caso todos los términos de la expresión algebraica presentan un factor común, la tarea es encontrar dicho factor común para luego factorizar",
    result_variable:["6","x","y","z","6x","6y","6z","xy","xz","yz","yx","zx","zy","6xy","6yx","6xz","6zx","6yz","6zy","xyz","xzy","yxz","yzx","zxy","zyx"],
    hint_result_var:"Aún la ecuación es factorizable, añada otro/s factor común",
    result_final:"(6xyz)(x-5yz+2xyz)",
    hint_solicitado:["Un factor común de esta ecuación es 6, pero la ecuación todavía es factorizable","Otro factor común es 6x, pero todavía se puede agregar otro valor al factor común","El factor común de la expresión es 6xyz"],
    entrada:["6xyz","6yxz","6zxy","6zyx"],
    error:"factor común incorrecto, ingrese el factor común correspondiente a la expresión dada",
    validacion:"Haz encontrado el factor común",
    dificultad:"4"
}

