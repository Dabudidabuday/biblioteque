import Slider from '../components/Slider';
import ProductSorting from '../product/productSorting';

class SectionGifts {
    constructor(rootElement) {
        this.rootElement = document.querySelector(rootElement);

        /* Elements */
        this.tabs = this.rootElement.querySelector('.gift__tabs');
        this.slider = this.rootElement.querySelector('.gift-slider')
        this.cards = Array.from(this.rootElement.querySelectorAll('.card'));
        /* Instances */
        this.productSorting = new ProductSorting(rootElement);
        this.carousel = new Slider();
    }

    run() {
        if(!this.rootElement) return;

        this.productSorting.initFilterProducts(this.tabs, this.slider);
        this.carousel.initSlider(this.slider);
    }
}

export default SectionGifts