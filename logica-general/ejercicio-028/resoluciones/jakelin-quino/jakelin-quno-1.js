const items = ["aprobado", "pendiente", "bloqueado"];
const prioridad = "alta";

function procesarFlujo(lista, nivelPrioridad) {
    if (nivelPrioridad === "alta" && lista.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    } else {
        return {
            accion: "continuar flujo normal",
            motivo: "no existen bloqueos urgentes."
        };
    }
}

const resultado = procesarFlujo(items, prioridad);
console.log(resultado);