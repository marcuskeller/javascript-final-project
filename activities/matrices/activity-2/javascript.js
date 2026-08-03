function validaFormulario() {
  let campos = [
    "matriz11",
    "matriz12",
    "matriz13",
    "matriz21",
    "matriz22",
    "matriz23",
    "matriz31",
    "matriz32",
    "matriz33",
  ];
  let valores = [];

  for (let i = 0; i < campos.length; i++) {
    let valor = document.getElementById(campos[i]).value;
    if (valor === "") {
      let posicao = campos[i].slice(6);
      alert(`Preencha o elemento (${posicao[0]},${posicao[1]}) da matriz!`);
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
