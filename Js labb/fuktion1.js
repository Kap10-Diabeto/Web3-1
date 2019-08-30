function minmax(min, max){
    let sum = 0;
    for (let i = min; i <= max; i++) {
           sum += i * i;

       }
    return sum;

       }

    let exempel = minmax(1, 5)
    console.log(exempel);
