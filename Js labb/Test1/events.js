let myButton = document.getElementById("knapp");
//
//function button_click(){
//    console.log("The button was pressed!");
//}
//
//function click_Alert(){
//    alert("Någon klickade på knappen!");
//}
//
//let count = 0;
//
//function click_DOM(){
//    count++;    
//    let myElement = document.getElementById("message")
//    myElement.innerHTML = "Öh, sluta pilla! " + count
//}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
  function setRandomColor() {
    //let element = document.getElementById()
    document.getElementById("back").style.backgroundColor  = getRandomColor();
    document.getElementById("knapp").style.backgroundColor  = getRandomColor();
  }

//function click_disco(){
//    document.getElementById("back").style.backgroundColor = getRandomColor;
//}

myButton.onclick = setRandomColor;
