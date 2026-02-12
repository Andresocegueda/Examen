// logica.js

const contenedor = document.getElementById('contenedor');

async function obtenerPerros() {
    try {
        // API de los perros
        const respuesta = await fetch("https://dog.ceo/api/breeds/image/random/10");
        const datos = await respuesta.json();

        console.log("Datos recibidos:", datos);

        dibujarPerros(datos.message);

    } catch (error) {
        console.error("Error:", error);
    }
}

function dibujarPerros(imagenes) {
    imagenes.forEach((url, index) => {

        const raza = url.split('/')[4];

        const tarjetaHTML = `
            <div class="tarjeta">
                <img class="foto" src="${url}" alt="Perro">
                <h3 class="raza">🐕 ${raza}</h3>
                <p>Candidato #${index + 1}</p>
            </div>
        `;

        contenedor.innerHTML += tarjetaHTML;
    });
}

obtenerPerros();