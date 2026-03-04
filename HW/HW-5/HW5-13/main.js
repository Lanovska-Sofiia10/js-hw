let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    let sum = 0;
    for ( let currencys of currencyValues){
        if(currencys.currency === exchangeCurrency){
             sum = sumUAH/currencys.value;
             break;
        }
    }
    return sum;
}
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD');