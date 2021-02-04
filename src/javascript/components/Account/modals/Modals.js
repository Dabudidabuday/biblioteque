class Modals {
    constructor(root) {
        this.root = document.querySelector(root);
        this.authModalClassName = '.modal--auth';
        this.overlay = document.querySelector('#overlay');
    }

    chooseMethodAuth(targetButtons) {
        const modal = document.querySelector(this.authModalClassName);

        targetButtons.forEach(item => {
            item.addEventListener('click', () => {
                this.overlay.classList.toggle('active');
                modal.classList.toggle('active');
            })
        })
    }

    run() {
        if(!this.root) return;
    }
}

export default Modals