fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data =>{
        let users ="";
        for(let userIndex = 0; userIndex < data.length; ++userIndex){
            const user = data[userIndex];
            let myNewUserElement = document.createElement("li");
            myNewUserElement.innerHTML = user.name;
            document.getElementById("users").appendChild(myNewUserElement);
        }
       // document.body.innerHTML = users;
    })