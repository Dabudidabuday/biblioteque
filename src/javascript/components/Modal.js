class Modal {
    constructor(root) {
        this.root = document.querySelector(root);
        this.overlay = document.querySelector('#overlay');
    }

    _initModalBuyHandlers() {
        const btnsBuy = Array.from(document.querySelectorAll('.btn-buy'));
        const btnClose = this.root.querySelector('.btn-close');

        const desktop = window.matchMedia('(min-width: 1199px)');
        if(desktop.matches) {
            btnsBuy.forEach(item => {
                item.addEventListener('click', () => {
                    this.root.classList.add('active');
                    this.overlay.classList.add('active');
                });
            })

            btnClose.addEventListener('click', () => {
                this.root.classList.remove('active');
                this.overlay.classList.remove('active');
            });
        }
    }

    run() {
        if(!this.root) return;
        
        this._initModalBuyHandlers();
    }
}

export default Modal