// ============================================================
// DATOS DE LOS TEMAS (ESTRUCTURA MODULAR)
// Añade nuevos temas o tarjetas fácilmente en este array.
// ============================================================

const themesData = [
  {
    id: 1,
    title: "¿Qué es JavaScript y para qué se usa?",
    shortTitle: "¿Qué es JavaScript?",
    description:
      "JavaScript es un lenguaje de programación que se utiliza principalmente para dar interactividad y comportamiento a las páginas web. Mientras que HTML se encarga de la estructura y CSS del diseño, JavaScript permite que la página reaccione a las acciones del usuario, como hacer clic en un botón, enviar un formulario, mostrar u ocultar contenido, validar datos o cambiar información sin recargar la página.",
    cards: [
      {
        subtitle:
          "Mensajes emergentes en el navegador. alert, prompt, confirm.",
        code: `alert("Hola, esto es JavaScript");

let edad = prompt("¿Cuál es tu edad?");
console.log("Tu edad es: " + edad);

let respuesta = confirm("¿Quieres continuar?");
console.log(respuesta); // true o false`,
      },
      {
        subtitle:
          "Al hacer clic en el botón, se ejecuta la función saludar().",
        code: `<button onclick="saludar()">Haz clic aquí</button>

function saludar() {
  alert("Has hecho clic en el botón");
}`,
      },
      {
        subtitle: "Comentarios de una sola línea (//)",
        code: `// Declaramos una variable con el nombre del usuario
let nombre = "Víctor";

// Mostramos el nombre por consola
console.log(nombre);`,
      },
      {
        subtitle: "Comentarios de varias líneas (/* */)",
        code: `/*
Este bloque de código
muestra un saludo personalizado
usando una variable
*/
let saludo = "Hola Víctor";
console.log(saludo);`,
      },
    ],
  },
  {
    id: 2,
    title: "Variables y tipos de datos",
    shortTitle: "Variables y tipos de datos",
    description:
      "Las variables se usan para guardar información que luego puede utilizarse, modificarse o mostrarse en la página. En JavaScript moderno se utilizan principalmente let y const. let se usa cuando el valor puede cambiar, mientras que const se usa cuando el valor no debe cambiar.",
    cards: [
      {
        subtitle: "Declaración con let y const",
        code: `let nombre = "Carlos";
let edad = 30;
const pais = "Colombia";`,
      },
      {
        subtitle: "Tipos de datos básicos",
        code: `let texto = "Hola mundo"; // String (texto)
let numero = 25; // Number (número)
let activo = true; // Boolean (verdadero o falso)
let vacio = null; // Valor vacío intencional
let indefinido; // Undefined (sin valor)`,
      },
    ],
  },
  {
    id: 3,
    title: "Operadores básicos y concatenación",
    shortTitle: "Operadores básicos",
    description:
      "Los operadores permiten trabajar con valores y variables: hacer cálculos, comparar datos y evaluar condiciones. Son esenciales para crear lógica en una página web, como validar formularios, mostrar mensajes o ejecutar acciones según una condición.",
    cards: [
      {
        subtitle: "Operadores aritméticos básicos",
        code: `let a = 10;
let b = 5;
let suma = a + b;
let resta = a - b;
let multiplicación = a * b;
let división = a / b;
let resto_de_una_división = a % b;
let exponenciación = a ** b;`,
      },
      {
        subtitle: "Operadores de comparación y lógicos",
        code: `let edad = 20;
edad > 18; // mayor que
edad === 20; // igual estricto
edad !== 15; // distinto
edad > 18 && edad < 65; // AND (y)
edad < 18 || edad > 65; // OR (o)
const result = null ?? 'default'; // operador de fusión nula`,
      },
      {
        subtitle: "Concatenación de textos",
        code: `let nombre = "Víctor";
let saludo = "Hola " + nombre + ", bienvenido.";
console.log(saludo);`,
      },
    ],
  },
  {
    id: 4,
    title: "Booleanos y números",
    shortTitle: "Booleanos y números",
    description:
      "JavaScript emplea un único tipo Number para contabilizar los números. Enteros, números de punto flotante y números negativos son todos del tipo Number; hasta casos especiales como ∞ y NaN. Además, JavaScript trata los booleanos como números en operaciones matemáticas.",
    cards: [
      {
        subtitle: "Conversión implícita: número + cadena",
        code: `const result = 5 + '10';
console.log(result); // 510`,
      },
      {
        subtitle: "Operaciones aritméticas con cadenas",
        code: `const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20`,
      },
      {
        subtitle: "Booleanos en operaciones matemáticas",
        code: `const result1 = true + 1;
console.log(result1); // 2

const result2 = false + 1;
console.log(result2); // 1`,
      },
      {
        subtitle: "null y undefined en operaciones",
        code: `const result1 = null + 5;
console.log(result1); // 5

const result2 = undefined + 1;
console.log(result2); // NaN`,
      },
      {
        subtitle: "Asociatividad de operadores",
        code: `let a, b;
a = b = 5;
console.log(a); // 5
console.log(b); // 5
console.log(a + b); // 10`,
      },
      {
        subtitle: "Operador de exponente (asociativo a la derecha)",
        code: `const result = 2 ** 3 ** 2;
console.log(result); // 512`,
      },
      {
        subtitle: "Incremento y decremento (++x, x++)",
        code: `let x = 5;
console.log(++x); // 6
console.log(x); // 6

let y = 5;
console.log(y++); // 5
console.log(y); // 6`,
      },
      {
        subtitle: "Operador de decremento (--x, x--)",
        code: `let x = 5;
console.log(--x); // 4
console.log(x); // 4

let y = 5;
console.log(y--); // 5
console.log(y); // 4`,
      },
      {
        subtitle: "Operador de asignación de suma (+=)",
        code: `let total = 10;
total += 5;
console.log(total); // 15`,
      },
      {
        subtitle: "Igualdad vs igualdad estricta",
        code: `console.log(5 == "5"); // true
console.log(5 === '5'); // false
console.log(5 != "5"); // false
console.log(5 !== "5"); // true`,
      },
      {
        subtitle: "Valores falsy",
        code: `const truthyOrFalsy = true;
console.log(Boolean(truthyOrFalsy)); // true

// Valores falsy: "", 0, false, null, undefined, NaN`,
      },
      {
        subtitle: "Operador unario de suma (+)",
        code: `const str = '42';
const strToNum = +str;
console.log(strToNum); // 42
console.log(typeof str); // string
console.log(typeof strToNum); // number`,
      },
      {
        subtitle: "Operador lógico NOT (!)",
        code: `let isOnline = true;
console.log(!isOnline); // false

let isOffline = false;
console.log(!isOffline); // true`,
      },
      {
        subtitle: "isNaN() vs Number.isNaN()",
        code: `console.log(isNaN(NaN)); // true
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN(true)); // false
console.log(isNaN(null)); // false
console.log(isNaN(37)); // false
console.log(isNaN("37")); // false
console.log(isNaN("blabla")); // true

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("NaN")); // false
console.log(Number.isNaN(undefined)); // false`,
      },
      {
        subtitle: "parseFloat() y parseInt()",
        code: `console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("3.14 abc")); // 3.14
console.log(parseFloat("abc 3.14")); // NaN

console.log(parseInt("42")); // 42
console.log(parseInt("42px")); // 42
console.log(parseInt("3.14")); // 3
console.log(parseInt("abc123")); // NaN`,
      },
      {
        subtitle: "toFixed() - Formateo de decimales",
        code: `let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"

console.log((3.14159).toFixed(3)); // "3.142"
console.log((3.14449).toFixed(3)); // "3.144"
console.log((3.14550).toFixed(3)); // "3.146"`,
      },
      {
        subtitle: "null vs undefined",
        code: `console.log(null == undefined); // true
console.log(null === undefined); // false`,
      },
    ],
  },

  {
    id: 5,
    title: "Estructuras de control",
    shortTitle: "Estructuras de control",
    description:
      "Las estructuras de control permiten que JavaScript ejecute código solo cuando se cumple una condición. La más usada es if, que evalúa una condición y decide qué parte del código ejecutar. También existe switch, útil cuando se comparan muchos valores posibles.",
    cards: [
      {
        subtitle: "if / else if / else",
        code: `let edad = 65;
if (edad < 18) {
  console.log("Eres menor de edad");
} else if (edad >= 18 && edad < 65) {
  console.log("Eres adulto");
} else {
  console.log("Eres adulto mayor");
}`,
      },
      {
        subtitle: "switch",
        code: `let dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "viernes":
    console.log("Fin de semana cerca");
    break;
  default:
    console.log("Día normal");
}`,
      },
      {
        subtitle: "Operador ternario",
        code: `const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';
console.log(\`It's a \${weather} day!\`);`,
      },
    ],
  },
  {
    id: 6,
    title: "Objeto Math",
    shortTitle: "Objeto Math",
    description:
      "JavaScript ofrece un objeto Math incorporado para abordar retos matemáticos más complejos. Esta herramienta útil proporciona una variedad de métodos que facilitan realizar cálculos avanzados y manipular números.",
    cards: [
      {
        subtitle: "Math.random() - Número aleatorio",
        code: `const randomNum = Math.random();
console.log(randomNum); // 0.44131213324430163`,
      },
      {
        subtitle: "Math.min() y Math.max()",
        code: `const smallest = Math.min(1, 5, 3, 9);
console.log(smallest); // 1

const largest = Math.max(1, 5, 3, 9);
console.log(largest); // 9`,
      },
      {
        subtitle: "Math.ceil() y Math.floor()",
        code: `console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.7)); // 4`,
      },
      {
        subtitle: "Math.round() - Redondeo al entero más cercano",
        code: `console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5`,
      },
      {
        subtitle: "Math.trunc() - Elimina decimales",
        code: `console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(9.1)); // 9`,
      },
      {
        subtitle: "Math.sqrt() y Math.cbrt()",
        code: `console.log(Math.sqrt(81)); // 9
console.log(Math.cbrt(27)); // 3`,
      },
      {
        subtitle: "Math.abs() - Valor absoluto",
        code: `console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5`,
      },
      {
        subtitle: "Math.pow() - Potencia",
        code: `console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(8, 2)); // 64`,
      },
    ],
  },
  {
    id: 7,
    title: "Bucles (loops)",
    shortTitle: "Bucles (loops)",
    description:
      "Los bucles permiten repetir un bloque de código varias veces sin tener que escribirlo una y otra vez. Se usan para recorrer arrays, ejecutar tareas repetitivas y trabajar con múltiples elementos en una página web. Los bucles más comunes en JavaScript son for, while y for...of.",
    cards: [
      {
        subtitle: "Bucle for",
        code: `for (let i = 1; i <= 5; i++) {
  console.log("Vuelta número " + i);
}
// Vuelta número 1
// Vuelta número 2
// Vuelta número 3
// Vuelta número 4
// Vuelta número 5`,
      },
      {
        subtitle: "Bucle for...of (arrays y cadenas)",
        code: `const frutas = ["manzana", "banano", "uvas"];
for (const fruta of frutas) {
  console.log("Me gusta: " + fruta);
}
// Me gusta: manzana
// Me gusta: banano
// Me gusta: uvas

const palabra = "Victor";
for (const char of palabra) {
  console.log(char);
}
// V
// i
// c
// t
// o
// r`,
      },
      {
        subtitle: "for...of con array de objetos",
        code: `const personas = [
  {nombre: "Victor", edad: 54},
  {nombre: "Cristina", edad: 44},
  {nombre: "Misi", edad: 15},
];
for (const persona of personas) {
  console.log("El nombre es " + persona.nombre + " y su edad es " + persona.edad);
}
// El nombre es Victor y su edad es 54
// El nombre es Cristina y su edad es 44
// El nombre es Misi y su edad es 15`,
      },
      {
        subtitle: "Bucle for...in (objetos)",
        code: `const equipo = {
  nombre: "Pucela",
  año: 1928,
  división: "Segunda",
  ciudad: "Valladolid",
  color: {
    color1: "Blanco",
    color2: "Violeta",
  }
};
for(const team in equipo){
  console.log(equipo[team]);
}
// Pucela
// 1928
// Segunda
// Valladolid
// { color1: 'Blanco', color2: 'Violeta' }`,
      },
      {
        subtitle: "Bucle while",
        code: `let energia = 5;
while (energia > 0) {
  console.log("Jugando... energía restante: " + energia);
  energia--;
}
// Jugando... energía restante: 5
// Jugando... energía restante: 4
// Jugando... energía restante: 3
// Jugando... energía restante: 2
// Jugando... energía restante: 1`,
      },
      {
        subtitle: "Bucle do...while",
        code: `let contador = 10;
do {
  console.log(\`Tiempo final para el fin del mundo \${contador}\`);
  contador--;
} while(contador > 0);
// Tiempo final para el fin del mundo 10
// ... hasta 1`,
      },
      {
        subtitle: "break y continue",
        code: `for(let n=0; n<=10; n++){
  if (n === 5) { break; }
  console.log(n);
}
// 0 1 2 3 4

for(let suerte=1; suerte<=15; suerte++){
  if (suerte === 13) { continue; }
  console.log(suerte);
}
// 1 2 3 4 5 6 7 8 9 10 11 12 14 15`,
      },
      {
        subtitle: "Etiquetas (labels) con break",
        code: `outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
break outerLoop;
    }
    console.log(\`i: \${i}, j: \${j}\`);
  }
}
// "i: 0, j: 0"
// "i: 0, j: 1"
// "i: 0, j: 2"
// "i: 1, j: 0"`,
      },
    ],
  },
  {
    id: 8,
    title: "Funciones",
    shortTitle: "Funciones",
    description:
      "Las funciones son bloques de código que realizan una tarea específica y pueden ejecutarse cuando se necesiten. Sirven para organizar el código, evitar repeticiones y hacer que los programas sean más claros y fáciles de mantener.",
    cards: [
      {
        subtitle: "Función básica sin parámetros",
        code: `function greet() {
  console.log("Hello, Jessica!");
}
greet(); // "Hello, Jessica!"`,
      },
      {
        subtitle: "Función con parámetros",
        code: `function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice"); // Hello, Alice!`,
      },
      {
        subtitle: "Función con return",
        code: `function sumar(a, b) {
  return a + b;
}
let resultado = sumar(5, 3);
console.log(resultado); // 8`,
      },
      {
        subtitle: "Función anónima",
        code: `const sum = function (num1, num2) {
  return num1 + num2;
};
console.log(sum(3, 4)); // 7`,
      },
      {
        subtitle: "Parámetros predeterminados",
        code: `function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}
greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!`,
      },
      {
        subtitle: "Funciones flecha (arrow functions)",
        code: `const multiplicar = (a, b) => {
  return a * b;
};
console.log(multiplicar(4, 2)); // 8`,
      },
      {
        subtitle: "Función flecha sin parámetros",
        code: `const greetings = () => {
  console.log("Hello");
};
greetings();`,
      },
      {
        subtitle: "Función flecha de una línea",
        code: `const greetings = name => console.log("Hello, " + name + "!");
greetings("Victor");`,
      },
      {
        subtitle: "return en funciones flecha",
        code: `const calculateArea = (width, height) => {
  return width * height;
};
console.log(calculateArea(5, 3)); // 15`,
      },
      {
        subtitle: "Return implícito en una línea",
        code: `const calculateArea = (width, height) => width * height;
console.log(calculateArea(5, 3)); // 15`,
      },
    ],
  },
  {
    id: 9,
    title: "El alcance en la programación",
    shortTitle: "Alcance (scope)",
    description:
      "El alcance en la programación se refiere a la visibilidad y accesibilidad de las variables en diferentes partes de tu código. Determina dónde se pueden acceder o modificar las variables.",
    cards: [
      {
        subtitle: "Alcance global",
        code: `let globalVar = "I'm a global variable";
function printGlobalVar() {
  console.log(globalVar);
}
printGlobalVar(); // "I'm a global variable"`,
      },
      {
        subtitle: "Alcance local",
        code: `function greet() {
  let message = "Hello, local scope!";
  console.log(message);
}
greet(); // "Hello, local scope!"
// console.log(message); // This will throw an error`,
      },
    ],
  },

  {
    id: 10,
    title: "Arrays (listas)",
    shortTitle: "Arrays (listas)",
    description:
      "Los arrays son estructuras que permiten almacenar varios valores en una sola variable. Son ideales para trabajar con listas de datos: nombres, números, objetos, etc. Esta sección está pendiente de ampliar en el documento original.",
    cards: [
      {
        subtitle: "Crear un array y acceder a sus elementos",
        code: `const frutas = ["manzana", "banano", "uvas"];

console.log(frutas[0]); // "manzana"
console.log(frutas[1]); // "banano"
console.log(frutas.length); // 3`,
      },
      {
        subtitle:
          "Añadir y eliminar elementos (push, pop, unshift, shift)",
        code: `const numeros = [1, 2, 3];

numeros.push(4);      // añade al final -> [1,2,3,4]
numeros.pop();        // quita el último -> [1,2,3]
numeros.unshift(0);   // añade al inicio -> [0,1,2,3]
numeros.shift();      // quita el primero -> [1,2,3]

console.log(numeros);`,
      },
      {
        subtitle: "Recorrer un array con forEach",
        code: `const colores = ["rojo", "verde", "azul"];

colores.forEach((color, indice) => {
  console.log(indice + ": " + color);
});
// 0: rojo
// 1: verde
// 2: azul`,
      },
      {
        subtitle: "map, filter y reduce",
        code: `const numeros = [1, 2, 3, 4, 5];

const dobles = numeros.map(n => n * 2);
console.log(dobles); // [2, 4, 6, 8, 10]

const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2, 4]

const suma = numeros.reduce((acc, n) => acc + n, 0);
console.log(suma); // 15`,
      },
      {
        subtitle: "Buscar elementos (find, indexOf, includes)",
        code: `const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 }
];

const ana = personas.find(p => p.nombre === "Ana");
console.log(ana); // { nombre: "Ana", edad: 25 }

const frutas = ["manzana", "pera"];
console.log(frutas.indexOf("pera")); // 1
console.log(frutas.includes("uva")); // false`,
      },
    ],
  },
  {
    id: 11,
    title: "Objetos",
    shortTitle: "Objetos",
    description:
      "Los objetos permiten agrupar datos relacionados mediante pares clave-valor. Son fundamentales en JavaScript para modelar entidades del mundo real (usuarios, productos, configuraciones...). Esta sección está pendiente de ampliar en el documento original.",
    cards: [
      {
        subtitle: "Crear un objeto y acceder a sus propiedades",
        code: `const usuario = {
  nombre: "Victor",
  edad: 54,
  activo: true
};

console.log(usuario.nombre);   // "Victor"
console.log(usuario["edad"]);  // 54`,
      },
      {
        subtitle: "Añadir, modificar y eliminar propiedades",
        code: `const coche = { marca: "Seat", modelo: "Ibiza" };

coche.año = 2020;            // añadir
coche.modelo = "León";       // modificar
delete coche.marca;          // eliminar

console.log(coche); // { modelo: "León", año: 2020 }`,
      },
      {
        subtitle: "Métodos en objetos",
        code: `const persona = {
  nombre: "Ana",
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};

persona.saludar(); // "Hola, soy Ana"`,
      },
      {
        subtitle: "Recorrer un objeto con for...in",
        code: `const equipo = { nombre: "Pucela", año: 1928, ciudad: "Valladolid" };

for (const clave in equipo) {
  console.log(clave + ": " + equipo[clave]);
}
// nombre: Pucela
// año: 1928
// ciudad: Valladolid`,
      },
      {
        subtitle: "Object.keys, Object.values, Object.entries",
        code: `const producto = { nombre: "Teclado", precio: 50 };

console.log(Object.keys(producto));   // ["nombre", "precio"]
console.log(Object.values(producto)); // ["Teclado", 50]
console.log(Object.entries(producto));
// [["nombre","Teclado"], ["precio",50]]`,
      },
    ],
  },
  {
    id: 12,
    title: "Manipulación del DOM",
    shortTitle: "Manipulación del DOM",
    description:
      "El DOM (Document Object Model) es la representación en memoria del documento HTML. JavaScript puede acceder y modificar los elementos de la página para hacerla dinámica e interactiva. Esta sección está pendiente de ampliar en el documento original.",
    cards: [
      {
        subtitle:
          "Selección de elementos (getElementById, querySelector)",
        code: `// Seleccionar un elemento por su ID
const titulo = document.getElementById("miTitulo");

// Seleccionar el primer elemento que coincida
const parrafo = document.querySelector(".miClase");

// Seleccionar todos los elementos que coincidan
const items = document.querySelectorAll("li");

console.log(titulo, parrafo, items);`,
      },
      {
        subtitle: "Modificar contenido y atributos",
        code: `const elemento = document.getElementById("demo");

// Cambiar el texto interno
elemento.textContent = "Nuevo texto";

// Cambiar el HTML interno
elemento.innerHTML = "<strong>Texto en negrita</strong>";

// Cambiar un atributo
elemento.setAttribute("class", "activo");

// Cambiar estilos directamente
elemento.style.color = "red";`,
      },
      {
        subtitle: "Crear y eliminar elementos",
        code: `// Crear un nuevo elemento
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Soy un nuevo div";

// Añadirlo al documento
document.body.appendChild(nuevoDiv);

// Eliminar un elemento
// nuevoDiv.remove();`,
      },
    ],
  },
  {
    id: 13,
    title: "Eventos",
    shortTitle: "Eventos",
    description:
      "Los eventos son acciones que ocurren en la página, como clics, movimientos del ratón, pulsaciones de teclas, etc. JavaScript permite escuchar y responder a estos eventos para crear interactividad. Esta sección está pendiente de ampliar en el documento original.",
    cards: [
      {
        subtitle: "addEventListener - Escuchar eventos",
        code: `const boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
  alert("¡Botón clickeado!");
});

// Con función flecha
boton.addEventListener("click", () => {
  console.log("Clic detectado");
});`,
      },
      {
        subtitle: "Eventos comunes del ratón",
        code: `const caja = document.getElementById("caja");

caja.addEventListener("mouseenter", () => {
  console.log("Ratón entró");
});

caja.addEventListener("mouseleave", () => {
  console.log("Ratón salió");
});

caja.addEventListener("dblclick", () => {
  console.log("Doble clic");
});`,
      },
      {
        subtitle: "Eventos de teclado",
        code: `document.addEventListener("keydown", (evento) => {
  console.log("Tecla presionada: " + evento.key);
});

document.addEventListener("keyup", (evento) => {
  console.log("Tecla liberada: " + evento.key);
});`,
      },
      {
        subtitle: "Eventos de formulario",
        code: `const formulario = document.getElementById("miForm");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita recargar la página
  console.log("Formulario enviado");
});

const input = document.querySelector("input");
input.addEventListener("input", (e) => {
  console.log("Valor: " + e.target.value);
});`,
      },
      {
        subtitle: "Evento load y DOMContentLoaded",
        code: `// Se ejecuta cuando el HTML está listo
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM listo");
});

// Se ejecuta cuando todo (incl. imágenes) ha cargado
window.addEventListener("load", () => {
  console.log("Página completamente cargada");
});`,
      },
    ],
  },
  {
    id: 14,
    title: "Formularios y validaciones básicas",
    shortTitle: "Formularios y validaciones",
    description:
      "Los formularios permiten al usuario introducir datos que luego se envían al servidor o se procesan en el navegador. JavaScript permite validar esos datos antes de enviarlos, mejorando la experiencia y evitando errores. Esta sección está pendiente de ampliar en el documento original.",
    cards: [
      {
        subtitle: "Acceder a los valores de un formulario",
        code: `const form = document.getElementById("miForm");
const nombre = form.elements["nombre"].value;
const email = form.elements["email"].value;

console.log(nombre, email);`,
      },
      {
        subtitle: "Validación básica con if",
        code: `const nombre = document.getElementById("nombre").value;

if (nombre.trim() === "") {
  alert("El nombre no puede estar vacío");
} else if (nombre.length < 3) {
  alert("El nombre debe tener al menos 3 caracteres");
} else {
  console.log("Nombre válido: " + nombre);
}`,
      },
      {
        subtitle: "Validación con expresiones regulares",
        code: `const email = "usuario@ejemplo.com";
const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

if (regex.test(email)) {
  console.log("Email válido");
} else {
  console.log("Email inválido");
}`,
      },
      {
        subtitle: "preventDefault para evitar el envío",
        code: `const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // No recargar la página

  // Validar campos
  const nombre = form.nombre.value;
  if (nombre === "") {
    alert("Por favor, introduce tu nombre");
    return;
  }

  console.log("Formulario válido, enviando...");
});`,
      },
    ],
  },

  {
    id: 15,
    title: "Condiciones y lógica aplicada al DOM",
    shortTitle: "Lógica aplicada al DOM",
    description:
      "Combinar estructuras de control (if, switch, operadores lógicos) con la manipulación del DOM permite crear interfaces dinámicas que reaccionan a las acciones del usuario. Esta sección está pendiente de ampliar en el documento original.",
    cards: [
      {
        subtitle: "Mostrar u ocultar elementos según condición",
        code: `const boton = document.getElementById("toggleBtn");
const panel = document.getElementById("panel");

boton.addEventListener("click", () => {
  if (panel.style.display === "none") {
    panel.style.display = "block";
  } else {
    panel.style.display = "none";
  }
});`,
      },
      {
        subtitle: "Cambiar clases según estado",
        code: `const elemento = document.getElementById("miElemento");
const estaActivo = elemento.classList.contains("activo");

if (estaActivo) {
  elemento.classList.remove("activo");
} else {
  elemento.classList.add("activo");
}

// Versión corta con toggle
elemento.classList.toggle("activo");`,
      },
      {
        subtitle: "Validación condicional en tiempo real",
        code: `const input = document.getElementById("edad");
const mensaje = document.getElementById("mensaje");

input.addEventListener("input", () => {
  const edad = parseInt(input.value);
  
  if (isNaN(edad)) {
    mensaje.textContent = "Introduce un número";
  } else if (edad < 18) {
    mensaje.textContent = "Eres menor de edad";
  } else {
    mensaje.textContent = "Eres mayor de edad";
  }
});`,
      },
    ],
  },
  {
    id: 16,
    title: "Operador de Encadenamiento Opcional",
    shortTitle: "Encadenamiento opcional (?.)",
    description:
      "El operador de encadenamiento opcional (?.) permite acceder a propiedades o llamar a métodos de un objeto sin lanzar un error si el valor es null o undefined. Devuelve undefined en lugar de romper la ejecución. Esta sección está pendiente de ampliar en el documento original.",
    cards: [
      {
        subtitle: "Acceso seguro a propiedades",
        code: `const usuario = null;

// ❌ Error: Cannot read property 'nombre' of null
// console.log(usuario.nombre);

// ✅ Con encadenamiento opcional
console.log(usuario?.nombre); // undefined`,
      },
      {
        subtitle: "Encadenamiento en objetos anidados",
        code: `const persona = {
  nombre: "Ana",
  direccion: null
};

console.log(persona.direccion?.calle); // undefined
console.log(persona.direccion?.ciudad?.nombre); // undefined`,
      },
      {
        subtitle: "Llamada segura a métodos",
        code: `const servicio = {
  saludar: () => "Hola"
};

const otroServicio = {};

console.log(servicio.saludar?.());    // "Hola"
console.log(otroServicio.saludar?.()); // undefined`,
      },
      {
        subtitle: "Combinado con nullish coalescing (??)",
        code: `const usuario = null;

const nombre = usuario?.nombre ?? "Invitado";
console.log(nombre); // "Invitado"`,
      },
    ],
  },
  {
    id: 17,
    title: "JSON y datos",
    shortTitle: "JSON y datos",
    description:
      "JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos. JavaScript incluye métodos nativos para convertir objetos a JSON y viceversa, lo que resulta esencial para comunicarse con servidores y almacenar datos. Esta sección está pendiente de ampliar en el documento original.",
    cards: [
      {
        subtitle: "Convertir objeto a JSON (JSON.stringify)",
        code: `const usuario = {
  nombre: "Victor",
  edad: 54,
  activo: true
};

const jsonString = JSON.stringify(usuario);
console.log(jsonString);
// '{"nombre":"Victor","edad":54,"activo":true}'`,
      },
      {
        subtitle: "Convertir JSON a objeto (JSON.parse)",
        code: `const jsonString = '{"nombre":"Victor","edad":54,"activo":true}';
const usuario = JSON.parse(jsonString);

console.log(usuario.nombre); // "Victor"
console.log(usuario.edad);   // 54`,
      },
      {
        subtitle: "JSON con arrays y objetos anidados",
        code: `const datos = {
  usuarios: [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 }
  ],
  total: 2
};

const json = JSON.stringify(datos);
console.log(json);

const recuperado = JSON.parse(json);
console.log(recuperado.usuarios[0].nombre); // "Ana"`,
      },
    ],
  },
  {
    id: 18,
    title: "LocalStorage",
    shortTitle: "LocalStorage",
    description:
      "LocalStorage es una API del navegador que permite almacenar datos de forma persistente (sin fecha de expiración) en el equipo del usuario. Es ideal para guardar preferencias, sesiones o datos que deban conservarse entre visitas. Esta sección está pendiente de ampliar en el documento original.",
    cards: [
      {
        subtitle: "Guardar y leer datos",
        code: `// Guardar un valor
localStorage.setItem("nombre", "Victor");

// Leer un valor
const nombre = localStorage.getItem("nombre");
console.log(nombre); // "Victor"

// Eliminar un valor
localStorage.removeItem("nombre");

// Limpiar todo
// localStorage.clear();`,
      },
      {
        subtitle: "Guardar objetos con JSON",
        code: `const usuario = { nombre: "Victor", edad: 54 };

// Guardar (convertir a string)
localStorage.setItem("usuario", JSON.stringify(usuario));

// Leer (convertir de vuelta a objeto)
const guardado = JSON.parse(localStorage.getItem("usuario"));
console.log(guardado.nombre); // "Victor"`,
      },
      {
        subtitle: "Ejemplo: contador persistente",
        code: `let visitas = localStorage.getItem("visitas");

if (visitas === null) {
  visitas = 0;
} else {
  visitas = parseInt(visitas);
}

visitas++;
localStorage.setItem("visitas", visitas);

console.log("Has visitado esta página " + visitas + " veces");`,
      },
    ],
  },
  {
    id: 19,
    title: "Funciones de uso común",
    shortTitle: "Funciones de uso común",
    description:
      "JavaScript incluye muchas funciones nativas de uso frecuente que facilitan el trabajo con strings, arrays, números y fechas. Conocerlas permite escribir código más limpio y eficiente. Esta sección está pendiente de ampliar en el documento original.",
    cards: [
      {
        subtitle: "Métodos de strings (toUpperCase, trim, includes)",
        code: `const texto = "  Hola Mundo  ";

console.log(texto.trim());            // "Hola Mundo"
console.log(texto.toUpperCase());     // "  HOLA MUNDO  "
console.log(texto.toLowerCase());     // "  hola mundo  "
console.log(texto.includes("Mundo")); // true
console.log(texto.replace("Mundo", "JS")); // "  Hola JS  "
console.log(texto.split(" "));        // ["", "", "Hola", "Mundo", "", ""]`,
      },
      {
        subtitle: "Métodos de arrays (map, filter, reduce)",
        code: `const numeros = [1, 2, 3, 4, 5];

// map: transformar cada elemento
const dobles = numeros.map(n => n * 2);
console.log(dobles); // [2, 4, 6, 8, 10]

// filter: filtrar elementos
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2, 4]

// reduce: acumular
const suma = numeros.reduce((acc, n) => acc + n, 0);
console.log(suma); // 15`,
      },
      {
        subtitle: "Métodos de arrays (find, some, every)",
        code: `const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Eva", edad: 17 }
];

// find: primer elemento que cumpla
const mayor = personas.find(p => p.edad > 18);
console.log(mayor.nombre); // "Ana"

// some: ¿alguno cumple?
const hayMenor = personas.some(p => p.edad < 18);
console.log(hayMenor); // true

// every: ¿todos cumplen?
const todosMayores = personas.every(p => p.edad > 18);
console.log(todosMayores); // false`,
      },
      {
        subtitle: "Fechas con Date",
        code: `const ahora = new Date();
console.log(ahora.toLocaleDateString()); // "dd/mm/aaaa"
console.log(ahora.getFullYear());        // año actual
console.log(ahora.getMonth() + 1);       // mes (0-11)
console.log(ahora.getDate());            // día del mes
console.log(ahora.getHours());           // hora`,
      },
    ],
  },
  {
    id: 20,
    title: "Buenas prácticas básicas",
    shortTitle: "Buenas prácticas",
    description:
      "Seguir buenas prácticas de programación hace que el código sea más legible, mantenible y menos propenso a errores. Incluye convenciones de nombres, organización, comentarios y uso adecuado de variables. Esta sección está pendiente de ampliar en el documento original.",
    cards: [
      {
        subtitle: "Nombres descriptivos para variables",
        code: `// ❌ Malo
let x = 30;
let y = "Carlos";

// ✅ Bueno
let edadUsuario = 30;
let nombreUsuario = "Carlos";`,
      },
      {
        subtitle: "Usar const por defecto, let cuando sea necesario",
        code: `// ✅ Preferir const si el valor no cambia
const PI = 3.1416;
const nombre = "Victor";

// ✅ Usar let solo si el valor cambiará
let contador = 0;
contador++;

// ❌ Evitar var en código moderno
// var antiguo = "evitar";`,
      },
      {
        subtitle: "Funciones pequeñas y con una sola responsabilidad",
        code: `// ❌ Función que hace demasiado
function procesarTodo(usuarios) {
  // valida, transforma, guarda, envía...
}

// ✅ Dividir en funciones pequeñas
function validarUsuario(usuario) { /* ... */ }
function transformarUsuario(usuario) { /* ... */ }
function guardarUsuario(usuario) { /* ... */ }`,
      },
      {
        subtitle: "Comentar el porqué, no el qué",
        code: `// ❌ Comentario obvio
// Incrementa i en 1
i++;

// ✅ Comentario útil
// Reintentamos la petición porque el servidor
// puede tardar en despertar (cold start)
reintentarPeticion();`,
      },
    ],
  },
  {
    id: 21,
    title: "Errores comunes y cómo evitarlos",
    shortTitle: "Errores comunes",
    description:
      "Conocer los errores más frecuentes en JavaScript ayuda a prevenirlos y a depurar el código con mayor rapidez. Incluye confusiones con tipos, scope, comparaciones y manejo de valores nulos. Esta sección está pendiente de ampliar en el documento original.",
    cards: [
      {
        subtitle: "Confundir == con ===",
        code: `// ❌ == hace conversión de tipos (peligroso)
console.log(0 == "");   // true
console.log(null == undefined); // true

// ✅ === compara valor y tipo (recomendado)
console.log(0 === "");  // false
console.log(null === undefined); // false`,
      },
      {
        subtitle: "No manejar null o undefined",
        code: `const usuario = null;

// ❌ Error: Cannot read property 'nombre' of null
// console.log(usuario.nombre);

// ✅ Usar optional chaining (?.)
console.log(usuario?.nombre); // undefined

// ✅ O validar antes
if (usuario) {
  console.log(usuario.nombre);
}`,
      },
      {
        subtitle: "Usar var en lugar de let/const",
        code: `// ❌ var tiene scope de función y hoisting confuso
function ejemplo() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (funciona, pero es confuso)
}

// ✅ let/const tienen scope de bloque
function ejemplo2() {
  if (true) {
    let y = 10;
  }
  // console.log(y); // ReferenceError: y is not defined
}`,
      },
      {
        subtitle: "Mutación inesperada de arrays/objetos",
        code: `const original = [1, 2, 3];

// ❌ Métodos que mutan el array original
// original.push(4);
// original.sort();

// ✅ Crear copias antes de modificar
const copia = [...original];
copia.push(4);
console.log(original); // [1, 2, 3]
console.log(copia);    // [1, 2, 3, 4]`,
      },
      {
        subtitle: "No usar try/catch en código asíncrono",
        code: `// ❌ Error no capturado
// fetch("https://api.com/datos")
//   .then(res => res.json())
//   .then(data => console.log(data));

// ✅ Manejar errores con .catch() o try/catch async
try {
  const res = await fetch("https://api.com/datos");
  const data = await res.json();
  console.log(data);
} catch (error) {
  console.error("Error en la petición:", error);
}`,
      },
    ],
  },
];

