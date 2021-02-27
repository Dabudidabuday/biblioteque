import Slider from 'components/Slider';

class SectionNew {
    constructor(root) {
        this.root = document.querySelector(root);
        this.slider = new Slider();
        this.additionalSliderSettings = {
            cellAlign: 'left',
            wrapAround: false
        }
    }

    run() {
        if (!this.root) return;
            this.slider.initSlider('.slider--new-products',this.additionalSliderSettings);

    }
}

export default SectionNew