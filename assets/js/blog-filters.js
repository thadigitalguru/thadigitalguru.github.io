document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-button');
  const cards = document.querySelectorAll('.post-card');
  const results = document.getElementById('filter-results');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter').trim().toLowerCase();
      let visibleCount = 0;

      buttons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      cards.forEach(card => {
        const topics = (card.getAttribute('data-topics') || '').split(',').map(topic => topic.trim().toLowerCase());
        card.hidden = filter !== 'all' && !topics.includes(filter);
        if (!card.hidden) visibleCount++;
      });

      if (results) results.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? 'article' : 'articles'}.`;
    });
  });
});
