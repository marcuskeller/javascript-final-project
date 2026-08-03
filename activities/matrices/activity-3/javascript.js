function validaFormulario() {
  let campos = [
    "matrizA11",
    "matrizA12",
    "matrizA21",
    "matrizA22",
    "matrizB11",
    "matrizB12",
    "matrizB21",
    "matrizB22",
  ];
  let valores = [];

  for (let i = 0; i < campos.length; i++) {
    let valor = document.getElementById(campos[i]).value;
    if (valor === "") {
      let info = campos[i].slice(6);
      alert(
        `Preencha o elemento (${info[1]},${info[2]}) da matriz ${info[0]}!`,
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
