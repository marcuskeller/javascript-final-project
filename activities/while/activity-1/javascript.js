function validaFormulario() {
  let capacidade = document.getElementById("capacidade").value;
  let vazao = document.getElementById("vazao").value;

  if (capacidade === "") {
    alert("Preencha o campo capacidade da caixa!");
    document.getElementById("capacidade").focus();
    return false;
  }
  if (vazao === "") {
    alert("Preencha o campo vazão da torneira!");
    document.getElementById("vazao").focus();
    return false;
  }

  let capacidadeNumero = parseFloat(capacidade);
  let vazaoNumero = parseFloat(vazao);

  if (vazaoNumero <= 0) {
    alert("Vazão deve ser maior que zero!");
    return false;
  }

  let nivel = 0;
  let minutos = 0;

  while (nivel < capacidadeNumero) {
    nivel += vazaoNumero;
    minutos++;
  }

  alert(`A caixa d'água ficará cheia em ${minutos} minutos`);
  return true;
}
