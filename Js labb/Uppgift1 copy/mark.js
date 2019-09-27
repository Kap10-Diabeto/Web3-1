export function mark(i, e){
    let d = new Date();
            if(d.getDay()-1 == i){
                console.log(d.getDay());
                e.querySelector("span").style.fontWeight="bold";
            }
}