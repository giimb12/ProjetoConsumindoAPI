fetch('dado.json')
    .then(response => response.json())
    .then(corpo=>{

        document.getElementById('imagem').innerHTML = corpo.item1.imagem;
        document.getElementById('nome').innerHTML = corpo.item1.name;
        document.getElementById('ano').innerHTML = corpo.item1.year;
        document.getElementById('genero').innerHTML = corpo.item1.gender;
        document.getElementById('preco').innerHTML = corpo.item1.price;

        document.getElementById('imagem2').innerHTML = corpo.item2.imagem2;
        document.getElementById('nome2').innerHTML = corpo.item2.name2;
        document.getElementById('ano2').innerHTML = corpo.item2.year2;
        document.getElementById('genero2').innerHTML = corpo.item2.gender2;
        document.getElementById('preco2').innerHTML = corpo.item2.price2;

        document.getElementById('imagem3').innerHTML = corpo.item3.imagem3;
        document.getElementById('nome3').innerHTML = corpo.item3.name3;
        document.getElementById('ano3').innerHTML = corpo.item3.year3;
        document.getElementById('genero3').innerHTML = corpo.item3.gender3;
        document.getElementById('preco3').innerHTML = corpo.item3.price3;
    });