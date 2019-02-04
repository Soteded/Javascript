'use strict';

document.getElementById("NavigatorName").innerHTML = "Nom de navigateur : " + navigator.appCodeName;
document.getElementById("PrincipalLang").innerHTML = "Langue principale : " + navigator.language;
document.getElementById("OS").innerHTML = "Plateforme de mon ordinateur : " + navigator.platform;
document.getElementById("coockies").innerHTML = "Cookies Activés : " + navigator.cookieEnabled;

document.getElementById("ScreenWidth").innerHTML = "Largeur de l'écran : " + window.screen.availWidth;
document.getElementById("ScreenHeight").innerHTML = "Hauteur de l'écran : " + window.screen.availHeight;
document.getElementById("ScreenOrientation").innerHTML = "Orientation de votre écran : " + window.screen.orientation.type;

document.getElementById("NavigatorDispWidth").innerHTML = "Largeur de la fenêtre : " + window.innerWidth;
document.getElementById("NavigatorDispHeight").innerHTML = "Hauteur de la fenêtre : " + window.innerHeight;
document.getElementById("NavigatorWidth").innerHTML = "Largeur de mon navigateur : " + window.outerWidth;
document.getElementById("NavigatorHeight").innerHTML = "Hauteur de mon navigateur : " + window.outerHeight;

document.getElementById("urlPage").innerHTML = "URL : " + window.location.href;
document.getElementById("hostname").innerHTML = "Nom d'hôte : " + window.location.pathname;
document.getElementById("protocol").innerHTML = "Protocol utilisé : " + window.location.protocol;