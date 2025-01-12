const searchInput = document.getElementById('searchInput');
const videosContainer = document.getElementById('videosContainer');
const videoCards = Array.from(videosContainer.getElementsByClassName('video-card'));

searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();
  videoCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    if (title.includes(searchText) || description.includes(searchText)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});