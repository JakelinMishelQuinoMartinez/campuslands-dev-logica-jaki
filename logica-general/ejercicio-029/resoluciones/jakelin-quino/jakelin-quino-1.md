## Analisis

- Entrada: Un arreglo con los estados de la pelicula (ej. suspenso, susto, final) y una variable que indica el ambiente (luz u oscuro).
- Proceso: Verificar si el ambiente es "oscuro" y si el arreglo contiene el estado "susto". Si se cumple, disparar la alerta de supervivencia.
- Salida: Un objeto que contiene la acción a tomar y la justificación.

## Reglas identificadas

1. Si el ambiente es "oscuro" y existe un "susto" en la trama, la acción es "activar modo supervivencia".
2. En cualquier otro caso, la acción es "continuar visualizacion".

## Pruebas

### Caso normal

Entrada:
estados: ["suspenso", "susto", "final"]
ambiente: "oscuro"

Resultado esperado:
accion: activar modo supervivencia
motivo: el ambiente oscuro potencia el impacto del susto.

### Caso borde

Entrada:
estados: ["suspenso", "final"]
ambiente: "oscuro"

Resultado esperado:
accion: continuar visualizacion
motivo: el ambiente es seguro para ver la pelicula.

## Explicacion final

Mi solucion funciona mediante la evaluacion booleana combinada. Utilizo el metodo .includes() para detectar si la escena de miedo ('susto') esta presente en el arreglo de estados. Al aplicar una estructura if-else, el programa es capaz de cambiar el estado de la aplicacion (de visualizacion normal a supervivencia) solo cuando las condiciones ambientales y de trama lo requieren, cumpliendo con la logica del reto.