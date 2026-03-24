// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

let forms1 = document.getElementById("form1");

forms1.onsubmit = function (event) {
    event.preventDefault();

    let ageValue = +this.age.value;
    let young = document.getElementsByClassName('young')[0];

    if (ageValue < 18){
        young.innerText = 'Ви занадто юні';
    }
}