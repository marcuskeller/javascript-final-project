function validaFormulario() {
  let flexoesIniciais = document.getElementById("flexoesIniciais").value;
  let incremento = document.getElementById("incremento").value;

  if (flexoesIniciais === "") {
    alert("Preencha o campo flexões no dia 1!");
    document.getElementById("flexoesIniciais").focus();
    return false;
  }
  if (incremento === "") {
    alert("Preencha o campo incremento diário!");
    document.getElementById("incremento").focus();
    return false;
  }

  let total = 0;
  let flexoesHoje = parseFloat(flexoesIniciais);
  let incrementoNumero = parseFloat(incremento);

  for (let dia = 1; dia <= 30; dia++) {
    if (dia % 7 !== 0) {
      total += flexoesHoje;
      flexoesHoje += incrementoNumero;
    }
  }

  alert(`Total de flexões em 30 dias: ${total}`);
  return true;
}
