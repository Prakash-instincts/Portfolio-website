const filterButtons = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        skillCards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden', 'shift-up');
            } else if (filter === 'frontend') {
                if (card.classList.contains('frontend')) {
                    card.classList.add('shift-up');
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            } else if (filter === 'backend') {
                if (card.classList.contains('frontend')) {
                    card.classList.add('hidden');
                } else {
                    card.classList.remove('hidden', 'shift-up');
                }
            }
        });

        // Update active button state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
