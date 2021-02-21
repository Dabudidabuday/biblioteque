class WishList {
    constructor(root) {
        this.root = document.querySelector(root);
    }

    _toWishList() {
        const btn = document.querySelector('.btn-add-wish');

        btn.addEventListener('click', () => {
            this.root.querySelector('.wish-empty').classList.remove('active');
            this.root.querySelector('.wish-products').classList.add('active');
        })
    }

    _deleteCard() {
        const btnDelete = Array.from(document.querySelectorAll('.card__like'));

        btnDelete.forEach(item => {
            item.addEventListener('click', (e) => {
                const parentCard = e.target.closest('.card--product');

                parentCard.remove();
            })
        })
    }

    run() {
        if(!this.root) return;
        this._deleteCard();
        this._toWishList();
    }
}

export default WishList