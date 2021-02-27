class MyAccount {
    constructor(root) {
        this.root = document.querySelector(root);
        this.inputWrappers = Array.from(document.querySelectorAll('.user-info .input-wrapper'));
        this.overlay = document.querySelector('#overlay');
    }

    _toggleSuccessModal() {
        const btnSubmit = document.querySelector('.btn-submit-pass');
        const modal = document.querySelector('.modal--success');
        const btnModalClose = document.querySelector('#btn-modal-success-close');

        btnSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            this.overlay.classList.add('active');

            setTimeout(() => {
                modal.classList.remove('active');
                this.overlay.classList.remove('active');
            }, 2500)
        })

        btnModalClose.addEventListener('click', () => {
            modal.classList.remove('active');
            this.overlay.classList.remove('active');
        })
    }

    _clearInputField() {
        const passInputs = Array.from(document.querySelectorAll('.form-input'));

        passInputs.forEach(input => {
            const closestParent = input.closest('.input-wrapper');

            if(input.value !== "") {
                const label = closestParent.querySelector('.label');

                label.style.opacity="0";
            }

            input.addEventListener('input', () => {

            })
        })
    }

    _toggleTypePasswordInputs() {
        const toggleButtons = Array.from(document.querySelectorAll('.btn-toggle'));

        toggleButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();

                const closestParent = e.target.closest('.input-wrapper');
                const input = closestParent.querySelector('.form-input');
                const icon = closestParent.querySelector('img');

                if(input.type === 'password') {
                    input.type ='text';
                    icon.src="src/images/icons/account/pass-show.svg";
                    icon.style.top="0"
                } else {
                    input.type='password';
                    icon.src="src/images/icons/account/pass-hide.svg";
                    icon.style.top="-3px"
                }
            })
        })
    }

    _changeAccountScreensUI() {
        const toChangePasswordScreen = document.querySelector('.btn-change-pass');
        const backToUserInfo = document.querySelector('.back-to-user-info');
        const accountInfo = document.querySelector('.user-info');
        const changePass = document.querySelector('.change-pass');

        toChangePasswordScreen.addEventListener('click', () => {
            accountInfo.classList.remove('active');
            changePass.classList.add('active');
        })

        backToUserInfo.addEventListener('click', () => {
            accountInfo.classList.add('active');
            changePass.classList.remove('active');
        })
    }

    _sidebarButtonsUI() {
        const buttons = Array.from(document.querySelectorAll('.sidebar__button'));

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                buttons.forEach(button => button.classList.remove('active'));

                e.target.classList.add('active');
            })
        })
    }

    _editAccountFieldsHandler() {
        const btnEdit = document.querySelector('#btnEditAccount');
        const backToCabinet = document.querySelector('.mobile__footer-buttons');

        btnEdit.addEventListener('click', () => {
            this.inputWrappers.forEach(item => {
                item.classList.toggle('active');

                /* Show btn-close near input */
                const btnClose = item.querySelector('.btn-close');
                btnClose.classList.toggle('hide');
            })

            /* allow edit inputs */
            const inputs = document.querySelectorAll('.cabinet-input');
            inputs.forEach(input => {
                input.removeAttribute('readonly');
            })

            /* show-hide save-cencel buttons */
            const formFooter = document.querySelector('.form__footer');
            formFooter.classList.toggle('hide');

            console.log(backToCabinet)
            backToCabinet.classList.toggle('hide');
        })
    }

    _resetFieldHandler() {
        const btnResetFields = Array.from(document.querySelectorAll('.cabinet__content .btn-close'));

        btnResetFields.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.target.classList.add('hide');

                const closestParent = btn.closest('.input-wrapper');
                const inputField = closestParent.querySelector('.cabinet-input');
                inputField.value="";
                inputField.focus();
            })
        })

        const formFields = Array.from(document.querySelectorAll('.cabinet-input'));

        formFields.forEach(input => {
            input.addEventListener('change', (e) => {
                if(input.value !== "") {
                    const closestParent = e.target.closest('.input-wrapper');
                    const btnReset = closestParent.querySelector('.btn-reset');

                    btnReset.classList.remove('hide');
                }
            })
        })
    }

    _initValidation() {
        window.JustValidate('#account-form', {
            // options here
        });
    }

    _saveOrCancelFieldsUI() {
        const btnSaveFields = document.querySelector('.btnSaveFields');
        const btnCancelFields = document.querySelector('.btnCancelFields');

        btnSaveFields.addEventListener('click', (e) => {
            e.preventDefault();

            // this._initValidation();
            this.inputWrappers.forEach(item => {
                item.classList.toggle('active');

                /* Show btn-close near input */
                const btnClose = item.querySelector('.btn-close');
                btnClose.classList.toggle('hide');
            })

            /* allow edit inputs */
            const inputs = document.querySelectorAll('.cabinet-input');
            inputs.forEach(input => {
                input.removeAttribute('readonly');
            })

            const formFooter = document.querySelector('.form__footer');
            formFooter.classList.toggle('hide');
        })

        btnCancelFields.addEventListener('click', (e) => {
            e.preventDefault();
            this.inputWrappers.forEach(item => {
                item.classList.toggle('active');

                /* Show btn-close near input */
                const btnClose = item.querySelector('.btn-close');
                btnClose.classList.toggle('hide');
            })

            /* allow edit inputs */
            const inputs = document.querySelectorAll('.cabinet-input');
            inputs.forEach(input => {
                input.removeAttribute('readonly');
            })

            const formFooter = document.querySelector('.form__footer');
            formFooter.classList.toggle('hide');
        })
    }

    run() {
        this._sidebarButtonsUI();
        this._editAccountFieldsHandler();
        this._saveOrCancelFieldsUI();
        this._resetFieldHandler();
        this._changeAccountScreensUI();
        this._toggleTypePasswordInputs();
        this._clearInputField();
        this._toggleSuccessModal();
    }
}

export default MyAccount