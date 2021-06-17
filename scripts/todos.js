let listadoTodosPendientes = [
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

let listadoTodosTerminadas = [
    {
        description: "Aprobar Front End I.",
        createdAt: "14/04/20"
    },
    {
        description: "Estudiar.",
        createdAt: "5/03/20"
    },
    {
        description: "Bañar al perro.",
        createdAt: "1/01/19"
    }
];

{/* <li class="tarea">
      <div class="not-done"></div>
      <div class="descripcion">
        <p class="nombre">Mi hermosa tarea</p>
        <p class="timestamp">Creada: 19/04/20</p>
      </div>
    </li> */}

window.addEventListener("load", function () {
    const tareasPendientes = document.querySelector('.tareas-pendientes');
    const tareasTerminadas = document.querySelector('.tareas-terminadas');


    function renderizarTodos() {
        // tareasPendientes.innerHTML
        listadoTodosPendientes.forEach(tarea => {
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

});