function validaFormulario() {
  let campos = ["m11", "m12", "m13", "m21", "m22", "m23", "m31", "m32", "m33"];
  let valores = [];

  for (let i = 0; i < campos.length; i++) {
    let valor = document.getElementById(campos[i]).value;
    if (valor === "") {
      alert(`Preencha o elemento (${campos[i][1]},${campos[i][2]}) da matriz!`);
      document.getElementById(campos[i]).focus();
      return false;
    }
    valores.push(Number(valor));
  }

  let matriz = [
    [valores[0], valores[1], valores[2]],
    [valores[3], valores[4], valores[5]],
    [valores[6], valores[7], valores[8]],
  ];

  let maior = matriz[0][0];
  let linhaMaior = 0;
  let colunaMaior = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] > maior) {
        maior = matriz[i][j];
        linhaMaior = i;
        colunaMaior = j;
      }
    }
  }

  alert(
    `Maior elemento: ${maior} (linha ${linhaMaior + 1}, coluna ${colunaMaior + 1})`,
  );
  return true;
}
