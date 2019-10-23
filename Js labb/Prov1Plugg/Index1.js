//Initiering av variabler
let gurka1;
let gurknummer;
let gurksanningen;
let storgurkan; 
let smågurkor;
//Deklaration av konstant
const konstantgurka = 14;

gurka1 = "Fan va nice bengan";
gurknummer = 66666;
gurksanningen = true;
storgurkan = {typ: "Fet", model: "nice", färg: "Urinblå"}
smågurkor = ["sötgurka", "fulgurka", "surgurka"];
//Deklaration av variabler


console.log(gurka1, gurknummer,gurksanningen,storgurkan,smågurkor, konstantgurka)


// hej är ett variabelnamn och "hej" är en sträng 
let hej = "hej";
v1 = 9;
v2 = 3;
function gurkmajistäten(v1, v2) {
    if(v2 < v1){
        return "Spring feta gris, sa";
    }

    else {
        return "no";
    }
}
//Definiera en funktion med variabler



gurken = () => "fiskmåsen"; 
//Defineierar en arrowfunktion utan variabler

let gurken2 = gurken();
//Mellanlagrar Arrowfunctionens värde i en variabel

console.log(gurkmajistäten(v1, v2), gurken2);

gurktal = [14,35,52,63,643,23,41,56]

// function medelgurka (gurktal){
// for()
// }

// console.log(medelgurka(gurktal hv))


//if-satser och enkla villkor (större än, lika med, booleaner)
let b1 = 14;
let b2 = 15;
if(b1 < b2){
    console.log("Tjohoo")
}

else if(b1 = b2){
    console.log("nej, men usch")
}

let Booboo = Boolean(10 == 10);
let Booboo2 = Boolean(10 == 9); 
console.log(Booboo, Booboo2)
//_________________________________________________________________________________________
//grundläggande metoder och properties på array-object

//map()
//standard
function makeUpperCase(str){
    return str.toUpperCase()
}
GORKA = smågurkor.map(makeUpperCase)

console.log(GORKA);
//arrow
GORKA2 = GORKA.map(name => name.toLowerCase())

console.log(GORKA2);

//filter()

//standard
integurka = [
    { name: "Gorga-blyat" , gurka: true },
    { name: "Pelle-palsternacka" , gurka: false },
    { name: "Gerkan" , gurka: true },
    { name: "Göran" , gurka: false }
]

function isGurka(grr){
    return grr.gurka == false;
}


thefalsegurks = integurka.filter(isGurka);


console.log(thefalsegurks);


//arrow
gurkorvadannars = [
    { name: "Gorga-blyat" , gurka: true },
    { name: "Pelle-palsternacka" , gurka: false },
    { name: "Gerkan" , gurka: true },
    { name: "Göran" , gurka: false }
]

thetruegurks = gurkorvadannars.filter(char => char.gurka);

console.log(thetruegurks);


//push()
//merge
let vegetables = ['parsnip', 'potato'];
let moreVegs = ['celery', 'beetroot'];
Array.prototype.push.apply(vegetables, moreVegs);
console.log(vegetables);

//add
let sports = ['soccer', 'baseball'];
let total = sports.push('football', 'swimming');
console.log(sports);

/////////
//length
console.log(gurkorvadannars.length);
//_________________________________________________________________________________________


//definiera en klass med konstruktor (med och utan argument)
//med argument
class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    get area() {
      return this.calcArea();
    }
    calcArea() {
      return this.height * this.width;
    }
  }
  const square = new Polygon(10, 10);
  
  console.log(square.area);

  //utan argument

  class Polygon0 {
    constructor() {
      this.name = "Polygon";
    }
  }
  
  var poly1 = new Polygon0();
  
  console.log(poly1.name);

//_________________________________________________________________________________________
//skapa instanser från en klass










