import Slider from 'components/Slider';

class SectionNew {
    constructor(root) {
        this.root = document.querySelector(root);
        this.slider = new Slider();
    }

    run() {
        if (!this.root) return;
        const desktop = window.matchMedia('(min-width: 769px)');

        if(desktop.matches) {
            this.slider.initSlider('.slider--new-products');
        }

    }
}

export default SectionNew