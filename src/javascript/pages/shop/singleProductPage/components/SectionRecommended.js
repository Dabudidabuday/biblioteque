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
        // const mobile = window.matchMedia('(max-width: 768px)');
        // if(mobile.matches) {
        //     // this.additionalSliderSettings.cellAlign="center";
        // }
        this.slider.initSlider(sliderContainer, this.additionalSliderSettings);
    }

    run() {
        if(!this.root) return;

        this._initSectionSlider();
    }
}

export default SectionRecommended