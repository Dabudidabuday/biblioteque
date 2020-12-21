/*
 Preview product image in the right side 
*/
class ProductPreview {
    constructor(htmlElement, elements=[]) {
        this.htmlElement = document.querySelector(htmlElement);
        this.elements = elements;
        this.previewImage = document.querySelector('.order-preview__img img');
    }

    _previewAnimation() {
        const tl = gsap.timeline();
        // tl.fromTo(previewImage, { duration: 0.7, opacity: 0, scale: 0.8}, { opacity: 1, scale: 1});
        tl.fromTo(this.previewImage, { duration: 1, opacity: 0, scale: 1.2}, { opacity: 1, scale: 1});
    }
    
    _initAnimationHandler() {
        if(!htmlElement) return;

        const config = {
            attributes: true,
            attributeFilter: ["src"],
        };
        
        const animateImage = function (mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === "attributes" && mutation.attributeName === "src") {
                previewAnimation();
                observer.takeRecords();
                }
            }
        };
        
        const observer = new MutationObserver(animateImage);
        observer.observe(this.previewImage, config);
    }

    _setImage(elements) {
        this.elements.forEach(item => {
            let image = item.dataset.image;
    
            item.addEventListener('click', function() {
                this.previewImage.setAttribute('src', image);
            })
        })
    }

    run() {
        this._initAnimationHandler()
        this.setImage()
    }
}

export default ProductPreview


const previewImage = document.querySelector('.order-preview__img img');

/* если на странице не обнаружен элемент, то скрипт дальше не идет */
const productCards = Array.from(document.querySelectorAll('.card'));
const textCards = Array.from(document.querySelectorAll('.cards-list .card--text'))


function setImage(list) {
    list.forEach(item => {
        let image = item.dataset.image;

        item.addEventListener('click', function() {
            previewImage.setAttribute('src', image);
        })
    })
}

setImage(productCards);
setImage(textCards);

const previewAnimation = function() {
    const tl = gsap.timeline();

    // tl.fromTo(previewImage, { duration: 0.7, opacity: 0, scale: 0.8}, { opacity: 1, scale: 1});
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