// =========================================================
// CONTENIDO COMPLEMENTARIO DEL MANUAL ADJUNTO
// Se añaden los ejemplos que faltaban sin eliminar los datos existentes.
// =========================================================

// Ampliaciones del tema 1 según el Manual JavaScript

themesData[0].cards.push(
  ...[
    {
      subtitle: "Comentarios y función de saludo",
      code: '// Comentario de una línea\n// Declaramos una variable con el nombre del usuario\nlet nombre = "Víctor";\n// Mostramos el nombre por consola\nconsole.log(nombre);\n\n// Comentario de varias líneas\n/*\nEste bloque de código\nmuestra un saludo personalizado\nusando una variable\n*/\nlet saludo = "Hola Víctor";\nconsole.log(saludo);',
    },
  ],
);

// Ampliaciones del tema 3 según el Manual JavaScript

themesData[2].cards.push(
  ...[
    {
      subtitle: "Método concat()",
      code: 'let nombre = "Víctor";\nlet saludo = "Hola ".concat(nombre, ", bienvenido.");\nconsole.log(saludo);',
    },
    {
      subtitle: "Plantillas literales e interpolación",
      code: 'let nombre = "Víctor";\nlet edad = 30;\nlet frase = `Hola ${nombre}, tienes ${edad} años`;\nconsole.log(frase);\n\nlet a = 5;\nlet b = 10;\nconsole.log(`La suma es ${a + b}`);',
    },
  ],
);

