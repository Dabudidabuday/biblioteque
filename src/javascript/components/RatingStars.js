class RatingStars {
    constructor(root) {
        this.root = document.querySelector(root);
    }

    _starsUI() {
        const inputWrappers = Array.from(this.root.querySelectorAll('.radio-wrapper'));

        inputWrappers.forEach((item, index) => {
            item.addEventListener('mouseenter', (e) => {
                e.target.classList.add('active');
                const currentid = e.target.querySelector('.input-rating').id;



            });
        });
    }

    run() {
        if (!this.root) return;

        this._starsUI();
    }
}

export default RatingStars
