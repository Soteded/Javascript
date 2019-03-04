'use strict';

// Récupérez et logguez dans la console le contenu du titre de la page.
const h1text = $('h1').text();
console.log('h1text', h1text);
// Changez le contenu du titre de la page à 'My page title'.
$('h1').text('My page title');

// Récupérez et logguez dans la console le HTML de l'article.
const articleHTML = $('#js-article').html();

// Changez le contenu de l'article à
$('#js-article').html(`
 <h2>This is my article.</h2>
 <p>This is my article's content.</p>
 <a href="https://example.com">Read more</a>
`)

// Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.
const inputValue = $('#js-search').val();

// Changez la valeur du champ de saisie à 'Beagles'
$('#js-search').val('Beagles');

// Récupérez et logguez dans la console la valeur du placeholder du champ de saisie.

// Changez la valeur du placeholder du champ de saisie à 'Search'
$('#js-search').attr('placeholder','Searching for something ?');

// Sélectionnez le formulaire dans le DOM. Ajoutez un écouteur d'événements 'submit' au formulaire pour déclencher un événement à chaque fois que le formulaire est soumis. Quand ce formulaire est soumis, récupérez la valeur saisie dans le champ de recherche. Si la valeur saisie est égale à 'Chat', insérez le texte 'Miaou!' dans le <div> avec l'id js-search-result. Sinon dans ce même <div> insérez du HTML <p>Pas de resultats pour la recherche : <strong>' + keyword + '</strong></p>.

$('#js-search-form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValuealed = $('#js-search').val();
    if (inputValuealed == 'Chat'){
        $('#js-search-result').html('<p>Aled le CHAT</p>');
    } else {
        $('#js-search-result').html('<p>Aucun resultat pour la recherche : <strong>' + inputValuealed + '</strong></p>');
    }
});

// Ajoutez une balise <h1> avec la valeur 'Cats are the weirdest' dans l'article avec l'id js-article-1.
$('#js-article-1').html('<h1>Cats are the weirdest<h1>')

// Ajoutez une balise <div> dans l'article avec l'id js-article-1.
var article1 = document.getElementById('#js-article-1');
var elDiv = document.createElement('div');
article1.appendChild('elDiv')


// Dans la balise <div> de l'article #js-article-1 ajoutez un paragraphe avec la valeur 'He starts to look at me pleadingly, paces around, and meows insistently. He even climbs on top of the book and bites my wrists in protest.'

// Dans la balise <div> de l'article #js-article-1 ajoutez un autre paragraphe avec la valeur 'I recently found out that my cat, Marv, hates it when I read aloud.' avant le paragraphe ajouté précédement.

// Après le premier paragraphe (entre les deux paragraphes) de l'article js-article-1 ajoutez une image.

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
$('#js-btn')[0].addEventListener('click', () => {
    $('#js-alert').addClass('alert-sucess');
})

// Récupérez et logguez dans la console la couleur du fond du bouton.

// Passez la couleur du fond du bouton en #71b8af.

// Changez d'un coup la couleur du texte du bouton à #fff2d5 et le radius de la bordure à 3px.