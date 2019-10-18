
import { mark } from "./mark.js";
import { fod } from "./fod.js";


async function getMenu() {
try{
    const response = await window.fetch("http://94.46.140.3:8080/teknikumMenu/api/menu")
    const data = await response.json();

        document.getElementById("year").innerHTML = "Year: " + data.year;
        document.getElementById("week").innerHTML = "Week: " + data.week;
        let meals = "";


        for (let matIndex = 0; matIndex < data.meals.length; ++matIndex) {
            let myElement = fod(matIndex, data)
            mark(matIndex, myElement);
        }
}

catch(err){
    console.log("In catch", err);
}

return "menu downloaded sucessfully!";

}
getMenu().then(status => {
    console.log(status);
});


