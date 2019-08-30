let myButton = document.getElementById("balloon");
//let style = 20;
//function ballonG(){
//    style+=5;  💥
//    document.getElementById("balloon").style.fontSize  = style + "px";
//    console.log("balloons!");
//}


setInterval(function(){
    let newballoon = document.createElement("div");
    newballoon.style.position = "absolute";
    newballoon.style.top = Math.random()* window.innerHeight + "px";
    newballoon.style.left = Math.random()* window.innerWidth + "px";
    newballoon.innerHTML="🎈";
    document.body.appendChild(newballoon);

}, 2000);


function timer(event){
    let style = 35;
    let id = setInterval(function()  {
        style+=1.5;
        event.target.style.fontSize  = style + "px";
        //document.getElementById("balloon")

        if(style > 55){
            clearInterval(id);
            event.target.innerHTML = "💥";
            setTimeout(function(){ event.target.innerHTML = null
            }, 300);
        }

    }, 50)

       
    }


document.body.onclick = timer;