// Ampliaciones del tema 4 según el Manual JavaScript

themesData[3].cards.push(
  ...[
    {
      subtitle: "Asignación y asociatividad",
      code: "let a, b;\na = b = 5;\nconsole.log(a); // 5\nconsole.log(b); // 5\nconsole.log(a + b); // 10\n\nconst result = 2 ** 3 ** 2;\nconsole.log(result); // 512",
    },
    {
      subtitle: "Decremento (--x y x--)",
      code: "let x = 5;\nconsole.log(--x); // 4\nconsole.log(x); // 4\n\nlet y = 5;\nconsole.log(y--); // 5\nconsole.log(y); // 4",
    },
    {
      subtitle: "Operador unario de suma y typeof",
      code: "const str = '42';\nconst strToNum = +str;\nconsole.log(strToNum); // 42\nconsole.log(typeof str); // string\nconsole.log(typeof strToNum); // number",
    },
    {
      subtitle: "isNaN() y Number.isNaN()",
      code: 'console.log(isNaN(NaN)); // true\nconsole.log(isNaN(undefined)); // true\nconsole.log(isNaN({})); // true\nconsole.log(isNaN(true)); // false\nconsole.log(isNaN(null)); // false\nconsole.log(isNaN(37)); // false\nconsole.log(isNaN("37")); // false\nconsole.log(isNaN("blabla")); // true\n\nconsole.log(Number.isNaN(NaN)); // true\nconsole.log(Number.isNaN(Number.NaN)); // true\nconsole.log(Number.isNaN(0 / 0)); // true\nconsole.log(Number.isNaN("NaN")); // false\nconsole.log(Number.isNaN(undefined)); // false',
    },
    {
      subtitle: "parseFloat() y parseInt()",
      code: 'console.log(parseFloat("3.14")); // 3.14\nconsole.log(parseFloat("3.14 abc")); // 3.14\nconsole.log(parseFloat("3.14.5")); // 3.14\nconsole.log(parseFloat("abc 3.14")); // NaN\n\nconsole.log(parseInt("42")); // 42\nconsole.log(parseInt("42px")); // 42\nconsole.log(parseInt("3.14")); // 3\nconsole.log(parseInt("abc123")); // NaN',
    },
    {
      subtitle: "toFixed() y redondeo decimal",
      code: 'let num = 3.14159;\nconsole.log(num.toFixed(2)); // "3.14"\nconsole.log((3.14159).toFixed(3)); // "3.142"\nconsole.log((3.14449).toFixed(3)); // "3.144"\nconsole.log((3.14550).toFixed(3)); // "3.146"',
    },
    {
      subtitle: "null y undefined",
      code: "console.log(null == undefined); // true\nconsole.log(null === undefined); // false",
    },
  ],
);

