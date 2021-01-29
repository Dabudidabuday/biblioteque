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

    run() {
        if(!this.root) return; 
        this._initMainSlider();
        this._initNavSlider();
    }
}

export default ProductGallery