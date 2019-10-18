import { write } from "./write.js";
import { status } from "./status.js";
import {UpdateTodoItem} from "./status.js";
import {add} from "./write.js";

async function getTODO(){
    try{
        const response = await window.fetch("http://its.teknikum.it:8080/lists/9?_embed=items");
        const data = await response.json();

        document.getElementById("title").innerHTML = data.title;

        for(let i = 0; i < data.items.length; ++i){
            let myElement = write(i,data);
            
            let checkbox = myElement.getElementsByTagName("input")[0]
            const item = data.items[i];
            checkbox.onclick = async function(){
                let myStatElement = myElement.getElementsByClassName("stat")[0]
                let status = checkbox.checked?"Completed":"Work in progress";
                await UpdateTodoItem(item.id, {isComplete: checkbox.checked});
                myStatElement.innerHTML = "Status: " + status;
            }

            const titleElement = myElement.querySelector("h2");
            titleElement.onclick = async () => {
                console.log(`You clicked item: ${item.title}`);
                const newTitle = window.prompt("Ange ny titel på uppgiften", item.title);
                if(newTitle){
                await UpdateTodoItem(item.id, {title: newTitle });
                titleElement.innerHTML = newTitle;
                location.reload(true);
                }


            console.log(item.isComplete)
            if(item.isComplete){
                console.log(checkbox)
                checkbox.checked = true;
        }

        add(addNewitem);
    }

}

    }

    catch(err){
        console.log("in catch:", err);
    }


}

getTODO().then(status =>{
    console.log(status);
});

