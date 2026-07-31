function validaFormulario() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let operador = document.getElementById("operador").value;

  if (num1 === "") {
    alert("Preencha o campo número 1!");
    document.getElementById("num1").focus();
    return false;
  }
  if (num2 === "") {
    alert("Preencha o campo número 2!");
    document.getElementById("num2").focus();
    return false;
  }
  if (operador === "") {
    alert("Preencha o campo operador!");
    document.getElementById("operador").focus();
    return false;
  }

  let numero1 = parseFloat(num1);
  let numero2 = parseFloat(num2);
  let resultado = 0;

  switch (operador) {
    case "+":
      resultado = numero1 + numero2;
      alert(`Resultado: ${resultado}`);
      break;
    case "-":
      resultado = numero1 - numero2;
      alert(`Resultado: ${resultado}`);
      break;
    case "*":
      resultado = numero1 * numero2;
      alert(`Resultado: ${resultado}`);
      break;
    case "/":
      if (numero2 === 0) {
        alert("Erro: divisão por zero!");
        return false;
      }
      resultado = numero1 / numero2;
      alert(`Resultado: ${resultado}`);
      break;
    default:
      alert("Operador inválido!");
  }

  return true;
}
