# Sistema Unix

O Unix é um sistema operacional multi-tarefa (executa várias tarefas ao mesmo tempo) multi-usuario (onde várias pessoas usam ao mesmo tempo). A maioria dos servidores na Internet utilizam esse sistema. Os Sun OS e Linux são sistemas "unix like"(que utiliza o padrão unix).

Como funciona o Unix?

O unix, como os "unix like" , é montado basicamente em três níveis:

Kernel: é o núcleo do sistema, invisível ao usuário, responsável pelas funções internas do sistema
Shell: é a interface entre sistema operacional o usuário (você) e o núcleo do sistema(Kernel). O primeiro processo, executado automaticamente ao entrar no sistema (login) é o seu shell.
Os aplicativos: nessa classe se encaixam a maioria dos comandos do unix
O que são processos?

Tudo o que você faz no unix é um processo, cada vez que é executada uma tarefa ou um comando ele é tratado pelo unix como um processo, e recebe um número.  

## Sistema Linux

O Linux é um sistema operacional livre baseado no Unix. O Linux é multitarefa, multiusuário e multiprocessado, desenvolvido há poucos anos graças aos esforços coletivos da comunidade tecnológica e, em especial seu Idealizador, Linus Torvalds. O uso do Linux nas universidades tornou-se praxe há algum tempo, mas as qualidades do sistema expandiram sua popularidade entre usuários domésticos e empresas. As estatísticas demonstram que o Linux é o sistema que mais cresce no mundo, nesse momento. Estima-se que, no início de 1999, existiam aproximadamente oito milhões de usuários do Linux. Estabilidade, ótima performance , segurança e multiplicidade de recursos são os principais motivos para justificar essa preferência. Aos aparatos técnicos junta-se o fato de o sistema e seus programas serem de livre distribuição, reduzindo os custos de implantação e uso a quase zero.



# Bash 
Bash é um shell desenvolvido por Brian Fox no Projeto GNU (General Public License) para a substituição do shell Bourne. Ele é utilizado como a principal linguagem de comando no Linux, no Solaris 11 e no Apple macOS (em versões anteriores as de 2019), pois tornou-se um shell alternativo nas versões superiores ao macOS Catalina. Além disso, tem uma versão disponível para Windows 10.

Atualmente, o Bash é um software de código livre, ou seja, qualquer usuário pode redistribuí-lo e/ou modificá-lo sob os termos da GNU, desde que essa alteração seja publicada pela Free Software Foundation. Isso aumenta ainda mais a usabilidade da ferramenta, que é incrementada a medida em que os desenvolvedores fazem a sua contribuição — atualizando strings, por exemplo.

A linguagem é escrita em uma IDE (Integrated Development Environment), ferramenta que auxilia a criação de aplicações. Na IDE, o usuário digita comandos para que eles sejam executados. O Bash facilita essa interpretação, pois suporta globbing de nome de arquivo criando correspondências e substituição de comando. Além disso, ele testa variáveis, iterações ​​e estruturas de controle condicionais.

As palavras-chave, sintaxe, variáveis ​​de escopo dinâmico e outros recursos básicos do Bash são semelhantes ao de shell Bourne (sh). Outros recursos, como o histórico de compilações, e a sintaxe que expande o til “~” para o valor mantido na variável de ambiente $HOME, são inspirados em outros shells, como o shell C (csh) e o KornShell (ksh).

Além disso, o Bash introduziu arquivos de configuração como os arquivos “.bashrc” e “.bash_profile” e teve as suas matrizes aprimoradas para serem criadas em qualquer tamanho. A expansão de parâmetros no prompt de comando também permitiu que os usuários personalizassem o prompt Bash.

Outro recurso interessante do Bash é o seu autocompletar: quando um usuário pressiona a tecla tab em um shell de comando interativo, o Bash automaticamente conclui a linha de comando — a partir da versão beta 2.04 — para corresponder a nomes parcialmente digitados de programas, arquivos e variáveis. Esse recurso aumenta a flexibilidade e a capacidade de personalização das funções que completam argumentos e nomes de arquivos de programas e tarefas específicas.

Segundo o site oficial, outras melhorias também foram implementadas no Bash:

- edição de linha de comando;
- histórico de comandos de tamanho ilimitado;
- controle de trabalho;
- funções shell e aliases;
- suporte para matrizes associativas;
- arrays indexados de tamanho ilimitado;
- cálculos inteiros sem gerar processos externos;
- substituição de processo por meio da sintaxe <(command) e >(command), que substitui a saída de (ou entrada para) um comando onde um nome de arquivo normalmente é usado;
- aritmética inteira em qualquer base de dois a sessenta e quatro.
 
 De todos os shells disponíveis, o Bash é um dos mais populares, poderosos e amigáveis, superando em muitos aspectos as capacidades dos shells anteriores. Ele está em conformidade com o padrão POSIX P1003.2/ISO 9945.2 e permite configurar softwares, extrair dados do sistema, manipular arquivos, monitorar rotinas, automatizar processos de compilação de código, entre outras funções.

A documentação do Bash está disponível no site oficial, assim como a da maioria dos softwares GNU. Você também pode encontrar informações sobre o Bash com o comando info bash ou man bash na IDE ou por meio de consultas nos diretórios do sistema.

