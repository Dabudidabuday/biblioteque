import Slider from 'components/Slider';
import ProductSorting from 'productComponents/ProductSorting';

class SectionGifts {
    constructor(rootElement) {
        this.rootElement = document.querySelector(rootElement);

        /* Elements */
        this.tabs = document.querySelector('.gift__tabs');
        this.slider = document.querySelector('.gift-slider')
        this.cards = Array.from(document.querySelectorAll('.card'));

        /* Instances */
        this.productSorting = new ProductSorting(rootElement);
        this.carousel = new Slider();
    }

    run() {
        if(!this.rootElement) return;

        this.productSorting.initFilterProducts(this.tabs, this.slider);
        // this.carousel.initSlider(this.slider);
    }
}

export default SectionGifts