const cardsList = document.querySelector('.cards-list');

if(cardsList) {
    const cards = Array.from(cardsList.querySelectorAll('.card--text'));

    cards.forEach(item => {
        item.addEventListener('click', function(e) {
            cards.forEach(item => {
                item.classList.remove('active');
            })

            e.target.classList.add('active');
        })
    })
}