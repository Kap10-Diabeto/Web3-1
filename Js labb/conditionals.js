//IF
if(0 == false){
   console.log("0 är falsey")
}

if(false == false){
   console.log("false är falsey")
}

if("" == false){
   console.log("? är falsey")
}

if(!null){
   console.log("null är falsey")
}

if(!undefined){
   console.log("undefined är falsey")
}

let cnt = 17;
if(cnt < 5){
    console.log("mindre än fem")
}
else if(cnt < 10){
    console.log("mellan 5 och 10")
}
else{
    console.log("tio eller mer")
}

let value ="c-3po";

switch(value){
    case "r2d2":
    console.log("beep boop");
    break;

    case"c-3po":
    console.log("waw");
    break;
}
//ternary operator
let value2 = 15;
console.log( value < 10 ? "small" : "big");

//Boolean operator

// AND - &&
let name = "yggdrasil";
let length = 900;

if(name == "yggdrasil" && length == 900){
    console.log("welcome almighty")
}

else
    console.log("death is upon you")

// OR - ||

let isVIP = true;
let hasticket = false;

if(isVIP || hasticket){
    console.log("welcome sör");
}


