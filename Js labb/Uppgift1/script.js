import { mark } from "./mark.js";
import { fod } from "./fod.js";

fetch("http://94.46.140.3:8080/teknikumMenu/api/menu")
    .then(response => response.json())
    .then(data => {

        document.getElementById("year").innerHTML = "Year: " + data.year;
        document.getElementById("week").innerHTML = "Week: " + data.week;
        let meals = "";


        for (let matIndex = 0; matIndex < data.meals.length; ++matIndex) {
            let myElement = fod(matIndex, data)
            mark(matIndex, myElement);
        }





    })




