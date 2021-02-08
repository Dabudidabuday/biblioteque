import Slider from "components/Slider";

class SectionPosts {
    constructor(root) {
        this.root = document.querySelector(root);
        this.slider = new Slider();
    }

    _initSectionSlider() {
        const sliderContainer = this.root.querySelector('.blog-slider');
        this.slider.initSlider(sliderContainer);
        console.log(sliderContainer)
    }

    run() {
        if(!this.root) return;
        this._initSectionSlider();
    }
}

export default SectionPosts