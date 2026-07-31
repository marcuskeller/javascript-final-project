function validaFormulario() {
  let campos = ["preco1", "preco2", "preco3", "preco4", "preco5"];
  let precos = [];

  for (let i = 0; i < campos.length; i++) {
    let valor = document.getElementById(campos[i]).value;
    if (valor === "") {
      alert(`Preencha o preço do produto ${i + 1}!`);
      document.getElementById(campos[i]).focus();
      return false;
    }
    precos.push(Number(valor));
  }

  let total = 0;

  for (let i = 0; i < precos.length; i++) {
    total += precos[i];
  }

  alert(`Valor total da compra: R$ ${total.toFixed(2)}`);
  return true;
}
