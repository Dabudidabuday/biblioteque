class Filters {
    constructor(rootElement) {
        this.root = document.querySelector(rootElement);
    }

    _filterUi() {
        const head = Array.from(this.root.querySelectorAll('.filter__head'));

        head.forEach(item => {
            item.addEventListener('click', (e) => {
                const closestParent = item.closest('.filter');
                const body = closestParent.querySelector('.filter__body');
                const arrow = closestParent.querySelector('.select-arrow');

                body.classList.toggle('active');
                arrow.classList.toggle('active');
            })
        })
    }

    run() {
        if(!this.root) return;

        this._filterUi();
    }
}

export default Filters