// Ampliaciones del tema 6 según el Manual JavaScript

themesData[5].cards.push(
  ...[
    {
      subtitle: "Math.trunc(), Math.sqrt() y Math.cbrt()",
      code: "console.log(Math.trunc(2.9)); // 2\nconsole.log(Math.trunc(9.1)); // 9\nconsole.log(Math.sqrt(81)); // 9\nconsole.log(Math.cbrt(27)); // 3",
    },
    {
      subtitle: "Math.abs() y Math.pow()",
      code: "console.log(Math.abs(-5)); // 5\nconsole.log(Math.abs(5)); // 5\nconsole.log(Math.pow(2, 3)); // 8\nconsole.log(Math.pow(8, 2)); // 64",
    },
  ],
);

// Ampliaciones del tema 7 según el Manual JavaScript

themesData[6].cards.push(
  ...[
    {
      subtitle: "Bucle do...while",
      code: "let contador = 10;\ndo {\n  console.log(`Tiempo final para el fin del mundo ${contador}`);\n  --contador;\n} while (contador > 0);\n// Se ejecuta desde 10 hasta 1.",
    },
  ],
);

// Ampliaciones del tema 8 según el Manual JavaScript

themesData[7].cards.push(
  ...[
    {
      subtitle: "Función flecha de una línea y return implícito",
      code: 'const greetings = name => console.log("Hello, " + name + "!");\ngreetings("Victor");\n\nconst calculateArea = (width, height) => width * height;\nconsole.log(calculateArea(5, 3)); // 15',
    },
  ],
);

