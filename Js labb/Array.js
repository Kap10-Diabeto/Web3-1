//function arr(start, slut){
//    return Array(slut - start + 1).fill().map((_, idx) => start + idx)
//}
//var test = arr(1, 100)
//console.log(test);

function arr(start, slut){
    return Array(slut - start + 1).fill().map((_, idx) => start + idx)
}
var test = arr(1, 100)
console.log(test);