//Instanciando o Botão
let btnCEP = document.querySelector('button');

//Obtendo a ação realização no click do botão
btnCEP.addEventListener('click', function () {

  let cep = document.querySelector('#cep').value;

  let api = `https://viacep.com.br/ws/${cep}/json/`;

  let request = new XMLHttpRequest();
  request.open('GET', api);

  request.onload = function () {
    console.dir(JSON.parse(request.responseText));
    console.log(JSON.parse(request.responseText).uf);
    console.log(JSON.parse(request.responseText).localidade);
    console.log(JSON.parse(request.responseText).logradouro);
    console.log(JSON.parse(request.responseText).bairro)

    //Transforma o JSON retornado em um objeto do JavaScript
    let address = JSON.parse(request.responseText);

    //Pega o objeto retorno e adiciona na DIV do HTML
    let street = document.querySelector('#street');
    street.innerHTML = address.logradouro;

    let district = document.querySelector('#district');
    district.innerHTML = address.bairro;

    let city = document.querySelector('#city');
    city.innerHTML = address.localidade;

    let uf = document.querySelector('#uf');
    uf.innerHTML = address.uf;

    var valorP = document.getElementById('valorP').value;

    var calcular = {RO : "Rondônia", taxa0 : 1.4,
    AC : "Acre", taxa1 : 1.45,
    AM : "Amazonas", taxa2 : 1.3,
    RR : "Roraima", taxa3 : 1.4,
    PA : "Pará", taxa4 : 1.45,
    AP : "Amapá", taxa5 : 1.45,
    TO : "Tocantins", taxa6 : 0.85,
    MA : "Maranhão", taxa7 : 1.45,
    PI : "Piauí", taxa8 : 1.4,
    CE : "Ceará", taxa9 : 1,
    RN : "Rio Grande do Norte", taxa10 : 1.4,
    PB : "Paraíba", taxa11 : 0.95,
    PE : "Pernambuco", taxa12 : 0.95,
    AL : "Alagoas", taxa13 : 0.9,
    SE : "Sergipe", taxa14 : 0.85,
    BA : "Bahia", taxa15 : 0.9,
    MG : "Minas Gerais", taxa16 : 0.8,
    ES : "Espírito Santo", taxa17 : 0.7,
    RJ : "Rio de Janeiro", taxa18 : 0.6,
    SP : "São Paulo", taxa19 : 0.1,
    PR : "Paraná", taxa20 : 0.4,
    SC : "Santa Catarina", taxa21 : 0.5,
    RS : "Rio Grande do Sul", taxa22 : 0.6,
    MS : "Mato Grosso do Sul", taxa23 : 0.6,
    MT : "Mato Grosso", taxa24 : 0.65,
    GO : "Goiás", taxa25 : 0.55,
    DF : "Distrito Federal", taxa26 : 0.55

    };

      var PFrete = [
        1.40,
        1.45,
        1.30,
        1.40,
        1.45,
        1.45,
        0.85,
        1.45,
        1.40,
        1.00,
        1.40,
        0.95,
        0.95,
        0.90,
        0.85,
        0.90,
        0.80,
        0.70,
        0.60,
        "SP",
        0.40,
        0.50,
        0.60,
        0.60,
        0.65,
        0.55,
        0.55];

      console.log(PFrete);
      console.log(valorP);
      console.log(address.uf)
      console.log(address.localidade)

     
      for (i in calcular){

        if (calcular === address.localidade){
          console.log(adress.taxa[i])
        Frete = valorP * (adress.taxa[i] + valorP);
        console.log(Frete);

      }};
      }

          /*
          if (address.uf === "SP"){
            if (address.localidade === "São Paulo") {
              Frete = valorP * (0.5 + valorP);
              console.log('valor do Frete:',Frete)
              console.log(valorP);
            }
            else {
              Frete = valorP * (0.3 + valorP); 
              console.log('valor do Frete:',Frete)
            //[Frete = PrecoProduto * (% Frete s/ R$ Produto)]
          }}
          */

          parent.document.getElementById("Frete").value = Frete;
  
  //console.log(cep);
  request.send();
});