class SearchBar {
    constructor(root) {
        this.root = document.querySelector(root);
        this.overlay = document.querySelector('#overlay');
    }

    _searchInputUI() {
        const input = this.root.querySelector('.form-input');
        const btnClose = this.root.querySelector('.btn-close');

        input.addEventListener('click', () => {
            this.root.classList.add('active');
            this.overlay.classList.add('active');
        });

        btnClose.addEventListener('click', () => {
            this.root.classList.remove('active');
            this.overlay.classList.remove('active');
        })
    }

    _searchResultsHandler() {
        const searchInput = this.root.querySelector('.form-input');
        const searchResults = this.root.querySelector('.search-results');

        searchResults.addEventListener('click', (e) => {
            const closestParent = e.target.closest('.item');
            const choosedQuery = closestParent.querySelector('.item-link');
            
            const value = choosedQuery.textContent;
            searchInput.value = '';
            searchInput.value = value;

            this.root.classList.remove('active');
            this.overlay.classList.remove('active');
        })
    }



    _mobileSearch() {
        const mobileViewPort = window.matchMedia("(max-width: 768px)");
        const buttonMobileSearchBar = document.querySelector('#buttonMobileSearchBar');
        const btnSearchClose = this.root.querySelector('#btn-search-close');
        const input = this.root.querySelector('.form-input');

        if(mobileViewPort.matches) {
            buttonMobileSearchBar.addEventListener('click', () => {
                this.root.classList.add('mobile-active');
                buttonMobileSearchBar.classList.add('active');
                this.overlay.classList.add('active');
                btnSearchClose.classList.add('active');

                input.placeholder="Поиск товара";
            })

            this.overlay.addEventListener('click', () => {
                this.root.classList.remove('mobile-active');
                buttonMobileSearchBar.classList.remove('active');
                this.overlay.classList.remove('active');
            })

            btnSearchClose.addEventListener('click', () => {
                this.root.classList.remove('mobile-active');
            })

            const searchItems = Array.from(this.root.querySelectorAll('.search-results .item'));

            searchItems.forEach(item => {
                item.addEventListener('click', () => {
                    this.root.classList.remove('active');
                    this.overlay.classList.remove('active');

                    setTimeout(() => {
                        this.root.classList.remove('mobile-active');
                    }, 600)
                }, 250)
            })

        }
    }

    run() {
        if(!this.root) return;

        this._searchInputUI();
        this._searchResultsHandler();
        this._mobileSearch();
    }
}

export default SearchBar