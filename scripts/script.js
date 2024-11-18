/* Otra solucion con event listener que encontré, pero descarté porque leí las instrucciones */

/* var imgBorder = document.getElementById('catto');

imgBorder.addEventListener('click', () => {
  imgBorder.classList.toggle('border');
});
 */

const imagen = document.getElementById('catto');

imagen.addEventListener('click', () => {
  if (imagen.style.border) {
    imagen.style.border = ''; 
  } else {
    imagen.style.border = '2px solid red'; 
  }
});

