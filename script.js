// --- SCRIPT DE LLUVIA DE CÓDIGO (MATRIX) ---

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Ajustar el canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Caracteres para la lluvia (puedes cambiarlos)
const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';
// El color azul que pediste
const matrixColor = '#00a6fb'; // Azul estilo Kali

const fontSize = 16;
// Calcular el número de columnas basado en el ancho y el tamaño de la fuente
const columns = Math.floor(canvas.width / fontSize);

// Crear un array para guardar la posición 'y' de cada gota de lluvia
// 'drops[i]' será la posición 'y' de la gota en la columna 'i'
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    // Rellenar el fondo con un negro semi-transparente
    // Esto crea el efecto de "estela" o desvanecimiento
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Configurar el color y la fuente del texto
    ctx.fillStyle = matrixColor;
    ctx.font = `${fontSize}px monospace`;

    // Recorrer cada columna (cada gota)
    for (let i = 0; i < drops.length; i++) {
        // Elegir un caracter aleatorio
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        // Dibujar el caracter en la posición (x, y)
        // x = i * fontSize
        // y = drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Si la gota llega al final de la pantalla...
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            // ...la reseteamos a la parte superior (posición 0)
            drops[i] = 0;
        }

        // Incrementar la posición 'y' de la gota para que caiga
        drops[i]++;
    }
}

// Ejecutar la función 'drawMatrix' repetidamente
// 33 milisegundos = aprox 30 frames por segundo
setInterval(drawMatrix, 33);

// Bonus: Reajustar el canvas si la ventana cambia de tamaño
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Recalcular columnas (aunque para este script simple no es estrictamente necesario)
});