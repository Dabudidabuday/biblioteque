import Slider from 'components/Slider';

class ProductGallery {
    constructor(root) {
        this.root = document.querySelector(root);
        this.slider = new Slider();

        this.mainSliderSettings = {
            prevNextButtons: false,
            cellAlign: 'left'
        }

        this.navSliderSettings = {
            asNavFor: '.hero__main-slider',
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            cellAlign: 'center'
        }
    }

    _initMainSlider() {
        const sliderContainer = this.root.querySelector('.hero__main-slider');
        this.slider.initSlider(sliderContainer, this.mainSliderSettings);
    }

    _initNavSlider() {
        const sliderContainer = this.root.querySelector('.hero__nav-slider');
        this.slider.initSlider(sliderContainer, this.navSliderSettings);
    }

    _productPreview() {
        const products = Array.from(this.root.querySelectorAll('.hero__main-slider .item'));
        const flickityViewPort = this.root.querySelector('.flickity-viewport');
        const previewControls = document.querySelector('.product-preview__controls');

        products.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.add('active');
                flickityViewPort.style.overflow="visible";
                previewControls.classList.remove('hide');
            })
        });

        const btnZoomOff = document.querySelector('#btnZoomOff');

        btnZoomOff.addEventListener('click', () => {
            products.forEach(item => item.classList.remove('active'));
            flickityViewPort.style.overflow="hidden";
            previewControls.classList.add('hide');
        })
    }

    run() {
        if(!this.root) return;

        const mobile = window.matchMedia('(max-width: 1024px)');

        if(mobile.matches) {
            setTimeout(() => {
                this._productPreview();
            }, 300)

        }

        this._initMainSlider();
        this._initNavSlider();
    }
}

export default ProductGallery