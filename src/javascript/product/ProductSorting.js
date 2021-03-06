import ProductDetails from './productDetails';

class ProductSorting {
    constructor(rootElement) {
        this.rootElement = document.querySelector(rootElement);
        this.productsDetails = new ProductDetails('.choose__details');
    }

    _filterTabsUI() {
        const filterButtons = Array.from(this.rootElement.querySelectorAll('.btn-filter'));
        filterButtons.forEach(item => {
            item.addEventListener('click', function(e) {
                filterButtons.forEach(item => {
                    item.classList.remove('active');
                })
    
                e.target.classList.add('active');
    
                const productCards = Array.from(document.querySelectorAll('.card'));
                productCards.forEach(item => {
                    item.classList.remove('active');
                    
                })

                /* remove ALl created card details */
                const cardDetails = Array.from(document.querySelectorAll('.card .card--details'));
                cardDetails.forEach(item => item.remove());
    
                const btnNextStep = document.querySelector('.btn-next');
                btnNextStep.classList.remove('active');
                btnNextStep.classList.remove('btn-active');
            })
        })
    }

    _productSortAnimation() {
        const chooseBase = this.rootElement;

        var elem = document.querySelector('.choose__details');
        var iso = new Isotope( elem, {
            itemSelector: '.card',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.grid-sizer',
                columnHeight: '.grid-sizer',
                gutter: '.gutter-sizer'
            },
            hiddenStyle: {
                opacity: 0
            },
              visibleStyle: {
                opacity: 1
            },
            stagger: 70,
            transitionDuration: '0.7s',
        });
    
        chooseBase.addEventListener( 'click', function( event ) {
            if ( !matchesSelector( event.target, 'button' ) ) {
                return;
            }
    
            var filterValue = event.target.getAttribute('data-filter');
    
            iso.arrange({ filter: filterValue });
        });
    
        const products = Array.from(document.querySelectorAll('.choose__details .card'));
        this.productsDetails.insertProductDetails(products, iso);
    }

/* Duplicate function _filterTabsUI() for testing new section module methodology */
    _filterControlsUI() {
        const filterButtons = Array.from(this.rootElement.querySelectorAll('.btn-filter'));

        filterButtons.forEach(item => {
            item.addEventListener('click', (e) => {
                filterButtons.forEach(item => {
                    item.classList.remove('active');
                })

                e.target.classList.add('active');
            })
        })
    }

/* Duplicate function for testing new section module methodology */
    filterAnimation(tabs, cards) {
        const isotope = new Isotope( cards , {
            itemSelector: '.card',
            layoutMode: 'horiz',
            hiddenStyle: {
                opacity: 0
            },
              visibleStyle: {
                opacity: 1
            },
            stagger: 70,
            transitionDuration: '0.7s',
        });

        tabs.addEventListener('click', (event) => {
            if ( !matchesSelector( event.target, 'button' ) ) {
                return;
            }
    
            var filterValue = event.target.getAttribute('data-filter');
    
            isotope.arrange({ filter: filterValue });
        })
    }

/* Duplicate function for testing new section module methodology */
    initFilterProducts(tabs, cards) {
        this._filterControlsUI();
        this.filterAnimation(tabs, cards);
    }


    run() {
        if(!this.rootElement) return;
        
        this._filterTabsUI();
        this._productSortAnimation();
    }
}

export default ProductSorting