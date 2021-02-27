import Slider from 'components/Slider';

class SectionReview {
    constructor(rootElement) {
        this.root = document.querySelector(rootElement);
        this.slider = new Slider();
        this.reviews = document.querySelector('.review__list.slider');
        this.sliderSettings = {
            contain: true,
            pageDots: false,
            freeScroll: false,
            wrapAround: false
        }
    }

    run() {
        if(!this.root) return;
        this.slider.initSlider(this.reviews, this.sliderSettings);
    }
}

export default SectionReview 