function validaFormulario() {
  let numero = document.getElementById("numero").value;

  if (numero === "") {
    alert("Preencha o campo número!");
    document.getElementById("numero").focus();
    return false;
  }

  let n = parseInt(numero);

  if (n < 2) {
    alert("Número inválido, não é primo");
    return true;
  }

  let primo = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    alert(`${n} é primo`);
  } else {
    alert(`${n} não é primo`);
  }

  return true;
}
