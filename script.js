// alert('Hello')

// var name = 'Adeyemi';
// let name = 'Adeyemi';

// console.log(name);
// console.log(multi(3, 8));
// let firstName = 'Oluwashegun';

// firstName = 'Shegun';

// const lastName = 'Adewale';

// console.log(firstName);
// console.log(lastName);

// let last_name;

// let signUp = 2 * 2;

// const animal = 'lion';

// console.log(firstName);
// console.log(signUp);
// console.log(animal);

// last_name = "Potter";

// console.log(last_name);

// String, Numbers, Booleans, Null, Undefined, BigInt, symbol, Object

// let football;
// console.log(football);
// let userName = 'hafeez123';
// console.log(userName);

// let quote = "I'm a good person";
// console.log(quote);
// let anodaQuote = "A famous quote: \"the grass is greener\""
// console.log(anodaQuote);
// String type

// String Concatenation =>

// let name = ' ade'
// let add = 3 + name;
// console.log(add);

// let firstName = 'Adedamola';
// let lastName = 'Oyetayo';
// capFirstName = firstName.toUpperCase()
// console.log(capFirstName);

// console.log(firstName.length);
// console.log(firstName[8]);
// console.log(lastName[5]);

// let fullName = firstName + " " + lastName;
// console.log(fullName.length);

// let char = prompt('Compose your text');
// let charlength = char.length;
// alert(char + ': you have ' + (140 - charlength) + ' characters left');

// // String Method
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// // indexOf()
// let nameIndex = fullName.indexOf('a');
// nameIndex = fullName.lastIndexOf('a');
// console.log(nameIndex);

// slice()
// let hero = 'Superman';

// let heroEmail = hero.slice(1, 3);
// let heroEmail = hero.slice(2, 5);
// console.log(heroEmail);

// let char = prompt('Compose your text here');
// let charSlice = char.slice(0, 20);
// // charLength = ca
// alert(charSlice + ': you have ' + (20 - char.length) + ' characters left');
// console.log(char);

// // subString()
// heroEmail = hero.substr(1, 5);
// console.log(heroEmail);

// // replace()
// let bootCamp = 'CechStudioAcademy';
// let camp = bootCamp.replace('C', 'T');
// console.log(camp);

// // includes()
// heroEmail = hero.includes('w');
// console.log(heroEmail);


// NUMBER
// let num = 15;

// let x = 4.78;

// let multi = num * x;
// console.log(multi);

// console.log(2 + 2);
// console.log(3 - 2);
// console.log(2 * 4);
// console.log(4 ** 2);
// console.log(10 / 2);

// num++;
// console.log(num);

// let y = '10';
// console.log( typeof y);
// console.log( typeof x);

// // console.log(num / 'apple');

// let answer = 5 * (10 - 3) ** 2;
// console.log(answer);

// let likes = 10;
// likes--;
// // likes = likes + 10;
// likes += 10;

// console.log(likes);

// likes -= 5;
// console.log(likes);

// // Comparison Operators
// let x = 5 + 3;
// let y = 12;
// console.log(x);

// console.log(x==8);
// console.log(x==8.0);
// console.log(x=='8');
// console.log(x == 9);
// console.log(x === 8.0);
// console.log(x === '8');
// console.log(x != 5);
// console.log(x != 8);

// // Logical operators
// console.log(x == 5 && y < 15);
// console.log(y != 6 && x === '8');
// console.log(y != 6 || x === '8');
// console.log(y != 6 || x == '8');
// console.log(!(x == y));

// let name = 'David Silva';
// let club = 'Man city';

// // David Silva plays for Man city
// let footballer = name + ' plays for ' + club + ' FC';
// console.log(footballer);

// // Template literals
// let likes = 30;
// console.log(`This post has ${likes} likes`);
// console.log(`${name} plays for ${club} FC`);

// Conditional statement
// let x = 5;
// let y = 2;
// let z = 10;

// let answer2 = 'This is answer two';
// const defaultAnswer = 'The answer is not available'

// if (x > y) {
//     console.log('x is greater than y');
// }

// if (x >= y) {
//     console.log('x is greater OR equal to y');
// }

