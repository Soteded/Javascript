'use strict';

// setTimeout
// Logguez dans la console 'Hello' 3 secondes après le rendu de la page.

setTimeout(() => {
    console.log("Hello");
}, 3000);

// Logguez dans la console 'Logged after 5 seconds' 5 secondes après le rendu de la page.

setTimeout(() => {
    console.log("Logged after 5 seconds");
}, 5000);

// Ajoutez un écouteur d'événement 'click' à l'objet window pour logguer dans la console 'Clicked' 3 secondes après le clique.

window.addEventListener("click", () => {
    setTimeout(() => {
        console.log("Clicked after 3 secs !");
    }, 3000);
});

// Créez un div. Au survol de ce div logguez dans la console 'I was hovered 5.5 seconds ago' 5 secondes plus tard.

ladiv.addEventListener("mouseover", () =>{
    setTimeout(() => {
        console.log("Hovered 5.5 secs ago !");
    }, 5500);
});

// onload et onerror
// Créez dynamiquement une image avec src égal à http://lorempixel.com/400/200/.
// Quand l'image sera entièrement chargée, logguez dans la console 'Done!' et l'affichez sur la page.
// En cas d'erreur de chargement, logguez dans la console 'Error'.

const myImg = document.createElement("img");
myImg.src = "http://lorempixel.com/400/200/";
myImg.onload = () => {
    console.log("Done");
    document.body.appendChild(myImg);
}
myImg.onerror = () => {
    console.log("Failed");
}

// Créez dynamiquement une node de script avec l'url de la librarie lodash: https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js.

const skript = document.createElement("script");
skript.src = "https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js";
document.body.appendChild(skript);
skript.onload = () => {
    var r = _.round(10.019564237654654, 2);
    console.log("r = ", r);
};
// Quand le script sera téléchargé, appelez la fonction round pour arrondir le nombre 10.02.