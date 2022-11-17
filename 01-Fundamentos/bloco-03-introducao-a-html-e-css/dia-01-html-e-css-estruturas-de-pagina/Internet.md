# Introdução à Internet
## As peças que montam a Internet
Ao longo da sua carreira como pessoa desenvolvedora, você criará páginas web incríveis que estarão disponíveis para pessoas usuárias do mundo todo na internet. Mas você já se perguntou como esse processo acontece? Antes de prosseguir na leitura, reflita um pouco sobre como você acredita que as suas páginas web funcionam!

Entender a internet pode parecer intimidador, pois há muitos termos específicos que são constantemente utilizados. Vamos começar a desmistificá-los fazendo aquilo que fazemos praticamente todos os dias ao abrir o nosso navegador: www.google.com. O que está por trás desse acesso? Vamos listar primeiro os conceitos básicos para entendê-lo:

- **Internet**: É a rede global de computadores que permite o envio e troca de dados entre si, seguindo o mesmo protocolo.

- **Web**: É o conjunto dos serviços que usam a internet em seu funcionamento. A internet é a infraestrutura que permite o funcionamento da web.


- **Cliente**: Firefox, Mozilla, Chrome… Qual navegador você utilizou para fazer a sua pesquisa? O termo técnico para ele é Cliente. O Cliente é uma aplicação que está conectada à internet, a sua principal função é receber a interação da pessoa usuária e traduzi-la em uma requisição para outro computador, também conectado à internet chamado `Servidor`. Apesar de estar usando o navegador para acessar à internet, você pode pensar no seu computador como sendo o Cliente no modelo Cliente-Servidor.

- **Servidor**: Como vimos no exemplo acima, nossa busca por `www.google.com` será enviada para um Servidor. Mas o que é um Servidor? Um Servidor é um computador conectado à internet com capacidade de armazenamento e processamento acima da média, com objetivo de conectar outros computadores em uma rede. Sua tarefa se resume a esperar por requisições de outros computadores (Clientes), processar as requisições e fornecer os resultados desse processamento de volta para seus Clientes. Diferente do seu computador pessoal, um Servidor tem um software específico em execução que irá dizer como ele deve responder a uma requisição do seu navegador. Existem diversos tipos de servidores, como Web Servers, Database Servers, File Servers, Application Servers. O servidor que usamos para fazer a busca por www.google.com é um Web Server (Servidor Web).

- **Endereço IP**: Até aqui, você aprendeu os conceitos de cliente e servidor, e também já sabe que a internet é uma rede de bilhões de computadores e dispositivos conectados entre si. Já parou para pensar sobre como essa comunicação é possível? É como acontece entre nós, humanos: normalmente, antes de a comunicação acontecer, primeiro precisamos saber identificar o nome da outra pessoa com quem desejamos nos comunicar. E em outros contextos, para identificar a pessoa em um grupo muito maior, é usado o CPF ou outro número único de identificação dela. No caso de computadores em uma rede, é usado o `endereço IP`.

A sigla `IP` refere-se a Internet Protocol. O endereço IP é um identificador numérico para um dispositivo (computador, celular, tablet, impressora, roteador, servidor…) conectado a uma rede TCP/IP. Todo dispositivo conectado à internet tem um endereço IP único que irá identificá-lo, e será usado para comunicar com outros dispositivos. Os endereços IP tem quatro campos de dígitos separados por pontos (exemplo: 244.155.65.2). Esses números são chamados de endereço lógico. Para localizar um dispositivo conectado à internet, o endereço lógico é convertido em um endereço físico por um software. Esse endereço físico faz parte do seu hardware e é conhecido por ser o endereço de controle de acesso à mídia (MAC address).

- TCP/IP: De forma simples, o `TCP/IP` é o principal protocolo de envio e recebimento de dados na internet. `TCP` significa Transmission Control Protocol (Protocolo de Controle de Transmissão). Em suma, o TCP será responsável por definir como diferentes aplicativos se comunicam na rede e também como os dados enviados serão divididos em pacotes. E o IP, Internet Protocol (Protocolo de Internet), define como os dados divididos em pacotes devem ser enviados para chegar corretamente ao destinatário. O TCP/IP é a união dos protocolos TCP e IP, uma pilha de protocolos que é dividida em quatro camadas: aplicação, transporte, rede e interface. Cada uma dessas camadas tem uma responsabilidade específica, mas todas são conectadas entre si para garantir a segurança e a disponibilidade dos dados.


- **SP**: ISP ou Internet Service Provider é o seu provedor de internet. É qualquer empresa que nos fornece acesso ao maravilhoso mundo Web. Sem os seus serviços, não conseguiríamos fazer a nossa busca por `www.google.com`, pois não estaríamos conectados à internet.

- **DNS**: DNS ou Domain Name System é um dispositivo com uma base de dados distribuída que gerencia os nomes de serviços, computadores ou qualquer dispositivo conectado à internet. Ele é usado para relacionar o `endereço nominal` (google.com) com o `endereço IP` (142.250.190.78). Os servidores DNS são responsáveis por localizar e traduzir para números (um endereço IP) as buscas por sites que digitamos no navegador.

