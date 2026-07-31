function validaFormulario() {
  let lado1 = document.getElementById("lado1").value;
  let lado2 = document.getElementById("lado2").value;
  let lado3 = document.getElementById("lado3").value;

  if (lado1 === "") {
    alert("Preencha o campo lado 1!");
    document.getElementById("lado1").focus();
    return false;
  }
  if (lado2 === "") {
    alert("Preencha o campo lado 2!");
    document.getElementById("lado2").focus();
    return false;
  }
  if (lado3 === "") {
    alert("Preencha o campo lado 3!");
    document.getElementById("lado3").focus();
    return false;
  }

  let a = parseFloat(lado1);
  let b = parseFloat(lado2);
  let c = parseFloat(lado3);

  if (a <= 0 || b <= 0 || c <= 0) {
    alert("Os lados devem ser maiores que zero!");
    return false;
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    alert("Esses valores não formam um triângulo válido.");
  } else if (a === b && b === c) {
    alert("Triângulo equilátero: todos os lados são iguais.");
  } else if (a === b || a === c || b === c) {
    alert("Triângulo isósceles: dois lados são iguais.");
  } else {
    alert("Triângulo escaleno: todos os lados são diferentes.");
  }

  return true;
}