## Maior eficiência no acesso aos sistemas operacionais
O Bash é usado para controlar dispositivos e sistemas operacionais dispensando a navegação por menus e janelas em uma GUI. Por meio de uma CLI como o Bash, o usuário apenas digita uma linha de comando para visualizar e executar operações no computador.

Por exemplo, se você deseja criar, editar ou excluir vários arquivos simultaneamente, é mais fácil usar o Bash em vez de localizar cada arquivo individualmente, basta apontar e clicar nos diretórios em que eles estão armazenados.

Além disso, o Bash consome menos recursos computacionais se comprarmos com um comando em uma GUI, pois não requer que computador renderize os resultados e crie saídas gráficas.

O Bash é a melhor opção para executar vários programas simultaneamente, mas também quando o usuário tem recursos computacionais limitados para trabalhar.

## Facilidade na criação e edição de arquivos de texto
O Bash facilita a criação e edição de arquivos de texto, incluindo CSVs (Character-separated values ou valores separados por um delimitador, muitas vezes uma vírgula). Como os arquivos de texto são formatos possíveis para o armazenamento e processamento de dados, o Bash é uma excelente alternativa para a curadoria de bases de dados.

Por isso, com o Bash é possível classificar, limpar, atualizar e filtrar informações em repositórios criados com aplicações de texto, sendo um grande aliado na ciência de dados, já que o software possibilita a edição simultânea de conjuntos formados por grandes volume de dados, com rapidez e eficiência.

Mesmo que você não seja um cientista de dados, com o Bash o usuário também pode procurar arquivos em uma pasta, textos ou trechos de texto em um arquivo.

## Praticidade no registro dos dados
Em uma aplicação com a GUI, o usuário não consegue registrar os seus resultados mas, com o Bash, ele pode copiar e colar os resultados ou gravá-los em um arquivo de texto para usar como entrada em outra linguagem de programação.

## Otimiza a automação de rotinas e tarefas
O Bash também facilita muito a automação de tarefas em um hardware. Esse recurso é extremamente útil para aumentar a eficiência computacional, principalmente quando é necessário executar rotinas e tarefas repetitivas n o contexto da Transformação Digital.

Por exemplo, se você é um atendente de suporte e precisa fazer a edição simultânea de vários dispositivos em uma infraestrutura de TI, como alterar a configuração de um software de segurança, não precisa utilizar a GUI de cada hardware para navegar pelos menus e janelas e executar o comando: basta realizar um ajuste de forma integrada acessando as configurações do sistema e escrevendo um único script por meio do Bash.

## Centraliza scripts em diferentes linguagens de programação
Não importa se você é um desenvolvedor Back-End ou um cientista de dados: certamente existem várias linguagens de programação instaladas aos aplicativos IDE de seu dispositivo. Com o Bash você centraliza e executa scripts em qualquer uma dessas linguagens, pois o software suporta essa comunicação e integra comandos.

Por exemplo, você pode consultar um banco de dados com o SQL e analisar as informações com o R: se a linguagem de programação foi instalada em seu dispositivo, pode ser acessada por meio do Bash.


## Como aprender Bash?
Aprender Bash não é uma tarefa muito complicada: os benefícios desse shell para o comando de sistemas operacionais superam a dificuldade de aprender como utilizá-lo. Isso porque o Bash é uma linguagem de programação, mas também opera como um aplicativo e interpretador de linguagens de comando, o que o torna uma aplicação com uma sintaxe própria.

Por isso, mesmo que você não seja um desenvolvedor e, eventualmente, procure por sintaxes para executar comandos conforme a sua necessidade, pode ser interessante aprofundar e aprender o Bash para aumentar as suas oportunidades no mercado de trabalho, principalmente porque o Bash é largamente usado para aprimorar softwares-pai, realizar configurações de software, extrair, modificar e atualizar informações em bancos de dados e, principalmente, criar scripts para simplificar argumentos complexos em um único comando para automatizar tarefas e rotinas.

Uma vez criado, o script Bash pode ser executado inúmeras vezes por qualquer usuário, mas a sintaxe do Bash considera elementos e ações bem específicas, por exemplo, o usuário não pode acionar o “enter” no teclado antes de terminar o script, mas têm semelhanças com outras linguagens, como o uso do ponto e vírgula para encerrar uma linha de comando. Além disso, é necessário declarar de forma explícita a pontuação, embora não seja usual declarar as variáveis, mas atribuir valores para elas.

O usuário consegue atribuir qualquer valor para uma variável, desde textos e números até uma saída de comando. Entretanto, todo esse valor deve ser precedido pelo símbolo $ e redigido com a primeira letra em caixa alta, o que não é exigido dos scripts, que são escritos com letras minúsculas. Veja um exemplo de comando em Bash a seguir:
```
#!/bin/bash
testfunction(){
echo "Hello Word"
}
testfunction
```
Os scripts bash são usados para executar um comando shell, seja individual, seja em grupo, para personalizar rotinas e automatizar tarefas. Por isso, conhecer a programação bash é importante para os usuários do Linux, mas também para qualquer desenvolvedor ou gestor que monitora e controla infraestruturas de TI ou bancos de dados.
