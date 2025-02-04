# Aplicación de Tareas Pendientes (TODO App)
Esta es una aplicación simple de tareas pendientes que permite a los usuarios crear, listar y ver información detallada sobre sus tareas. La aplicación está construida utilizando un framework del lado del servidor y proporciona rutas para cada una de las vistas requeridas.

## Rutas
Listar todas las tareas pendientes: /todos/lista

Esta ruta muestra todas las tareas pendientes en un formato de tarjeta, mostrando únicamente el título de cada tarea.
Crear una nueva tarea pendiente: /todos/crear

Esta ruta permite a los usuarios crear una nueva tarea pendiente. Los siguientes campos son requeridos:
Título: El título de la tarea.
Descripción: Una descripción detallada de la tarea.
Fecha de creación: La fecha en la que se creó la tarea.
Mostrar detalles de una tarea pendiente: /todos/:id

Esta ruta muestra la información detallada de una tarea pendiente específica. Muestra la siguiente información:
Título: El título de la tarea.
Descripción: Una descripción detallada de la tarea.
Fecha de creación: La fecha en la que se creó la tarea.

Ejecuta: -npm run dev -npm run server
