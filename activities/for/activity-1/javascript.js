function validaFormulario() {
  let valorConta = document.getElementById("valorConta").value;
  let reajuste = document.getElementById("reajuste").value;

  if (valorConta === "") {
    alert("Preencha o campo valor da conta!");
    document.getElementById("valorConta").focus();
    return false;
  }
  if (reajuste === "") {
    alert("Preencha o campo reajuste mensal!");
    document.getElementById("reajuste").focus();
    return false;
  }

  let valor = parseFloat(valorConta);
  let reajusteNumero = parseFloat(reajuste);

  for (let mes = 1; mes <= 12; mes++) {
    valor = valor * (1 + reajusteNumero / 100);
  }

  alert(`Após 12 meses, o valor da conta será: R$ ${valor.toFixed(2)}`);
  return true;
}
