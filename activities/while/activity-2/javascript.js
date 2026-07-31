function validaFormulario() {
  let populacao = document.getElementById("populacao").value;
  let taxa = document.getElementById("taxa").value;

  if (populacao === "") {
    alert("Preencha o campo população!");
    document.getElementById("populacao").focus();
    return false;
  }
  if (taxa === "") {
    alert("Preencha o campo taxa de crescimento!");
    document.getElementById("taxa").focus();
    return false;
  }

  let taxaNumero = parseFloat(taxa);

  if (taxaNumero <= 0) {
    alert("A taxa de crescimento deve ser maior que zero!");
    return false;
  }

  let pop = parseFloat(populacao);
  let alvo = pop * 2;
  let anos = 0;

  while (pop < alvo && anos < 1000) {
    pop = pop * (1 + taxaNumero / 100);
    anos++;
  }

  alert(`A população irá dobrar em ${anos} anos`);
  return true;
}
