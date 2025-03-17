var ListaDeNombres = []; // Array para almacenar los nombres

// Función para agregar amigos
function agregarAmigo() {
    // Obtener el campo de texto por su ID
    let Nombre = document.getElementById('amigo').value.trim();

    // Validar si el nombre no está vacío
    if (Nombre) {
        ListaDeNombres.push(Nombre); // Agregar el nombre al array
        ActualizarLista(); // Actualizar la lista en el DOM
        document.getElementById('amigo').value = ''; // Limpiar el campo de texto
    } else {
        alert("Por favor, ingresa un nombre válido."); // Mostrar alerta si el campo está vacío
    }
}

// Función para actualizar la lista en el DOM
function ActualizarLista() {
    // Seleccionar la lista por su ID
    let lista = document.getElementById('listaAmigos');

    // Verificar si la lista existe en el DOM
    if (!lista) {
        console.error("Elemento con ID 'listaAmigos' no encontrado.");
        return;
    }

    // Limpiar el contenido actual de la lista
    lista.innerHTML = '';

    // Iterar sobre el array y agregar cada nombre como <li>
    ListaDeNombres.forEach((nombre) => {
        let li = document.createElement('li'); // Crear un elemento <li>
        li.textContent = nombre; // Asignar el texto del nombre al <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (ListaDeNombres.length < 2) {
        alert("Agrega al menos dos amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * ListaDeNombres.length);
    let amigoSecreto = ListaDeNombres[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo secreto: ${amigoSecreto}</li>`;
}
