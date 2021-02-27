class Orders {
    constructor(root) {
        this.root = document.querySelector(root);
        this.overlay = document.querySelector('#overlay');
    }

    _toggleLeaveCommentModal() {
        const btnOpen = Array.from(document.querySelectorAll('.btn-leave-comment'));
        const btnClose = document.querySelector('#btn-leave-comment-close');
        const modal = document.querySelector('.modal--leave-comment');

        btnOpen.forEach(item => {
            item.addEventListener('click', () => {
                modal.classList.add('active');
                this.overlay.classList.add('active');
            })
        })

        btnClose.addEventListener('click', () => {
            modal.classList.remove('active');
            this.overlay.classList.remove('active');
        })
    }

    _toggleModalHistory() {
        const btnOpen = Array.from(document.querySelectorAll('.order-history'));
        const btnClose = document.querySelector('#btn-history-close');
        const modal = document.querySelector('.modal--order-history');

        btnOpen.forEach(item => {
            item.addEventListener('click', () => {
                modal.classList.add('active');
                this.overlay.classList.add('active');
            })
        })

        btnClose.addEventListener('click', () => {
            modal.classList.remove('active');
            this.overlay.classList.remove('active');
        })
    }

    _toggleConstructedPerfumeModal() {
        const btnOpen = Array.from(this.root.querySelectorAll('.btn-perfume-details'));
        const btnClose = document.querySelector('#btn-perfume-close');
        const modal = document.querySelector('#modalPerfume');

        btnOpen.forEach(btn => {
            btn.addEventListener('click', (e) => {
                modal.classList.add('active');
                this.overlay.classList.add('active');
            })
        });

        btnClose.addEventListener('click', () => {
            modal.classList.remove('active');
            this.overlay.classList.remove('active');
        })
    }

    _toggleOrderCard() {
        const cards = Array.from(this.root.querySelectorAll('.card--my-order'));
        const cardTotals = document.querySelector('.card__totals.active');

        cards.forEach(card => {
            const cardTotals = card.querySelector('.card__totals');
            const cardBody = card.querySelector('.card__body');
            const cardArrow = card.querySelector('.select-arrow');
            const backToCabinet = document.querySelector('.mobile__footer-buttons');

            cardArrow.addEventListener('click', () => {
                cardTotals.classList.toggle('active');
                cardBody.classList.toggle('active');
                cardArrow.classList.toggle('active');

                /* прятать кнопку back-to-cabinet, если открыта карточка заказа */
                if(cardBody.classList.contains('active')) {
                    backToCabinet.classList.add('hide');
                } else {
                    backToCabinet.classList.remove('hide');
                }
            });

            cardTotals.addEventListener('click', () => {
                cardTotals.classList.toggle('active');
                cardBody.classList.toggle('active');
                cardArrow.classList.toggle('active');


                /* прятать кнопку back-to-cabinet, если открыта карточка заказа */
                if(cardBody.classList.contains('active')) {
                    backToCabinet.classList.add('hide');
                } else {
                    backToCabinet.classList.remove('hide');
                }
            });
        })
    }

    run() {
        if(!this.root) return;
        this._toggleOrderCard();
        this._toggleConstructedPerfumeModal();
        this._toggleModalHistory();
        this._toggleLeaveCommentModal();
    }
}

export default Orders