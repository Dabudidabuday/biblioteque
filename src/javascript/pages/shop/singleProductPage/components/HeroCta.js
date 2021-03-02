class HeroCta {
    constructor(root) {
        this.root = document.querySelector(root);
    }

    _toggleTooltip() {
        const btnOpen = this.root.querySelector('.cta__icon');
        const tooltip = this.root.querySelector('.cta__tooltip');

        const toggle = event => {
            event.stopPropagation();

            if (!event.target.closest('.cta__tooltip')) {
                tooltip.classList.toggle('active');
                btnOpen.classList.toggle('active');

                tooltip.classList.contains('active')
                    ? document.addEventListener('click', toggle)
                    : document.removeEventListener('click', toggle);
            } else {

            }
        }

        btnOpen.addEventListener('click', toggle);
    }

    run() {
        if(!this.root) return;
        this._toggleTooltip();
    }
}

export default HeroCta