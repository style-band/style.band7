const searchInput = document.getElementById('search-input');

// Função de pesquisa
searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();

  galleryItems.forEach((item) => {
    const itemName = item.querySelector('p').textContent.toLowerCase();
    if (itemName.includes(searchValue)) {
      item.style.display = 'block'; // Mostrar itens correspondentes
    } else {
      item.style.display = 'none'; // Esconder itens que não correspondem
    }
  });
});

// Selecionar botões de categorias e itens
const categoryButtons = document.querySelectorAll('.category-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Função para mostrar itens por categoria
function filterItems(category) {
  galleryItems.forEach((item) => {
    if (category === 'all' || item.getAttribute('data-category') === category) {
      item.style.display = 'block'; // Mostrar itens
    } else {
      item.style.display = 'none'; // Esconder itens
    }
  });
}

// Adicionar evento de clique aos botões
categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    // Ativar botão clicado
    categoryButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    // Filtrar itens
    filterItems(category);
  });
});

// Exibir todos os itens inicialmente
filterItems('all');
