# Autenticação de Segurança
## Como funciona a conexão entre local e remoto?
Como tudo o que você vai fazer ao longo do curso vai ter como workspace principal o GitHub, é necessário estabelecer uma **ponte** entre o **Git** (local) e o GitHub (remoto), ou seja, você precisa ter uma conexão entre o repositório que está no seu computador e esse mesmo repositório que está remoto.

Para poder fazer essa conexão entre local e remoto, é necessário fazer uma autenticação do GitHub, que permitirá que você **proteja suas informações pessoais e envie comandos para o *GitHub* diretamente do seu terminal**.

Quando esse processo é feito, você informa ao sistema remoto que é necessário utilizar as credenciais da sua conta ao executar algum comando do **Git** e, ao mesmo tempo, comprova para o GitHub que você é exatamente quem diz que é.

E como fazer essa autenticação?

Existem duas maneiras de realizar a autenticação para que você consiga enviar comandos para o GitHub: HTTPS (Hypertext Transfer Protocol Secure) ou SSH (Secure Shell).

> HTTPS? SSH? O que é isso? 😱

Calma que a gente vai te ensinar! 😉

## Autenticar via SSH ou HTTPS?
Existem duas formas pelas quais você pode acessar o GitHub pelo terminal: HTTPS (Hypertext Transfer Protocol Secure) e SSH (Secure Shell). Ambas as formas são válidas, mas possuem algumas diferenças entre si:

- **SSH** ou Secure Shell: é um protocolo de criptografia de rede que serve para transferir dados de forma segura mesmo em redes inseguras. Usando o protocolo SSH, você pode se conectar ao GitHub sem precisar digitar seu nome e chave de acesso pessoal a cada comando executado.

- **HTTPS** ou Hypertext Transfer Protocol Secure: é uma extensão do protocolo de internet HTTP, que resumidamente é um protocolo de comunicação entre sistemas, que utiliza certificados digitais para autenticar os dados e permitir que eles sejam criptografados de forma segura.

No caso do HTTPS, você precisará criar um token de acesso pessoal para usar no lugar da sua senha quando ela for pedida. No entanto, recomendamos o uso do SSH.

Com o SSH, podemos pular a etapa de digitar login e senha do GitHub a cada comando (e ao longo do curso serão muuuuuuuuitos comandos). Portanto, vamos utilizar o SSH como modelo padrão de autenticação.

Além de fazer essa conexão com SSH, você também vai precisar da Autenticação de Dois Fatores (Two Factor Authentication).

Agora, você vai aprender o que é Autenticação de Dois Fatores e como fazer toda essa configuração.

Vamos lá? 🧑‍💻

## Two Factor Authentication
Você pode estar se perguntando, o que é Two Factor Authentication?

O Two Factor Authentication ou 2FA (autenticação de dois fatores) é um processo de autenticação que combina dois ou mais fatores. Legal, mas isso não explica muita coisa, né?

Bom, pense que você está acessando sua conta em algum lugar, você precisa digitar sua senha, não é mesmo? Isso é um processo de autenticação, mas quando falamos de 2FA queremos mais uma camada de autenticação.

> Mas por quê? 🤔

Por **segurança!** Fica muito mais difícil acessarem sua conta se for preciso passar por mais processos, concorda? 😉

Agora que você já sabe o que é SSH e 2FA, chegou a hora de fazer essas configurações! 💾

## Adicionando chave SSH e Two Factor Authentication
Ao trabalhar com desenvolvimento, é muito importante que você aprenda a ler documentações e a seguir tutoriais, portanto, para que você realize as autenticações necessárias que o GitHub pede, vamos deixar os links que você precisa acessar para fazer esse passo a passo.

> **Atenção** ⚠️: Se por um acaso você encontrar algum texto em inglês e precise de tradução, clique com o botão direito do mouse na página e vá em “Traduzir para o Português”.

**Primeiro passo**: Adicione a chave SSH na sua conta do GitHub

Para isso, acesse o [link da documentação.](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) 

**Segundo passo**: Adicione o Two Factor Authentication

Para fazer a autenticação de dois fatores, acesse o [link da documentação.](https://docs.github.com/pt/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)

**Terceiro passo**: Configure sua identidade

Para que o histórico de `commits` fique registrado no seu nome, você precisa informar ao Git seu email e senha.

Abra seu terminal e digite seu nome e o email que você utilizou para se cadastrar no GitHub:

~~~
git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br
~~~
> **Atenção** ⚠️: Caso você tenha algum problema com as autenticações ou com a configuração de identidade, acesse o Slack da sua tribo e peça ajuda. O time estará de prontidão para te ajudar.

Pronto! GitHub configurado, chegou a hora de praticar! 💻