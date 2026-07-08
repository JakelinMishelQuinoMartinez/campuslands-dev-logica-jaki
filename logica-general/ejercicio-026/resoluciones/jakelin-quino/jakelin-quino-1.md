## Analisis

- Entrada: Un arreglo de objetos (inventario de autos) y el nombre del modelo a buscar.
- Proceso: Buscar el objeto en el arreglo por nombre. Si existe, evaluar si su velocidad máxima supera los 450 km/h.
- Salida: Una acción (clasificación) y el motivo basado en la velocidad.

## Reglas identificadas

1. Si el auto existe y supera los 450 km/h, se clasifica como "top speed".
2. Si el auto existe pero no supera los 450 km/h, se clasifica como "deportivo estandar".
3. Si el auto no existe en el inventario, se devuelve un mensaje de error.

## Pruebas

### Caso normal

Entrada:
modelo: "Koenigsegg Jesko"

Resultado esperado:
accion: calificado como top speed
motivo: El Koenigsegg Jesko supera los 450 km/h.

### Caso borde

Entrada:
modelo: "Ferrari"

Resultado esperado:
accion: error
motivo: El auto no se encuentra en el inventario.

## Explicacion final

Mi solucion funciona utilizando el metodo .find() para localizar el objeto especifico dentro del arreglo de autos. Al verificar la existencia del objeto y su propiedad 'velocidadMaxima', puedo aplicar condicionales if-else para retornar el resultado adecuado. Esto asegura que la busqueda sea eficiente y que el programa maneje correctamente tanto los autos existentes como los que no estan registrados.