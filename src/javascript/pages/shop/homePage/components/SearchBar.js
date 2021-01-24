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

    run() {
        if(!this.root) return;

        this._searchInputUI();
        this._searchResultsHandler();
    }
}

export default SearchBar