// logica.js

const contenedor = document.getElementById('contenedor');

async function obtenerPerros() {
    try {
        // Tu URL elegida (pedimos 10 o 20 si quieres más)
        const respuesta = await fetch("https://dog.ceo/api/breeds/image/random/10");
        const datos = await respuesta.json();

        // OJO: En esta API, la lista de fotos se llama "message", NO "results"
        console.log(datos.message);

        dibujarPerros(datos.message);

    } catch (error) {
        console.error("Error:", error);
    }
}

function dibujarPerros(imagenes) {
    // Como "imagenes" es solo una lista de textos (URLs), usamos el index para enumerar
    imagenes.forEach((url, index) => {

        // TRUCO PRO: Sacar la raza desde la URL
        // La URL se ve así: https://images.dog.ceo/breeds/beagle/n020.jpg
        // Al separar por barra (/), la raza siempre es la parte 4
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