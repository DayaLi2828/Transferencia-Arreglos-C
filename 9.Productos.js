//creamos un arreglo llamado productos que contiene 3 objetos

let productos = [
        {Nombre: "Harina", Precio: "4000", Disponibilidad: true},
        {Nombre: "Arroz", Precio: "3500", Disponibilidad: false},
        {Nombre: "Mantequilla", Precio: "2500", Disponibilidad: true}
]
console.log(productos)
//rrecorremos el arreglo solo mostrando el nombre del producto
for (let produc of productos){
    console.log(produc.Nombre)
}