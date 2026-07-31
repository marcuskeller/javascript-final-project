function validaFormulario() {
  let estoque = document.getElementById("estoque").value;
  let vendaDiaria = document.getElementById("vendaDiaria").value;

  if (estoque === "") {
    alert("Preencha o campo estoque!");
    document.getElementById("estoque").focus();
    return false;
  }
  if (vendaDiaria === "") {
    alert("Preencha o campo venda diária!");
    document.getElementById("vendaDiaria").focus();
    return false;
  }

  let vendaDiariaNumero = parseFloat(vendaDiaria);

  if (vendaDiariaNumero <= 0) {
    alert("A venda diária deve ser maior que zero!");
    return false;
  }

  let restante = parseFloat(estoque);
  let dias = 0;

  do {
    restante -= vendaDiariaNumero;
    dias++;
  } while (restante > 0);

  alert(`O estoque irá acabar em ${dias} dias`);
  return true;
}
