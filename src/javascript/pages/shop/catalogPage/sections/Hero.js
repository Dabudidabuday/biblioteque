import Slider from 'components/Slider';

class Hero {
    constructor(rootElement) {
        this.root = document.querySelector(rootElement);
        this.sliderContainer = document.querySelector('.slider--fullscreen');
        this.slider = new Slider();

        this.sliderOptions = {
            pageDots: true,
            prevNextButtons: false,
            cellAlign: 'left'
        }
    }

    run() {
        this.slider.initSlider(this.sliderContainer, this.sliderOptions);
    }
}

export default Hero