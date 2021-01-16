import Slider from 'components/Slider';

class Hero { 
    constructor(rootElement) {
        this.root = document.querySelector(rootElement);
        this.sliderContainer = this.root.querySelector('.hero__slider');
        this.slider = new Slider();

        this.sliderOptions = {
            pageDots: true,
            prevNextButtons: false,
            cellAlign: 'left'
        }
    }

    run() {
        if(!this.root) return;
        this.slider.initSlider(this.sliderContainer, this.sliderOptions);
    }
}

export default Hero;