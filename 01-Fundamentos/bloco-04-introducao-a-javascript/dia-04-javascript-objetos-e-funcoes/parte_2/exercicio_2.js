// Primeiro passo: Defina a função que receberá como parâmetro um array de números.
// Segundo passo: Inicialmente o maior número deverá ser o do índice 0, e isso pode ser definido em uma variável auxiliar. Isso é feito pois, já que não analisamos os números ainda, por enquanto consideramos o primeiro como o maior.
// Terceiro passo: Agora crie um loop for que irá percorrer cada posição do array recebido por parâmetro.
// Quarto passo: Dentro do loop será feito uma condicional. Caso o valor do índice atual seja maior do que o maior número, a variável indiceMaior deve receber o valor do novo índice.

function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }

  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4