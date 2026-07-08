const canciones = [
    { titulo: "Song A", duracion: 180, formato: "mp3" },
    { titulo: "Song B", duracion: 0, formato: "mp3" },
    { titulo: "Song C", duracion: 210, formato: "desconocido" }
];

function detectarInconsistencias(lista) {
    for (let cancion of lista) {
        if (cancion.duracion === 0 || cancion.formato === "desconocido") {
            return {
                accion: "reparar metadata",
                motivo: `La canción ${cancion.titulo} presenta errores de duración o formato.`
            };
        }
    }
    return {
        accion: "reproducir",
        motivo: "La playlist está lista para ejecutarse."
    };
}

console.log(detectarInconsistencias(canciones));