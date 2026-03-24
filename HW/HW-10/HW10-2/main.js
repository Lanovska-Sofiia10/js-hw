let currentNumber = +localStorage.getItem("number") || 100;
let lastUpdate = +localStorage.getItem('lastUpdate');
if(Date.now() - lastUpdate >= 10000){
    currentNumber += 10;
    localStorage.setItem('number', currentNumber);
    localStorage.setItem('lastUpdate', Date.now());
}
document.getElementById('number').innerText = currentNumber;