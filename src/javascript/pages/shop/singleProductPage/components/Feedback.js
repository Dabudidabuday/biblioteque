class Feedback {
    constructor(root) {
        this.root = document.querySelector(root);
        this.overlay = document.querySelector('#overlay');
    }

    _checkClassComments(item, className) {
        const commentsLists = Array.from(this.root.querySelectorAll('.comments-list'));

        if(item.classList.contains(className)) {
            
        }
    }

    _commentsUI() {
        const tabsContainer = this.root.querySelector('.feedback__tabs');
        const tabs = Array.from(tabsContainer.querySelectorAll('.btn-tab'));

        tabs.forEach(item => {
            item.addEventListener('click', (e) => {
                tabs.forEach(item => item.classList.remove('active'));
                e.target.classList.add('active');

                const currentTargetClassName = item.classList[1];
                
                if(currentTargetClassName == 'comments') {
                    this.root.querySelector('.comments-list.questions').classList.remove('active');
                    this.root.querySelector('.comments-list.comments').classList.add('active');
                } else {
                    this.root.querySelector('.comments-list.comments').classList.remove('active');
                    this.root.querySelector('.comments-list.questions').classList.add('active');
                }
            });
        });
    }

    _modalCommentUI() {
        const modal = document.querySelector('.modal--comment');
        const openButtons = Array.from(this.root.querySelectorAll('.btn-reply'));
        const closeModalButton = document.querySelector('#btnCloseModalComments');

        openButtons.forEach(item => {
            item.addEventListener('click', () => {
                this.overlay.classList.add('active');
                modal.classList.add('active');
            })
        })

        closeModalButton.addEventListener('click', () => {
            this.overlay.classList.remove('active');
            modal.classList.remove('active');

            this._resetInputValue();
        })
    }

    _modalThanksForCommentUI() {
        const modal = document.querySelector('.modal--thank-you');
        const btnSubmit = document.querySelector('.comments-form .btn-submit');

        btnSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            this.overlay.classList.add('active');
            modal.classList.add('active');

            setTimeout(() => {
                this.overlay.classList.remove('active');
                modal.classList.remove('active');
            }, 3000);
        })

    }

    _requiredAuthUI() {
        const btnLeaveComment = this.root.querySelector('.btn-leave-comment');

        const isLogin = false;

        btnLeaveComment.addEventListener('click', () => {

            if(!isLogin) {

            }
        })
    }


    /* Не появляются лейблы после стирания значений в инпутах */
    // _resetInputValue() {
    //     const modal = document.querySelector('.modal--comment');
    //     const modalInput = Array.from(modal.querySelectorAll('.form-input'));
    //     const textarea = modal.querySelector('textarea');

    //     modalInput.forEach(item => {
    //         item.value = '';
    //     })

    //     textarea.value = '';
    // }

    run() {
        if(!this.root) return;
        this._commentsUI();
        this._modalCommentUI();
        this._modalThanksForCommentUI();
    }
}

export default Feedback