function sumar(a: number, b: number): number {
    return a + b;
}

console.log(sumar(5, 10)); // correcto
console.log(sumar("hola", 5)); // lo hace pero no es correcto


function saludar(): void {
    console.log("Hola mundo!");
    // No tiene return
}

saludar()


let numeros: number[] = [1, 2, 3, 4];
numeros.push(5);     // ✅ Correcto
numeros.push("hola"); // ❌ Error


/** Interfaces
 * Permiten definir claramente la estructura que debe tener un objeto 
 * */

interface Persona {
    nombre: string;
    edad: number;
}

let usuario: Persona = {
    nombre: "Ana",
    edad: 22,
    esEstudiante: true,
};

console.log(usuario.nombre);

usuario.edad = 30;
usuario.nombre = true;

console.log(usuario.nombre);
console.log(usuario.edad);

// Union de tipos
let id: number | string;

id = 123;
id = "ABCD"
id = true;


/// Enum
/// *** VERIFICAR QUE ONDA CON LOS ENUMS EN TYPESCRIPT *** ///
/*
enum Status {
    Pendiente = "Pendiente",
    EnProgreso = "En Progreso",
    Completado = "Completado"
}

let statusActual: Status = Status.EnProgreso;
console.log(statusActual);
*/

// Valores ausentes:
let nombre: string | undefined;

nombre = "Daniela";   // ✅ correcto
nombre = undefined; // ✅ también correcto


let edad: number | null = null;

edad = 25;    // ✅ correcto
edad = null;  // ✅ correcto también


let dato: unknown = "Hola mundo";

// dato.toUppercase(); // ❌ Esto es ilegal porque no sabemos qué tipo de dato es

if (typeof dato === "string") {
  console.log(dato.toUpperCase()); // ✅ Correcto después de verificar
}