// Primeiro passo: Defina a função recebendo como parâmetro uma string.
// Segundo passo: Uma maneira de resolver o exercício é utilizando um loop. Como podemos acessar a posição de uma string da mesma forma que acessamos um array, faça um loop para percorrer cada posição do array.
// Terceiro passo: Compare o caractere da posição index do loop com o caractere da última posição (length - 1) menos o valor do index. Dessa forma você conseguirá verificar se a sequência de caracteres na string é a mesma do início ao fim e do fim ao início.
function verificaPalindrome(word) {
  for(index in word) {
    if(word[index] != word[(word.length - 1) - index]) {
      return false;
    }
  }
  return true;
}
// Quarto passo: Outra forma de resolver o exercício é utilizando os métodos split, reverse e join. Primeiro o método split transformará a string em um array onde cada posição será uma letra da string. Depois o método reverse fará o array ficar de trás pra frente. Em seguida o método join faz com que todo o array vire uma string novamente.
// Quinto passo: Com a string invertida, criamos uma condicional que diz se essa nova string é igual a string passada como parâmetro. Assim, saberemos se a palavra é palíndroma ou não.

function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false