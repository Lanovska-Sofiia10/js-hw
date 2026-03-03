let foobar = (arr) =>{
    document.write(`<ul>`);
    for (let item of arr){
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
foobar(['Hello', 3, false, NaN, -24, undefined]);