export function filtrarPorCategoria(livros, categoria) {
  return livros.filter(livro => livro.categoria === categoria);
}

export function filtrarDisponiveis(livros) {
  return livros.filter(livro => livro.quantidade > 0);
}

export function calcularTotal(livros) {
  return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}
export function ordenarPorPreco(livros) {
  return [...livros].sort((a, b) => a.preco - b.preco);
}
