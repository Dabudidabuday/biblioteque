class MobileControls {
    constructor(root) {
        this.root = document.querySelector(root);
        this.overlay = document.querySelector('#overlay');
    }

    _sortingUI() {
        const btnOpen = document.querySelector('#btn-category');
        const btnClose = document.querySelector('#btn-close-category');
        const categoryBar = document.querySelector('.category-controls');


        btnOpen.addEventListener('click', () => {
            categoryBar.classList.add('active');
            this.overlay.classList.add('active');
        });

        btnClose.addEventListener('click', () => {
            categoryBar.classList.remove('active');
            this.overlay.classList.remove('active');
        })
    }

    _buttonsUI() {
        const controlButtons = Array.from(this.root.querySelectorAll('.btn-control'));
        
        controlButtons.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
                item.classList.toggle('icon-x');
            })
        });
    }

    _applyChoosed() {
        const buttonsApply = Array.from(document.querySelectorAll('.btnApplyFilter')); 
        const categoryBar = document.querySelector('.category-controls');

        buttonsApply.forEach(item => {
            item.addEventListener('click', () => {
                categoryBar.classList.remove('active');
                this.overlay.classList.remove('active');
            })
        })
    }

    _resetChoosed() {
        const btnReset = this.root.querySelector('.btnResetChoosed');
        const controlButtons = Array.from(this.root.querySelectorAll('.btn-control'));
        btnReset.addEventListener('click', () => {
            controlButtons.forEach(item => {
                item.classList.remove('active', 'icon-x');
            })
        }) 
    }

    _openCloseControlGroup() {
        const controlHeads = Array.from(this.root.querySelectorAll('.control__head'));

        controlHeads.forEach(item => {
            item.addEventListener('click', () => {
                const closestParent = item.closest('.control-group');
                const buttonGroup = closestParent.querySelector('.button-group');

                item.classList.toggle('active');
                buttonGroup.classList.toggle('active');
            })
        })
    }

    _sortingSelectUI() {
        const btnSort = document.querySelector('#btn-sorting');
        const sortList = document.querySelector('.sorting__paremeters-list');
        const sortItems = Array.from(sortList.querySelectorAll('.item'));

        sortItems.forEach(item => {
            item.addEventListener('click', (e) => {
                sortItems.forEach(item => item.classList.remove('active'));

                e.target.classList.toggle('active');
            })
        })

        btnSort.addEventListener('click', () => {
            const parametersList = sortList.querySelector('.parameters');
            this.overlay.classList.toggle('active');
            parametersList.classList.toggle('active');
        })
    }

    _filterControlsUI () {
        const btnOpen = document.querySelector('#btn-filters');
        const btnClose = document.querySelector('.btn-close-filter');
        const categoryBar = document.querySelector('.filter-controls');

        btnOpen.addEventListener('click', () => {
            categoryBar.classList.add('active');
            this.overlay.classList.add('active');
        });

        btnClose.addEventListener('click', () => {
            categoryBar.classList.remove('active');
            this.overlay.classList.remove('active');
        })
    }

    run() {
        if(!this.root) return;

        this._sortingUI();
        this._filterControlsUI();
        this._buttonsUI();
        this._applyChoosed();
        this._resetChoosed();
        this._openCloseControlGroup();
        this._sortingSelectUI();
    }
}

export default MobileControls