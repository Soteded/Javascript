'use strict';

/* MANIPULER LE CSS AVEC JS */

// Ajoutez la classe 'alert-primary' au <div>.
$('#js-alert').addClass('alert-primary');

// Supprimez la classe 'alert' du <div>. Supprimez la classe 'alert-primary' du <div>.
$('#js-alert').removeClass('alert-primary');

// Ajoutez d'un coup les classes 'alert' et 'alert-warning' au <div>.
$('#js-alert').addClass('alert-warning');

// Vérifiez si le <div> possède déjà la classe 'alert-warning'. Si oui, supprimez-la.
if ($('#js-alert').hasClass('alert-warning')){
    $('#js-alert').removeClass('alert-warning');
}

// En cliquant sur le bouton #js-btn, basculez la classe 'alert-success': premier clique ajoute la classe, deuxième clique l'enlève, troisième l'ajoute de nouveau, etc.
$('#js-btn1')[0].addEventListener('click', () => {
    if ($('#js-alert').hasClass('alert-success')){
        $('#js-alert').removeClass('alert-success');
    } else {
        $('#js-alert').addClass('alert-success');
    }
});

// Récupérez et logguez dans la console la couleur du fond du bouton.
console.log($('#js-btn1').css('background-color'));

// Passez la couleur du fond du bouton en #71b8af.
$('#js-btn1').css('background-color', '#71b8af');

// Changez d'un coup la couleur du texte du bouton à #fff2d5 et le radius de la bordure à 3px.
$('#js-btn1').css({
    color: '#fff2d5',
    'border-radius': '3px',
});

// Vérifiez si le <div> a la classe alert-danger. Si oui, ajoutez la classe text-danger au <p> et supprimez la classe btn-success du bouton. Au clique sur le bouton ajoutez la propriété css display égale à none au <div>.

if ($('#js-danger-alert').hasClass('alert-danger')) {
    $("#js-danger-alert > p").addClass('text-danger');
    $('#js-danger-alert-btn').removeClass('btn-success');
}

$('#js-danger-alert-btn')[0].addEventListener('click', () => {
    $('#js-danger-alert').css('display', 'none');
});