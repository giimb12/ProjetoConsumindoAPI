fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta =>{
    return resposta.json()
}).then(economia =>{

    console.log(economia);
    document.getElementById("dolar").innerHTML = "O dólar esta em um valor de: $ " + economia.USDBRL.bid;
    document.getElementById("maior").innerHTML = "O maior valor atingido foi: $ " + economia.USDBRL.high;
    document.getElementById("menor").innerHTML = "O menor valor atingido foi: $ " + economia.USDBRL.low; 
})

// function converter() {
//     const dolarConverter = document.getElementById("dolar").economia.USDBRL.bid;
//     var dollarAmount = document.getElementById("dollarAmount").value;
//     var realAmount = dollarAmount * dolarConverter; //cotação do dólar em relação ao real
//     document.getElementById("realAmount").value = realAmount;
// }
