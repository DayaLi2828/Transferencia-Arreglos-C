//se crea el arreglo frutas con los respectivos elementos
let notas = ["50", "80", "100", "70", "65", "90"];
console.log(notas)
let suma = 0;//se inicializa la variable suma
for(let i=0; i <notas.length; i++){
    suma += notas[i];
}
//luego hacemos la operación para calcular el promedio
let promedio = suma / notas.length;

//se imprime el promedio de las notas
console.log(`El promedio de las notas es: ${promedio.toFixed(2)}`)