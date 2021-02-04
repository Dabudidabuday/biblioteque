class Registration {
    constructor(root) {
        this.root = document.querySelector(root);
        this.overlay = document.querySelector('#overlay');
    }

    _toggleThanksModal() {
        const btnModalOpen = this.root.querySelector('.btn-submit');
        const btnModalClose = this.root.querySelector('#btn-thanks-close');
        const modal = this.root.querySelector('.modal--thank-you');



        btnModalOpen.addEventListener('click', (e) => {
            e.preventDefault();
            this.overlay.classList.add('active');
            modal.classList.add('active')
        })

        btnModalClose.addEventListener('click', () => {
            this.overlay.classList.remove('active');
            modal.classList.remove('active')
        })
    }


    run() {
        if(!this.root) return;
        this._toggleThanksModal();
    }
}

export default Registration