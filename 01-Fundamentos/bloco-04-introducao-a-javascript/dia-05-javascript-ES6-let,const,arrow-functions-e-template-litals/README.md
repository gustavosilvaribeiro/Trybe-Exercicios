# Introdução
## O que vamos aprender
Você vai aprender sobre o JavaScript moderno, conhecido como **ES6, ECMAScript 6** ou **ES2015**.

Esses vários nomes podem gerar alguma dúvida, mas na verdade todos fazem referência à mesma linguagem. JavaScript é como nós chamamos a linguagem, só que esse nome é um trademark da Oracle. O nome oficial da linguagem é **ECMAScript**, e **ES** é apenas a abreviação (ECMAScript).

Essa nova versão possui alguns objetivos:

- Ser uma linguagem melhor para construir aplicações complexas;
- Resolver problemas antigos do JavaScript;
- Facilitar o desenvolvimento de bibliotecas.

Na aula de hoje você vai aprender quatro features (recursos) do ES6 que são muito importantes para que seu código fique limpo e bem escrito, além de resolverem alguns problemas da linguagem:

- variáveis declaradas com `let` e `const`;

- arrow functions;

- template literals;

- operador ternário

## Você será capaz de:
- Utilizar corretamente let e const;

- Simplificar seu código com arrow functions;

- Simplificar a construção de strings com template literals;

- Criar expressões condicionais simplificadas com ternary operator.

## Por que isso é importante?
Imagine que você esteja escrevendo a tela de registro de conta de sua aplicação, algo simples e essencial para quase qualquer programa atual. Você coloca um campo para a pessoa digitar o nome, o email e a senha, e cria o botão para finalizar o cadastro com sua funcionalidade. Ao testar seu código, tudo está funcionando corretamente, você preenche seu nome, email no formato correto e senha com as especificações e, ao clicar no botão, os dados são enviados para um banco de dados.

O problema em questão é que a pessoa usuária não vai ter conhecimento dos critérios que devem ser levados em conta ao preencher esses campos, e, portanto, ela pode não cumprir os requisitos necessários, ou mesmo ter feito um erro de digitação. Portanto, para ter um código bom e fácil de ler, é importante que sejam contempladas as situações em que a pessoa usuária não interaja da forma ideal.

Como seu código se comportará caso seja digitado um email no formato errado? Ou uma senha com caracteres especiais? Ou um número de CPF inválido?

Responder a essas perguntas adequadamente faz com que a pessoa usuária tenha os feedbacks necessários para corrigir seus erros.

Você já declarou uma variável dentro de um bloco de código e depois utilizou fora dele? Isso é um vazamento de escopo e que pode trazer grandes prejuízos, principalmente para aplicações maiores em que as variáveis podem ter o mesmo nome em escopos diferentes. O `let` e o `const` vieram como solução para esse problema, e saber utilizá-los da maneira correta vai te ajudar a ter um código mais confiável e previsível, sem ter conflitos entre variáveis.

As `arrow functions`, além de deixar o código mais legível, quando bem utilizadas, ainda resolvem outro problema antigo do famigerado `var that = this`. Mas não se preocupe agora com isso, vamos ver esse problema com mais detalhes futuramente.

As `template literals` resolvem aquele problema de escrever frases concatenadas como: `'Oi' + ' ' + 'meu nome é' + ' ' + nome`. Com elas, você pode construir strings mais concisas, ajudando na prevenção de erros e deixando seu código ainda mais legível!

Já o `operador ternário`, ou `ternary operator`, permite criar expressões condicionais com duas saídas (outputs) possíveis (`if/else`) em apenas uma linha.

Legal, né? 😉