class ProductDetails {
    constructor(rootElement) {
        this.rootElement = document.querySelector(rootElement);
        this.currentproductDetails = '';
        this.currentProductShapeDetails = '';
        this.stepFlavor = document.querySelector('.step--flavor');
        this.stepForm = document.querySelector('.step--form');
    }

    _insertLast(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    _createProductDetails() {
        const cardDetails = document.createElement('div');
        cardDetails.classList.add('card--details');

        var productFlavorData = `
            <h4 class="h4 modal__title">Черный инжир</h4>
            <p class="modal__text"><b>Верхние ноты:</b> листья инжира, ревень, петитгрейн.</p>
            <p class="modal__text"><b>Ноты сердца:</b>инжир, молоко.</p>
            <p class="modal__text"><b>База:</b> кедр, бобы тонка, коричневый сахар.</p>
            <p class="modal__text"><b>Ольфактурная группа:</b> фруктовые.</p>
        `;

        var productShapeData = `
            <h4 class="h4 modal__title">Флакон 2</h4>
            <p class="modal__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam hic, harum pariatur distinctio rem minus fugit iusto odit doloribus?</p>
        `;

        if(this.stepFlavor) {
            cardDetails.innerHTML = productFlavorData;       
            this.currentproductDetails = cardDetails;
        }

        if(this.stepForm) {
            cardDetails.innerHTML = productShapeData; 
            this.currentProductShapeDetails = cardDetails;
        } 
        
    }

    insertProductDetails(cards, grid) {
        cards.forEach(card => {

            const mobile = window.matchMedia('(max-width: 992px)');
            if(mobile.matches) {
                card.addEventListener('click', (e) => {

                    const cardHeaders = Array.from(document.querySelectorAll('.card__head'));

                    cardHeaders.forEach(head => {
                        head.classList.remove('hide');
                    });

                    const parent = e.target.closest('.card');
                    const cardHead = parent.querySelector('.card__head');
                    cardHead.classList.add('hide');
                    this._createProductDetails();

                    cards.forEach(item => {
                        const details = item.querySelector('.card--details');

                        if(details) {
                            item.removeChild(details);
                        }
                    });

                    const closestParent = e.target.closest('.card');

                    if(this.stepFlavor) {
                        closestParent.appendChild(this.currentproductDetails);
                    }

                    if(this.stepForm) {
                        closestParent.appendChild(this.currentProductShapeDetails);
                    }

                    grid.layout();
                })
            }
        })
    }

    _productBaseDescription() {
        /* Show-more - Show-less ===  Desktop description */
        const baseDescription = document.querySelector('.base-description');
        const btnReadMore = document.querySelector('.choose__base .read-more');
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