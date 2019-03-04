'use strict';

// Créez un bouton. Si ce bouton est cliqué, logguez dans la console 'Clicked!'. Si ce bouton est cliqué plus de 5 fois, enlevez son écouteur d'événement 'click'.

let counter = 0;
$('#js-btn').click(() => {
    console.log('Clicked !');
    counter++;
    if (counter > 5){
        $('#js-btn').off('click');
    }
    console.log('counter :', counter);
});

// Créez un div bleu. Si on le survole, il passe en vert. Si on sort le curseur du div, il redevient bleu. Utilisez les méthodes mouseenter, mouseleave ou hover.

/*
$('#js-hovered').mouseenter(() => {
    $('js-hovered').css('background-color', 'green');
});

$('#js-hovered').mouseleave(() => {
    $('js-hovered').css('background-color', 'blue');
});
*/

$('#js-hovered').hover(() => {
    $('#js-hovered').css('background-color', 'green');
}, () => {
    $('#js-hovered').css('background-color', 'aqua');
});