// if (x < y) {
//     console.log('x is less than y');
// } else {
//     console.log('The answer is not here');
// }

// if (x > y && x < y) {
//     console.log('First option');
// } else if (z > y || y == x) {
//     console.log(answer2);
// } else {
//     console.log(defaultAnswer);
// }


// let greeting;
// let time = new Date().getHours();

// if (time < 10) {
//     greeting = 'Good Morning';
// } else if (time < 18) {
//     greeting = 'Good day';
// } else {
//     greeting = 'Good Night';
// }

// console.log(greeting);

// let password = prompt('Put in your password');

// if (password.length >12 && password.includes('@')) {
//     alert('Your password is very strong')
// } else if (password.length >=8 || password.includes('@') && password.length >= 9) {
//     alert('Your password is strong')
// } else {
//     alert('Your password is weak')
// }

/*
// switch
const color = 'Red';
switch (color) {
    case 'blue':
        console.log('The color is blue');
        break;
    case 'green':
        console.log('The color is green');
        break;
    case 'Red':
        console.log('The color is Red');
        break;
    case 'yellow':
        console.log('The color is yellow');
        break;
    case 'grey':
        console.log('The color is grey');
        break;

    default:
        console.log('This color is not available');
}
*/

/*
let num = '10';
console.log(parseInt(num));
num = parseInt(num);
console.log(typeof num);
console.log(parseFloat('10.88'));
console.log(parseInt('10 20'));

// let age = prompt('What is your age');
// let age = 20;

// (age > 18) ? console.log('You can drink beer') : console.log('You are too young to drink');
// (age >= 18) ? alert(`You are ${age}: You can drink beer`) : alert(`You are ${ age }: You are too young to drink`);

// if (age > 18) {
//     console.log('You can drink beer');
// } else {
//     console.log('You are too young');
// }

// ARRAY
let colors = ['crimson', 'blue', 'green', 69, ['apple', 'orange'], num, null, true];

console.log(colors);
colors[2] = 'orange';
console.log(colors);

// pop()
let popColor = colors.pop();
console.log(popColor);
console.log(colors);

// push()
let pushColor = colors.push('green');
console.log(colors);

// shift() =>removes first element in an array
let shiftColors =colors.shift()
console.log(colors);

// unshift() => adds an element to the begining of our array
colors.unshift('white');
console.log(colors);

// join()
let hue = colors.join(',');
console.log(hue);

// indexOf()
let ind = colors.indexOf('crimson');
console.log(ind);

// concat()
let newColors = colors.concat(['silver', 'copper', 'gold']);
console.log(newColors);
console.log(colors);

// spread operator

// let sedans = ['corolla', 'cerato', 'accord', 'cla', '5 series'];
// let suvs = ['highlander', 'mdx', 'pilot', 'x5', 'hilux', 'ranger', 'F150'];
// let commonCars = ['camry', 'venza', 'varagon', ...sedans];
// console.log(commonCars);

// includes()

// splice()
// suvs.splice(2, 3, 'rav4', 'range-rover', 'prado');
// console.log(suvs);

// let guestList = ['Adeyemi', 'Oluwashegun', 'Gbemi', 'Damola', 'Uyime'];

// let guestName = prompt('What is your name');

// if (guestList.includes(guestName)) {
//     alert(`Access granted to ${guestName}`)
// } else {
//     alert(`${guestName} you are not invited`)
// }

*/
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and 
// for the multiples of five, print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

// LOOPS =>for, for-in, for-of, while, do/while
/*
let sedans = ['corolla', 'cerato', 'accord', 'cla', '5 series'];
let suvs = ['highlander', 'mdx', 'pilot', 'x5', 'hilux', 'ranger', 'F150'];
let commonCars = ['camry', 'venza', 'varagon', ...sedans];
console.log(commonCars);

for (let index = 0; index < 10; index++) {
    console.log(`in loop: ${index}`);
}

for (let index = 0; index < commonCars.length; index++) {
    console.log(commonCars[index]);    
}

// while
let index = 9;
while (index > 0) {
    console.log(`in loop: ${index}`);
    index--;
}

let i = 0;
while (suvs[i]) {
    console.log(suvs[i]);
    i++;
}

// do while loop
let inde = 3;
do {
    console.log(`in loop ${inde}`);
    inde++;
} while (inde < 15);

*/

