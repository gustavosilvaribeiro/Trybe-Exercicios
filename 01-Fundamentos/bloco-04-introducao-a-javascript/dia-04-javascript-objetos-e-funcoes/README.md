# Objetos
A seguir, você vai aprender sobre <b>objetos, for/in, for/of</b> e <b></b>funções</b>.

Você já aprendeu que as <b>variáveis</b> em JavaScript são recipientes ou containers para os dados. Por exemplo:

```javascript
let car = 'Fiat';
```
Agora é hora de aprender sobre objetos!

Um objeto em JavaScript é uma entidade independente, com propriedades e tipos. Uma propriedade é a associação entre uma chave e um valor, são essas as características do objeto.

Pense em um objeto da vida real, um carro, por exemplo. Cada carro tem sua cor, peso, tamanho, quantidade de portas e etc. Essas são suas características, suas propriedades. E, da mesma forma que funciona um objeto da vida real, funcionam os objetos em JavaScript.

Objetos são estruturas ou coleções compostas por pares chave-valor. Também é possível armazenar um objeto dentro de outro, ou até mesmo dentro de um array.

```javascript
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};
```
Para acessar as chaves dentro de um objeto, temos duas formas:

- notação de ponto: car.type
- notação de colchetes: car[type]

Se o objeto está dentro de um array, ele é acessado através do seu índice, da mesma forma que se acessaria uma informação num array de strings. As chaves de um objeto são armazenadas como strings e, para conseguir acessar propriedades nomeadas com números, como 0, por exemplo, só é possível usando a <b>notação de colchetes</b>. Se você usar a <b>notação de ponto</b>, um erro será retornado. Ao usar a <b>notação de colchetes</b> também é possível chamar variáveis que fazem relação com a chave que você quer acessar dentro desses colchetes.
# 
# For/in e for/of

o for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice.

O for/of tem uma aplicação bastante parecida com o que vimos agora no for/in, mas com uma diferença crucial.
```javascript
let food = ['hamburguer', 'bife', 'acarajé'];
```
As propriedades dos elementos do array serão os índices de cada posição, começando por zero. É por isso que os números retornados pelo console.log são 0, 1 e 2: as propriedades que correspondem ao índice de cada posição do array.

```javascript
for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;
```
Se percorrermos um objeto, também teremos o mesmo resultado. O for/in irá percorrer a propriedade declarada, e não o seu valor em si.

Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in. Vejamos o exemplo:

```javascript
let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;
```
# Funções
É comum, no começo da carreira de uma pessoa programadora, a escrita de programas muito extensos, repetitivos e confusos de se entender. Nesse caso, é recomendada a utilização das funções como forma de deixar seu algoritmo mais simples, legível e enxuto.

Mas o que é uma função, exatamente? Segundo o MDN, função é um conjunto de instruções que executa uma tarefa ou calcula um valor.

Funções são a forma mais essencial de organização de código e de lógica na programação; usando-as, você consegue dividir seu código em blocos lógicos e deixar as coisas mais organizadas.

Com isso, é possível diminuir o tamanho do seu código, acabar com a repetição e tornar mais fáceis a leitura e o entendimento, pois a lógica do programa estará muito bem dividida.

é possível criar funções que recebem ou não parâmetros. E, para decidir se a sua função precisa ou não deles, você deve pensar em sua lógica.

Por exemplo, se a função tiver o objetivo de cumprimentar a pessoa que está executando o programa pelo nome, tal como: “Bom dia, João!”, ela vai precisar receber o nome da pessoa como parâmetro. Porém, se ela foi desenvolvida apenas para dar “Bom dia!”, um parâmetro não é necessário.

Veja o exemplo abaixo:

```javascript

// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);
```
```javascript

// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo
```
Com base nesse exemplo, se você optasse por não usar função e precisasse dar bom dia para pessoas diferentes várias vezes durante o código, teria que estar sempre mudando o valor da variável nome e sempre escrevendo a mesma mensagem, o que pode acabar gerando erros de digitação e causar erros na sua aplicação.

Veja dois exemplos de funções sem parâmetros:

```javascript
function bomDia() {
  return 'Bom dia!';
}

console.log(bomDia()); // Bom dia!
```
```javascript
let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado
```
E agora, exemplos de funções usando parâmetros:

```javascript
// Com função
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 2)); // 7
```
```javascript
function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais
```
Ah, se lembra da complexidade de código? Surpresa! É comum esse erro aparecer enquanto você escreve suas primeiras funções, não se assuste! O que você precisa fazer é quebrá-las em partes menores ou até mesmo criar subfunções que podem ser chamadas dentro dessas funções. Existem tecnologias que apontam esses erros de complexidade no seu terminal, como o ESLint, por exemplo.

Essa tarefa fica mais fácil quando você entende que cada função deve ter apenas um propósito. Evite criar uma função que faça várias coisas diferentes e que não tenham ligação uma com a outra! Não é recomendável que uma função tenha muitas finalidades, como dizer “oi”, multiplicar dois números e dizer qual é a estação do ano. É melhor você dividir isso tudo em 3 funções diferentes, pois, além de diminuir a complexidade, fica melhor para entender e usá-las em outras partes do código.

Achou complicado? Calma, no começo é normal essa confusão e você pode não entender a vantagem do uso de funções. Mas, conforme você avançar no curso, as funções serão suas melhores amigas. Não fique com medo, elas servem para te ajudar e deixar sua trajetória como pessoa programadora um pouco mais fácil!