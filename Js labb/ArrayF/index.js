// const list = [1, 3, 3, 7, 4, 2, 0, 6, 9];
// const bigNumber = [1, 0, 8, 0]
// //SPREAD
// const min = Math.min(list);
// min2 = Math.min(...list);


// console.log(min, min2);

// //vid deklaration av ny array
// const longerlist = [...list, 3, 6, 0]
// console.log(longerlist);


//MAP
// const list = ["Knatte", "Fnatte", "Chatte", "Dra´nakuyek; The destoyer of worlds"];
// function toUpper(str){
//     return str.toUpperCase();
// }

// console.log(list);
// const newList = list.map(toUpper);
// console.log(newList);

// let numbers = [30404343];
// console.log(numbers.map(x => 2*x));


//FILTER
// let chars = [
//     {name: "Obi-wan", robot: false},
//     {name: "R2D2", robot: true},
//     {name: "Han-solo", robot: false}
// ];

// let robots = chars.filter(char => char.robot == true)
// let robotnames = chars.filter(char => char.robot).map(robot => robot.name);
// console.log(robotnames)
//_________________________________________________________________________________________________________________________________//

//Map uppgift 1
function doubleNumbers(arr) {
    return arr.map(value => value * 2);
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
//_________________________________________________________________________________________________________________________________//

//Map uppgift 2
function stringItUp(arr) {
    return arr.map(value => value.toString())
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
//_________________________________________________________________________________________________________________________________//

//Map Uppgift 3

function capitalizeNames1(arr) {
    return arr.map(value => value.toUpperCase());

}

console.log(capitalizeNames1(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

function capitalizeNames(arr) {
    return arr.map(name => {
        let newName = name.toLowerCase();
        newName = name[0].toUpperCase() + newName.slice(1);
        return newName;
    }
    )
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
//_________________________________________________________________________________________________________________________________//

//Map Uppgift 4
function namesOnly(arr) {
    return arr.map(value => value.name);
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
//_________________________________________________________________________________________________________________________________//

//Map uppgift 5
function makeStrings(arr) {
    return arr.map(value => {
        if (value.age > 18)
            return (value.name + " Can go to the matrix!")
        else
            return (value.name + " Can not see the matrix!")

    }

    )

}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
//_________________________________________________________________________________________________________________________________//

//Map uppgift 6 

function readyToPutInTheDOM(arr){
    return arr.map(value => "<h1>" + value.name + "</h1>" + "<h2>" + value.age + "</h2>")
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

//_________________________________________________________________________________________________________________________________//

//Filter uppgift 1
function fiveAndGreaterOnly(arr) {
    return arr.filter(value => value > 5 == true)
  }
  // test
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
//_________________________________________________________________________________________________________________________________//

//Filter uppgift 2
function evensOnly(arr) {
    return arr.filter(value => value / 2 == true)
  }
  // test
  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
//_________________________________________________________________________________________________________________________________//

//Filter uppgift 3

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(value => value.length <= 5 == true)
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
//_________________________________________________________________________________________________________________________________//

  //filter uppgift 4

  function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter( value => value.member == true)
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
//_________________________________________________________________________________________________________________________________//

  //filter uppgift 5

  function ofAge(arr){
      return arr.filter(value => value.age < 18 == true)
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ])); 
  //_________________________________________________________________________________________________________________________________//
