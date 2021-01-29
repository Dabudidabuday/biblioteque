class Tooltip {
    constructor(root) {
        this.root = document.querySelector(root)
    }

    _tooltipUI() {
        const btnOpen = document.querySelector('#btnTooltipOpen');

        btnOpen.addEventListener('click', () => {
            btnOpen.classList.add('active');
            this.root.classList.add('active');
            this._closeTooltipHandler();
        })
    }

    _closeTooltipHandler() {
        // window.addEventListener('click', (e) => {
        //     console.log(e.target);
        //     if(
        //         !e.target.classList.contains('.tooltip') 
        //         && 
        //         this.root.classList.contains('active')
        //         &&
        //         e.target.closest('.tooltip')
        //     ) {
        //         console.log(e.target.classList.contains('.tooltip'));
        //         this.root.classList.remove('active');
        //     } else {
        //         this.root.classList.add('active');
        //     }
        // }) 
    }

    run() {
        if(!this.root) return;
        
        this._tooltipUI();

    }
}

export default Tooltip