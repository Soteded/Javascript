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

ctx.strokeStyle = 'white';
ctx.fillStyle = 'white';

// HEAD
ctx.beginPath();
ctx.arc(200, 180, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// BODY
ctx.beginPath();
ctx.arc(200, 360, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// HAT
ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';

ctx.fillRect(134, 130, 130, 30);
ctx.fillRect(155, 52, 90, 100);

// EYES
ctx.beginPath();
ctx.arc(182, 176, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(219, 176, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// ARM
ctx.lineWidth ="4";
ctx.beginPath();
ctx.moveTo(130,309);
ctx.lineTo(41,255);
ctx.stroke();

ctx.lineWidth ="4";
ctx.beginPath();
ctx.moveTo(266,310);
ctx.lineTo(359,229);
ctx.stroke();

// NOSE
ctx.strokeStyle = "orange";
ctx.fillStyle = "orange";

ctx.beginPath();
ctx.moveTo(198,188);
ctx.lineTo(125,207);
ctx.lineTo(197,214);
ctx.quadraticCurveTo(211,201,197,188);
ctx.stroke();
ctx.fill();

// SCARF
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'blue';
ctx.fillRect(161, 232, 70, 15);
ctx.fillRect(206, 247, 15, 50);