// Ampliaciones del tema 10 según el Manual JavaScript

themesData[9].cards.push(
  ...[
    {
      subtitle: "Actualizar y añadir elementos por índice",
      code: 'let frutas = ["manzana", "pera", "banana"];\nfrutas[1] = "fresa";\nfrutas[3] = "pera";\nconsole.log(frutas); // ["manzana", "fresa", "banana", "pera"]',
    },
    {
      subtitle: "push(), pop() y longitud devuelta",
      code: 'let numeros = [1, 2, 3];\nnumeros.push(4); // agrega al final\nconst nuevaLongitud = numeros.push("5");\nconsole.log(nuevaLongitud); // 5\nnumeros.pop(); // elimina el último\nconst numeroEliminado = numeros.pop();\nconsole.log(numeros); // [1, 2, 3]\nconsole.log(numeroEliminado); // 4',
    },
    {
      subtitle: "unshift(), shift() y length",
      code: 'let ciudades = ["Valladolid", "Madrid", "Ibagué", "Salamanca"];\nciudades.unshift("Baracaldo", "Barcelona");\nconsole.log(ciudades); // Seis ciudades\nciudades.shift();\nconsole.log(ciudades); // Se elimina la primera ciudad\nconsole.log(ciudades.length); // Número de elementos',
    },
    {
      subtitle: "Arrays bidimensionales",
      code: 'let resultados = [\n  ["Lunes", "Martes", "Miércoles"],\n  ["Estudiar", "Trabajar", "Leer"],\n  [3, 6, 9],\n  ["Aprobado", "Suspenso", "Pendiente"]\n];\nconsole.log(resultados[0][1]); // Martes\nconsole.log(resultados[2][0]); // 3\nconsole.log(resultados[3][1]); // Suspenso',
    },
    {
      subtitle: "Desestructuración de arreglos",
      code: 'let nombres = ["Victor", "Cristina", "Misi", "Orion"];\nlet [primero, segundo, tercero, cuarto, quinto = "Celeste"] = nombres;\nconsole.log(primero); // Victor\nconsole.log(segundo); // Cristina\nconsole.log(tercero); // Misi\nconsole.log(cuarto); // Orion\nconsole.log(quinto); // Celeste\n\nlet [nombre1, , nombre3] = nombres;\nconsole.log(nombre1); // Victor\nconsole.log(nombre3); // Misi\n\nlet [primeroNombre, segundoNombre, ...resto] = nombres;\nconsole.log(resto); // ["Misi", "Orion"]',
    },
    {
      subtitle: "split(), reverse() y join()",
      code: 'let nombre = "Victor";\nlet cadena = nombre.split("");\nconsole.log(cadena); // ["V", "i", "c", "t", "o", "r"]\n\nlet nombre2 = ["V", "i", "c", "t", "o", "r"];\nnombre2.reverse();\nconsole.log(nombre2); // ["r", "o", "t", "c", "i", "V"]\n\nlet nombreReves = ["r", "o", "t", "c", "i", "V"];\nlet nombreRevesStr = nombreReves.join("");\nconsole.log(nombreRevesStr); // rotciV',
    },
    {
      subtitle: "indexOf() y búsqueda desde un índice",
      code: 'let ciudades = ["Ibagué", "Valladolid", "Bogotá", "Madrid", "Salamanca"];\nconsole.log(ciudades.indexOf("Madrid")); // 3\n\nlet masCiudades = ["Ibagué", "Valladolid", "Bogotá", "Madrid", "Salamanca", "Burgos", "Valladolid"];\nconsole.log(masCiudades.indexOf("Valladolid", 2)); // 6',
    },
    {
      subtitle: "splice(): eliminar, insertar y vaciar",
      code: 'let ciudades = ["Ibagué", "Valladolid", "Bogotá", "Madrid", "Salamanca", "Burgos", "Valladolid"];\nlet eliminados = ciudades.splice(2, 2);\nconsole.log(eliminados); // ["Bogotá", "Madrid"]\nconsole.log(ciudades); // Elementos restantes\n\nlet otrasCiudades = ["Ibagué", "Valladolid", "Bogotá", "Madrid", "Salamanca", "Burgos", "Valladolid"];\notrasCiudades.splice(1, 0, "Barakaldo", "Bilbao");\nlet copiaCiudades = [...otrasCiudades];\nconsole.log(otrasCiudades);\nconsole.log(copiaCiudades);\n\nciudades.splice(0); // Vacía el arreglo\nconsole.log(ciudades); // []',
    },
    {
      subtitle: "includes() y búsqueda de elementos",
      code: 'let ciudades = ["Ibagué", "Valladolid", "Bogotá", "Madrid", "Salamanca", "Burgos", "Valladolid"];\nconsole.log(ciudades.includes("Burgos")); // true\nconsole.log(ciudades.includes("Barcelona")); // false\nconsole.log(ciudades.includes("Bogotá", 2)); // true\nconsole.log(ciudades.includes("Bogotá", 4)); // false',
    },
    {
      subtitle: "Copias superficiales de un arreglo",
      code: "const originalArray = [1, 2, 3];\nconst copiaConcat = [].concat(originalArray);\n\nconst copiaSlice = originalArray.slice();\n\nconst copiaSpread = [...originalArray];\n\nconsole.log(copiaConcat, copiaSlice, copiaSpread);",
    },
  ],
);

// Ampliaciones del tema 11 según el Manual JavaScript

themesData[10].cards.push(
  ...[
    {
      subtitle: "Crear objetos y acceder a propiedades",
      code: 'let mascota = {\n  nombre: "Misi",\n  especie: "Gato",\n  edad: 15,\n  "estado de animo": "Hambriento"\n};\nconsole.log(mascota.nombre); // Misi\nconsole.log("Soy un " + mascota.especie + " y tengo " + mascota.edad + " años");\nconsole.log(mascota["nombre"]);\nconsole.log(mascota["estado de animo"]);\n\nlet propiedadMascota = "especie";\nconsole.log(mascota[propiedadMascota]); // Gato',
    },
    {
      subtitle: "Agregar y modificar propiedades",
      code: 'const gato = {\n  nombre: "Michi",\n  edad: 2,\n  color: "blanco"\n};\ngato.edad = 3; // Modificar\ngato.jugueteFavorito = "pelota de lana"; // Agregar\nconsole.log(gato);',
    },
    {
      subtitle: "Eliminar propiedades",
      code: 'let mascota = { nombre: "Misi", especie: "Gato", edad: 15 };\ndelete mascota.edad;\nconsole.log(mascota.edad); // undefined',
    },
    {
      subtitle: "Comprobar si existe una propiedad",
      code: 'let mascota = { nombre: "Misi", especie: "Gato", edad: 15 };\nconsole.log(mascota.hasOwnProperty("especie")); // true\nconsole.log(mascota.hasOwnProperty("raza")); // false\nconsole.log(Object.hasOwn(mascota, "nombre")); // true\nconsole.log(Object.hasOwn(mascota, "raza")); // false\nconsole.log("nombre" in mascota); // true',
    },
    {
      subtitle: "Comprobar dinámicamente una clave con in",
      code: 'const inventarioGatos = {\n  "gato_01": { nombre: "Michi", status: "Disponible" },\n  "gato_02": { nombre: "Luna", status: "Adoptada" }\n};\nlet buscarTag = "gato_01";\nif (buscarTag in inventarioGatos) {\n  console.log("¡El registro existe en el sistema!");\n} else {\n  console.log("Error: La etiqueta no fue encontrada.");\n}',
    },
    {
      subtitle: "Objetos anidados y acceso a propiedades",
      code: 'let mascota = {\n  nombre: "Misi",\n  especie: "Gato",\n  edad: 15,\n  caracteristicas: {\n    color: "atigrado",\n    castrado: true,\n    estado: {\n      vacunas: "rabia",\n      desparasitante: "interno"\n    }\n  }\n};\nconsole.log(mascota.caracteristicas.estado.vacunas); // rabia\nconsole.log(mascota["caracteristicas"]["estado"]["desparasitante"]); // interno',
    },
    {
      subtitle: "Arreglos anidados dentro de objetos",
      code: 'let mascota = {\n  nombre: "Misi",\n  especie: "Gato",\n  edad: 15,\n  atencionVet: [\n    { tipo: "vacuna", subtipo: "rabia", fecha: "febrero" },\n    { tipo: "vacuna", subtipo: "triple", fecha: "marzo" },\n    { tipo: "desparasitante", subtipo: "interno", fecha: "abril" },\n    { tipo: "desparasitante", subtipo: "externo", fecha: "mayo" }\n  ]\n};\nconsole.log(mascota.atencionVet[2].subtipo); // interno',
    },
    {
      subtitle: "Métodos de objeto y this",
      code: 'let mascota = {\n  nombre: "Misi",\n  especie: "Gato",\n  diHola: function() {\n    return "Hola, mi nombre es " + this.nombre;\n  }\n};\nconsole.log(mascota.diHola()); // Hola, mi nombre es Misi',
    },
    {
      subtitle: "Crear un objeto a partir de otro con spread",
      code: 'const usuarioOriginal = {\n  nombre: "Carlos",\n  edad: 30,\n  pais: "Colombia"\n};\nconst usuarioNuevo = {\n  ...usuarioOriginal,\n  edad: 31,\n  profesion: "Dev"\n};\nconsole.log("Original:", usuarioOriginal);\nconsole.log("Nuevo:", usuarioNuevo);',
    },
    {
      subtitle: "Copia profunda de objetos con JSON",
      code: 'const gatoOriginal = {\n  nombre: "Michi",\n  edad: 3,\n  preferencias: {\n    comida: "Salmón",\n    juguete: "Ratón de peluche"\n  }\n};\nconst gatoClonado = JSON.parse(JSON.stringify(gatoOriginal));\ngatoClonado.preferencias.comida = "Pollo";\nconsole.log(gatoOriginal.preferencias.comida); // Salmón\nconsole.log(gatoClonado.preferencias.comida); // Pollo',
    },
  ],
);

