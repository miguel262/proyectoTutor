export const Ejercicio1 = {
    prob_id : 5000,
    titulo : "Factorización por trinomios cuadráticos.",
    pasos: [
        {
            expresion: "x^2+8x+12",
            paso: "Paso 1: identificar los valores de a, b y c",
            explicacion:"Los valores de a, b y c provienen de una expresión cuadrática de la forma ax^2+bx+c",
            result_final:["1","8","12"],
            hint_solicitado:["El valor de a es el que acompaña al x^2",
            "El valor de a es 1","a =1, b=8, c=12"],
            entrada:["1","8","12"],
            error:"no son los valores correspondientes a los valores a, b y c",
            validacion:"Haz identificado los valores de a, b y c"
        },
        {
            expresion: "x^2+8x+12",
            paso: "Paso 2: calcular discriminante Δ= b^2-4ac",
            explicacion:"utilice la fórmula Δ= b^2-4ac, donde a es el término que acompaña al cuadrado, b es el término que acompaña a la variable y c es el valor de la constante",
            result_final:"16",
            hint_solicitado:["reemplace en la fórmula Δ por: a=1, b=8 y c=12",
            "","el valor del discriminante es 16"],
            entrada:"16",
            error:"no se han ingresado correctamente el discriminante de la expresión",
            validacion:"Haz calculado correctamente el discriminante"
        },
        {
            expresion: "Δ=16",
            paso: "Paso 3: ¿a que caso corresponde el discriminante?",
            explicacion:"Si el discriminante es mayor a 0 se puede factorizar y sus raices son diferentes, si es igual a 0 las dos raíces son iguales y si el discriminante es menor a 0, no es posible factorizar, por lo que tiene raices complejas",
            result_final:["Posee 2 raíces diferentes","Posee 2 raíces iguales","Posee 2 raíces complejas"],
            hint_solicitado:["Posee 2 raíces diferentes"],
            entrada:"0",
            error:"caso mal ingresado",
            validacion:"Haz descubierto a que caso corresponde el discriminante"
        },
        {
            expresion: "Δ=16, a =1, b=8, c=12 ",
            paso: "Paso 4: Utilice la fórmula para ",
            formula:["x_{1}=\\frac{-b+\\sqrt{Δ}}{2a}","x_{2}=\\frac{-b-\\sqrt{Δ}}{2a}"],
            explicacion:"",
            result_final:["-2","-6"],
            hint_solicitado:["el valor de x1=-2 y x2=-6"],
            entrada:["-2","-6"],
            error:"raices mal ingresadas",
            validacion:"Haz encontrado las raices del polinomio"
        },
        {
            expresion: "x_{1}=-2, x_{2}=-6",
            paso: "Paso 5: Ingresar factorización por trinomios cuadráticos",
            explicacion:"",
            result_final:["x+2","x+6"],
            hint_solicitado:["el valor de x1=-2 y x2=-6"],
            entrada:[["x+2","x+6"],[["x+6","x+2"]]],
            error:"error en la factorización",
            validacion:"Haz factorizado por trinomios cuadráticos correctamente"
        }
    ]
}