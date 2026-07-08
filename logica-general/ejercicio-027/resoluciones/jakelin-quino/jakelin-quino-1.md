## Analisis

- Entrada: Un arreglo de objetos, donde cada objeto representa una canción con título, duración y formato.
- Proceso: Recorrer el arreglo para verificar si alguna canción tiene duración 0 o formato "desconocido".
- Salida: Una acción a realizar (reparar o reproducir) y la justificación del motivo.

## Reglas identificadas

1. Si una canción tiene duración 0, es una inconsistencia.
2. Si una canción tiene formato "desconocido", es una inconsistencia.
3. Si hay cualquier inconsistencia, se debe detener y "reparar metadata".
4. Si no hay errores, se procede a "reproducir".

## Pruebas

### Caso normal

Entrada:
canciones: [{titulo: "A", duracion: 180, formato: "mp3"}]

Resultado esperado:
accion: reproducir
motivo: La playlist está lista para ejecutarse.

### Caso borde

Entrada:
canciones: [{titulo: "B", duracion: 0, formato: "mp3"}]

Resultado esperado:
accion: reparar metadata
motivo: La canción B presenta errores de duración o formato.

## Explicacion final

Mi solucion funciona utilizando un ciclo 'for...of' que inspecciona cada objeto dentro del arreglo. En cuanto el programa encuentra un elemento que no cumple con los requisitos de duración o formato, utiliza un 'return' para salir de la función inmediatamente, entregando el mensaje de error. Esto garantiza que la playlist no se reproduzca si existe un archivo corrupto.