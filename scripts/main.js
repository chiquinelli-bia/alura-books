let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();
const secaoDeLivros = document.getElementById('livros');

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endpointDaAPI);
  livros = await res.json();
  console.table(livros);
  let livrosComDesconto = aplicarDesconto(livros);
  exibirlivro(livrosComDesconto);
}
function aplicarDesconto (livros) {
  const desconto = 0.3;
  livrosComDesconto = livros.map(livro => {
    const precoComDesconto = livro.preco - (livro.preco * desconto);
    return {...livro, preco: precoComDesconto.toFixed(2)
    };
  })
  return livrosComDesconto;
}
function exibirlivro(listaDeLivros) {
  listaDeLivros.forEach(livro => {
    secaoDeLivros.innerHTML += `<div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
  });
}

