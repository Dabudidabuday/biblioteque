import Slider from "components/Slider";

class ThanksPage {
    constructor(root) {
        this.root = document.querySelector(root);
        this.slider = new Slider();
    }

    _initRecommendedSlider() {
        const sliderContainer = this.root.querySelector('.slider');

        this.slider.initSlider(sliderContainer);
    }

    run() {
        if(!this.root) return;

        this._initRecommendedSlider();
    }
}

export default ThanksPage