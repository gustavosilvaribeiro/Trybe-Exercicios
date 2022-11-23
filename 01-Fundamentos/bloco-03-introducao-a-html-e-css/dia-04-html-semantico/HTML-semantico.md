# O que é HTML semântico?
HTML Semântico é o uso do HTML para reforçar o significado da informação na página e não apenas definir sua estrutura e apresentação. Por exemplo, durante esse tempo todo você fez uso de elementos HTML com as tags html, head, body e form. Esses elementos são exemplos de uso de HTML Semântico, pois cada um tem seu conteúdo com um sentido e propósito definidos:

html representa o tipo do documento em questão, que nesse caso é HTML;

head representa os metadados do documento HTML, tais como o título do documento, links para arquivos CSS e JavaScript de que o documento precisa;

body representa todo o conteúdo visual do documento HTML;

form representa um formulário para que o usuário consiga inserir dados.


# Aplicando elementos HTML de acordo com o sentido
Suponha que, no seu dia a dia de desenvolvimento de software, na empresa em que trabalha, você precise implementar uma funcionalidade de mostrar a foto de perfil do usuário na tela inicial do site da empresa, de forma a prover uma experiência mais pessoal.

Qual elemento HTML você usaria para conter a imagem do perfil?

Hum… 🤔

Um candidato ideal para esse caso seria o elemento img, concorda? Você pode averiguar que img é um candidato olhando em alguma documentação do HTML.

Você faz uso de img, finaliza o que precisava fazer para implementar a funcionalidade de mostrar a foto do perfil, abre um Pull Request (PR) e seus colegas de trabalho fazem o Code Review (CR).

Alguém no Code Review chega no seu código e comenta:

Mas eu poderia fazer a mesma coisa usando div nessa linha! Por que você usou img?

Qual resposta você daria? Uma possível seria algo do tipo:

Você tem razão, eu poderia, mas será que faria sentido? Eu usar o elemento img para guardar uma imagem agrega muito mais valor para o documento do que se eu usasse uma div, haja vista que uma div é um elemento genérico, que serve para agrupar qualquer coisa. Ao usar o elemento img, eu estou comunicando que o conteúdo é uma imagem.

Analogamente, suponha que você precise mostrar para o usuário uma tabela com todas as suas compras. Para cada compra, você precisa mostrar:

o valor da compra;

a data que a compra foi efetuada;

uma descrição da compra.

Qual elemento você usaria para representar essa tabela? Existe um elemento HTML cujo propósito é definir uma tabela, o table.


Estes são alguns dos elementos semânticos que você mais utilizará em sua jornada como pessoa desenvolvedora:

header : O elemento header representa um cabeçalho contendo texto introdutório. Clique no link para ler mais sobre o elemento header

nav : O elemento nav representa um conjunto de links de navegação. Clique no link para ler mais sobre o elemento nav

aside : O elemento aside representa um conteúdo à parte. Alguns exemplos de sua utilização são: barras laterais e/ou conteúdos adjacentes à um conteúdo principal. Clique no link para ler mais sobre o elemento aside

- `article` : O elemento article representa um conteúdo autocontido. Ou seja, todo o conteúdo presente dentro de um article provê as informações necessárias para sua compreensão, podendo ser reusado em outras páginas. Clique no link para ler mais sobre o elemento article

- `section` : O elemento section representa uma seção do documento, agrupando conteúdos relacionados. Clique no link para ler mais sobre o elemento section

- `footer` : O elemento footer representa o rodapé do documento e/ou de uma seção. Clique no link para ler mais sobre o elemento footer