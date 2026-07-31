function validaFormulario() {
  let campos = ["a11", "a12", "a21", "a22", "b11", "b12", "b21", "b22"];
  let valores = [];

  for (let i = 0; i < campos.length; i++) {
    let valor = document.getElementById(campos[i]).value;
    if (valor === "") {
      alert(
        `Preencha o elemento (${campos[i][1]},${campos[i][2]}) da matriz ${campos[i][0].toUpperCase()}!`,
      );
      document.getElementById(campos[i]).focus();
      return false;
    }
    valores.push(Number(valor));
  }

  let matrizA = [
    [valores[0], valores[1]],
    [valores[2], valores[3]],
  ];

  let matrizB = [
    [valores[4], valores[5]],
    [valores[6], valores[7]],
  ];

  let resultado = [
    [0, 0],
    [0, 0],
  ];

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let soma = 0;
      for (let k = 0; k < 2; k++) {
        soma += matrizA[i][k] * matrizB[k][j];
      }
      resultado[i][j] = soma;
    }
  }

  alert(
    `Matriz resultado:\n[${resultado[0][0]}, ${resultado[0][1]}]\n[${resultado[1][0]}, ${resultado[1][1]}]`,
  );
  return true;
}
