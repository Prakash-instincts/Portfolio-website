// Existing JavaScript
const filterButtons = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        skillCards.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.classList.remove('hidden');
                if (filter === 'frontend') {
                    card.classList.add('shift-up'); // Add shift-up for frontend
                } else {
                    card.classList.remove('shift-up'); // Remove shift-up for other filters
                }
            } else {
                card.classList.add('hidden');
                card.classList.remove('shift-up'); // Remove shift-up for hidden cards
            }
        });
        
        // Ensure the clicked button is highlighted
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
