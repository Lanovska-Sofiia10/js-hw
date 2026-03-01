function exchange(sumUAH,currencyValues,exchangeCurrency){
    for ( let currencys of currencyValues){
        if(currencys.currency === exchangeCurrency){
            let sum = sumUAH/currencys.value;
        }
    }
    return sum;
}
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD');