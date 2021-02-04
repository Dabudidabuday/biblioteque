class CooperationPage {
    constructor(root) {
        this.root = document.querySelector(root);
        this.overlay = document.querySelector('#overlay');
    }

    _toggleAccordion() {
        const partnersList = this.root.querySelector('.partners-grid .accordion')

        const desktop = window.matchMedia('(min-width: 768px)');

        if(desktop.matches) {
            const btnAccordionOuter = Array.from(document.querySelectorAll('.outer-accordion-item'));
            const accordionInnerLists = Array.from(document.querySelectorAll('.inner-accordion-items'));
            const btnPlus = Array.from(document.querySelectorAll('.btn-accordion'));

            btnAccordionOuter.forEach(item => item.classList.add('active'));
            accordionInnerLists.forEach(item => item.classList.add('active'));
            btnPlus.forEach(item => item.style.display="none");

        }
    }

    _modalUI() {
        const modal = this.root.querySelector('.modal--partners');
        const btnOpen = this.root.querySelector('#btnOpenModal');
        const btnClose = this.root.querySelector('#btnCloseModalPartners');

        btnOpen.addEventListener('click', () => {
            this.overlay.classList.add('active');
            modal.classList.add('active');
        });

        btnClose.addEventListener('click', () => {
            this.overlay.classList.remove('active');
            modal.classList.remove('active');
        });
    }

    run() {
        if(!this.root) return;

        this._toggleAccordion();
        this._modalUI();
    }
}

export default CooperationPage