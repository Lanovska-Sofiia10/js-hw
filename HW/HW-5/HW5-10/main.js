let foobar = (arr) => {
    let min = arr[0];
    for (let item of arr) {
        if (item < min){
            min = item;
        }
    }
    return min;
}
foobar([12, 467, 64, 44, 2]);