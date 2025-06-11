export const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

export async function getLivrosDaAPI() {
  const res = await fetch(endpointDaAPI);
  const livros = await res.json();
  return aplicarDesconto(livros);
}

function aplicarDesconto(livros) {
  const desconto = 0.3;
  return livros.map(livro => {
    const precoComDesconto = livro.preco - (livro.preco * desconto);
    return { ...livro, preco: Number(precoComDesconto.toFixed(2)) };
  });
}
