class Modal {
    constructor(root) {
        this.root = document.querySelector(root);
        this.overlay = document.querySelector('#overlay');
    }

    _initHandlers() {
        
        const btnsBuy = Array.from(document.querySelectorAll('.btn-buy'));
        const btnClose = this.root.querySelector('.btn-close');

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

    run() {
        if(!this.root) return;
        
        this._initHandlers();
    }
}

export default Modal