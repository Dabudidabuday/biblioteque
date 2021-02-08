import Slider from "components/Slider";

class SectionStores {
    constructor(root) {
        this.root = document.querySelector(root);
        this.slider = new Slider();
        this.sliderAdditionallSettings = {

        }
    }

    _initSectionSlider() {
        const sliderContainer = this.root.querySelector('.slider-addresses');

        this.slider.initSlider(sliderContainer);
    }


    run() {
        if(!this.root) return;

        this._initSectionSlider();
    }
}

export default SectionStores