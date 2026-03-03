let sum = (arr) =>{
    let sum = 0;
    for(let item of arr){
        sum += item;
    }
    return sum;
}
sum([1,2,10])