/*fetch("http://its.teknikum.it:8080/lists/9", {
method: "PUT",
headers:{
    "Content-Type": "application/json",
},
body: JSON.stringify(data),
})
*/

export function status(){
document.getElementById("stat").innerHTML = "gurka";
}

export async function UpdateTodoItem(id, data){
    const options = {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    }
    const result = await fetch(`http://its.teknikum.it:8080/items/${id}`, options)
    return await result.json();
}

export async function createTodoItem(listid, data){
    const options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    }
    const result = await fetch(`http://its.teknikum.it:8080/lists/${listid}/items`, options)
    return await result.json();
}




