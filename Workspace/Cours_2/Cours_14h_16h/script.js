'use strict';

// Trouvez toutes les balises div du document. Loggez le deuxième élément s'il est présent.
const myDivs = document.getElementsByTagName('div');
console.log('myDivs',myDivs);

const myDivs2 = document.querySelectorAll('div')
console.log('myDivs2',myDivs2);

// Trouvez toutes les balises p avec la classe 'my-paragraph' du document. Loggez le premier élément s'il est présent.

const myParagraphs = document.getElementsByClassName('secondary-paragraph');
const myParagraphs2 = document.querySelectorAll('.secondary-paragraph');

// Trouvez la balise span avec l'id 'js-unique-el'. Loggez-là. Inspéctez les propriétés de cet objet Element

const myUniqueEl = document.getElementById('js-unique-el');
const myUniqueEl2 = document.querySelector('#js-unique-el');

// Trouvez toutes les balises p qui se trouvent dans un div.

const myParagraphsInDivs = document.querySelectorAll('div p');
console.log('myParagraphsInDivs', myParagraphsInDivs);

// Trouvez toutes les balises span qui sont précédées par un div.

const spansPreceededByDivs = document.querySelector('div + span');
console.log('spansPreceededByDivs', spansPreceededByDivs);

/*******************************************************************************************/

// Ajoutez le texte 'I am the first paragraph' au premier paragraphe du document.

const firstP = document.querySelector('.first-p');
firstP.innerText = "I'm the fist paragraph";
console.log('firstP > text :', firstP.innerText);

// Ajoutez le HTML <span>Hello</span> au deuxième paragraphe du document.

const secondP = document.querySelector('.second-p');
secondP.innerHTML = '<span>Hello</spawn>'
console.log('secondP > html :', secondP.innerHTML);

// Modifiez les attributs width à 50% et height à 'auto' de l'image.

const myImg = document.querySelector('img');
myImg.setAttribute('width', '50%');
myImg.setAttribute('height', 'auto');

// Ajoutez un attribut alt non vide à l'image.

myImg.setAttribute('alt', 'Random Image');

// Donnez la couleur 'blue' au premier paragraphe du div et la taille de police '1.5rem'.

firstP.style.color = 'blue';
firstP.style.fontSize = '1.5rem';

// Ajoutez la classe img à l'image.

myImg.className = 'my-class'; // myImg.className += 'another-class';
myImg.classList.add("my-class");
myImg.classList.remove("my-class");


const myBody = document.querySelector('body');
const newEl = document.createElement('p');

newEl.innerText = 'Hello';
newEl.style.color = 'red';

// dernier enfant
myBody.appendChild(newEl)

// premier enfant
const newEl2 = document.createElement('p');

newEl2.innerText = 'Salut';
newEl2.style.color = 'grey';

myBody.prepend(newEl2);

myBody.removeChild(newEl2);



