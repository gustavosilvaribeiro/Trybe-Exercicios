# Operadores lógicos
Os valores booleanos podem ser “true” ou “false”. Eles serão de extrema importância para a construção de lógicas no momento em que estivermos desenvolvendo nossas aplicações. A próxima ferramenta de trabalho que iremos aprender serão os operadores lógicos. Eles não são utilizados só na programação, mas no estudo da lógica em si e no seu dia a dia (e com bastante frequência). A principal funcionalidade desses operadores é determinar a lógica entre dois valores ou variáveis.

Na linguagem JavaScript, temos três principais operadores lógicos: `&&`, `||` e o `!`. Podemos nos referir a eles como “AND”, “OR” e “NOT”, respectivamente.

Essas ferramentas não vão te acompanhar apenas no JavaScript, mas em toda a sua carreira. Por isso, é muito importante praticar bastante e ficar bem familiarizado com o conceito de cada um deles.

# Operador AND
O operador “AND” (ou `&&`, no JavaScript) é binário. O que significa que ele precisa de dois elementos para funcionar corretamente.

Para abstrair seu funcionamento, pense o seguinte: Você está numa padaria e quer comer alguma coisa no café da manhã. Então você diz “Por favor, me vê um cafezinho **E** um pão na chapa”.

Seria muito infeliz se você recebesse apenas o café ou só o pão, não é? Também não seria legal se recebêssemos um pão na chapa, mas a nossa bebida fosse um caldo de cana. Porque nossa expectativa era de que as duas condições fossem atendidas corretamente. Esse é exatamente o papel do `&&`. Ele só vai retornar `true` se as duas operações que estão em volta dele forem consideradas verdadeiras.

Em JavaScript, nosso pedido poderia ser interpretado da seguinte maneira:

~~~javascript
const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}
~~~

Tente brincar e mude os valores das variáveis. Você verá que a condição não vai ser atendida e portanto, a mensagem impressa será outra.

Precisamos manter em mente que só teremos `true` se as duas expressões em volta dele forem `true` também.

~~~javascript
const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);
~~~

Execute o código acima e veja que a verificação é false porque uma das condições não é true.

Mas… E o que acontece se existir um encadeamento de &&? 🤔

Imagine que exista a seguinte expressão:

~~~javascript
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
~~~


Você consegue imaginar qual será o resultado final? Será que vai dar erro?

A ordem que a operação vai obedecer será da esquerda para a direita, seguindo algo parecido com a imagem abaixo.

[Encadeamento de operadores AND](https://content-assets.betrybe.com/prod/Encadeamento%20de%20operadores%20AND.png)
Encadeamento de operadores AND

Abaixo tem um mini cheat sheet para você ver em quais possibilidades teremos resposta true ou false.

~~~javascript
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
~~~

## Para fixar
- Crie uma constante chamada “currentHour”, que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia.

- Crie uma variável chamada “message” que, inicialmente, é uma string vazia.

- Implemente condicionais para que:

    - Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.

    - Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.

    - Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.

    - Se o horário estiver entre 11 e 14, insira “Hora do almoço!!!” na variável “message”.

    - Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.

- Agora imprima a variável `message` fora das suas condições.

# Operador OR
Você já viu um operador em que as duas condições devem ser verdadeiras para que o resultado final seja verdadeiro.

Com o operador `OR` (ou `||`, no JavaScript), precisamos apenas que uma das condições sejam verdadeiras: **isso ou aquilo**.

Por exemplo, imagine novamente que estamos na padaria, mas nosso pedido agora vai ser diferente. Dessa vez, se não tiver um café, pode ser um suco de laranja. Como escreveríamos isso em JavaScript?

~~~javascript
const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}
~~~

O símbolo “||” é a representação em caractere desse operador. Novamente, precisamos de dois elementos em torno dele para que funcione corretamente. E para que seu retorno seja verdadeiro, um de seus valores deve ser `true` **ou** ser considerado truthy.

Abaixo temos uma tabela mostrando como é o resultado de cada operação, assim como no operador “AND”:

~~~javascript
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
~~~

## Para fixar
- Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.

- Utilizando `if/else`, implemente condicionais para que:

    - Se nossa variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.

    - Se for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido UwU”.

Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :).

# Operador NOT
Vamos ver um exemplo do que o NOT (ou `!`, no JavaScript) é capaz. Você consegue prever o que esse código vai imprimir?

~~~javascript
console.log((2 + 2) === 4);
~~~

Isso aqui deve nos retornar `true`, não é? Afinal, 2 + 2 resultar em 4 é uma declaração verdadeira. Agora, se adicionarmos o operador `NOT` antes dessa declaração?

~~~javascript
console.log(!(2 + 2) === 4);
 ~~~

Se você executar esse código, vai perceber que o valor impresso é o oposto do anterior. 🤔

Estamos diante de um operador muito poderoso. Ele pode **inverter**  o valor booleano de um elemento. Isso mesmo!! Se tivermos uma variável ou valor considerado `true`, podemos gerar o resultado oposto simplesmente fazendo `!variável`. Ou seja, `false`.

Então, sabendo que o resultado original da operação ali em cima é true, quando a gente insere o operador `NOT` antes da operação, teremos o valor contrário à nossa resposta final, que é `false`.

O conceito de `truthy` e `falsy` também se aplica aqui, por isso não estamos limitados apenas aos tipos primitivos booleanos. Podemos usar em:

Strings…
~~~javascript
const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false
~~~

Números…
~~~javascript
console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
~~~

Valores nulos…
~~~javascript
console.log(!null); // true
~~~

Valores indefinidos..
~~~javascript
console.log(!undefined); // true
~~~

…e em muitos outros elementos. As possibilidades são enormes!!!

