//lista de colores 

let colores = ["Morado", "Celeste", "Amarillo", "Verde"];

colores.push("Negro");

console.log(colores)

colores.splice(3,1)

colores.pop();

colores.unshift("rojo")
console.log(colores)

colores.shift()
console.log(colores)


//informacion completa de un estudiante

let estudiante = {
    nombre: "Dayana",
    edad: 18,
    ficha: 2994281,
    direccion: "vereda"
}

console.log(estudiante.nombre);
console.log(estudiante.edad);
console.log(estudiante.ficha);
console.log(estudiante.direccion)

for (const estu of Object.entries(estudiante)) {
    console.log(estu);
}

const valores = Object.values(estudiante);

console.log(valores)


const val = Object.keys(estudiante);

console.log(val)


//precios de diferentes camisas

let camisas = [60000,50000,45000, 30000];
console.log(camisas)

//descripcion de un computador portatil

let portatil = {
    marca: "Dell",
    modelo: "Sq075",
    color: "negro",
    ram: 16
}


console.log(portatil)

console.log(portatil.marca);
console.log(portatil.modelo);
console.log(portatil.color);
console.log(portatil.ram);

console.log(Object.keys(portatil))
console.log(Object.values(portatil))

