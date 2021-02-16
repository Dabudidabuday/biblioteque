class CheckoutPage {
    constructor(root) {
        this.root = document.querySelector(root);
        this.overlay = document.querySelector('#overlay');
    }

    _initModalAddAddress() {
        const modal = this.root.querySelector('.modal--add-address');
        const modalOpen = this.root.querySelector('.addAddress');
        const modalClose = modal.querySelector('.btn-close');
        const buttonSendData = modal.querySelector('#btnSaveAddress');
        const btnCancel = modal.querySelector('#btnCancelAddress');

        modalOpen.addEventListener('click', () => {
            modal.classList.add('active');
            this.overlay.classList.add('active');
        });

        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
            this.overlay.classList.remove('active');
        });

        buttonSendData.addEventListener('click', () => {
            modal.classList.remove('active');
            this.overlay.classList.remove('active');
        })

        btnCancel.addEventListener('click', () => {
            modal.classList.remove('active');
            this.overlay.classList.remove('active');
        })
    }

    run() {
        if(!this.root) return;
        this._initModalAddAddress();


        // console.log('run works');
        // if(!this.root) return;
        // const modal = this.root.querySelector('.modal--add-address');
    }
}

export default CheckoutPage