'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const getCoordinatesInCanvas = (canvasEl, event) => {
    // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
    const rect = canvasEl.getBoundingClientRect(); 
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
  console.log(`x: ${x}, y: ${y}`);
}
canvas.addEventListener('click', (event) => {
  getCoordinatesInCanvas(canvas, event);
});

ctx.strokeStyle = "black";
ctx.fillStyle = "black";

ctx.beginPath();
ctx.moveTo(221,310);
ctx.lineTo(251,325);
ctx.lineTo(281,310);
ctx.stroke();