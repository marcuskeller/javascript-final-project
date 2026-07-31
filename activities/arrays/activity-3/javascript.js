function validaFormulario() {
  let campos = ["nota1", "nota2", "nota3", "nota4", "nota5"];
  let notas = [];

  for (let i = 0; i < campos.length; i++) {
    let valor = document.getElementById(campos[i]).value;
    if (valor === "") {
      alert(`Preencha a nota do aluno ${i + 1}!`);
      document.getElementById(campos[i]).focus();
      return false;
    }
    notas.push(Number(valor));
  }

  let soma = 0;

  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  let media = soma / notas.length;
  let acimaDaMedia = 0;

  for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
      acimaDaMedia++;
    }
  }

  alert(
    `Média da turma: ${media.toFixed(1)} | Alunos acima da média: ${acimaDaMedia}`,
  );
  return true;
}