// FIZZBUZZ ASSIGNMENT

// for (let index = 1; index <= 100; index++) {
//     if (index % 3 === 0 && index % 5 ===0) {
//         console.log('FIZZBUZZ');
//     }else
//     if (index % 3 === 0) {
//         console.log('FIZZ');
//     } else if (index % 5 === 0) {
//         console.log('BUZZ');
//     }else
//     console.log(index);
// }

// BREAK
// let color = 'green';

// switch (color) {
//     case 'red':
//         console.log('The color is red');
//         break;
//     case 'green':
//         console.log('The color is green');
//         // break;
//     case 'purple':
//         console.log('The color is purple');
//         break;
//     default:
//         console.log('Color not available');
// }

// for (let index = 0; index < 9; index++) {
//     console.log(index);
//     if (index === 5) {
//         break
//     }
//     console.log(index);
// }

// let superHero = ['superman', 'Batman', 'Wonderwoman', 'Flash', 'Cyborg', 'Beastboy'];

// for (let i = 0; i < superHero.length; i++){
//     if (superHero[i] == 'Flash') {
//         break
//     }
//         console.log(superHero[i]);
// }

// // Continue
// for (let index = 0; index < 9; index++) {
//     if (index === 5) {
//         continue
//     }
//     console.log(index);
// }

// // let superHero = ['superman', 'Batman', 'Wonderwoman', 'Flash', 'Cyborg', 'Beastboy'];

// for (let i = 0; i < superHero.length; i++){
//     if (superHero[i] == 'Flash') {
//         continue
//     }
//         console.log(superHero[i]);
// }

// SCOPE
// let tv = 'sony';

// if (true) {
//     let tv = 'LG'
//     let phone = 'Nokia'
//     console.log(`Inside block scope ${tv} ${phone}`);
//     if (true) {
//         console.log('Inside Second block scope ' + tv + ' '+ phone);
//     }
// }
// console.log(`Out block scope ${tv}`);
// console.log(`Out block scope ${phone}`);

// FUNCTION
// function declaration
// console.log(multi(7, 9));

// function greet() {
//     console.log('Hello');
// }

// greet();

// let userName = 'Adeyemi';
// function greeting() {
//     let message = `Hello ${userName}`;
//     console.log(message);
// }

// greeting()

// function square() {
//     let num = 9;
//     return num * num
// }

// console.log(square());

// function multi(num1, num2) {
//     return num1 * num2
// }
// console.log(multi(7, 6));



// // create an empty array
// let output = [];

// let count = 1;

// function fizzbuzz() {
//     while ( count <= 100) {
//         if (count % 15 === 0) {
//             output.push('fizzbuzz')
//         } else if (count % 3 === 0) {
//             output.push('fizz')
//         } else if (count % 5 === 0) {
//             output.push('buzz')
//         } else {
//             output.push(count)
//         }
//         count++;
//     }
//     console.log(output);
// }

// fizzbuzz()

// // FUNCTION EXPRESSION
// let speak = function () {
//     console.log('I am speaking to you');
// }
// speak()

// let speaking = function () {
//     return 'I am speaking'
// }

// console.log(speaking());

// let greetings = function (name, age) {
//     return `Good morning ${name}, what is your ${age} `
// }
// console.log(greetings('Edet', 'age'));

// let greetings = function (name='John', age='age') {
//     return `Good morning ${name}, what is your ${age} `
// }
// console.log(greetings());

// let calcTri = function (base, height) {
//     let area = 1 / 2 * (base * height);
//     return area
// }
// let calc = calcTri(6, 2)
// // console.log(calc);

// let random = calc * 3;
// console.log(random);

// let greetings = (name, age) =>`Good morning ${name}, what is your ${age} `

// console.log(greetings('Femi', 'age'));

// let name = prompt('What is yor name?');
// let weight = prompt('What is your weight (kg) ?');
// let height = prompt('What is your height (m) ?');

