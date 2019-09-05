//Anonyma objekt
//const Myname ="Dånald";
//let me = {
//    name: Myname,
 //   length: 1.76,
 //   occupaion: "professional idiot",
 //   greet: function(){
 //       return "Eyo heyo mayo "+ this.name;
//},
//cat: {
   // name: "Yggdrasil",
   // age: "äldre än tiden själv"
//}
//}


//console.log(JSON.stringify(me));

//klasser
class Person {
    constructor(name, gurka) {
        this.name = name;
        this.gruka = gurka;
    }
    greet(){
        console.log("Eyo Mayo Heeeyo! " + this.name)
    }
}

let me2 = new Person("Meto", "Okej Gurka");
let someoneElse = new Person("Heposnepo", "Bästa gurkan")
console.log(me2);
me2.greet();