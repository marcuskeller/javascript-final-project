function validaFormulario() {
  let valorInicial = document.getElementById("valorInicial").value;
  let taxa = document.getElementById("taxa").value;

  if (valorInicial === "") {
    alert("Preencha o campo valor inicial do veículo!");
    document.getElementById("valorInicial").focus();
    return false;
  }
  if (taxa === "") {
    alert("Preencha o campo taxa de depreciação!");
    document.getElementById("taxa").focus();
    return false;
  }

  let taxaNumero = parseFloat(taxa);

  if (taxaNumero <= 0) {
    alert("A taxa de depreciação deve ser maior que zero!");
    return false;
  }

  let valor = parseFloat(valorInicial);
  let limite = valor / 2;
  let anos = 0;

  do {
    valor -= valor * (taxaNumero / 100);
    anos++;
  } while (valor > limite);

  alert(`O veículo valerá menos da metade do valor original em ${anos} anos`);
  return true;
}
