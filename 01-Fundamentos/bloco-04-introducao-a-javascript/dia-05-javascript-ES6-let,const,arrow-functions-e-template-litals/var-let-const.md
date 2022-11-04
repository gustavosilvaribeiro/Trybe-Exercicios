var, let e const
Existem três formas de declarar variáveis em Javascript:
~~~
var userEmail = 'maria@email.com';

let userId = '78945-6';

const userLocation = 'Brasil';
~~~
Qual a diferença entre essas declarações? Apesar de serem utilizadas para o mesmo propósito, é importante entender essas diferenças para saber quando usar `var`, `let` e `const` na hora de declarar variáveis. Afinal, quando declaradas na raiz do arquivo as três formas estão corretas e funcionam da mesma maneira.

Em primeiro lugar, vamos entender o que é o escopo em que a variável é declarada. Podemos pensar em escopo como sendo o ‘local’ em que uma variável é visível e pode ser referenciada. Como exemplo, observe a função abaixo:

~~~javascript
function userInfo() {
  let userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo();
~~~
Tente rodar a função `userInfo` no seu editor de código. Nesse caso, a variável `userEmail` foi declarada dentro do escopo da função userInfo. Agora experimente mover o `console.log(userEmail)` para fora da função e a execute novamente. Você verá um erro dizendo que `userEmail` não é definida - a variável só é reconhecida dentro do escopo da função. O que aconteceria se trocássemos o `let` por `var` e `const`? Não deixe de fazer esse teste! Você verá que, nos três casos, não temos acesso à variável fora do escopo da função userInfo. Como saber, então, qual expressão utilizar para declarar variáveis?

Vamos agora pensar em variáveis declaradas dentro do escopo de um bloco de código - como o corpo de um `if` ou um `for`. Acompanhe o exemplo abaixo e não deixe de testá-lo no seu editor de código:

~~~javascript
if (true) {
  // inicio do escopo do if
  var userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20
~~~
Nesse exemplo, temos acesso à variável `userAge` dentro e fora do bloco de código. Experimente trocar o `var` por `let` e `const`. Qual será o resultado? Temos acesso à variável declarada com o `var` dentro e fora do escopo do bloco. No entanto, não temos acesso à `userAge` fora do bloco de código quando usamos `let` e `const` para declarar essa variável. Isso é interessante quando queremos trabalhar com variáveis acessíveis apenas no contexto daquele bloco de código. Por ter um escopo mais abrangente, declarar variáveis com o `var` em aplicações mais complexas pode confundir até mesmo programadores mais experientes.

Agora observe de uma forma um pouco mais visual como funcionam os escopos e o comportamento do `var` em casos em que sua utilização “vaza” o escopo.

[Escopos](https://content-assets.betrybe.com/prod/e525a828-3baa-4e15-a958-a23ef02f4760-Escopos.png)
Escopos.

Ou seja, uma função é capaz de segurar em seu escopo uma variável de tipo `var`, mas trechos de código que sejam estruturas condicionais e/ou de repetição não são capazes de fazer o mesmo. Logo, se temos uma variável `var` em um trecho de código em escopo global, ou seja, fora de uma função, ela vai “vazar”, tornando-se também global, assim como o trecho de código.

Outro grande problema ao utilizar o `var` para atribuir valor a variáveis é que você consegue sobrescrevê-las sem gerar erros.

~~~javascript
var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas
~~~
Em aplicações maiores, ao usar o `var`, você pode redeclarar variáveis acidentalmente e nem perceber o que aconteceu. Por isso, encontrar e corrigir bugs pode se tornar uma verdadeira missão impossível. ⚠️ **Por esses motivos, declarar variáveis com o `var` não é uma boa prática.**

O ES6 corrige esse problema ao introduzir o `let` e o `const`, fazendo com que uma variável, com um nome específico, só possa ser declarada uma única vez dentro de um escopo. Experimente executar o exemplo anterior usando o `let` e `const` e veja o que acontece!

E, quanto ao `const`, como ele se diferencia do `let`? O `const` permite que você declare **constantes**. Em outras palavras, o valor atribuído a uma variável declarada com o `const` não pode ser alterado. Já quando usamos o `let`, podemos substituir o valor original atribuído à variável. Tente executar o código abaixo usando `const` e `let` e veja o que acontece!

~~~javascript
const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition
~~~
No exemplo acima, vimos que o `const` é **imutável** - ao declarar `const favoriteLanguage = 'Javascript'`, o valor de `favoriteLanguage` não pode ser alterado. Mas quando usamos o `const` para criar um objeto, o Javascript nos permite alterar as suas propriedades sem, contudo, reatribuir um novo objeto. Acompanhe o exemplo abaixo para entender melhor como funciona:

~~~javascript
const userInfo = {
  name: 'Cláudio',
  id: '5489-2',
  email: 'claudio@email.com',
};

userInfo.name = 'João';

console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }
~~~
Esse raciocínio também se aplica a um array. Podemos alterá-lo indiretamente adicionando/removendo um novo item sem sobrescrever o que já foi declarado:

~~~javascript
const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro
~~~


# Hoisting
Hoisting é um comportamento padrão do JavaScript que acontece com variáveis declaradas com `var`. Esse comportamento move todas as declarações dessas variáveis para o topo do escopo global, se forem declaradas fora de uma função, ou para o topo do escopo local, se declaradas dentro de uma função, independentemente de em qual linha do código a declaração foi feita.

Veja o exemplo abaixo:

~~~javascript
age = 20;

var age;

console.log(age); // 20
~~~
Mesmo atribuindo um valor à variável `age` antes de declará-la, o `console.log` conseguiu imprimir o seu valor, isso por causa do **hoisting**. É como se tivéssemos primeiro declarado a variável `age` e depois atribuído o valor 20, como no exemplo abaixo:

~~~javascript
var age;

age = 20;

console.log(age); // 20
~~~
Porém, apenas a declaração da variável é movida para o topo do escopo, não seu valor. No código abaixo podemos ver um exemplo disso. Ao atribuir um valor à variável `age` apenas após o `console.log`, recebemos `undefined` como resultado.

~~~javascript
var age;

console.log(age); // undefined

age = 20;
~~~
Não se esqueça de que esse comportamento acontece apenas com variáveis declaradas com `var`. Se tentarmos fazer isso com `let` ou `const`, irá dar erro.

Em resumo, variáveis podem ser declaradas com o `const`, `let` e `var`. Apesar de as três terem o mesmo propósito, é importante nos atentarmos às boas práticas para escrevermos códigos confiáveis. Assim, sempre que possível, usar o `const` para declarar variáveis é interessante porque conseguimos um comportamento mais previsível, já que o seu valor não pode ser alterado diretamente.

