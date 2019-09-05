let recept = {
    title: "Brunbärspasta",
    rating: "5.5/5",
    ingredients: [
        "200g Brunbär, ","1ml Muskottnöt, ","400g kylpasta"
    ],

    steps: [
        "Gnugga bären, ", "Steka kylpastan, ", "Smula muskottnöten, ", "Blanda, ", "Servera"
    ]
}

console.log(recept.title, recept.rating)
//Tomt värde i print, functionen fyller på med varje index i arrayen
var print = "";
recept.ingredients.forEach(myFunction);

function myFunction(value){
print = print + value; 
return print;
}

console.log(print);

var print = "";
recept.steps.forEach(myFunction);

function myFunction(value){
print = print + value; 
return print;
}

console.log(print);