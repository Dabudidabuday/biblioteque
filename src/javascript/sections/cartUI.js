class CartUI {
    constructor(rootElement) {
        this.rootElement = document.querySelector(rootElement);
    }

    run() {
        if(!this.rootElement) return;

        const showMoreModal = this.rootElement;
        const btnMoreOpen = Array.from(document.querySelectorAll('.card__more'));
        const btnMoreClose = document.querySelector('#btn__show-more__close');
        const overlay = document.querySelector('#overlay');
        
        btnMoreOpen.forEach(item => {
            item.addEventListener('click', (e) => {
                showMoreModal.classList.add('active');
                overlay.classList.add('active');
            })
        })

        btnMoreClose.addEventListener('click', function() {
            showMoreModal.classList.remove('active');
            overlay.classList.remove('active');
        })

        const aromaReviewModal = document.querySelector('#modalPerfume');
        const aromaModalClose = document.querySelector('#btn-navigation-close');

        aromaModalClose.addEventListener('click', function() {
            aromaReviewModal.classList.remove('active');

            setTimeout(() => {
                overlay.classList.remove('active');

            }, 200)
        })
    }
}

export default CartUI