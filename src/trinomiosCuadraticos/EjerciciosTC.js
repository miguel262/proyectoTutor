export const Ejercicio1 = {
    prob_id : 5000,
    titulo : "Factorización por trinomios cuadráticos.",
    dificultad:"1",
    textoProblema: "Texto problema/ejercicio, planteamiento",
    pasos: [
        {
            id:"0",
            expresion: "x^2+8x+12",
            paso: "Paso 1: identificar el valor de a en la expresión dada",
            //explicacion:"Los valores de a, b y c provienen de una expresión cuadrática de la forma ax^2+bx+c",
            result_final:"a=1",
            hint_solicitado:["hint 1","hint 2",
            "El valor de a es 1"],
            soluciones:[{entrada:["1"],pasoSiguiente:"1"}],
            error:"no es el valor de a",
            //validacion:"Haz encontrado el valor de a"
        },
        {
            id:"1",
            expresion: "x^2+8x+12",
            paso: "Paso 2: identificar los valores de a, b y c de la expresión cuadrática",
            explicacion:"Los valores de a, b y c provienen de una expresión cuadrática de la forma ax^2+bx+c",
            result_final:"a=1, b=8, c=12",
            hint_solicitado:["El valor de a es el que acompaña al x^2",
            "El valor de a es 1","a =1, b=8, c=12"],
            soluciones:[{entrada:["1","8","12"],pasoSiguiente:"2"}],
            error:"no son los valores correspondientes a los valores a, b y c",
            validacion:"Haz identificado los valores de a, b y c"
        },
        {
            id:"2",
            expresion: "a=1, b=8, c=12",
            paso: "Paso 3: calcular discriminante",
            explicacion:"utilice la fórmula Δ= b^2-4ac, donde a es el término que acompaña al cuadrado, b es el término que acompaña a la variable y c es el valor de la constante",
            result_final:"Δ=16",
            hint_solicitado:["reemplace en la fórmula Δ por: a=1, b=8 y c=12",
            "","el valor del discriminante es 16"],
            soluciones:[{entrada:"16",pasoSiguiente:"3"}],
            error:"no se han ingresado correctamente el discriminante de la expresión",
            validacion:"Haz calculado correctamente el discriminante"
        },
        {
            id:"3",
            expresion: "Δ=16",
            paso: "Paso 4: ¿a que caso corresponde el discriminante?",
            explicacion:"Si el discriminante es mayor a 0 se puede factorizar y sus raices son diferentes, si es igual a 0 las dos raíces son iguales y si el discriminante es menor a 0, no es posible factorizar, por lo que tiene raices complejas",
            result_final:"Este ejercicio posee 2 raíces diferentes, Δ>0",
            soluciones:[{entrada:"1",pasoSiguiente:"4"}],
            error:"caso mal ingresado",
            validacion:"Haz descubierto a que caso corresponde el discriminante"
        },
        {
            id:"4",
            expresion: "Δ = 16, a = 1, b = 8, c = 12 ",
            paso: "Paso 5: Calcular los valores de x1 y x2",
            formula:["x_{1}=\\frac{-b+\\sqrt{Δ}}{2a}","x_{2}=\\frac{-b-\\sqrt{Δ}}{2a}"],
            explicacion:"",
            result_final:"x_{1}=-2, x_{2}=-6",
            hint_solicitado:["utilice la fórmula cuadrática","el valor de x1=-2 y x2=-6"],
            soluciones:[{entrada:["-2","-6"],pasoSiguiente:"5"}],
            error:"raices mal ingresadas",
            validacion:"Haz encontrado las raices del polinomio"
        },
        {
            id:"5",
            expresion: "x_{1}=-2, x_{2}=-6",
            paso: "Paso 6: Ingresar factorización por trinomios cuadráticos",
            explicacion:"",
            result_final:"(x+2)(x+6)",
            hint_solicitado:["hint 1","hint 2","(x+2)(x+6)"],
            entrada:[["x+2","x+6"],["x+6","x+2"]],
            error:"error en la factorización",
            validacion:"Haz factorizado por trinomios cuadráticos correctamente"
        }
    ]
}