let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();
const secaoDeLivros = document.getElementById('livros');

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endpointDaAPI);
  livros = await res.json();
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
  secaoDeLivros.innerHTML = '';
  listaDeLivros.forEach(livro => {
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
    secaoDeLivros.innerHTML += `<div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
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
 
const btn = document.querySelectorAll('.btn');
btn.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
  const categoria = this.value;
  let livrosFiltrados = categoria === 'disponivel' ? filtrarQuantidade() : filtrarCategorias();
  exibirlivro(livrosFiltrados);
}
function filtrarQuantidade() {
 livros.filter(livro => livro.quantidade > 0);
}
function filtrarCategorias() {
  livros.filter(livro => livro.categoria === categoria);
}
const btnOrdenar = document.getElementById('btnOrdenarPorPreco');
btnOrdenar.addEventListener('click', () => {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirlivro(livrosOrdenados);
})



