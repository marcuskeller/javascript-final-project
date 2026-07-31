function validaFormulario() {
  let renda = document.getElementById("renda").value;
  let negativado = document.getElementById("negativado").value;

  if (renda === "") {
    alert("Preencha o campo renda mensal!");
    document.getElementById("renda").focus();
    return false;
  }
  if (negativado === "") {
    alert("Preencha o campo nome negativado!");
    document.getElementById("negativado").focus();
    return false;
  }

  let rendaNumero = parseFloat(renda);
  let negativadoMinusculo = negativado.toLowerCase();

  if (rendaNumero >= 2000 && negativadoMinusculo === "nao") {
    alert("Empréstimo aprovado!");
  } else {
    if (rendaNumero < 2000 && negativadoMinusculo !== "nao") {
      alert("Empréstimo reprovado: renda insuficiente e nome negativado.");
    } else if (rendaNumero < 2000) {
      alert("Empréstimo reprovado: renda insuficiente.");
    } else {
      alert("Empréstimo reprovado: nome negativado.");
    }
  }

  return true;
}
