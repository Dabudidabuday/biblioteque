

class CatalogFilters {
    constructor(root) {
        this.root = document.querySelector(root);
    }

    filterButtonsUI() {
        const filterButtons = Array.from(this.root.querySelectorAll('.btn-filter'));

        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                filterButtons.forEach(button => button.classList.remove('active'));

                e.target.classList.toggle('active');
            })
        })
    }

    _initFilterLibrary() {
        const productsGrid = this.root.querySelector('.products__grid');
        const filterButtonsContainer = this.root.querySelector('.sidebar__categories');
        const filterButtonsContainer2 = this.root.querySelector('.products__sort-tabs');
        const sortButtons = this.root.querySelector('.catalog__head .custom-select__options');

        const isotopeInitial = new Isotope( productsGrid, {
            itemSelector: '.card--product',
            masonry: {
                // columnWidth: '.grid-sizer',
                // columnHeight: '.grid-sizer',
                // gutter: '.gutter-sizer',
                stagger: 70,
                transitionDuration: '0.7s',
            },
            getSortValue: {
                price: '.price__quantity parseInt',
                popular: '.popular',
                new: '.new'
            }
        })

        sortButtons.addEventListener('click', event => {
            if ( !matchesSelector( event.target, 'li' ) ) {
                return;
            }

            let sortValue = event.target.getAttribute('data-sort-value');
            isotopeInitial.arrange({ sortBy: sortValue })
        })

        filterButtonsContainer.addEventListener( 'click', function( event ) {
            if ( !matchesSelector( event.target, 'button' ) ) {
                return;
            }

            var filterValue = event.target.getAttribute('data-filter');
            isotopeInitial.arrange({ filter: filterValue });
        });

        filterButtonsContainer2.addEventListener('click', (event) => {
            if ( !matchesSelector( event.target, 'button' ) ) {
                return;
            }

            var filterValue = event.target.getAttribute('data-filter');
            isotopeInitial.arrange({ filter: filterValue });
        })
    }

    run() {
        if(!this.root) return;
        this.filterButtonsUI();
        this._initFilterLibrary();
    }
}

export default CatalogFilters