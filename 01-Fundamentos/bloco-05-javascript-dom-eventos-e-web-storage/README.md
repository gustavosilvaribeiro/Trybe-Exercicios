    					Introdução	DOM

a estrutura que faz a ponte entre o HTML e o JavaScript e que permite interação entre os dois.
O DOM (Document Object Model) é uma interface que representa como os HTML e XML são lidos pelo browser. Após a leitura do documento HTML pelo browser, o DOM cria um objeto que faz uma representação do documento e define meios de como essa estrutura pode ser acessada. Dessa forma, podemos utilizar o JavaScript para manipular o DOM e, assim, alterar o estilo e o conteúdo de nossa página.

No DOM nossa página é representada por nós e objetos, e é através deles que iremos realizar a comunicação do nosso HTML com o JavaScript. Sendo assim, podemos dizer que o DOM é uma representação orientada a objetos da página da web, que pode ser modificada com uma linguagem de script como JavaScript.

    						Estrutura DOM

- Window: Representa uma janela que contém um elemento DOM, sendo possível acessar o documento que a janela contém através de Window;

- location: Representa a localização do objeto ao qual ele está associado, isto é, o documento atual;

- document: Representa qualquer página da web carregada no navegador e serve como um ponto de entrada para o conteúdo na página da web. Sendo assim, o document contém todos os documentos HTML;

- history: Permite a manipulação do histórico da sessão do navegador, ou seja, as páginas visitadas na guia ou quadro em que a página atual está carregada;

- element: É a classe base mais geral da qual todos os objetos em um Document herdam, isto é, são todas as tags que estão em arquivos HTML e se transformam em elementos da árvore DOM;

- text: Texto que vai entre os elementos, é todo o conteúdo das tags;

- atribute: São todos os atributos que um nó específico possui, como uma class ou id.

- Pense assim: a página HTML/CSS/JS que você faz é um programa. O navegador é quem interpreta esse código e, a partir dele, gera a página que você vê na Internet.

Pois bem, o DOM é uma estrutura da sua página que o navegador monta quando lê. O seu intuito é justamente permitir ao programa acessar os elementos da página usando código e dar a ele o poder de manipulá-los.

    							Seletores de elementos

    ex:.getElementById(" ");
    ex: document.getElementById(".test")  //ele vai apenas buscar inf.
    				   .innerText = mostra somente Texto dentro da Id ;
    				   .innerHTML = mostra todo html dentro da Id;
    ex: document.getElementById(".test").innerText = " texto-a-ser-alterado";


    		getElementById

retorna a referência do elemento através do seu ID

    		getElementByClassName

Retorna um vetor de objetos com todos os elementos filhos que possuem o nome da classe dada

    		getElementsByTagName

retorna um HTMLCollection de elementos com o nome da tag quit. O documento completo é pesquisado, incluindo o nó raiz.
querySelector
faz uma busca que retorna vários elementos e apresenta apenas o primeiro

    		querySelectorAll

retorna uma array com todos os elementos que “casem” com a sua seleção, ao invés de retornar apenas o primeiro deles

Enquanto os getElementsByClassName('ClassName') e getElementsByTagName('TagName') retornam uma HTMLCollection,
os querySelectorAll('.ClassName') e querySelectorAll('TagName') retornam uma NodeList.
