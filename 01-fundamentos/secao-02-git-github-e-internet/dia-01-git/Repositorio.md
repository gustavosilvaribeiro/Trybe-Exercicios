# Criando um repositório: do git init ao git merge

>Um repositório é uma pasta no seu computador onde você pode armazenar arquivos, projetos e por aí vai.

Quando estamos falando sobre versionamento, o repositório é uma pasta que contém o seu projeto. É dentro dessa mesma pasta que você consegue criar versões, ou seja, as branches. Todo esse processo pode ser feito pelo terminal utilizando linhas de comando. Esses comandos podem variar entre tipos de repositório:

- Repositório local: é o repositório no seu computador, que pode ser baixado da internet ou criado por você.

- Repositório remoto: é o repositório que está acessível na internet em uma plataforma de hospedagem de código, como por exemplo, o GitHub.

>Você vai aprender mais sobre o repositório remoto na próxima seção e para chegar lá é necessário praticar bastante os comandos desse conteúdo. Combinado? 😉

Vamos ver na prática como criar um repositório local? 🧑‍💻

## Criando um repositório local
Agora chegou a hora de colocar as mãos no código e praticar, você vai criar um repositório no seu computador utilizando os comandos do Git.

Para criar o seu primeiro repositório versionado, você vai precisar:

- Criar uma pasta e inicializar o versionamento;
- Realizar uma modificação na branch main para ter um projeto inicial;
- Criar uma nova branch e realizar novas alterações;
- Mesclar as alterações da branch criada por você na branch main.

Vamos lá? 🤩

## 💻  Primeiro passo: Crie uma pasta no seu computador
Abra o seu terminal e escolha o lugar que você vai criar o seu repositório e acesse essa pasta.

**Relembrando** 🧠: Relembre alguns comandos do terminal do computador

**ls**: verifica as pastas e arquivos que estão naquele caminho

**cd nome-da-pasta**: acessa a pasta

**mkdir**: cria uma pasta

**touch**: cria um arquivo novo

💻 Segundo passo: Inicie o repositório git com o comando git init
Utilize o comando `git init` dentro da pasta que você criou para que ela se torne um repositório git

