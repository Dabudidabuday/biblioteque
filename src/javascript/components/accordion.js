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

                // btnAccordionOuter.forEach(item => {
                //     item.classList.remove('active');
                // })
                //
                // accordionInnerLists.forEach(item => {
                //     item.classList.remove('active');
                // });

                if(currentOuterLink.classList.contains('active')) {
                    currentOuterLink.classList.remove('active');
                    currentInnerLinks.classList.remove('active');
                }

                currentOuterLink.classList.add('active');
                currentInnerLinks.classList.add('active');
            })
        })
    }
}

export default Accordion