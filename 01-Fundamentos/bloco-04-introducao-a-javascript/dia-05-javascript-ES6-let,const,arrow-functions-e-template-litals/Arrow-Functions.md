# arrow functions

Você aprendeu a declarar funções em JavaScript utilizando a seguinte sintaxe:

~~~javascript
function printName() {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());
~~~
Também é possível declarar funções e atribuí-las a variáveis, como no exemplo abaixo, em que a função `printName` é atribuída a uma variável:

~~~javascript
const printName = function () {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());
~~~
Perceba que a variável do tipo `const` passou a ser nomeada como `printName`, e a função dentro dela é uma função que não tem nome, ou seja, uma função anônima. Você deve estar se perguntando: “criei uma função pra colocar dentro de uma variável… por que fazer isso?”. Caso você tenha tido esse questionamento, não se sinta perdido. O real motivo foi para exemplificar que podemos fazer, e conforme você for acompanhando os exemplos e resolvendo os exercícios, vai entendendo na prática as vantagens de criar funções utilizando esse formato.

Sabendo agora que a expressão acima está correta, você verá nos exemplos a seguir que é possível deixá-la ainda mais direta e léxica. Você aprenderá com alguns exemplos as vantagens de usarmos mais essa novidade do Javascript ES6 - `arrow functions`. Uma das aplicações para `arrow functions` é em funções anônimas. Em Javascript, é muito comum não precisarmos nomear funções, como mostrado no exemplo acima. Isso pode acontecer quando criamos funções que não serão reutilizadas, ou que serão passadas como argumento para uma outra função. Chamamos funções sem um nome específico de funções anônimas.

Um dos motivos da criação da `arrow functions` é facilitar a criação e utilização de funções em JavaScript, ou seja, `arrow functions` nada mais é do que uma forma diferente de se declararem funções escrevendo menos código. Veja abaixo como ficaria a função `printName` utilizando a sintaxe da `arrow function`:

~~~javascript
const printName = () => {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());
~~~
No código acima nos deparamos com duas situações:

A função está sendo atribuída a uma variável do tipo `const`. Atribuir uma função a uma váriável é muito útil para podermos definir a função exatamente onde ela precisa ser chamada, ou seja, definimos a função apenas onde precisamos dela; isso se torna uma boa prática, pois torna o nosso código mais simples de entender.

Quando não há nada no corpo da função além do que será retornado, a sintaxe da `arrow function` nos permite simplificar ainda mais a função `printName` omitindo o `return` e as chaves:

~~~javascript
const printName = () => 'Lucas';
console.log(printName());
~~~
Mas lembre-se de que podemos omitir os parênteses apenas em um cenário:

Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:
~~~javascript
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));
~~~
Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:

~~~javascript
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));
~~~