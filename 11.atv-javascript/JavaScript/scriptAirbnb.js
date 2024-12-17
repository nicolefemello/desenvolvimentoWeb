document.getElementById("btn-send").addEventListener("click", function() {

  let preco = Number(document.getElementById("preco").value);

  let entrada = document.getElementById("entrada").value;
  let saida = document.getElementById("saida").value;

  let taxaLimpeza = Number(document.getElementById("taxaLimpeza").value);
  
  let cupom = Number(document.getElementById("cupom").value);

  if ((preco || taxaLimpeza) == 0 || (entrada || saida) == '') {
    alert("Preencha todos os campos!");
  } else {

    let qtdDiaria = 10; //!remover

    let valor = preco * qtdDiaria + taxaLimpeza;
    let valorHospedagem = valor - valor * cupom;

    document.getElementById(
      "valorHospedagem"
    ).innerText = `O valor total da hospedagem é ${valorHospedagem.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
  }
});


