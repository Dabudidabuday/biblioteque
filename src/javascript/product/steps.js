/* ACTIVE STEP BUTTON */

const btnNextStep = document.querySelector('.btn-next');

if(btnNextStep) {
    const checkChosenSteps = function() {
        const chooseBase = document.querySelector('.choose__base');
        const cardsList = document.querySelector('.choose__details');
        const productCards = Array.from(cardsList.querySelectorAll('.card'));
        const filterButtons = Array.from(chooseBase.querySelectorAll('.btn-filter'));
    
        filterButtons.forEach(item => {
            if(item.classList.contains('active')) {
                productCards.forEach(item => {
                    if(item.classList.contains('active')) {
                        btnNextStep.classList.add('btn-active')
                    }
                })
            }
        })
    }
    
    const choose = document.querySelector('.choose');
    
    choose.addEventListener('click', function() {
        checkChosenSteps()
    })
}
