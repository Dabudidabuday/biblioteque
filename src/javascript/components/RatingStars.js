class RatingStars {
    constructor(root) {
        this.root = document.querySelector(root);
    }

    _starsUI() {
        const inputWrappers = Array.from(this.root.querySelectorAll('.radio-wrapper'));

        inputWrappers.forEach((item, index) => {
            item.addEventListener('click', (e) => {

                const closestParent = e.target.closest('.radio-wrapper');
                const currentid = closestParent.querySelector('.input-rating').dataset.id;

                closestParent.classList.add('active');

                inputWrappers.forEach((item, index) => {
                    if(currentid <= index) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                })
            });
        });
    }

    run() {
        if (!this.root) return;

        this._starsUI();
    }
}

export default RatingStars
