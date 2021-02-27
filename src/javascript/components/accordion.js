class Accordion {
    constructor(rootElement) {
        this.rootElement = document.querySelector(rootElement);
    }

    run() {
        if(!this.rootElement) return;

        const btnAccordionOuter = Array.from(document.querySelectorAll('.outer-accordion-item'));
        const accordionInnerLists = Array.from(document.querySelectorAll('.inner-accordion-items'));

        btnAccordionOuter.forEach(item => {
            item.addEventListener('click', (e) => {
                const parent = e.target.closest('.item');
                const currentOuterLink = parent.querySelector('.outer-accordion-item');
                const currentInnerLinks = parent.querySelector('.inner-accordion-items');

                currentOuterLink.classList.toggle('active');
                currentInnerLinks.classList.toggle('active');
            })
        })
    }
}

export default Accordion