[Exemplo de URL](https://content-assets.betrybe.com/prod/e8404072-959f-4284-bcf1-51919e308e7f-Exemplo%20de%20URL.png)
Exemplo de URL

[Exemplo de DNS](https://content-assets.betrybe.com/prod/e8404072-959f-4284-bcf1-51919e308e7f-Exemplo%20de%20DNS.png)
Exemplo de DNS

- **Port Number**: O número de porta é um número de 16 bits utilizado para identificar uma porta específica no servidor, e está sempre associado ao endereço IP. O Port number é uma forma de identificar um processo específico encaminhado para o servidor.

- **Host**: O Host é qualquer dispositivo conectado à rede que pode transmitir ou receber pacotes IP, seja como cliente, seja como servidor ou qualquer outro tipo de modelo, sendo que cada host tem um endereço IP único. Dentre esses dispositivos temos computadores, tablets, smarts TV, smartphones, entre outros. Para o site que estamos buscando, www.google.com, o host é o servidor web que hospeda a página na web. É comum confundir o host com o servidor. Lembre-se de que são coisas diferentes! O Servidor é um tipo de host - uma máquina específica com endereço IP. Por outro lado, o host pode ser também uma organização inteira que fornece um serviço de hospedagem para manter inúmeros servidores web.

- **HTTP**: Hyper-text Transfer Protocol é o protocolo utilizado para a comunicação entre navegadores e servidores na internet.

- **URL**: É a sigla para Uniform Resource Locators e identifica um recurso web específico. Podemos, como exemplo, mudar a nossa busca para https://www.google.com/travel/flights para pesquisar por preços de passagens aéreas. O URL identifica o protocolo que será utilizado para nos comunicarmos com o servidor (https), o nome do host (google.com) e o recurso que queremos acessar (travel/flights).


## O modelo Cliente-Servidor e a estrutura de uma aplicação web
Agora você vai entender como funciona uma aplicação web. Para isso, você precisa conhecer um pouco mais sobre o modelo Cliente-Servidor e sobre a estrutura de uma página Web. Até aqui você já aprendeu alguns conceitos básicos sobre o mundo Web: você já tem uma ideia de como o cliente (seu computador) interage com um servidor. O próximo passo será ir um pouco mais a fundo para entender como todas as partes que vimos se relacionam para nos permitir navegar na internet.

O modelo Cliente-Servidor é utilizado para descrever a forma com que um cliente (um computador conectado à Web) e um servidor se comunicam na rede. Você pode visualizar essa ideia no diagrama simplificado abaixo:

[Exemplo de modelo Cliente-Servidor](https://content-assets.betrybe.com/prod/e8404072-959f-4284-bcf1-51919e308e7f-Exemplo%20de%20modelo%20Cliente-Servidor.png)
Exemplo de modelo Cliente-Servidor

No entanto, essa representação é apenas um modelo. Há outras partes envolvidas que são importantes e que permitem que você tenha acesso a esse conteúdo que está estudando agora, por exemplo. Para isso, vamos entender como as peças desse quebra-cabeça se encaixam em uma aplicação web.

Aplicações web, como essa que você está usando em seus estudos aqui na Trybe, seguem uma estrutura básica muito similar: elas são compostas por um cliente, um servidor e um banco de dados.

A estrutura da sua página é definida por uma linguagem de marcação de texto chamada HTML, que é a sigla para Hyper text markup language. Quando uma pessoa usuária digita uma URL e pressiona Enter, o servidor processa a solicitação e envia o arquivo HTML de volta ao cliente. Os arquivos HTML contêm o conteúdo de um site e também links para quaisquer ativos ou códigos adicionais necessários para exibir o site corretamente.

A aparência da página é definida por uma linguagem de estilização chamada CSS, que significa Cascading Style Sheets. O CSS é uma linguagem que te permite descrever como os elementos definidos pelo HTML devem ser estilizados. O CSS te permite alterar a fonte, a cor, o tamanho e até mesmo incluir recursos como animações e áudio.

As interações com a pessoa usuária são definidas por uma terceira linguagem: o JavaScript. É o JavaScript que confere à página um comportamento dinâmico.

A animação abaixo mostra o comportamento do HTML, do HTML com CSS e também o comportamento ao adicionar JavaScript:

[Animação de html, css e javascript](https://content-assets.betrybe.com/prod/e8404072-959f-4284-bcf1-51919e308e7f-Anima%C3%A7%C3%A3o%20de%20html,%20css%20e%20javascript.gif)
Animação de como funciona o HTML, CSS e Javascript

Agora, imagine que você está em uma página de e-commerce. Você pode clicar nos itens que quer comprar e salvá-los em um carrinho, você pode adicionar filtros às suas buscas, navegar entre as sessões do site, tudo isso graças ao Javascript!

Você deve estar se perguntando: Beleza, eu consigo visualizar tudo o que está acontecendo no momento que faço as compras na loja online. Mas para onde vai o meu pedido no momento em que efetuo o pagamento? O que acontece nos bastidores de um e-commerce?

O seu pedido é enviado como uma requisição para um servidor, que irá armazenar, processar e encaminhar as suas compras. O servidor em uma aplicação Web é quem recebe as requisições do cliente. Lembra-se do protocolo HTTP? Pois bem, é aqui que ele entra em cena. É esse protocolo que define uma linguagem para que clientes e servidores se comuniquem. O servidor espera por requisições HTTP de uma porta específica, sempre associada a um endereço IP. Com as requisições, ele vai realizar ações e enviar a resposta via HTTP. Todos os dados que viajam entre o cliente e o servidor são enviados através da rede internet usando o protocolo TCP/IP.

E, por fim, o banco de dados de uma aplicação web é onde a informação é armazenada de forma acessível, gerenciável e em constante atualização.