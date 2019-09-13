let greet = "Ciao";
let person ={
    name: "Matteus",
    occupation: "Student"
};

function myFakeAge(){
    return Math.random()*99999999999999999999+ 20;
}
console.log(`${greet} ${person.occupation} ${person.name}, age of ${myFakeAge()} `);