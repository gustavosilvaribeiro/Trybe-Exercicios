# Como o Git funciona na prática?
O <b>Git</b> funciona como uma linha do tempo, onde você consegue criar vários pontos de acesso para as alterações realizadas em um projeto e pode acessá-las quando for necessário. Dessa forma, ao invés de criar várias pastas com várias versões, você vai precisar apenas de uma pasta e dentro dela vai poder criar e acessar as versões do seu projeto e tudo isso pode ser feito pela linha de comando do seu terminal.

Para fazer o versionamento com <b>Git</b>, existem 3 conceitos principais:

- Ramificação (branch);
- Captura de mudanças (commit);
- Mesclagem (merge);

A <b>ramificação</b> funciona como ramos do seu projeto, isso significa que o seu <b>projeto principal</b> fica em uma branch (ramo) que atualmente é chamada de `branch main`.
 
A partir dela você consegue criar outros ramos, ou seja, outras `branches`, que possuem uma <b>versão do projeto principal</b> e que você pode realizar modificações sem medo, porque não vai interferir na `branch main`.

```
Anota aí 📝: O projeto principal é o que fica na branch main. É essa branch que vai para produção, ou seja, fica acessível para as pessoas usuárias.
```
Após cada alteração ou algumas alterações, é importante que você informe ao Git que está na hora dele adicionar essas informações em um commit, que é uma mensagem das modificações que você realizou no projeto e que cria um ponto de acesso para essas alterações.

Já o momento da mesclagem ou merge é quando você precisa atualizar a sua branch com a branch main ou atualizar a branch main com as suas alterações. Esse processo é chamado de merge ou seja, ele mescla as alterações.

Observe a imagem abaixo:

Como funciona a ramificação 
![imagem](https://content-assets.betrybe.com/prod/Como%20funciona%20a%20ramifica%C3%A7%C3%A3o.jpeg)


```
Git merge
```
Veja na figura que as branches são como ramificações da árvore, onde o tronco é a ramificação principal, ou seja, a branch main, a qual é a branch principal.

O objetivo é criar uma ramificação a partir do tronco, para que assim seja possível fazer as modificações necessárias sem interferir na ramificação principal. Somente quando a alteração for finalizada, essa ramificação passa a fazer parte do tronco.
```
Para refletir 💭: Agora imagine que a sua liderança te entregou um projeto para que você adicionasse algumas funcionalidades novas, qual a primeira coisa que você faz?
```
Isso mesmo! Utiliza o Git! 🤩

Para isso, você deve fazer o seguinte:

Ter o Git instalado na sua máquina;
Criar uma branch a partir do projeto inicial;
Realizar as alterações fazendo commits frequentes para poder acessar essas modificações;
Depois de ter validado se as alterações feitas estão funcionando como deveriam, você realiza o merge.
Viu só como o Git é importante para a vida de uma pessoa desenvolvedora? 😉