let array = [];
for (let i = 0; i < 100; i++) {
    let index = i + 1;
    array.push('text' + index);
}
console.log(array);
let start = 0;
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let list = document.getElementById('list');

function render(){
    list.innerHTML = '';
    let items = array.slice(start, start + 10);
    for (let item of items) {
        let p = document.createElement('p');
        p.innerText = item;
        list.append(p);
    }
}

prev.onclick = function(){
    if (start - 10 >= 0){
        start -= 10;
        render();
    }
}

next.onclick = function(){
    if (start + 10  < array.length){
        start += 10;
        render();
    }
}
render();