class Shop {
    constructor(root) {
        this.root = document.querySelector(root);
        this.overlay = document.querySelector('#overlay');
    }

    _navMenuUI() {
        const btnOpen = this.root.querySelector('#btn-navigation-open');
        const btnClose = this.root.querySelector('#btn-navigation-close');
        const navMenu = this.root.querySelector('.navigation-menu');
        const header = this.root.querySelector('.header');

        btnOpen.addEventListener('click', () => {
            btnOpen.classList.toggle('active');
            navMenu.classList.toggle('active');
            this.overlay.classList.toggle('active');

            const mobile = window.matchMedia('(max-width: 768px;)');

            if(mobile.matches) {
                header.style.zIndex="10";
            }

            const controlBar = document.querySelector('.catalog-bar');
            if(controlBar) {
                controlBar.style.zIndex='0';
            }
        });

        btnClose.addEventListener('click', () => {
            navMenu.classList.remove('active');
            this.overlay.classList.remove('active');

            const controlBar = document.querySelector('.catalog-bar');
            if(controlBar) {
                controlBar.style.zIndex='5';
            }
        })
    }

    run() {
        if(!this.root) return;
        this._navMenuUI();
    }
}

export default Shop