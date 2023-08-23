const cards = document.querySelectorAll('.card');


        // Add event listeners to each card for hover effect
        cards.forEach(card => {
            const playButton = card.querySelector('.img i');
            
            card.addEventListener('mouseover', () => {
                playButton.style.display = 'block';
            });

            card.addEventListener('mouseout', () => {
                playButton.style.display = 'none';
            });
        });

