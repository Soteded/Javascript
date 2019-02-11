'use strict';

const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg']; // Définit les formats de fichier acceptés par le drag'n'drop
const MAX_IMG_SIZE = 300 * 1024; // 30 Kb // Définit la taille maximum acceptée des fichiers
const dropZone = document.querySelector('#js-drop-to'); // Définit la constante dropZone avec l'élément avec l'Id "#js-drop-to"
const filesList = document.querySelector('#js-file-list'); // Définit la constante filesList avec l'élément avec l'Id "#js-file-list"

dropZone.addEventListener('dragstart', (e) => onDragOver(e));
dropZone.addEventListener('onDrop', (e) => onDrop(e));
dropZone.addEventListener('USE_CORRECT_EVENT_HERE', () => changeDropZoneState(true));
dropZone.addEventListener('USE_CORRECT_EVENT_HERE', () => changeDropZoneState(false));

// Créé une fonction qui bloque le comportement normal de la zone de drop.
function onDragOver(event) {
  event.stopPropagation(); // Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement.
  event.preventDefault(); // Empêche le comportement basique de la zone de s'effectuer
}

// Créé une fonction onDrop qui prend en paramètre Event, qui fait le transfert du
// fichier quand il est laché sur la zone de drop.
function onDrop(e) {
  e.stopPropagation(); // Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement.
  e.preventDefault(); // Empêche le comportement basique de la zone de s'effectuer
  filesList.innerHTML = ''; // Ajoute un text à la file d'attente des images
  const filesUploaded = Array.from(e.dataTransfer.files); // Créé un tableau via le nom du fichier upload
  filesUploaded.forEach((file, index) => handleUploadedFile(file, index)); // Vérifie / informe si il y a une erreur au chargement des images dans la liste
  changeDropZoneState(false);
}

// Création d'une fonction changeDropZoneState qui change l'apparence de la drop zone
// si l'utilisateur est en train d'ammener un fichier.
function changeDropZoneState(isDragging) {
  isDragging ? 
    dropZone.classList.add('js-is-dragged-over') :
    dropZone.classList.remove('js-is-dragged-over');
}

// Création d'une fonction handleUploadError qui affiche un message d'erreur si il
// se produit une erreur au chargement de l'images.
function handleUploadedFile(file, index) {
  const error = getUploadError(file);
  error ?
    console.warn(`"${file.name}" Upload Error: ${error}`) :
    filesList.appendChild(createListEl(file, index));
}

// Création d'une fonction qui index les images dans une liste créée en dessous de la
// zone de drag and drop.
function createListEl(file, index) {
  const el = document.createElement('li');
  el.setAttribute('id', 'file-list-item-'+index);
  el.className = 'list-group-item file-list-item';

  // add image
  const elPreview = document.createElement('img');
  elPreview.classList.add('file-list-item-preview');
  el.appendChild(elPreview);
  renderImage(file, 'file-list-item-'+index);

  // add name
  const elName = document.createElement('p');
  elName.classList.add('file-list-item-name');
  elName.innerText = file.name;
  el.appendChild(elName);

  return el;
}

// Création d'une fonction renderImage qui affiche une prévisualisation de l'image
// quand cette dernière est lue.
function renderImage(file, elId) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = document.querySelector(`#${elId} img`);
    img.setAttribute('src', e.target.result);
  }
  reader.readAsDataURL(file);
}

// Création d'une fonction getUploadError qui prend en paramèrtre le nom du fichier, 
// et affiche une erreur si la taille du fichier est trop élevée OU le type du fichier
// est incompatible.
function getUploadError(file) {
  if (file.size > MAX_IMG_SIZE) {
    return 'Your image is too big';
  } else if (!ACCEPTED_FORMATS.includes(file.type)) {
    return 'Image of this format is not accepted';
  } else {
    return;
  }
}