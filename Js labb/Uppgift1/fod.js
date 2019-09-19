export function fod(matIndex, data) {
    const mat = data.meals[matIndex];
    let myNewMatElement = document.createElement("li");
    myNewMatElement.innerHTML = `<span>${mat.day}</span><p>${mat.dish}</p><p>${mat.alt_dish}</p>`;
    document.getElementById("meals").appendChild(myNewMatElement);
    return myNewMatElement;
}