// 1. Referencia al contenedor HTML
const contenedor = document.getElementById('contenedor');

// 2. Función Asíncrona para pedir los usuarios
async function obtenerUsuarios() {
    try {
        // Mi URL elegida
        const respuesta = await fetch("https://randomuser.me/api/?results=20");

        // Convertimos a JSON
        const datos = await respuesta.json();

        console.log("Datos recibidos:", datos.results);

        // Pasamos la lista a la función de pintar
        dibujarUsuarios(datos.results);

    } catch (error) {
        console.error("Error al cargar usuarios:", error);
        contenedor.innerHTML = "<p style='color:red'>Error al cargar la API. Intenta recargar.</p>";
    }
}

// 3. Función para generar el HTML
function dibujarUsuarios(usuarios) {
    usuarios.forEach(usuario => {

        const tarjetaHTML = `
            <div class="tarjeta">
                <img class="foto-perfil" src="${usuario.picture.large}" alt="Foto de perfil">

                <h3 class="nombre">${usuario.name.first} ${usuario.name.last}</h3>

                <p class="datos-extra">${usuario.email}</p>
                <p class="datos-extra">${usuario.location.city}</p>

                <span class="pais">${usuario.location.country}</span>
            </div>
        `;

        // Inyectamos la tarjeta en el contenedor
        contenedor.innerHTML += tarjetaHTML;
    });
}

// 4. Ejecutar al inicio
obtenerUsuarios();