import Slider from "components/Slider";

class CorporateGifts {
    constructor(root) {
        this.root = document.querySelector(root);
        this.slider = new Slider();
        this.sliderAdditionalSettings = {
            prevNextButtons: false,
            pageDots: true
        }
    }

    _initDesktopSlider() {
        const sliderContainer = this.root.querySelector('.slider');
        this.slider.initSlider(sliderContainer, this.sliderAdditionalSettings);
    }
    _initMobileSliders() {
        const mobileSliderContainer = this.root.querySelector('.mobile-slider');
        this.slider.initSlider(mobileSliderContainer, this.sliderAdditionalSettings);
    }

    run() {
        if(!this.root) return;
        this._initDesktopSlider();

        const mobile = window.matchMedia('(max-width: 1024px)');

        if(mobile.matches) {
            this._initMobileSliders();
        }
    }
}

export default CorporateGifts