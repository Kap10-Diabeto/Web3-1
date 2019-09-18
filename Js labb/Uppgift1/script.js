fetch("http://94.46.140.3:8080/teknikumMenu/api/menu")
    .then(response => response.json())
    .then(data => {

        document.getElementById("year").innerHTML = "Year: " + data.year;
        document.getElementById("week").innerHTML = "Week: "+ data.week;

        let meals = "";


        for (let matIndex = 0; matIndex < data.meals.length; ++matIndex) {
            const mat = data.meals[matIndex];
            let myNewMatElement = document.createElement("li");
            myNewMatElement.innerHTML = `<span>${mat.day}</span><p>${mat.dish}</p><p>${mat.alt_dish}</p>`;
            document.getElementById("meals").appendChild(myNewMatElement);


            let d = new Date();
            if(d.getDay()-1 == matIndex){
                console.log(d.getDay());
                myNewMatElement.querySelector("span").style.fontWeight="bold";
            }
            
        }


        

        
    })

   


