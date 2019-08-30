console.log("wow");
let el = document.getElementById("content");
console.log(el.innerHTML)

for( let i = 1; i < 70; i ++){
    let id = "item" + i;
    text ="";
    for(pos=0; pos <i; ++pos){
        text += "🥒"
    }
    document.getElementById(`item${i}`).innerHTML = text;
}
