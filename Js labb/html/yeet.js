

function random(min, max){
    var max = 200;
    min = 100;
    let eyo = Math.random()* (max - min) + min;
    return eyo;
}

let test = random();
console.log(test);

