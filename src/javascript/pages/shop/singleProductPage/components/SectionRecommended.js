import Slider from "components/Slider";

class SectionRecommended {
    constructor(root) {
        this.root = document.querySelector(root);
        this.slider = new Slider();
        this.additionalSliderSettings = {
            cellAlign: 'left'
        }
    }

    _initSectionSlider() {
        const sliderContainer = this.root.querySelector('.recommended__product-list');
        this.slider.initSlider(sliderContainer, this.additionalSliderSettings);
    }

    run() {
        if(!this.root) return;

        this._initSectionSlider();
    }
}

export default SectionRecommended