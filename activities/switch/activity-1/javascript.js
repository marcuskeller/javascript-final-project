function validaFormulario() {
  let nota = document.getElementById("nota").value;

  if (nota === "") {
    alert("Preencha o campo nota!");
    document.getElementById("nota").focus();
    return false;
  }

  let notaNumero = parseFloat(nota);

  if (notaNumero < 0 || notaNumero > 10) {
    alert("A nota deve estar entre 0 e 10!");
    return false;
  }

  let notaInteira = Math.floor(notaNumero);
  let situacao;

  switch (notaInteira) {
    case 10:
    case 9:
    case 8:
    case 7:
      situacao = "Aprovado";
      break;
    case 6:
    case 5:
      situacao = "Recuperação";
      break;
    default:
      situacao = "Reprovado";
  }

  alert(`Situação do aluno: ${situacao}`);
  return true;
}
