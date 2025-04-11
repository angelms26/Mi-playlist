// Aquí puedes poner funciones más avanzadas después
console.log("App de música cargada.");
const fondoAnimado = document.getElementById('animated-bg');
const audios = document.querySelectorAll('audio');

audios.forEach(audio => {
  audio.addEventListener('play', () => {
    fondoAnimado.style.opacity = '1';
  });
  audio.addEventListener('pause', () => {
    fondoAnimado.style.opacity = '0';
  });
  audio.addEventListener('ended', () => {
    fondoAnimado.style.opacity = '0';
  });
});
const musicRain = document.getElementById('musicRain');

function crearNota() {
  const nota = document.createElement('div');
  nota.classList.add('note');
  nota.textContent = '♬';

  // Posición aleatoria en el ancho de la pantalla
  nota.style.left = Math.random() * 100 + 'vw';

  // Tamaño y duración aleatorios
  const size = 20 + Math.random() * 20;
  nota.style.fontSize = size + 'px';
  nota.style.animationDuration = (4 + Math.random() * 3) + 's';

  musicRain.appendChild(nota);

  // Eliminar la nota después de que termine la animación
  setTimeout(() => {
    nota.remove();
  }, 7000);
}

// Crear notas cada 300ms
setInterval(crearNota, 300);
