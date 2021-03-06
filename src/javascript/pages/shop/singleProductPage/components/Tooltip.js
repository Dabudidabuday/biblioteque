class Tooltip {
    constructor(root) {
        this.root = document.querySelector(root);
    }

    _tooltipUI() {
        const btnOpen = document.querySelector('#btnTooltipOpen');

        const toggle = event => {
            event.stopPropagation();

            if (!event.target.closest('.tooltip')) {
                this.root.classList.toggle('active');

                this.root.classList.contains('active')
                    ? document.addEventListener('click', toggle)
                    : document.removeEventListener('click', toggle);
            } else {

            }
        }

        btnOpen.addEventListener('click', toggle);
    }

    run() {
        if(!this.root) return;
        
        this._tooltipUI();

    }
}

export default Tooltip