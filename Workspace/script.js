/*
    // 'use strict';
    // console.log('Bonjour');

    // let username = 'Jeremy';

    let username;
    username = 'Jeremy';
    username = 'Toto';

    const userStatus = 1;

    let myString = 'Hello';
    let myString2 = "Hello";
    let myString3 = `
        Hello
    `;

    let myNumber = 1.5;

    let myBoolean = true; //false

    let myUndefined = undefined;

    let myNull = null;

    //NaN
    console.log("Hello "+"World");
    const str1 = 'Hello';
    const str2 = 'World';
    console.log(`${str1} ${str2}`);

    let a = 10 + 32;
    a += 8; //Incrémente a de 8; >> a = a + 8
    console.log('a', a);

    let b = 10 - 5;
    b -= 8; //Décrémente b de 8; >> b = b - 8
    console.log('b', b);

    let c = 5 * 7;
    c *= 2; //Multiplie c par 2; >> c = c * 2
    console.log('c', c);

    let d = 10 / 2;
    d /= 2; //Divise d par 2; >> d = d / 2
    console.log('d', d);

    let e = 5;
    console.log(e++); //Incrémentation automatique de c par 1
    console.log(e);

    console.log([1, 2, 3] * 3);

    console.log(+'3');
    console.log(+true);

    console.log('4' + 3); //43
    console.log(4 + 3 + '7'); //77
    console.log('4' + 3 + 7); //437

    //                     > >= < <= === !=

    //Ecrivez en ligne de code un moyen de vérifier si 2 est supérieur à 1.
    console.log('2 > 1', 2 > 1); // True
    //Ecrivez en ligne de code un moyen de vérifier si 2 est inférieur à 1.
    console.log('2 < 1', 2 < 1); // False
    //Ecrivez en ligne de code un moyen de vérifier si 20 est supérieur ou égal à 10.
    console.log('20 >= 10', 20 >= 10); // True
    //Ecrivez en ligne de code un moyen de vérifier si 10 est supérieur ou égal à 10.
    console.log('10 >= 10', 10 >= 10); // True
    //Ecrivez en ligne de code un moyen de vérifier si 4 n'est pas égal à 6.
    console.log('4 != 6', 4 != 6); // True
    //Ecrivez en ligne de code un moyen de vérifier si '2' est égal à 2 avec l'opérateur d'égalité stricte.
    console.log('2 !== 2', 2 !== 2); // True
    //Ecrivez en ligne de code un moyen de vérifier si 0 n'est pas égal à '0'.
    console.log('0 !== 0', 0 !== 0); // True
    //Ecrivez en ligne de code un moyen de vérifier si 'hello' est égal à 'hello'.
    console.log('hello' === 'hello') //True
    //Ecrivez en ligne de code un moyen de vérifier si 'hello' est égal à 'Hello'.
    console.log('hello' === 'Hello') //False

    //Ecrivez en ligne de code un moyen de vérifier si 5 est supérieur à 0 ET inférieur à 10 dans la même expression if.
    if (5 > 0 && 5 < 10){
        console.log('1')
    } else {
        console.log('2')
    }

    //Ecrivez en ligne de code un moyen de vérifier si 20 divisé par 2 est supérieur ou égal à 10 OU inférieur à 15 dans la même expression.
    //Si vrai, loggez 'Yes', sinon loggez 'No'.
    let f = 20 / 2;
    if (f > 10 || f < 15){
        console.log('Yes')
    } else {
        console.log('No')
    }
    /*
    Un groupe peut être publique ou privé. Un utilisateur peut accéder au contenu d’un groupe si ce groupe est publique ou si le groupe est privé 
    mais qu’il est membre ce groupe. Utilisez deux variables isPrivate et isMember pour écrire une seule condition qui vérifie si utilisateur peut
    accéder au contenu d’un groupe ​
    */
    /*
    //let isPrivate = false;
    //let isMember = false;

    let isPrivate = true;
    let isMember = false;

    //let isPrivate = true;
    //let isPrivate = true;

    if (isPrivate === false || isPrivate === true && isMember === false){
        console.log('Can see the group')
    } else {
        console.log('Cant see the group')
    }

    if (!isPrivate || isPrivate && isMember){
        console.log('Can see the group')
    } else {
        console.log('Cant see the group')
    }

    const today = "lundi";
    switch (today) {
        case 'lundi':
            console.log(`Aujourd'hui on est ${today}`);
            break;
        case 'mardi':
            console.log(`Aujourd'hui on est ${today}`);
            break;
        case 'mercredi':
            console.log(`Aujourd'hui on est ${today}`);
            break;
        case 'jeudi':
        case 'vendredi':
            console.log(`Aujourd'hui on est jeudi ou vendredi`);
            break;
        default: 
            console.log('On est samedi ou dimanche');
    }

    let username2 = prompt('What is your username ?')
    console.log(`username`, username2);

    //Demandez à l’utilisateur de se présenter avec la méthode prompt. Si le prénom est saisi, alert 'Nice to meet you $username 
    //($username est le prénon saisi)!', sinon alert 'Don't be shy!'
    /*
    if (username2){
        alert(`Nice to meet you ${username2}`);
    } else {
        alert(`Dont be shy!`);
    }
    */
    // Opérateur TERNAIRE
    // condition ? statement1 : statement2;
    /*
    username2 !== null ?
        alert(`Nice to meet you ${username2}`) :
        alert(`Dont be shy!`);

    /*
    // I need to convert Fahrenheit to Celsius five times with different values:
    const res1 = (5/9) * (18-32);
    const res2 = (5/9) * (12-32);
    const res3 = (5/9) * (33-32);
    const res4 = (5/9) * (14-32);
    const res5 = (5/9) * (17-32);

    // Oh boy, this is repetitive. How can I spend less time on code writing and its maintaining?
    // FUNCTIONS is the answer!

    function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
    }

    const loveIt1 = toCelsius(18);
    const loveIt2 = toCelsius(12);
    const loveIt3 = toCelsius(33);
    const loveIt4 = toCelsius(14);
    const loveIt5 = toCelsius(17);
    // Love it!
    */
    /*
    function myFunc(text){
        console.log(text);
    }
    console.log('myFunc()', myFunc());

    const myFunc2 = (text) => {
        return text;
    }
    console.log('myFunc2', myFunc2());

    /*
    const sum = (p1, p2 = 10) =>{
        return p1+p2;
    }*/
    /*
    const sum = (p1, p2 = 10) => p1+p2;

    console.log(sum(4,10));

    // Créez une fonction qui tronque la chaîne de caractères. Elle prend la chaîne de caractères, la longeur et la traînée (..., ->, etc)
    // en tant que paramètres. Donnez une valeur par défaut à la traînée.
    const truncate = (str, length, trail) =>{
        if (str.length > length){
            return str.substring(0,length + trail)
        } else {
            return str
        }
    }

    const res1 = truncate('I will be truncated', 15, '->') // returns 'I will be trunc->')
    console.log('res1', res1);

    const res2 = truncate('I will be truncated', 5) // returns 'I wil...'
    console.log('res2', res2);

    // Créez un tableau qui contient 3 de vos sites web préférés.
    const myArray = [1, 'Hello', [1,2,3]]
    console.log('myArray', myArray);
    console.log(typeof myArray);
    // Loggez le premier élément de ce tableau.
    console.log(myArray[0]);
    // Loggez le second élément de ce tableau.
    console.log(myArray[1]);
    // Loggez le nombre d'éléments de ce tableau.
    console.log(myArray.length);
    // Loggez le dernier élément de ce tableau avec de l'aide de la propriété .length.
    console.log(myArray[myArray.length-1]);

    // Divisez chaque élément du tableau [0, 1, 2, 3, 4, 5] par 2 sans modifier le tableau original.
    const arr = [0, 1, 2, 3, 4, 5];
    arr.map(x =>{
        console.log('x',x);
        return x / 2;
    });

    let res = [];
    arr.forEach(num =>{
        console.log('num',num);
        res.push(num / 2);
    })
    console.log('res', res);

    /*
    const myArr = [1,2,3];
    const myArr2 = myArr;
    myArr2[0] = 0;
    console.log(myArr)
    console.log(myArr2)
    */
    /*
    const myArr = [1,2,3];
    const myArr2 = [...myArr];

    const user = {
        id:1,
        name:'Jeremy',
        email:'email.email@email.com',
        car:{
            color: 'red',
        },
        test: [1,2,3],
    }
    // Créez un objet avec les valeurs suivantes: id = 1, name = Jeremy, email = jeremy@ynov.com.
    // Loggez l'id de cet objet avec un point.
    console.log(user.id);
    // Loggez l'id de cet objet avec les crochets.
    console.log(user['id']);
    console.log(user.car.color);
    console.log(user['car'].color);

    const myProp = 'car';
    console.log(user[myProp].color);
    // éclarez une variable avec la valeur 'name'. Accédez à la propriété 'name' de votre objet par cette variable et les crochets [].
    // Changez la valeur d'id dans votre objet à 2.
    // Ajoutez à votre objet une nouvelle propriété 'human' de valeur true.
    // Changez la valeur de la propriété 'email' à undefined.

    // Calculez le prix total d'achat avec .reduce(), .forEach() ou .map().

    const cart = [
    { item: 'a', price: 2, quantity: 1 },
    { item: 'b', price: 3, quantity: 1 },
    { item: 'c', price: 4, quantity: 1 }
    ];

    const res = cart.reduce((acc,curVal) => {
        console.log('acc',acc);
        console.log('curval',curVal);
        return acc += curVal.price * curVal.quantity
    }, 0);

    console.log('res', res);
*/

// Comment déboger mieux et pas seulement avec console.log: les conseils d'experts Google pour les développeurs.
// Débogez ce code défectueux :

myCharacter = 'Luna Lovegood';

function useSortingHat(char) {
  let choice = ''
  
  switch (choice){
    case 'Harry Potter':
      choice = 'Gryffindor';
    case 'Draco Malfoy':
      choice = 'Ravenclaw';
    case 'Luna Lovegood':
      choice = 'Ravenclaw';
    default:
      'Gryffindor'
  }
}

myCharacterHouse = useSortingHat()

const checkMyGringottsAccount = () => {
  myMoney = Math.random() * 100

  if (myMoney > 0 && myMoney < 30) {
    return `Hello Weasley`
  } else if (myMoney > 30 && myMoney < 75) {
    return `Hey, that's cool`
  } else (myMoney > 75); {
    return `You're reach!`;
  }
}

isMyCharacterRich = checkMyGringottsAccount()