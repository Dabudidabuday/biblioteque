import Slider from "components/Slider";

class CartPage {
    constructor(root) {
        this.root = document.querySelector(root);
        this.slider = new Slider();
    }

    _initRecomendedSlider() {
        const sliderContainer = this.root.querySelector('.recommended__product-list.slider');

        this.slider.initSlider(sliderContainer);
    }

    run() {
        if(!this.root) return;
        this._initRecomendedSlider();
    }
}

export default CartPage