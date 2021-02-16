import Notifications from "components/Notifications";

class ProductPreview {
    constructor(htmlElement) {
        this.htmlElement = htmlElement;
        this.notifications = new Notifications();
    }

    _setImage(el, img) {
        if(!el) return;
        el.setAttribute('src', img)
    }

    _changeCardCondition(cards, clickedCard) {
        cards.forEach(item => {
            item.classList.remove('active');
        })

        clickedCard.classList.add('active');
    }

    _checkBtnNextOnWarning() {
        const btnNextStep = document.querySelector('.btn-next');

        btnNextStep.addEventListener('click', (event) => {
            if(!btnNextStep.classList.contains('active')) {
                event.preventDefault();
                this.notifications.notificationError();
            } else {

            }
        })
    }

    _checkForNextStep(item) {
        const btnNextStep = document.querySelector('.btn-next');

        if(item.classList.contains('active')) {
            btnNextStep.classList.add('active');
            this.notifications.notificationSuccess();
        } else {
            btnNextStep.classList.remove('active');
            this.notifications.notificationError();
        }
    }

    _productPreviewHandler(list, previewImage) {
        list.forEach(item => {
            let image = item.dataset.image;
    
            item.addEventListener('click', (e) => {
                this._changeCardCondition(list, item);
                this._setImage(previewImage, image);
                this._checkForNextStep(item);
            })
        })
    }

    run() {
        const previewImage = document.querySelector(this.htmlElement);
        const previewImageContainer = document.querySelector('.order-preview__img');
        if(!previewImage) return;
        this._checkBtnNextOnWarning();
        const productCards = Array.from(document.querySelectorAll('.card'));
        const textCards = Array.from(document.querySelectorAll('.cards-list .card--text'))

        this._productPreviewHandler(productCards, previewImage);
        this._productPreviewHandler(textCards, previewImage);
        

        /* zoom products in mobile */
        const btnZoom = document.querySelector('.zoom');
        const footerButtons = document.querySelector('.footer-buttons');
        const btnZoomOffContainer = document.querySelector('.product-preview__controls');
        const btnZoomOff = document.querySelector('#btnZoomOff');
        const chooseBase = document.querySelector('.choose');
        const footer = document.querySelector('.footer');

        btnZoom.addEventListener('click', () => {
            previewImage.classList.add('zoomed');
            footerButtons.classList.add('hide');
            btnZoomOffContainer.classList.remove('hide');
            previewImageContainer.classList.add('active');
            chooseBase.style.opacity="0";
            footer.style.position="fixed";
        })

        btnZoomOff.addEventListener('click', function() {
            previewImage.classList.remove('zoomed');
            footerButtons.classList.remove('hide');
            btnZoomOffContainer.classList.add('hide');
            previewImageContainer.classList.remove('active');
            chooseBase.style.opacity="1";
            footer.style.position="static";
        })

        const previewAnimation = function() {
            const tl = gsap.timeline();
            tl.fromTo(previewImage, { duration: 1, opacity: 0, scale: 1.2}, { opacity: 1, scale: 1});
        }
        
        const config = {
            attributes: true,
            attributeFilter: ["src"],
        };
        
        const animateImage = function (mutationsList, observer) {
            if(!previewImage) return;
            for (let mutation of mutationsList) {
                if (mutation.type === "attributes" && mutation.attributeName === "src") {
                previewAnimation();
                observer.takeRecords();
                }
            }
        };
        
        const observer = new MutationObserver(animateImage);
        observer.observe(previewImage, config);
    }
}

export default ProductPreview
