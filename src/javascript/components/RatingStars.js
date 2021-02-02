class RatingStars {
    constructor(root) {
        this.root = document.querySelector(root);
    }

    _starsUI() {
        const inputWrappers = Array.from(this.root.querySelectorAll('.radio-wrapper'));

        inputWrappers.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                e.target.classList.add('active');

                const previous = e.target.previousElementSibling;
                if(previous) {
                    // previous.classList.add('active');

                    for(let i = 0; i < inputWrappers.length; i++) {

                    }

                    inputWrappers.forEach(item => {


                        // if(!item.nextElementSibling.classList.contains('active')) {
                        //   return;
                        // } else {
                        //     item.classList.add('active');
                        // }

                        // do {
                        //     item.classList.add('active')
                        //     console.log('hello')
                        // } while(item.nextElementSibling.classList.contains('active'));
                        // if(item.nextElementSibling.classList.contains('active')) return;
                        // item.classList.add('active');

                    });
                }
            });
        });
    }

    run() {
        if (!this.root) return;

        this._starsUI();
    }
}

export default RatingStars
