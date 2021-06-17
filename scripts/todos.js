let listadoTodos = [
    {
        description: "Terminar mi sitio de To Dos.",
        createdAt: "17/06/20"
    },
    {
        description: "Estudiar.",
        createdAt: "5/05/20"
    },
    {
        description: "Bañar al perro.",
        createdAt: "19/04/20"
    }
];

{/* <li class="tarea">
      <div class="not-done"></div>
      <div class="descripcion">
        <p class="nombre">Mi hermosa tarea</p>
        <p class="timestamp">Creada: 19/04/20</p>
      </div>
    </li> */}

const tareasPendientes = document.querySelector('.tareas-pendientes');
const tareasTerminadas = document.querySelector('.tareas-terminadas');


function renderizarTodos() {
    // tareasPendientes.innerHTML
    listadoTodos.forEach(tarea => {
        tareasPendientes.innerHTML += 
        `<li class="tarea">
            <div class="not-done"></div>
            <div class="descripcion">
            <p class="nombre">${tarea.description}</p>
            <p class="timestamp">${tarea.createdAt}</p>
            </div>
        </li>`
    });

    //console.log("deberiamos renderizar todas las To Do's del array");

    // tareasTerminadas.innerHTML
    listadoTodosTerminadas.forEach(tarea => {
        tareasTerminadas.innerHTML += 
        `<li class="tarea">
            <div class="not-done"></div>
            <div class="descripcion">
            <p class="nombre">${tarea.description}</p>
            <p class="timestamp">${tarea.createdAt}</p>
            </div>
        </li>`
    });
}



renderizarTodos()