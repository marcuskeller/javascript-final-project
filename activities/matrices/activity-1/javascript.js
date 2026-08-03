function validaFormulario() {
  let matriz11 = document.getElementById("matriz11").value;
  let matriz12 = document.getElementById("matriz12").value;
  let matriz21 = document.getElementById("matriz21").value;
  let matriz22 = document.getElementById("matriz22").value;

  if (matriz11 === "") {
    alert("Preencha o elemento (1,1) da matriz!");
    document.getElementById("matriz11").focus();
    return false;
  }
  if (matriz12 === "") {
    alert("Preencha o elemento (1,2) da matriz!");
    document.getElementById("matriz12").focus();
    return false;
  }
  if (matriz21 === "") {
    alert("Preencha o elemento (2,1) da matriz!");
    document.getElementById("matriz21").focus();
    return false;
  }
  if (matriz22 === "") {
    alert("Preencha o elemento (2,2) da matriz!");
    document.getElementById("matriz22").focus();
    return false;
  }

  let matriz = [
    [Number(matriz11), Number(matriz12)],
    [Number(matriz21), Number(matriz22)],
  ];

  let soma = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      soma += matriz[i][j];
    }
  }

  alert(`Soma de todos os elementos da matriz: ${soma}`);
  return true;
}
