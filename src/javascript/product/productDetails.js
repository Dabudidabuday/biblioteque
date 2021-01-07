class ProductDetails {
    constructor(rootElement) {
        this.rootElement = document.querySelector(rootElement);
        // this.cards = Array.from(this.rootElement.querySelectorAll('.card'))

        // const data = {
        //     title: 'Черный инжир',
        //     notes: {
        //         heart: 'кедр, бобы тонка'
        //     }
        // }
        this.currentproductDetails = '';
    }

    _insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    _createProductDetails() {
        const cardDetails = document.createElement('div');
        cardDetails.classList.add('card--details');

        var data = `
            <h4 class="h4 modal__title">Черный инжир</h4>
            <p class="modal__text"><b>Верхние ноты:</b> листья инжира, ревень, петитгрейн.</p>
            <p class="modal__text"><b>Ноты сердца:</b>инжир, молоко.</p>
            <p class="modal__text"><b>База:</b> кедр, бобы тонка, коричневый сахар.</p>
            <p class="modal__text"><b>Ольфактурная группа:</b> фруктовые.</p>
            <button class="btn-close btn-reset modal-close">
                <span class="line--md"></span>
                <span class="line--md"></span>
            </button>
        `;

        cardDetails.innerHTML = data;
        this.currentproductDetails = cardDetails;
    }

    static insertProductDetails(cards, grid) {
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                this._createProductDetails()
                console.log(this._createProductDetails);
                const closestParent = e.target.closest('.card');

                this._insertAfter(closestParent, this.currentproductDetails);
                grid.layout();
            })
        })
    }

    _productBaseDescription() {
        /* Show-more - Show-less ===  Desktop description */
        const baseDescription = document.querySelector('.base-description');
        const btnReadMore = document.querySelector('.read-more');
        const overlay = document.querySelector('#overlay');
        const modalDetails = document.querySelector('.modal--product-details');

        btnReadMore.addEventListener('click', function() {
            baseDescription.classList.toggle('active');
    
            const mobile = window.matchMedia("(max-width: 768px)");
            const desktop = window.matchMedia("(min-width: 768px)");
    
            if(desktop.matches) {
                if(baseDescription.classList.contains('active')) {
                    btnReadMore.textContent='Свернуть';
                } else {
                    btnReadMore.textContent="Подробнее";
                }
            }
    
            if(mobile.matches) {
                overlay.classList.toggle('active');
                modalDetails.classList.add('active');
            }
        })
    
        /* Show-more - Show-less ===  Mobile description */
        const btnModalClose = document.querySelector('#btn-modal-close');

        btnModalClose.addEventListener('click', function() {
            modalDetails.classList.remove('active');
            overlay.classList.remove('active');
        })
    }

    run() {
        if(!this.rootElement) return;

        this._createProductDetails();
        this._productBaseDescription();
    }
}

export default ProductDetails