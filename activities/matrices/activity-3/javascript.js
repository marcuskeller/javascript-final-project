function validaFormulario() {
  let matrizA11 = document.getElementById("matrizA11").value;
  let matrizA12 = document.getElementById("matrizA12").value;
  let matrizA21 = document.getElementById("matrizA21").value;
  let matrizA22 = document.getElementById("matrizA22").value;
  let matrizB11 = document.getElementById("matrizB11").value;
  let matrizB12 = document.getElementById("matrizB12").value;
  let matrizB21 = document.getElementById("matrizB21").value;
  let matrizB22 = document.getElementById("matrizB22").value;

  if (matrizA11 === "") {
    alert("Preencha o elemento (1,1) da matriz A!");
    document.getElementById("matrizA11").focus();
    return false;
  }
  if (matrizA12 === "") {
    alert("Preencha o elemento (1,2) da matriz A!");
    document.getElementById("matrizA12").focus();
    return false;
  }
  if (matrizA21 === "") {
    alert("Preencha o elemento (2,1) da matriz A!");
    document.getElementById("matrizA21").focus();
    return false;
  }
  if (matrizA22 === "") {
    alert("Preencha o elemento (2,2) da matriz A!");
    document.getElementById("matrizA22").focus();
    return false;
  }
  if (matrizB11 === "") {
    alert("Preencha o elemento (1,1) da matriz B!");
    document.getElementById("matrizB11").focus();
    return false;
  }
  if (matrizB12 === "") {
    alert("Preencha o elemento (1,2) da matriz B!");
    document.getElementById("matrizB12").focus();
    return false;
  }
  if (matrizB21 === "") {
    alert("Preencha o elemento (2,1) da matriz B!");
    document.getElementById("matrizB21").focus();
    return false;
  }
  if (matrizB22 === "") {
    alert("Preencha o elemento (2,2) da matriz B!");
    document.getElementById("matrizB22").focus();
    return false;
  }

  let matrizA = [
    [Number(matrizA11), Number(matrizA12)],
    [Number(matrizA21), Number(matrizA22)],
  ];

  let matrizB = [
    [Number(matrizB11), Number(matrizB12)],
    [Number(matrizB21), Number(matrizB22)],
  ];

  let resultado = [];

  for (let i = 0; i < 2; i++) {
    let linha = [];
    for (let j = 0; j < 2; j++) {
      linha.push(matrizA[i][j] + matrizB[i][j]);
    }
    resultado.push(linha);
  }

  alert(
    `Matriz resultado:\n[${resultado[0][0]}, ${resultado[0][1]}]\n[${resultado[1][0]}, ${resultado[1][1]}]`,
  );
  return true;
}
