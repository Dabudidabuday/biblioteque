import ProductSorting from '../../../../product/ProductSorting';
import Slider from 'components/Slider';
class SectionBestsellers {
    constructor(root) {
        this.root = document.querySelector(root);
        this.productSorting = new ProductSorting(root);
        this.slider = new Slider();
    }

    _tabsUI() {
        const tabs = Array.from(this.root.querySelectorAll('.btn-underline'));

        tabs.forEach(item => {
            item.addEventListener('click', (e) => {
                tabs.forEach(item => item.classList.remove('active'));

                e.target.classList.add('active');
            })
        })
    }

    _initSectionSlider() {
        const sliderContainer = this.root.querySelector('.gift-slider');
        this.slider.initSlider(sliderContainer)
    }

    run() {
        if(!this.root) return;
        this._tabsUI();

        this._initSectionSlider();
        const tabs = this.root.querySelector('.gift__tabs');
        const slider = this.root.querySelector('.gift-slider');
        // this.productSorting.initFilterProducts(tabs, slider);
        
    }
}

export default SectionBestsellers