// Ampliaciones del tema 12 según el Manual JavaScript

themesData[11].cards.push(
  ...[
    {
      subtitle: "Seleccionar y modificar un elemento del DOM",
      code: '<p id="mensaje">Texto original</p>\nlet elemento = document.getElementById("mensaje");\nelemento.textContent = "Texto modificado con JavaScript";',
    },
    {
      subtitle: "querySelector(), style y classList",
      code: '<div class="caja">Contenido</div>\nlet caja = document.querySelector(".caja");\ncaja.style.color = "red";\ncaja.classList.add("activa");\n// querySelector usa selectores CSS.\n// classList permite añadir o quitar clases.',
    },
  ],
);

// Ampliaciones del tema 13 según el Manual JavaScript

themesData[12].cards.push(
  ...[
    {
      subtitle: "Evento click con addEventListener",
      code: '<button id="btn">Haz clic</button>\nlet boton = document.getElementById("btn");\nboton.addEventListener("click", function() {\n  alert("Botón pulsado");\n});\n// addEventListener es la forma recomendada de manejar eventos.',
    },
    {
      subtitle: "Evento input",
      code: '<input type="text" id="nombre">\nlet input = document.getElementById("nombre");\ninput.addEventListener("input", function() {\n  console.log(input.value);\n});\n// Se ejecuta cada vez que el usuario escribe en el campo.',
    },
  ],
);

// Ampliaciones del tema 14 según el Manual JavaScript

themesData[13].cards.push(
  ...[
    {
      subtitle: "Obtener el valor de un campo",
      code: '<input type="text" id="email">\nlet email = document.getElementById("email").value;\nconsole.log(email);\n// .value obtiene el texto escrito por el usuario.',
    },
    {
      subtitle: "Validar un formulario antes de enviarlo",
      code: '<form id="formulario">\n  <input type="text" id="nombre">\n  <button>Enviar</button>\n</form>\nlet form = document.getElementById("formulario");\nform.addEventListener("submit", function(e) {\n  e.preventDefault();\n  let nombre = document.getElementById("nombre").value;\n  if (nombre === "") {\n    alert("El nombre es obligatorio");\n  } else {\n    alert("Formulario correcto");\n  }\n});\n// preventDefault() evita el envío automático.',
    },
  ],
);

// Ampliaciones del tema 15 según el Manual JavaScript

themesData[14].cards.push(
  ...[
    {
      subtitle: "Mostrar u ocultar un elemento según una condición",
      code: '<p id="aviso">Mensaje importante</p>\nlet aviso = document.getElementById("aviso");\nlet mostrar = false;\nif (mostrar) {\n  aviso.style.display = "block";\n} else {\n  aviso.style.display = "none";\n}',
    },
    {
      subtitle: "Cambiar el contenido según el estado",
      code: '<p id="estado"></p>\nlet logueado = true;\nlet estado = document.getElementById("estado");\nif (logueado) {\n  estado.textContent = "Usuario conectado";\n} else {\n  estado.textContent = "Usuario no conectado";\n}',
    },
  ],
);

// Ampliaciones del tema 16 según el Manual JavaScript

themesData[15].cards.push(
  ...[
    {
      subtitle: "Encadenamiento opcional en objetos anidados",
      code: 'const user = {\n  name: "John",\n  profile: {\n    email: "john@example.com",\n    address: {\n      street: "123 Main St",\n      city: "Somewhere"\n    }\n  }\n};\nconsole.log(user?.profile?.address?.street); // 123 Main St\nconsole.log(user?.profile?.phone?.number); // undefined',
    },
    {
      subtitle: "Desestructuración de objetos",
      code: 'const usuario = {\n  nombre: "Carlos",\n  edad: 28,\n  ubicacion: {\n    ciudad: "Ibagué",\n    pais: "Colombia"\n  }\n};\n\n// Extraer una propiedad\nconst { nombre } = usuario;\nconsole.log(nombre); // Carlos\n\n// Asignar un alias\nconst { edad: anosTotales } = usuario;\nconsole.log(anosTotales); // 28\n\n// Valor por defecto\nconst { profesion = "Desarrollador Web" } = usuario;\nconsole.log(profesion);\n\n// Propiedades anidadas\nconst { ubicacion: { ciudad, pais } } = usuario;\nconsole.log(ciudad, pais);\n\n// Desestructuración en parámetros\nfunction saludarUsuario({ nombre, ubicacion: { ciudad } }) {\n  console.log(`Hola ${nombre}, bienvenido desde ${ciudad}.`);\n}\nsaludarUsuario(usuario);',
    },
  ],
);

// Ampliaciones del tema 17 según el Manual JavaScript

themesData[16].cards.push(
  ...[
    {
      subtitle: "Importar un archivo JSON",
      code: '// Archivo: configuracion.json\n{\n  "tema": "oscuro",\n  "intentosMaximos": 3\n}\n\n// Archivo: main.js\nimport config from \'./configuracion.json\' with { type: \'json\' };\nconsole.log(config.tema); // oscuro',
    },
    {
      subtitle: "JSON.stringify(): objeto a texto JSON",
      code: 'let usuario = {\n  nombre: "Luis",\n  edad: 35,\n  activo: true\n};\nlet usuarioJSON = JSON.stringify(usuario);\nconsole.log(usuarioJSON); // {"nombre":"Luis","edad":35,"activo":true}\nconsole.log(typeof usuarioJSON); // string',
    },
    {
      subtitle: "JSON.parse(): texto JSON a objeto",
      code: 'let datos = \'{"nombre":"Luis","edad":35,"activo":true}\';\nlet usuario = JSON.parse(datos);\nconsole.log(usuario.nombre); // Luis\nconsole.log(usuario);\nconsole.log(typeof usuario); // object',
    },
  ],
);

// Ampliaciones del tema 18 según el Manual JavaScript

themesData[17].cards.push(
  ...[
    {
      subtitle: "Guardar y recuperar datos con LocalStorage",
      code: 'localStorage.setItem("usuario", "Carlos");\nlet usuario = localStorage.getItem("usuario");\nconsole.log(usuario);\n// Los datos se guardan como texto.',
    },
    {
      subtitle: "Guardar objetos con JSON en LocalStorage",
      code: 'let config = {\n  modoOscuro: true,\n  idioma: "es"\n};\nlocalStorage.setItem("config", JSON.stringify(config));\nlet datos = JSON.parse(localStorage.getItem("config"));\nconsole.log(datos.modoOscuro);\n// Para guardar objetos es necesario convertirlos con JSON.',
    },
  ],
);

// Ampliaciones del tema 19 según el Manual JavaScript

themesData[18].cards.push(
  ...[
    {
      subtitle: "alert(), prompt() y confirm()",
      code: 'alert("Bienvenido a la web");\nlet nombre = prompt("¿Cómo te llamas?");\nlet respuesta = confirm("¿Deseas continuar?");\n// alert muestra un mensaje.\n// prompt pide un dato al usuario.\n// confirm devuelve true o false.',
    },
    {
      subtitle: "setTimeout() y setInterval()",
      code: 'setTimeout(function() {\n  console.log("Esto se ejecuta después de 2 segundos");\n}, 2000);\n\nsetInterval(function() {\n  console.log("Esto se repite cada 3 segundos");\n}, 3000);\n// setTimeout se ejecuta una sola vez.\n// setInterval se repite hasta que se detiene.',
    },
  ],
);

// Ampliaciones del tema 20 según el Manual JavaScript

themesData[19].cards.push(
  ...[
    {
      subtitle: "Constantes, variables y cálculo del IVA",
      code: "const IVA = 0.19;\nlet precio = 1000;\nprecio = precio + (precio * IVA);\nconsole.log(precio);\n// Usa const para valores que no cambian.\n// Usa let solo cuando el valor deba modificarse.",
    },
    {
      subtitle: "Funciones claras y reutilizables",
      code: "function calcularTotal(precio, cantidad) {\n  const total = precio * cantidad;\n  return total;\n}\nconsole.log(calcularTotal(500, 3));\n// Un código claro vale más que uno ingenioso.\n// Si se entiende fácilmente, está bien escrito.",
    },
  ],
);

// Ampliaciones del tema 21 según el Manual JavaScript