[Criando o repositorio versionado com git init](https://content-assets.betrybe.com/prod/Criando%20o%20repositorio%20versionado%20com%20git%20init.png)

Criando o repositório versionado com git init

## 💻 Terceiro passo: Troque o nome da branch principal para main
Após usar o `git init` a resposta do seu terminal será algo parecido com a imagem a seguir:

~~~
Initialized empty Git repository in /Users/leticia/Desktop/meu-primeiro-repositorio-git/.git/
~~~
Atualmente, ao iniciar um repositório local, o git inicia a sua `branch` principal com o nome de `master`, mas esse nome foi descontinuado e o ideal é chamar de `main`.

Você pode verificar em qual branch você está com o comando git branch.

Caso o aviso abaixo apareça para você:

~~~
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint: 	git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint: 	git branch -m <name>
~~~
No seu terminal, configure para que a `branch` principal sempre se chame `main` e esse aviso vai sumir. Para isso:

Renomeie a `branch` atual para `main` com o comando: `git branch -m main`

Configure o nome main com o comando `git config --global init.defaultBranch main`

## 💻 Quarto passo: Verifique o status do repositório com git status
Execute o comando `git status` no seu terminal para verificar a situação atual do seu repositório.

O comando `git status` retorna o status do repositório, informando quais arquivos foram modificados, quais estão sendo monitorados, etc. No contexto de um repositório recém criado onde nenhuma modificação foi feita você vai ter a seguinte resposta:

~~~
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
~~~
Você já está quase lá, agora chegou a hora de utilizar os comandos `git add`, `git commit` e `merge`! Vamos lá?

##  Adicionando e comitando arquivos
Agora que você já inicializou seu repositório local, chegou a hora de iniciar as alterações. Para isso, vamos criar um arquivo chamado `README.md`.

### Anota aí 📝: 
O `README.md` é arquivo de marcação de texto, que é responsável por informar e dar orientações sobre como utilizar o projeto.

## 💻 Primeiro passo: Crie um arquivo chamado README.md
Para criar um arquivo utilizando o terminal, execute o comando: `touch README.md`

Vamos adicionar um arquivo inicial a esta pasta para termos a estrutura inicial do projeto.

## 💻 Segundo passo: Abra o seu repositório no VSCode
Para abrir o repositório no `VSCode` utilizando o terminal, execute o comando `code` .

Para configurar o VSCode como editor padrão, acesse a página de Git e GitHub.

Após executar o comando, o VSCode vai abrir no seu computador já dentro do seu repositório.

## 💻 Terceiro passo: Faça uma alteração no arquivo README.md
Abra o arquivo `README.md` e escreva o texto a seguir.

~~~
Meu primeiro repositório git!!
~~~
**De olho na dica** 👀: Ao iniciar um repositório local, antes de criar novas `branches`, é necessário realizar uma alteração na `branch` principal, que é a `branch main`. Beleza?

## 💻 Quarto passo: Adicione essa alteração na branch main
Para que o git adicione a sua alteração em uma zona de `stage`, ou seja, prepare as alterações para se tornarem uma versão do projeto. Para isso:

Abra o terminal no `VSCode`. Você pode acessar a aba `Terminal > Novo Terminal`;

Garanta que você está dentro da pasta do repositório e utilize o comando: `git add README.md` ou `git add .`

~~~
git add README.md
~~~
Caso você queira adicionar todos os arquivos modificados, utilize `git add .`:

~~~
git add .
~~~
**De olho na dica** 👀: É uma boa prática utilizar o comando `git status` antes do `git add` para checar quais arquivos foram modificados. Dessa forma, você consegue visualizar quais arquivos sofreram alteração e garantir que vai executar o comando `git add` . sem enviar arquivos indesejados.

Você também pode usar o `git status` após o `git add`. Isso vai mostrar quais arquivos estão na zona de stage ou staging, que é a área de arquivos que estão preparados para serem enviados no próximo `commit`.

## 💻 Quinto passo: Escreva uma mensagem com git commit
Após adicionar as alterações realizadas em `stage`, é necessário informar uma mensagem sobre o que foi alterado. Dessa forma você consegue criar um ponto de acesso na sua linha do tempo, ou seja, cria uma versão do seu projeto e consegue acessá-la sempre que precisar.

A mensagem de `commit` é muito importante porque ela descreve o que foi modificado, para isso, digite no seu terminal algo que descreva a alteração que você fez. Por exemplo:

~~~
git commit -m "Cria README.md"
~~~
**Anota aí** 📝: Não é possível realizar um `commit` em um repositório vazio! É necessário ao menos um arquivo criado dentro dele, ainda que em branco.

Pronto! Primeiras alterações realizadas! 🥳


Os comandos ficam da seguinte forma:

- `git add .` ou `git add nome-do-arquivo nome-do-outro-arquivo`: adiciona as modificações em `staging`, que informa ao git as modificações realizadas e que vão estar no próximo `commit`;

`git commit -m "Mensagem sobre as alterações realizadas"`: informa quais alterações foram realizadas e cria uma versão do projeto que pode ser acessada a qualquer momento;

`git status`: é utilizado sempre que você quiser verificar o que foi alterado.

👀 **De olho na dica**: É considerada uma boa prática o hábito de realizar `commits` com frequência. Isso facilita o acompanhamento das alterações e também na correção de possíveis erros em seu código. Procure evitar `commits` muito extensos e/ou com muitas alterações.

**Relembrando**  🧠
Resumidamente, o processo acontece nessa ordem:

- Uma pasta é criada para armazenar um repositório local: `mkdir <nome da pasta>`;
- A pasta criada é acessada: `cd <nome da pasta criada>`;
- Um repositório local é iniciado nessa pasta, e é possível ter o controle de versionamento: `git init`;
- É realizada uma modificação inicial, por exemplo: `touch README.md`;
- Verificamos quais arquivos foram alterados: `git status`;
- Adicionamos os arquivos modificados e selecionados ao que será a próxima versão: `git add `(`git add README.md` ou `git add .`);
- Uma nova versão desse repositório local é criada com uma descrição do que essa versão muda em relação a antiga: `git commit -m "Mensagem desejada"`;


## Cadê o `git merge`?? 🤔

Quando iniciamos um repositório local, é preciso realizar pelo menos uma modificação inicial na `branch main` que vai ser a sua primeira versão.

Feita essa modificação, agora você pode criar uma nova `branch` para realizar outras alterações.

Para isso, a partir da `branch main`, você vai criar uma nova `branch`, realizar novas alterações, para só então realizar o `merge`. Vamos lá?

 ## 💻 Primeiro passo: Crie uma branch nova com git checkout -b nome-da-branch
Para criar uma nova `branch` e acessá-la, você pode utilizar o comando `git checkout -b` e escolher o nome que você quiser para a sua `branch`. Por exemplo:

~~~
git checkout -b atualiza-readme
~~~
**Anota aí** 📝: Você pode criar quantas `branches` (ramificações) forem necessárias e também pode criar novas `branches` a partir das `branches` existentes.

Para verificar em qual `branch` você está, utilize o comando `git branch` ou, se preferir, verifique o lado inferior esquerdo do seu `VSCode` que ele informa em qual branch você está atualmente.

[Exemplo da branch atual no VSCode](https://content-assets.betrybe.com/prod/Exemplo%20da%20branch%20atual%20no%20VSCode.png)
Exemplo da branch atual no VSCode

## 💻 Segundo passo: Realize uma nova modificação no README.md
Escreva algo novo no seu arquivo `README.md`;
Utilize o `git status`;
Adicione e envie as alterações para `staging` com `git add README.md` ou `git add .`;
Utilize o `git status` novamente;
Realize o `commit` com `git commit -m "Atualiza README.md"`;
## 💻 Terceiro passo: Realize o merge na branch main
Agora chegou o momento de unir as alterações realizadas na `branch` que você criou, com a sua `branch main`.

Para isso:

Acesse a `branch main` com o comando: `git checkout main`;
Digite o comando `git merge nome-da-branch`, onde `nome-da-branch` é o nome que você deu para a sua `branch`. Por exemplo: git merge atualiza-readme.
Esse comando vai fazer com que as alterações da `branch` que você criou, sejam mergeadas na `branch main`, ou seja, você unirá a alteração feita na sua `branch` com a `branch main`.



Mas não se preocupe, preparamos para você um resumo de alguns comandos:

[Comandos do git](https://content-assets.betrybe.com/prod/Comandos%20do%20git.jpeg)
Comandos do git

Com o tempo esses comandos ficam cada vez mais naturais, mas para que isso ocorra você precisa praticar bastante, combinado? 👊
