const reservas = ["confirmada", "pendiente", "cancelada"];
const urgencia = true;

function verificarEstado(lista, esUrgente) {
    if (esUrgente && lista.includes("cancelada")) {
        return {
            accion: "revisar reserva cancelada",
            motivo: "se debe gestionar el reembolso o cambio antes de continuar."
        };
    } else {
        return {
            accion: "proceso normal",
            motivo: "todas las reservas están en orden o no hay urgencia."
        };
    }
}

console.log(verificarEstado(reservas, urgencia));