const inventario = [
    { modelo: "Bugatti Chiron", velocidadMaxima: 440 },
    { modelo: "Koenigsegg Jesko", velocidadMaxima: 480 },
    { modelo: "Rimac Nevera", velocidadMaxima: 412 }
];

const busqueda = "Koenigsegg Jesko";

function buscarAuto(lista, modeloBuscado) {
    const autoEncontrado = lista.find(auto => auto.modelo === modeloBuscado);
    
    if (autoEncontrado && autoEncontrado.velocidadMaxima > 450) {
        return {
            accion: "calificado como top speed",
            motivo: `El ${autoEncontrado.modelo} supera los 450 km/h.`
        };
    } else if (autoEncontrado) {
        return {
            accion: "calificado como deportivo estandar",
            motivo: `El ${autoEncontrado.modelo} es rápido, pero no alcanza el rango top.`
        };
    } else {
        return {
            accion: "error",
            motivo: "El auto no se encuentra en el inventario."
        };
    }
}

console.log(buscarAuto(inventario, busqueda));