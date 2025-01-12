const searchInput = document.getElementById('searchInput');
const ebooksContainer = document.getElementById('ebooksContainer');
const ebookCards = Array.from(ebooksContainer.getElementsByClassName('ebook-card'));

searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();
  ebookCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    if (title.includes(searchText) || description.includes(searchText)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});