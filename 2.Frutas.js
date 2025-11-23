//se crea el arreglo frutas con los respectivos elementos
let frutas = ["Manzana", "Pera", "Uva"];
console.log(frutas)

//agregamos otro elemento al incicio
frutas.unshift("Banano");
console.log(frutas);

//eliminamos el último elemento
frutas.pop();
//se muestra el arreglo final
console.log(frutas);

//recorremos el arreglo con for...of
for(frut of frutas){
    console.log(frut)
}
