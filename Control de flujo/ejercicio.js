// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
let edadVotar = 18;
if (edadVotar >= 18) {
    console.log("Eres mayor de edad, puedes votar!");
} else {
    console.log("Eres menor de edad, no puedes votar");
} 

/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
let num = 56; 
if (num % 7 == 0 && num % 8 == 0) {
    console.log(true);
} else {
    console.log(false);
}
/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

let numAleat = 16; 
if (numAleat % 4 == 0 || numAleat % 9 == 0) {
    console.log(true);
} else {
    console.log(false);
}

/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
let categoria = "terror";
switch (categoria) {
    case "accion":
        console.log ("Vamos Rápidos y Furiosos");
        break;
    case "drama":
        console.log ("Se te antoja una lloradita?");
        break;
    case "comedia":
        console.log("Es momento de reír a carcajadas");
        break;
    case "romance":
        console.log("Todos necesitamos amor en esta vida");
        break;
    case "suspenso":
        console.log("Cuidado! Alguien puede estarte vigilando");
        break;
    case "terror":
        console.log("No olvides ver bajo la cama");
        break;
        default :
        console.log("No existe esa categoría");
        break;
}

/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

let opciones = "2";
switch(opciones) {
    case "1":
        console.log("Retirar dinero");
        break;
    case "2":
        console.log("Transferencia");
        break;
    case "3":
        console.log("Depósito");
        break;
    case "4":
        console.log("Pago de servicios");
        break;
        default :
        console.log("Ingrese una opción correcta");
        break;
}
/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

let pesosMx = "70";
let opcionConversion = "4"
switch(opcionConversion) {
    case "1":
        let dolares = pesosMx * .058;
        console.log(`${pesosMx} pesos mexicanos son ${dolares} dolares`);
        break;
    case "2":
        let euros = pesosMx * .054;
        console.log(`${pesosMx} pesos mexicanos son ${euros} euros`);
        break;
    case "3":
        let yenes = pesosMx * 8.41;
        console.log(`${pesosMx} pesos mexicanos son ${yenes} yenes japoneses`);
        break;
    case "4":
        let libraEst = pesosMx * .046;
        console.log(`${pesosMx} pesos mexicanos son ${libraEst} libras esterlinas`);
        break;
    case "5":
        let francoSuizo = pesosMx * .051;
        console.log(`${pesosMx} pesos mexicanos son ${francoSuizo} francos suizos`);
        break;
        default:
        console.log("No tengo esa divisa");
        break;
}