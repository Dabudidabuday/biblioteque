/* Conditions --- Passive & Active */
const cardsList = document.querySelector('.choose__details');

if(cardsList) {
    const productCards = Array.from(cardsList.querySelectorAll('.card'));
    const overlay = document.querySelector('#overlay');

    /* show & hide card details */
    const btnDetails = Array.from(document.querySelectorAll('.icon-detail'));
    const modalDetails = document.querySelector('.modal--product-details');
    const modalClose = document.querySelector('.modal-close')

    btnDetails.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            overlay.classList.add('active')
            modalDetails.classList.add('active');
        });
    })
    
    if(modalClose) {
        modalClose.addEventListener('click', function() {
            modalDetails.classList.remove('active');
            overlay.classList.remove('active');
        })
    }
}