themesData[20].cards.push(
  ...[
    {
      subtitle: "Comparación estricta de tipos",
      code: 'let numero = "5";\nif (numero === 5) {\n  console.log("Son iguales");\n} else {\n  console.log("No son iguales");\n}\n// === compara valor y tipo.\n// Usa siempre === para evitar errores inesperados.',
    },
    {
      subtitle: "Comprobar que un elemento del DOM existe",
      code: 'let boton = document.getElementById("guardar");\nif (boton) {\n  boton.addEventListener("click", function() {\n    console.log("Botón encontrado");\n  });\n}\n// Comprueba que el elemento existe antes de utilizarlo.',
    },
  ],
);

themesData[9].description =
  "Los arrays (listas o arreglos) permiten almacenar varios valores en una sola variable. Sus índices empiezan en 0 y ofrecen métodos para añadir, eliminar, buscar, ordenar, transformar y copiar elementos. También pueden contener otros arrays.";
themesData[10].description =
  "Los objetos permiten agrupar información relacionada en una sola estructura mediante pares clave-valor. Son ideales para representar entidades reales como una persona, un producto o una mascota. Pueden contener propiedades, objetos anidados, arreglos y métodos.";
themesData[11].description =
  "El DOM (Document Object Model) representa el HTML en forma de objetos que JavaScript puede leer y modificar. Manipular el DOM permite seleccionar elementos y cambiar su contenido, estilo o comportamiento sin recargar la página.";
themesData[12].description =
  "Los eventos permiten que JavaScript detecte acciones del usuario como clics, escritura, envíos de formularios o cambios en un campo. Mediante ellos se ejecutan funciones cuando ocurre una acción.";
themesData[13].description =
  "JavaScript permite obtener los valores que el usuario introduce en un formulario, comprobar si son correctos y decidir si se envía. Las validaciones básicas evitan errores como campos vacíos o datos incorrectos.";
themesData[14].description =
  "Esta lógica permite que JavaScript muestre, oculte o cambie elementos de la página según una condición. Se utiliza para mensajes de error, confirmaciones, menús, avisos y comportamientos dinámicos.";
themesData[15].description =
  "El operador de encadenamiento opcional (?.) permite continuar con el acceso a propiedades o llamadas solo si el valor anterior no es null ni undefined. El manual también incluye la desestructuración de objetos.";
themesData[16].description =
  "JSON (JavaScript Object Notation) es un formato de texto para representar y transportar datos. Se utiliza para guardar información, enviarla o recibirla desde servidores y almacenarla en el navegador.";
themesData[17].description =
  "localStorage permite guardar datos en el navegador de forma persistente, incluso después de cerrar la página o el navegador. Los valores se almacenan como texto; para guardar objetos se utiliza JSON.";
themesData[18].description =
  "JavaScript incluye funciones integradas para mostrar mensajes, pedir datos al usuario y ejecutar código después de un tiempo determinado. El manual incluye alert, prompt, confirm, setTimeout y setInterval.";
themesData[19].description =
  "Las buenas prácticas hacen que el código sea más fácil de leer, mantener y depurar. El manual destaca el uso adecuado de const y let, las funciones claras y la legibilidad.";
themesData[20].description =
  "Conocer los errores más frecuentes ayuda a identificarlos y corregirlos. El manual destaca las comparaciones estrictas y la comprobación de que los elementos del DOM existen antes de utilizarlos.";

// ============================================================
// LÓGICA DE LA APLICACIÓN
// ============================================================

const homeView = document.getElementById("homeView");
const detailView = document.getElementById("detailView");
const buttonsGrid = document.getElementById("buttonsGrid");
const cardsGrid = document.getElementById("cardsGrid");
const detailTitle = document.getElementById("detailTitle");
const detailDescription = document.getElementById("detailDescription");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

let currentTheme = localStorage.getItem("theme") || "dark";
let activeCard = null;

function init() {
  applyTheme(currentTheme);
  renderHomeButtons();
}

// ============================================================
// TEMA CLARO / OSCURO
// ============================================================

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  currentTheme = theme;
  localStorage.setItem("theme", theme);

  // Iconos SVG optimizados (Sol y Luna)
  const SUN_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

  const MOON_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  // Lógica de cambio de tema
  if (theme === "light") {
    themeIcon.innerHTML = SUN_ICON; // Usamos innerHTML para inyectar el SVG
    themeText.textContent = "Modo Oscuro";
  } else {
    themeIcon.innerHTML = MOON_ICON;
    themeText.textContent = "Modo Claro";
  }
}

function toggleTheme() {
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
}

// ============================================================
// NAVEGACIÓN
// ============================================================

function goHome() {
  homeView.classList.remove("hidden");
  detailView.classList.remove("active");
  document
    .querySelectorAll(".card.flipped")
    .forEach((c) => c.classList.remove("flipped"));
  activeCard = null;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showDetail(themeId) {
  const theme = themesData.find((t) => t.id === themeId);
  if (!theme) return;

  detailTitle.innerHTML = `<span class="title-number">${theme.id}.</span> ${theme.title}`;
  detailDescription.textContent = theme.description;

  renderCards(theme.cards);

  homeView.classList.add("hidden");
  detailView.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// RENDERIZADO DE BOTONES (HOME)
// ============================================================

function renderHomeButtons() {
  buttonsGrid.innerHTML = "";

  themesData.forEach((theme) => {
    const btn = document.createElement("button");
    btn.className = "nav-button";
    btn.onclick = () => showDetail(theme.id);

    const numCards = theme.cards.length;
    const desc =
      numCards > 0
        ? `${numCards} tarjeta${numCards > 1 ? "s" : ""} de contenido`
        : "Contenido pendiente";

    btn.innerHTML = `
              <span class="btn-number">Tema ${theme.id}</span>
              <span class="btn-title">${theme.shortTitle}</span>
              <span class="btn-desc">${desc}</span>
              <span class="btn-arrow">→</span>
          `;

    buttonsGrid.appendChild(btn);
  });
}

// ============================================================
// RENDERIZADO DE TARJETAS (DETALLE) CON SVGs
// ============================================================

function renderCards(cards) {
  cardsGrid.innerHTML = "";

  // Diccionario de SVGs optimizados (viewBox 24x24, stroke actual, estilo profesional)
  const JS_ICONS = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    alerta: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    variable: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
    operador: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
    numero: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`,
    control: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`,
    bucle: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>`,
    funcion: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    alcance: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    dom: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
    evento: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/></svg>`,
    formulario: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
    json: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    localstorage: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    metodos: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    buenaPractica: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    error: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  };

  cards.forEach((card, index) => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";
    cardEl.dataset.index = index;

    let iconSvg = JS_ICONS.default;
    const sub = card.subtitle.toLowerCase();

    if (
      sub.includes("alerta") ||
      sub.includes("alert") ||
      sub.includes("mensaje")
    ) {
      iconSvg = JS_ICONS.alerta;
    } else if (
      sub.includes("variable") ||
      sub.includes("const") ||
      sub.includes("let")
    ) {
      iconSvg = JS_ICONS.variable;
    } else if (sub.includes("operador") || sub.includes("aritm")) {
      iconSvg = JS_ICONS.operador;
    } else if (
      sub.includes("número") ||
      sub.includes("number") ||
      sub.includes("math")
    ) {
      iconSvg = JS_ICONS.numero;
    } else if (
      sub.includes("control") ||
      sub.includes("if") ||
      sub.includes("switch") ||
      sub.includes("ternario")
    ) {
      iconSvg = JS_ICONS.control;
    } else if (
      sub.includes("bucle") ||
      sub.includes("for") ||
      sub.includes("while") ||
      sub.includes("loop")
    ) {
      iconSvg = JS_ICONS.bucle;
    } else if (
      sub.includes("función") ||
      sub.includes("arrow") ||
      sub.includes("return")
    ) {
      iconSvg = JS_ICONS.funcion;
    } else if (
      sub.includes("alcance") ||
      sub.includes("scope") ||
      sub.includes("global") ||
      sub.includes("local")
    ) {
      iconSvg = JS_ICONS.alcance;
    } else if (
      sub.includes("dom") ||
      sub.includes("elemento") ||
      sub.includes("selección")
    ) {
      iconSvg = JS_ICONS.dom;
    } else if (
      sub.includes("evento") ||
      sub.includes("click") ||
      sub.includes("teclado") ||
      sub.includes("ratón")
    ) {
      iconSvg = JS_ICONS.evento;
    } else if (sub.includes("formulario") || sub.includes("validación")) {
      iconSvg = JS_ICONS.formulario;
    } else if (sub.includes("json")) {
      iconSvg = JS_ICONS.json;
    } else if (sub.includes("localstorage") || sub.includes("guardar")) {
      iconSvg = JS_ICONS.localstorage;
    } else if (
      sub.includes("string") ||
      sub.includes("array") ||
      sub.includes("fecha") ||
      sub.includes("método")
    ) {
      iconSvg = JS_ICONS.metodos;
    } else if (
      sub.includes("buena") ||
      sub.includes("práctica") ||
      sub.includes("nombre")
    ) {
      iconSvg = JS_ICONS.buenaPractica;
    } else if (
      sub.includes("error") ||
      sub.includes("manejar") ||
      sub.includes("mutación")
    ) {
      iconSvg = JS_ICONS.error;
    }

    cardEl.innerHTML = `
<div class="card-inner">
  <div class="card-front">
    <span class="card-icon">${iconSvg}</span>
    <span class="card-subtitle">${card.subtitle}</span>
    <span class="card-hint">Clic para ver código</span>
  </div>
  <div class="card-back">
    <div class="code-header">
      <span>💻 Código</span>
      <span class="close-hint">Clic para cerrar</span>
    </div>
    <pre><code>${highlightCode(card.code)}</code></pre>
  </div>
</div>
    `;

    cardEl.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleCard(cardEl);
    });

    cardsGrid.appendChild(cardEl);
  });
}

function toggleCard(cardEl) {
  if (activeCard && activeCard !== cardEl) {
    activeCard.classList.remove("flipped");
  }
  cardEl.classList.toggle("flipped");
  activeCard = cardEl.classList.contains("flipped") ? cardEl : null;
}

