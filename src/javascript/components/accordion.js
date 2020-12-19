/**
 * Аккордеон внутри navigation-menu
 * Нужно адаптировать для работы со множеством элементов
 */
const btnAccordionOuter = document.querySelector('.outer-accordion-item');
const accordionInnerList = document.querySelector('.inner-accordion-items');

if(btnAccordionOuter) {
    btnAccordionOuter.addEventListener('click', function() {
        accordionInnerList.classList.toggle('active');
        btnAccordionOuter.classList.toggle('active');
    })
}