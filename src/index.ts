//Declaracion de variables: Existen 3 tipos: const que siempre hjay que inicializarlo, var y let. Siempre usaremos el let

const z = "fran";
if(true){
    let x="maria";//bloque
    var y ="Pepe"//se puede cambiar fuera del bloque ambito global
}
y="miguel";

//TIPOS DE DATOS
/**
 * string
 * number
 * boolean
 */

let nombre:string="David";
let edad:number=24;
let mayorEdad=true;

/**
 * Tipos de datos especiales
 * 
 * any
 * unknown
 * void
 * 
 * 
 */
let cualquierCosa:any="Hola";
cualquierCosa=2;
cualquierCosa=true;

//Uso del tipo unknown
let tipoDeDatoDesconocido:unknown;
tipoDeDatoDesconocido="nombre";
tipoDeDatoDesconocido=24;

if(typeof(tipoDeDatoDesconocido)=="string"){
    console.log(tipoDeDatoDesconocido.toLocaleLowerCase);
}

/**
 * Concatenar:
 * 
 * Se puede hacer como en java, usando un +
 * 
 * Se puede hacer con
 */
console.log("Mi nombre es "+nombre);

console.log(`Tu nombre es ${nombre}`);