function validaFormulario() {
  let campos = ["temp1", "temp2", "temp3", "temp4", "temp5"];
  let temperaturas = [];

  for (let i = 0; i < campos.length; i++) {
    let valor = document.getElementById(campos[i]).value;
    if (valor === "") {
      alert(`Preencha a temperatura do dia ${i + 1}!`);
      document.getElementById(campos[i]).focus();
      return false;
    }
    temperaturas.push(Number(valor));
  }

  let maior = temperaturas[0];
  let menor = temperaturas[0];

  for (let i = 1; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior) {
      maior = temperaturas[i];
    }
    if (temperaturas[i] < menor) {
      menor = temperaturas[i];
    }
  }

  alert(`Maior temperatura: ${maior}°C | Menor temperatura: ${menor}°C`);
  return true;
}
