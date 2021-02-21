class Addresses {
    constructor(root) {
        this.root = document.querySelector(root);
        this.deliveryEmpty = document.querySelector('.delivery-empty');
        this.addressForm = document.querySelector('.address-form');
        this.deliveryAddressLists = document.querySelector('.delivery-addresses-list');
    }

    _cardCheckboxHandler() {
        const checkboxes = Array.from(this.root.querySelectorAll('.custom-label'));
        const cards = Array.from(this.root.querySelectorAll('.card--address'));

        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                const checkboxHandler = card.querySelector('.custom-label');
                checkboxHandler.click();
            })
        })
    }

    _deleteAddress() {
        const btnDelete = Array.from(this.root.querySelectorAll('.btn-delete'));

        btnDelete.forEach(item => {
            item.addEventListener('click', e => {
                const parentCard = e.target.closest('.card--address');

                parentCard.remove();
            })
        })
    }

    _addAddressUI() {
        const btnAddAddress = this.root.querySelector('.btn-add-address');
        const backToAddressFormBtn = this.root.querySelector('.btnAddNewAddress');

        btnAddAddress.addEventListener('click', () => {
            this.deliveryEmpty.classList.remove('active');
            this.addressForm.classList.add('active');
        })

        backToAddressFormBtn.addEventListener('click', () => {
            this.deliveryAddressLists.classList.remove('active');
            this.addressForm.classList.add('active');
        })
    }

    _toAddressesListHandler() {
        const btnSave = this.root.querySelector('.btnSaveDeliveryAddress');

        btnSave.addEventListener('click', (e) => {
            e.preventDefault()
            this.addressForm.classList.remove('active');
            this.deliveryAddressLists.classList.add('active');
        })
    }

    run() {
        if(!this.root) return;
        this._cardCheckboxHandler();
        this._addAddressUI();
        this._toAddressesListHandler();
        this._deleteAddress();
    }
}

export default Addresses