//creamos un objeto audífonos con sus respectivas propiedades clave-valor

let audifonos = {"Marca": "Global-SP400",
    "Color": "Morado",
    "Tipo": "Inalámbrico",
    "Estado": "Nuevo"
}
for(let [clave, valor] of Object.entries(audifonos)){
    console.log(`${clave} ${valor}`)
}