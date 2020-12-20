/* ACTIVE STEP BUTTON */

const btnNextStep = document.querySelector('.btn-next');

const cardsList = document.querySelector('.choose__details');
if(cardsList) {
    const checkChosenSteps = function() {
        const chooseBase = document.querySelector('.choose__base');
        const productCards = Array.from(cardsList.querySelectorAll('.card'));
        const filterButtons = Array.from(chooseBase.querySelectorAll('.btn-filter'));
    
        filterButtons.forEach(item => {
            if(item.classList.contains('active')) {
                productCards.forEach(item => {
                    if(item.classList.contains('active')) {
                        btnNextStep.classList.add('active')
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

const cardsText = document.querySelector('.cards-list');

if(cardsText) {
    const cards = Array.from(cardsText.querySelectorAll('.card--text'));

    checkTextStep = function() {
        cards.forEach(item => {
            item.addEventListener('click', function() {
                if(item.classList.contains('active')) {
                    btnNextStep.classList.add('active');
                } else {
                    btnNextStep.classList.remove('active');
                }
            })
        })
    }

    checkTextStep();
    
}