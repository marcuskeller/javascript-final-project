function validaFormulario() {
  let saldo = document.getElementById("saldo").value;

  if (saldo === "") {
    alert("Preencha o campo saldo!");
    document.getElementById("saldo").focus();
    return false;
  }

  let saldoNumero = parseFloat(saldo);
  let situacao = "";

  if (saldoNumero > 0) {
    situacao = "positivo";
  } else if (saldoNumero < 0) {
    situacao = "negativo (em dívida)";
  } else {
    situacao = "zerado";
  }

  alert(`Seu saldo é ${saldoNumero} e está ${situacao}`);
  return true;
}
