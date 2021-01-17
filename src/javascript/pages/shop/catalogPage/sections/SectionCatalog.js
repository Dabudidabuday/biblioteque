class SectionCatalog {
    constructor(rootElement) {
        this.root = document.querySelector(rootElement);
    }

    _SortTabsUI() {
        const tabsContainer = this.root.querySelector('.products__sort-tabs');
        const tabs = Array.from(tabsContainer.querySelectorAll('.btn-sort'));

        tabs.forEach(item => {
            item.addEventListener('click', (e) => {
                tabs.forEach(item => item.classList.remove('active'));

                e.target.classList.add('active');
            })
        })
    }

    run() {
        if(!this.root) return;

        this._SortTabsUI();
    }
}

export default SectionCatalog