// ============================================================
// RESALTADOR DE SINTAXIS LIGERO
// Envuelve comentarios (// y /* */) en <span class="comment">
// Se hace de forma segura: primero se escapa el HTML y luego
// se aplican las expresiones regulares sobre el texto escapado.
// ============================================================

function highlightCode(code) {
  // 1. Escapar HTML
  const div = document.createElement("div");
  div.textContent = code;
  let escaped = div.innerHTML;

  // 2. Resaltar comentarios de bloque /* ... */
  // Usamos [\s\S] para incluir saltos de línea
  escaped = escaped.replace(/\/\*[\s\S]*?\*\//g, (match) => {
    return `<span class="comment">${match}</span>`;
  });

  // 3. Resaltar comentarios de línea // ... (hasta el final de la línea)
  // Evitamos los que ya están dentro de un span de comentario de bloque
  // Para simplificar, procesamos línea por línea
  const lines = escaped.split("\n");
  const processedLines = lines.map((line) => {
    // Si la línea ya contiene un span de comentario de bloque completo, la dejamos
    // Buscamos // que no esté dentro de un span
    // Estrategia simple: si la línea tiene <span class="comment">, saltamos
    if (line.includes('<span class="comment">')) {
      return line;
    }
    // Reemplazar // ... al final de la línea
    return line.replace(/(\/\/.*)$/, '<span class="comment">$1</span>');
  });

  return processedLines.join("\n");
}

// ============================================================
// BUSCADOR - BLOQUE COMPLETO (no pegues solo una parte)
// ============================================================
let currentThemeId = null;
let searchQueryActual = "";

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function resaltarPalabra(texto, palabra) {
  if (!palabra) return texto;
  const div = document.createElement("div");
  div.textContent = texto;
  const seguro = div.innerHTML;
  const escapada = palabra.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return seguro.replace(
    new RegExp("(" + escapada + ")", "gi"),
    "<mark>$1</mark>",
  );
}

function buscarTarjetas(origen) {
  const inputId =
    origen === "detail" ? "searchInputDetail" : "searchInputHome";
  const input = document.getElementById(inputId);
  if (!input) {
    console.warn("No existe el input con id:", inputId);
    return;
  }
  const palabra = input.value.trim();
  if (!palabra) {
    limpiarBusqueda();
    return;
  }
  searchQueryActual = palabra;
  const palabraNormalizada = normalizarTexto(palabra);

  if (origen === "detail" && currentThemeId !== null) {
    const theme = themesData.find(function (t) {
      return t.id === currentThemeId;
    });
    if (!theme) return;
    const filtradas = theme.cards.filter(function (card) {
      return normalizarTexto(
        card.subtitle + " " + card.code + " " + theme.title,
      ).includes(palabraNormalizada);
    });
    const info = document.getElementById("searchInfoDetail");
    if (info) {
      info.classList.remove("hidden");
      info.innerHTML = filtradas.length
        ? "Se encontraron <strong>" +
          filtradas.length +
          '</strong> tarjeta(s) con "<strong>' +
          palabra +
          '</strong>"'
        : 'No se encontraron tarjetas con "<strong>' +
          palabra +
          '</strong>" en este tema.';
    }
    if (filtradas.length === 0) {
      cardsGrid.innerHTML =
        '<div class="no-results">No hay tarjetas con "<b>' +
        palabra +
        '</b>". Pulsa <b>Limpiar</b>.</div>';
    } else {
      renderCards(filtradas);
    }
    return;
  }

  const resultados = [];
  themesData.forEach(function (theme) {
    theme.cards.forEach(function (card) {
      const textoCompleto =
        card.subtitle +
        " " +
        card.code +
        " " +
        theme.title +
        " " +
        theme.description;
      if (normalizarTexto(textoCompleto).includes(palabraNormalizada)) {
        resultados.push({ theme: theme, card: card });
      }
    });
  });

  const infoHome = document.getElementById("searchInfoHome");
  const gridResultados = document.getElementById("searchResultsGrid");
  if (infoHome) {
    infoHome.classList.remove("hidden");
    infoHome.innerHTML = resultados.length
      ? "Se encontraron <strong>" +
        resultados.length +
        '</strong> tarjeta(s) con "<strong>' +
        palabra +
        '</strong>"'
      : 'No se encontraron tarjetas con "<strong>' +
        palabra +
        '</strong>".';
  }
  if (buttonsGrid) buttonsGrid.classList.add("hidden");
  if (gridResultados) gridResultados.classList.remove("hidden");
  renderSearchResults(resultados, palabra);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSearchResults(resultados, palabra) {
  const grid = document.getElementById("searchResultsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  if (resultados.length === 0) {
    grid.innerHTML =
      '<div class="no-results">No hay tarjetas con "<b>' +
      palabra +
      '</b>". Prueba con: <b>array</b>, <b>funcion</b>, <b>DOM</b>, <b>evento</b>.</div>';
    return;
  }
  resultados.forEach(function (item) {
    const theme = item.theme;
    const card = item.card;
    const cardEl = document.createElement("div");
    cardEl.className = "card";
    let icon = "📘";
    const sub = card.subtitle.toLowerCase();
    if (sub.includes("alert") || sub.includes("mensaje")) icon = "🚨";
    else if (sub.includes("función") || sub.includes("arrow"))
      icon = "⚡";
    else if (sub.includes("array") || sub.includes("string")) icon = "🧰";
    else if (sub.includes("dom")) icon = "🌳";
    else if (sub.includes("evento") || sub.includes("click")) icon = "🖱️";
    else if (sub.includes("json")) icon = "📋";
    else if (sub.includes("localstorage")) icon = "💾";

    cardEl.innerHTML =
      '<div class="card-inner">' +
      '<div class="card-front">' +
      '<span class="search-result-tag">Tema ' +
      theme.id +
      " - " +
      theme.shortTitle +
      " →</span>" +
      '<span class="card-icon">' +
      icon +
      "</span>" +
      '<span class="card-subtitle">' +
      resaltarPalabra(card.subtitle, palabra) +
      "</span>" +
      '<span class="card-hint">Clic para ver código</span>' +
      "</div>" +
      '<div class="card-back">' +
      '<div class="code-header"><span>💻 Código</span><span class="close-hint">Clic para cerrar</span></div>' +
      "<pre><code>" +
      highlightCode(card.code) +
      "</code></pre>" +
      "</div>" +
      "</div>";
    const tag = cardEl.querySelector(".search-result-tag");
    if (tag) {
      tag.addEventListener("click", function (e) {
        e.stopPropagation();
        showDetail(theme.id);
        const inputDetail = document.getElementById("searchInputDetail");
        if (inputDetail) inputDetail.value = palabra;
        buscarTarjetas("detail");
      });
    }
    cardEl.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleCard(cardEl);
    });
    grid.appendChild(cardEl);
  });
}

function limpiarBusqueda() {
  searchQueryActual = "";
  const inputHome = document.getElementById("searchInputHome");
  const inputDetail = document.getElementById("searchInputDetail");
  if (inputHome) inputHome.value = "";
  if (inputDetail) inputDetail.value = "";
  const infoHome = document.getElementById("searchInfoHome");
  const infoDetail = document.getElementById("searchInfoDetail");
  if (infoHome) infoHome.classList.add("hidden");
  if (infoDetail) infoDetail.classList.add("hidden");
  const gridResultados = document.getElementById("searchResultsGrid");
  if (gridResultados) {
    gridResultados.innerHTML = "";
    gridResultados.classList.add("hidden");
  }
  if (buttonsGrid) buttonsGrid.classList.remove("hidden");
  if (
    currentThemeId !== null &&
    detailView &&
    detailView.classList.contains("active")
  ) {
    const theme = themesData.find(function (t) {
      return t.id === currentThemeId;
    });
    if (theme) renderCards(theme.cards);
  }
}

// Conectar showDetail / goHome con el buscador SIN editar esas funciones a mano
(function conectarBuscador() {
  const showDetailOriginal = showDetail;
  const goHomeOriginal = goHome;
  // Sobrescribimos las globales para que el buscador se entere del tema actual
  window.showDetail = function (themeId) {
    currentThemeId = themeId;
    const inputDetail = document.getElementById("searchInputDetail");
    if (inputDetail) inputDetail.value = "";
    const infoDetail = document.getElementById("searchInfoDetail");
    if (infoDetail) infoDetail.classList.add("hidden");
    return showDetailOriginal(themeId);
  };
  window.goHome = function () {
    limpiarBusqueda();
    currentThemeId = null;
    return goHomeOriginal();
  };
  // Enter + búsqueda en vivo
  const inputHome = document.getElementById("searchInputHome");
  const inputDetail = document.getElementById("searchInputDetail");
  if (inputHome) {
    inputHome.addEventListener("keydown", function (e) {
      if (e.key === "Enter") buscarTarjetas("home");
    });
    inputHome.addEventListener("input", function () {
      if (inputHome.value.trim() === "") limpiarBusqueda();
      else if (inputHome.value.trim().length >= 2) buscarTarjetas("home");
    });
  }
  if (inputDetail) {
    inputDetail.addEventListener("keydown", function (e) {
      if (e.key === "Enter") buscarTarjetas("detail");
    });
    inputDetail.addEventListener("input", function () {
      if (inputDetail.value.trim() === "") limpiarBusqueda();
      else if (inputDetail.value.trim().length >= 2)
        buscarTarjetas("detail");
    });
  }
})();

document.addEventListener("DOMContentLoaded", init);

document.addEventListener("click", (e) => {
  if (activeCard && !activeCard.contains(e.target)) {
    activeCard.classList.remove("flipped");
    activeCard = null;
  }
});

// ============================================================
// EFECTOS VISUALES (HUD futurista)
// - Brillo que sigue al cursor en botones y tarjetas
// - Barra de progreso de scroll
// ============================================================
document.addEventListener("pointermove", (e) => {
  const el = e.target.closest && e.target.closest(".nav-button, .card-front");
  if (!el) return;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", e.clientX - r.left + "px");
  el.style.setProperty("--my", e.clientY - r.top + "px");
});

window.addEventListener(
  "scroll",
  () => {
    const bar = document.getElementById("scrollProgress");
    if (!bar) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
  },
  { passive: true },
);
