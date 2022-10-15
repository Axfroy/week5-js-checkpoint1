// Type String
const firstName = "Ivan";

//Type String 
const lastName = "Rodriguez";

// Type String
const gender = "male";

// Type Numbres
var age = 20;

// String
const dateOfBirth = "01/09/2002";

// Type Boolean 
var isMarried = true;

// Type String
var city = "Pilar";

// Type Number
const height = 1.82;

// Type Array
var favFood = ["Milanesa Napolitana", "Guiso de Lentejas", "Sanguchitos de miga", "Creeps de Choclo", "Wok de pollo"];

// Type Array
var hobbies = ["Illustrate", "Modelling Clay", "Videogames", "Voley"];


// Type Object 
var favVideogame = {
    title: "The Legend of Zelda: Ocarina of Time",
    release: 1998,
    company: "Nintendo",
    console: "Nintendo 64",
    gameFinished: true,
    maincharacters: ["Link", "Navi", "Princess Zelda", "Ganondorf"],
}

console.log(`My full name is ${firstName} ${lastName}`);
console.log(`I'm ${age} years old and I was born in ${dateOfBirth}`);
console.log(`Gender: ${gender}`);
console.log(`In a relationship: ${isMarried}`);
console.log(`I'm living in ${city}`);
console.log(`I'm ${height} m.`);
console.log(`My favorite foods are ${favFood}`);
console.log(`My hobbies are ${hobbies}`);
console.log(`And lastly, my favorite videogame is ${favVideogame.title}`, favVideogame);
