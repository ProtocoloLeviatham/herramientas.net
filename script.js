// --- SCRIPT DE LLUVIA DE CÓDIGO (MATRIX) ---
// (Esta parte no ha cambiado)

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';
const matrixColor = '#00a6fb'; // Azul estilo Kali

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = matrixColor;
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

const matrixInterval = setInterval(drawMatrix, 33);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // No es necesario recalcular columnas aquí, la animación se ajustará
});


// --- NUEVO: SCRIPT PARA LOADER Y MODAL DE ÉTICA ---

// Espera a que todo el contenido (DOM) esté cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // Elementos del DOM
    const loaderOverlay = document.getElementById('loader-overlay');
    const loaderText = document.getElementById('loader-text');
    const modalOverlay = document.getElementById('modal-overlay');
    const acceptBtn = document.getElementById('accept-btn');
    const mainContent = document.getElementById('main-content');
    
    // Textos para la animación de carga "boot-up"
    const bootSequence = [
        "Booting Leviatham OS v1.0...",
        "Initializing kernel modules...",
        "Loading security protocols...",
        "Mounting tool repositories...",
        "Decrypting ethical framework...",
        "All systems operational.",
        "Access Granted. Awaiting user verification..."
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    
    // Función para simular el "tipeo"
    function typeLoaderText() {
        if (lineIndex < bootSequence.length) {
            if (charIndex < bootSequence[lineIndex].length) {
                // Escribe caracter por caracter
                loaderText.innerHTML = bootSequence[lineIndex].substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeLoaderText, 20); // Velocidad de tipeo
            } else {
                // Pasa a la siguiente línea
                loaderText.innerHTML = bootSequence[lineIndex]; // Asegura línea completa
                charIndex = 0;
                lineIndex++;
                setTimeout(typeLoaderText, 700); // Pausa entre líneas
            }
        } else {
            // Fin de la animación
            setTimeout(showModal, 500); // Pausa antes de mostrar el modal
        }
    }
    
    // Función para ocultar loader y mostrar modal
    function showModal() {
        loaderOverlay.style.transition = "opacity 0.5s ease";
        loaderOverlay.style.opacity = "0";
        setTimeout(() => {
            loaderOverlay.style.display = "none"; // Oculta el loader
            modalOverlay.style.display = "flex"; // Muestra el modal
        }, 500);
    }
    
    // Event listener para el botón de Aceptar
    acceptBtn.addEventListener('click', () => {
        modalOverlay.style.transition = "opacity 0.5s ease";
        modalOverlay.style.opacity = "0";
        setTimeout(() => {
            modalOverlay.style.display = "none"; // Oculta el modal
            
            // Muestra el contenido principal
            mainContent.style.visibility = "visible";
            mainContent.style.opacity = "0";
            mainContent.style.transition = "opacity 1s ease";
            setTimeout(() => {
                mainContent.style.opacity = "1"; // Efecto fade-in
            }, 10);
            
        }, 500);
    });

    // Iniciar la animación de carga
    typeLoaderText();
    
});