// function bmiCalc() {
//     return Math.floor(weight / Math.pow(height, 2))
// }

// alert(`${name} your BMI is ${bmiCalc()}`)

// function one (){
//     console.log('one');
// }

// function two() {
//     console.log('two');
// }

// two()
// one()

// let message = () => {
//     console.log('This function will fire')
// }

// setTimeout(() => {
//     console.log('This message will show after 2 sec');
// }, 2000);

// message()

// // foreach()
// let cars = ['mazda', 'toyota', 'kia', 'honda', 'mercedes benz', 'hyundai', 'BMW', 'ford'];

// for (let index = 0; index < cars.length; index++) {
//     console.log(cars[index]);
// }

// console.log('//////////////////');

// cars.forEach(element => {
//     console.log(`My next car: ${element}`);
// });

// console.log('//////////////////');


// const motor = ((vehicle) => {
//     console.log(`${vehicle}: `);
// });

// cars.forEach(motor);

// OBJECTS
let car = {
    brand: 'Toyota',
    model: 'Highlander',
    color: 'red',
    year: 2012,
    engine_ok: true,

}

console.log(car);

let person = {
    name: 'Adeyemi',
    age: 30,
    email: 'adeyemi@email.com',
    website: [
        { title: 'globalchef', difficulty: 9 },
        { title: 'cake website', difficulty: 7 },
        { title: 'bmi calculator', difficulty: 5 }],
    location: 'festac',
    school: function () {
        console.log('University of Hull');
    },
    phone() {
        return 'She likes to press her phone'
    },
    logsite() {
        console.log('These are websites built by Adeyemi: ');
        this.website.forEach(blog => {
            // console.log(blog.title, blog.difficulty);
            console.log(`${blog.title}: ${blog.difficulty}`);
        })
    }
}



console.log(person.name);

person.school()

console.log(person.phone());
console.log(person.website);
person.logsite()

// ARRAY METHODS
// filter, map, find, foreach, some, every, reduce
const items = [
    { name: 'Rice', price: 300 },
    { name: 'Beans', price: 250 },
    { name: 'Plaintain', price: 150 },
    { name: 'Garri', price: 250 },
    { name: 'Milo', price: 1200 },
    { name: 'Spaghetti', price: 250 },
    { name: 'Pizza', price: 1500 },
    { name: 'Milk', price: 1300 },
    { name: 'Sugar', price: 400},
    { name: 'Pizza', price: 2500 },
]

// filter()
const filteredItems = items.filter((provision) => {
    return provision.price <= 500
});
console.log(filteredItems);
// map()
// const mappedItems = items.map(provision => provision.name);
const mappedItems = items.map((provision) => {
    return provision.name
});
console.log(mappedItems);

// find()
const foundItems = items.find(foodstuff => foodstuff.name === 'Pizza');
console.log(foundItems);

items.forEach(typeOfFood => {
    console.log(typeOfFood.name);
});

// some()
let costItem = items.some(item => item.price < 50);

console.log(costItem);

// every()
let everyItem = items.every(item => item.price > 100);
console.log(everyItem);

// reduce()
const total = items.reduce((currentValue, provision) => {
    return provision.price + currentValue
}, 0);
console.log(total);


// MATH OBJECT
// console.log(Math);

let num = 3.88;
let x = 7.3;

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.round(x));
console.log(Math.ceil(x));

// Dice rolling
// let n = Math.random();

// // console.log(n);
// n = n * 6;
// n = Math.ceil(n);
// console.log(n);

let myName = prompt('What is your name ?');
let theirName = prompt('What is their name ?');

let loveScore = Math.random() * 100;
loveScore = Math.ceil(loveScore);
console.log(loveScore);

if (loveScore > 70) {
    alert(`${myName} and ${theirName}'s love score is ${loveScore}%, you guys are made for each other`);
} else if(loveScore > 50 && loveScore < 70){
    alert(`${myName} and ${theirName}'s love score is ${loveScore}%, it could work out if you both try`);
} else {
    alert(`${myName} and ${theirName}'s love score is ${loveScore}%, It can never work put for both of you`);
}











