function validaFormulario() {
  let guardado = document.getElementById("guardado").value;
  let economia = document.getElementById("economia").value;
  let meta = document.getElementById("meta").value;

  if (guardado === "") {
    alert("Preencha o campo valor guardado!");
    document.getElementById("guardado").focus();
    return false;
  }
  if (economia === "") {
    alert("Preencha o campo economia mensal!");
    document.getElementById("economia").focus();
    return false;
  }
  if (meta === "") {
    alert("Preencha o campo meta!");
    document.getElementById("meta").focus();
    return false;
  }

  let economiaNumero = parseFloat(economia);

  if (economiaNumero <= 0) {
    alert("A economia mensal deve ser maior que zero!");
    return false;
  }

  let total = parseFloat(guardado);
  let metaNumero = parseFloat(meta);
  let meses = 0;

  do {
    total += economiaNumero;
    meses++;
  } while (total < metaNumero);

  alert(`A meta será atingida em ${meses} meses`);
  return true;
}
