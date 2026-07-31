function validaFormulario() {
  let divida = document.getElementById("divida").value;
  let parcela = document.getElementById("parcela").value;

  if (divida === "") {
    alert("Preencha o campo valor da dívida!");
    document.getElementById("divida").focus();
    return false;
  }
  if (parcela === "") {
    alert("Preencha o campo valor da parcela!");
    document.getElementById("parcela").focus();
    return false;
  }

  let saldo = parseFloat(divida);
  let parcelaNumero = parseFloat(parcela);
  let meses = 0;

  while (saldo > 0 && meses < 1200) {
    saldo = saldo * 1.01 - parcelaNumero;
    meses++;
  }

  if (meses >= 1200) {
    alert("Parcela muito baixa, a dívida nunca será quitada!");
  } else {
    alert(`A dívida será quitada em ${meses} meses`);
  }

  return true;
}
