    				BOX MODEL - MODELO DE CAIXAS NO CSS

O que é o Box Model?
A primeira coisa que temos que deixar bem explícita é que todos os elementos HTML são renderizados como caixas pelo browser. Por isso nós usamos o termo “box model” ou “modelo de caixas” quando nos referimos a essa forma de renderização e, por tabela, quando falamos de alguns elementos do layout.

Só para exemplificar, se você utilizou a propriedade CSS background-color em algum arquivo HTML, você certamente percebeu que a cor de fundo foi aplicada não apenas à área diretamente atrás do elemento html, mas também em uma pequena área ao seu redor. Isso acontece porque quando você muda a cor de fundo de um elemento você está colorindo toda a caixa em que ele está contido!

O box model é composto por algumas partes que formam uma caixa para cada tag HTML que você utiliza. Essa caixa funciona mais ou menos assim:

width e height
Especificam, respectivamente, a largura e a altura da área de conteúdo, desconsiderando as bordas, margens e padding.

padding
Pode ser traduzido como “enchimento” e controla a quantidade de espaço vazio entre o conteúdo em si e a borda da caixa.

Ele pode ser pensado como se fosse o “plástico bolha” ao redor do conteúdo, e o seu uso, por padrão, aumenta o tamanho total do elemento, enchendo a caixa e fazendo com que ela precise ser maior que as dimensões do conteúdo.

Tenha isso em mente quando for balancear a altura e a largura, afinal, uma caixa precisa ser maior que as dimensões do conteúdo quando ele está coberto com plástico bolha, não é mesmo?

border
É a borda da caixa, pura e simples. A propriedade border em si é considerada uma shorthand, ou seja, ela serve como um atalho para controlar um conjunto de outras propriedades que poderiam ser definidas individualmente, nesse caso border-width, border-style, e border-color!

-border-width: também pode controlar a largura da borda e o seu valor inicial é medium.
-border-style: essa propriedade controla o estilo da linha e tem como valor inicial none. Por isso que você não consegue ver nenhuma borda se não alterar essa propriedade!
-border-color: essa propriedade controla a cor da borda, e tem como valor inicial currentcolor. Esse valor define a cor da borda como sendo o mesmo do elemento, então na maioria dos casos é desejável modificá-la.

    				Agrupamento de Seletores e Pseudo-classes


Desde um simples :hover, para o elemento mudar quando o cursor do mouse passa por cima, até um :focus em um input de formulário, para quando o elemento estiver selecionado e puder ter um valor inserido, as pseudo-classes ajudam a estilizar melhor os elementos, dando um retorno visual ao usuário e agregando mais estilo ao seu site.

DICA: Experimente colocar a propriedade transition nos seus estilos que possuem pseudo-classes. 😉
