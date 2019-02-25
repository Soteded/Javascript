'use strict';

// Récupérez l'information du profil de Han Solo (son id dans la base de données est 14). Ensuite affichez sur votre page ces données: nom, sexe, date de naissance, couleur des yeux, couleur des cheveux.

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log(xhttp.responseText);

        const rawValue = xhttp.responseText;
        const parsedValue = JSON.parse(rawValue);

        const hanSoloData = `
            <hr>
            <p>Nom : ${parsedValue.name}</p>
            <p>Sexe : ${parsedValue.gender}</p>
            <p>Date de naissance : ${parsedValue.birth_year}</p>
            `;

        document.querySelector("#js-han-solo").innerHTML = hanSoloData;
    }
};
xhttp.open('GET', 'https://swapi.co/api/people/14', true);
xhttp.send();

// Trouvez toutes les personnes avec le nom de famille Skywalker. Affichez leur profiles sur votre page.

var xhttp2 = new XMLHttpRequest();

xhttp2.onreadystatechange = () => {
    if (xhttp2.readyState == 4 && xhttp2.status == 200) {
        console.log(xhttp2.responseText);

        const rawValue = xhttp2.responseText;
        const parsedValue = JSON.parse(rawValue);

        parsedValue.results.forEach(person => {
            const myDiv = document.createElement("div");
            const personData = `
                <hr>
                <p>Nom : ${person.name}</p>
                <p>Sexe : ${person.gender}</p>
                <p>Date de naissance : ${person.birth_year}</p>
                `;

            myDiv.innerHTML = personData;
            document.body.appendChild(myDiv);
        });
    }
};
xhttp2.open('GET', 'https://swapi.co/api/people/?search=skywalker', true);
xhttp2.send();

// Récupérez et affichez les données de 5 planètes avec les ids suivants:

const planets = [1, 2, 3, 4, 5];

planets.forEach(planet => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
        }
    };
    xhttp.open('GET', 'https://swapi.co/api/planets/' + planet, true);
    xhttp.send();
});

// Récupérez l'information du profil de Chewbacca (son id dans la base de données est 13) en format wookiee. Attention les clés json sont également en wookiee. Pour chaque clé json, si la valeur est primitive (string, number, etc), affichez la paire de clé/valeur.

// **whrascwo:** Cacwoohrhraoaoarado {

console.log();