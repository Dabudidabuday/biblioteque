import Slider from "components/Slider";

class SectionInvite {
    constructor(root) {
        this.root = document.querySelector(root);
        this.slider = new Slider();
    }

    _initSlider() {
        const sliderContainer = this.root.querySelector('.store-slider');
        this.slider.initSlider(sliderContainer);
    }

    run() {
        if(!this.root) return;
        this._initSlider();
    }
}

export default SectionInvite