const estadosPelicula = ["suspenso", "susto", "final"];
const ambiente = "oscuro";

function evaluarEstado(estados, luz) {
    if (luz === "oscuro" && estados.includes("susto")) {
        return {
            accion: "activar modo supervivencia",
            motivo: "el ambiente oscuro potencia el impacto del susto."
        };
    } else {
        return {
            accion: "continuar visualizacion",
            motivo: "el ambiente es seguro para ver la pelicula."
        };
    }
}

console.log(evaluarEstado(estadosPelicula, ambiente));