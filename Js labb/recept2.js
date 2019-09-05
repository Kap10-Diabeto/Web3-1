let recept = {
    title: "Brunbärspasta",
    rating: "5.5/5",
    ingredients: [
        {amount: "200g",
        name: "Brunbär"
        },
        {amount: "20g",
        name: "Muskottnöt"
        },
        {amount: "500g",
        name: "Kylpasta"

        }
    ],

    steps: [
        "Gnugga bären, ", "Steka kylpastan, ", "Smula muskottnöten, ", "Blanda, ", "Servera"
    ]
}

let arraylength = recept.ingredients.length;
for(let i = 0; i < arraylength; i++){
    console.log(recept.ingredients[i].amount,recept.ingredients[i].name)
}

arraylength = recept.steps.length;
for(let i = 0; i < arraylength; i++){
    console.log(recept.steps[i]);
}