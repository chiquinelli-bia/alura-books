const secaoDeLivros = document.getElementById('livros');
const elementoTotal = document.getElementById('valor_total_livros_disponiveis');

export function exibirLivros(listaDeLivros) {
  elementoTotal.innerHTML = '';
  secaoDeLivros.innerHTML = '';

  listaDeLivros.forEach(livro => {
    const classe = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';

    secaoDeLivros.innerHTML += `
      <div class="livro">
        <img class="${classe}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco">R$${livro.preco}</p>
        <div class="tags"><span class="tag">${livro.categoria}</span></div>
      </div>
    `;
  });
}

export function exibirTotal(valor) {
  elementoTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>
  `;
}
