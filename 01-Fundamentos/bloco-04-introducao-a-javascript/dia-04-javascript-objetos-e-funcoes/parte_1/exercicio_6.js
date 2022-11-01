let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  //Dentro do console.log concatene as strings com o + e acesse os valores do array livrosFavoritos no índice 0.
  console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama'${leitor.livrosFavoritos[0].titulo}'`); //“O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.