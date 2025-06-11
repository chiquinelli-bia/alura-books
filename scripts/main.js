import { getLivrosDaAPI } from './api.js';
import { exibirLivros, exibirTotal } from './renderização.js';
import { filtrarPorCategoria, filtrarDisponiveis, calcularTotal, ordenarPorPreco } from './filtros.js';

let livros = [];

document.addEventListener('DOMContentLoaded', async () => {
  livros = await getLivrosDaAPI();
  exibirLivros(livros);
});

const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
  const categoria = this.value;
  let livrosFiltrados = categoria === 'disponivel'
    ? filtrarDisponiveis(livros)
    : filtrarPorCategoria(livros, categoria);

  exibirLivros(livrosFiltrados);

  if (categoria === 'disponivel') {
    const total = calcularTotal(livrosFiltrados);
    exibirTotal(total);
  }
}

const btnOrdenar = document.getElementById('btnOrdenarPorPreco');
btnOrdenar.addEventListener('click', () => {
  const livrosOrdenados = ordenarPorPreco(livros);
  exibirLivros(livrosOrdenados);
});
