//Instanciando o Botão
var btnCEP = document.querySelector('button');

//Obtendo a ação realização no click do botão
btnCEP.addEventListener('click', function () {

  var cep = document.querySelector('#cep').value;

  var api = `https://viacep.com.br/ws/${cep}/json/`;

  var request = new XMLHttpRequest();
  request.open('GET', api);

  request.onload = function () {
    console.dir(JSON.parse(request.responseText));
    console.log(JSON.parse(request.responseText).uf);
    console.log(JSON.parse(request.responseText).localidade);
    console.log(JSON.parse(request.responseText).logradouro);
    console.log(JSON.parse(request.responseText).bairro)

    //Transforma o JSON retornado em um objeto do JavaScript
    const address = JSON.parse(request.responseText);
    
    //Pega o objeto retorno e adiciona na DIV do HTML
    var street = document.querySelector('#street');
    street.innerHTML = address.logradouro;

    var district = document.querySelector('#district');
    district.innerHTML = address.bairro;

    var city = document.querySelector('#city');
    city.innerHTML = address.localidade;

    var uf = document.querySelector('#uf');
    uf.innerHTML = address.uf;

    var valorProduto = document.querySelector('#valorProduto').value

   // Convertendo o valor do produto passado no HTML
    var valorProduto = parseInt(valorProduto)

    if (address.uf == "SP" && address.localidade == "São Paulo"){
      mostrarValor1 = valorProduto * 0.5 + valorProduto
    }
    else if (address.localidade == "Campinas" || address.localidade == "Sumaré" || address.localidade == "Americana" || address.localidade == "Valinhos"
    || address.localidade == "Vinhedo" || address.localidade == "Salto" || address.localidade == "Sorocaba"){
      mostrarValor1 = valorProduto * 0.3 + valorProduto
    }    
    //Condições dos estados
     else if (address.uf == "AC" || address.uf == "PA" || address.uf == "AP" || address.uf == "MA" ){/*AC PA AP MA*/
      mostrarValor1 = valorProduto * 1.45 + valorProduto
    }else if (address.uf == "RO" || address.uf == "RR" || address.uf == "PI" || address.uf == "RN" ){ /*RO RR PI RN*/ 
      mostrarValor1 = valorProduto * 1.4 + valorProduto
    }else if (address.uf == "AM"){ //AM
      mostrarValor1 = valorProduto * 1.3 + valorProduto
    }else if (address.uf == "PB" || address.uf == "PE" ){ /*PB PE */ 
      mostrarValor1 = valorProduto * 0.95 + valorProduto
    }else if (address.uf == "AL" || address.uf == "BA" ){ /* AL BA */ 
      mostrarValor1 = valorProduto * 0.9 + valorProduto
    }else if (address.uf == "TO" || address.uf == "SE" ){ /* TO SE */ 
      mostrarValor1 = valorProduto * 0.85 + valorProduto
    }else if (address.uf == "MG"){ //MG
      mostrarValor1 = valorProduto * 0.8 + valorProduto
    }else if (address.uf == "ES"){ //ES
      mostrarValor1 = valorProduto * 0.7 + valorProduto
    }else if (address.uf == "MT"){ //MT
      mostrarValor1 = valorProduto * 0.65 + valorProduto
    }else if (address.uf == "RJ" || address.uf == "RS" || address.uf == "MS"){ /* RJ RS MS */ 
      mostrarValor1 = valorProduto * 0.6 + valorProduto
    }else if (address.uf == "GO" || address.uf == "DF" ){ /* GO DF */ 
      mostrarValor1 = valorProduto * 0.55 + valorProduto
    }else if (address.uf == "SC"){ //SC
      mostrarValor1 = valorProduto * 0.5 + valorProduto
    }else if (address.uf == "PR"){ //PR
      mostrarValor1 = valorProduto * 0.4 + valorProduto
    } else if (address.uf == "CE"){ // CE
      mostrarValor1 = valorProduto * 1.00 + valorProduto
    }else{
      console.log("CEP inválido")
    }
    
    var Total = mostrarValor1 + valorProduto;
    document.getElementById("valorFrete").value = mostrarValor1;
    document.getElementById("Total").value = Total;
    
    }

  request.send();
});
