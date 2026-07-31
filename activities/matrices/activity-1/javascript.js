function validaFormulario() {
  let a11 = document.getElementById("a11").value;
  let a12 = document.getElementById("a12").value;
  let a21 = document.getElementById("a21").value;
  let a22 = document.getElementById("a22").value;

  if (a11 === "") {
    alert("Preencha o elemento (1,1) da matriz!");
    document.getElementById("a11").focus();
    return false;
  }
  if (a12 === "") {
    alert("Preencha o elemento (1,2) da matriz!");
    document.getElementById("a12").focus();
    return false;
  }
  if (a21 === "") {
    alert("Preencha o elemento (2,1) da matriz!");
    document.getElementById("a21").focus();
    return false;
  }
  if (a22 === "") {
    alert("Preencha o elemento (2,2) da matriz!");
    document.getElementById("a22").focus();
    return false;
  }

  let matriz = [
    [Number(a11), Number(a12)],
    [Number(a21), Number(a22)],
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
