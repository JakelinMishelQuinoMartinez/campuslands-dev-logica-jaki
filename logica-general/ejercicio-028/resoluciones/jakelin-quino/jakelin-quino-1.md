## Analisis

- Entrada: Un arreglo de estados de tareas (items), un nivel de prioridad y una regla definida.
- Proceso: Evaluar si el arreglo contiene el estado "bloqueado" y si la prioridad es "alta". Si ambas se cumplen, asignar la acción de revisión prioritaria.
- Salida: Un objeto o mensaje que indica la acción a realizar y el motivo de la misma.

## Reglas identificadas

1. Si la prioridad es "alta" y existe al menos un elemento "bloqueado", la acción debe ser revisar ese bloqueo primero.
2. Si no se cumplen las condiciones anteriores, el sistema debe indicar que se continúa con el flujo normal.

## Pruebas

### Caso normal

Entrada:
items: ["aprobado", "pendiente", "bloqueado"]
prioridad: alta

Resultado esperado:
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales.

### Caso borde

Entrada:
items: ["aprobado", "pendiente"]
prioridad: alta

Resultado esperado:
accion: continuar flujo normal
motivo: no existen bloqueos urgentes.

## Explicacion final

Mi solucion funciona utilizando el metodo .includes() de los arreglos para detectar si el estado 'bloqueado' esta presente. Luego, mediante una estructura condicional 'if', verifico tanto la presencia del bloqueo como el nivel de prioridad. Esto permite que el flujo de toma de decisiones sea dinamico y basado estrictamente en las reglas de negocio establecidas.