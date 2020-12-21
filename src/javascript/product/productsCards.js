/* Conditions --- Passive & Active */
const cardsList = document.querySelector('.choose__details');



if(cardsList) {
    const productCards = Array.from(cardsList.querySelectorAll('.card'));
    const overlay = document.querySelector('#overlay');
    productCards.forEach(item => {
        item.addEventListener('click', function(e) {
            productCards.forEach(item => {
                item.classList.remove('active');
            })

            item.classList.add('active');
        })
    })

    /* show & hide card details */
    const btnDetails = Array.from(document.querySelectorAll('.icon-detail'));
    const modalDetails = document.querySelector('.modal--product-details');
    const modalClose = document.querySelector('.modal-close')

    console.log('details btn', btnDetails);

    btnDetails.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            overlay.classList.add('active')
            modalDetails.classList.add('active');
        });
    })
    

    modalClose.addEventListener('click', function() {
        modalDetails.classList.remove('active');
        overlay.classList.remove('active');
    })
}