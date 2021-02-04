class Account {
    constructor(root) {
        this.root = document.querySelector(root);
        this.authModalClassName = '.modal--auth';
        this.overlay = document.querySelector('#overlay');
    }

    chooseMethodAuth(buttonOpen, buttonClose) {
        const modal = document.querySelector(this.authModalClassName);

        buttonOpen.addEventListener('click', () => {
            this.overlay.classList.toggle('active');
            modal.classList.toggle('active');
            console.log('hello from acc method')
        });

        buttonClose.addEventListener('click', () => {
            this.overlay.classList.toggle('active');
            modal.classList.toggle('active');
        })
    }

    run() {
        if(!this.root) return;
    }
}

export default Account