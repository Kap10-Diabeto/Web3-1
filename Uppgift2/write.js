import { createTodoItem } from "./status.js";

export function write(i,data){
    const item = data.items[i];
    let MynewElement = document.createElement("li");
    MynewElement.innerHTML = ` <h2>${item.title}</h2> <label class="container">
    <input type="checkbox">
    <span class="checkmark"></label></span> <p class="stat" > Status: ${item.isComplete}</p> `;
    document.getElementById("items").appendChild(MynewElement);
    return MynewElement;
}

export async function add(addNewItem){
    const buttonElement = item.MynewElement.querySelector("button");
    buttonElement.onclick = () => addNewItem();
   const newItem = await createTodoItem(item.listId, {
        title: "Ny uppgift",
        isComplete: false
    });

    let newItem = new 
}

