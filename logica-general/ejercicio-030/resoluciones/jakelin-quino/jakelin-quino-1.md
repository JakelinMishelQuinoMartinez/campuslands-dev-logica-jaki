## Analisis

- Entrada: Un arreglo con estados de reservas (confirmada, pendiente, cancelada) y un booleano de urgencia.
- Proceso: Verificar si existe el estado "cancelada" dentro del arreglo cuando la urgencia está activa.
- Salida: Una acción a realizar y el motivo justificado de esa acción.

## Reglas identificadas

1. Si la urgencia es verdadera y hay al menos una reserva cancelada, se prioriza la revisión de cancelaciones.
2. Si no hay cancelaciones o no hay urgencia, se procede con el proceso normal de viaje.

## Pruebas

### Caso normal

Entrada:
reservas: ["confirmada", "pendiente", "cancelada"]
urgencia: true

Resultado esperado:
accion: revisar reserva cancelada
motivo: se debe gestionar el reembolso o cambio antes de continuar.

### Caso borde

Entrada:
reservas: ["confirmada", "confirmada"]
urgencia: true

Resultado esperado:
accion: proceso normal
motivo: todas las reservas están en orden o no hay urgencia.

## Explicacion final

Mi solucion funciona analizando el contenido del arreglo con el metodo .includes(). Al combinar esto con una estructura condicional if-else, el sistema toma una decision logica: si detecta una anomalia (cancelacion) bajo un escenario de urgencia, detiene el flujo normal para dar prioridad a la resolucion de problemas, asegurando que no se pase por alto ninguna reserva fallida.