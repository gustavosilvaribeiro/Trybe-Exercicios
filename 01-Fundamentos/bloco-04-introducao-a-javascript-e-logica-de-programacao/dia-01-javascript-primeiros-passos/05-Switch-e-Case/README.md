# Switch e Case
E, no final do conteúdo, você vai aprender uma outra forma de criarmos estruturas `condicionais` com o `switch/case`.

O `switch/case` funciona de maneira similar ao `if/else`, porém com algumas diferenças.

No `switch/case` colocamos dentro do `switch` o que deve ser analisado e então criamos nossas condicionais com o `case`. Veja o exemplo abaixo:

~~~javascript

// Nesse exemplo o "switch/case" deverá imprimir no terminal a classificação de quais filmes podem ser assistidos
// de acordo com a faixa etária de uma pessoa.

let faixaEtaria = 'adulto';

switch (faixaEtaria) {
  case 'adolescente':
    // Caso a variável seja "adolescente" então entraremos na lógica abaixo.

    console.log('Consulte a classificação do filme');
    // Quando a pessoa for adolescente essa será a mensagem impressa no console.

    break;
    
    // O "break" serve para que o código não continue rodando caso seu resultado já tenha sido atingido
  case 'adulto':
    // Após implementar a lógica de um case, você pode abrir outro case.
    // Agora vamos fazer a lógica do que deve ocorrer se a pessoa for adulta

    console.log('A pessoa adulta é classificada para assistir qualquer filme')
    //caso seja adulto essa mensagem deverá aparecer no terminal

    break;
    // Interrompemos o fluxo novamente caso a pessoa seja adulta
    case 'idoso':
      // Repetimos o mesmo processo para o case "idoso"
      console.log('A pessoa idosa é classificada para assistir qualquer filme');
      break
  default:
    // O "default" é utilizado como um retorno padrão caso o valor passado não encaixe em nenhum dos cases
    // Ou seja, se a pessoa, for criança, recém nascida, ou pertencente à qualquer outra faixa etária, essa será a lógica implementada.
    console.log('só pode assistir filmes livres');
    // note que não é necessário utilizar o break após o default. Como todo o código já foi executado, não precisamos interromper o funcionamento do mesmo.
}
~~~

Bacana né? Agora, teste outros valores para variável usando as faixas etárias: ‘idoso’, ‘adolescente’ e ‘criança’. Observe o código e cada resultado obtido.

Inclusive, é possível utilizar o switch case para diversas outras coisas, não só para imprimir um valor no terminal. No exemplo a seguir, você verá como alterar o valor de uma variável:

~~~javascript

mes = 'maio';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
}

console.log(estacaoDoAno); // 'Outono'
~~~

Note que não foi necessário escrever a estação do ano à cada `case`, se vários `cases` implementam a mesma lógica, basta escrever um abaixo do outro e então escrever a lógica. Legal, né?

Também não foi colocado um `default`, assim o código não altera o valor da variável `estacaoDoAno` caso você passe um valor inválido para a variável `mes`. Tente trocar o valor da variável `mes` para ‘Trybe’ e veja o que acontece.



A estrutura `switch/case` é utilizada quando queremos executar diferentes ações. A expressão que passamos para o `switch` é avaliada apenas uma vez, e o seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é executado. Se nenhum valor satisfizer os casos listados, é executado o código em `default`.



## Para fixar

- Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: `'aprovada'`, `'lista'` ou `'reprovada'`;
- Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:
    - Caso `'aprovada'`, imprima “Parabéns, você foi aprovada(o)!”.
    - Caso `'lista'`, imprima “Você está na nossa lista de espera”.
    - Caso `'reprovada'`, imprima “Você foi reprovada(o)”.
    - Caso `default`, imprima a mensagem de “Informação incorreta”.