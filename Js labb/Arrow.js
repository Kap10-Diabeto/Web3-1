//skriv om med arrow syntax, 
//använd kortformer där det är möjligt
//___________________________________________
const add = function (a, b) {
  return a + b;
}

const add = (a, b) => { return a + b; }
//___________________________________________
function double(value) {
  return value * 2;
}

let double = (value) => value * 2;
//___________________________________________
let greet = function (name, isDoctor) {
  if (isDoctor)
    return `Hello Dr ${name}`;
  else
    return `Hello name`;
}

let greet = (name, isDoctor) => {
  if (isDoctor)
    return `Hello Dr ${name}`;
  else
    return `Hello name`;
}
//___________________________________________

const shout = function (message) {
  return message.toUpper();
}

const shout = (message) => toUpper();

//___________________________________________ 
const curse = () => {
  const randomNumber = Math.random() * 4;
  if (randomNumber < 1)
    return "Järnspikar";
  if (randomNumber < 2)
    return "Helvete!";
  else if (randomNumber < 3)
    return "Satans jävlar!"
  else
    return "#!?@¡#@?!!!!"
}

//___________________________________________
function rollDice(sides) {
  return 1 + Math.floor(Math.random() * sides);
}

let rolldice = (sides) => 1 + Math.floor(Math.random() * sides);
//___________________________________________

function d20() {
  return rollDice(20);
}