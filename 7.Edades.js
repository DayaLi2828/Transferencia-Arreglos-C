//se crea un arreglo con 5 edades

let edades = [16, 20, 45, 10];

//recorremos las edades usando for..of
for(edad of edades){
//si la edad es menor o igual que 18 imprime solo las mayores de 18 
    if (edad >=18){
        console.log(edad)
    }
}
//mostramos el arreglo completo
console.log(edades)