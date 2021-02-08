import Slider from 'components/Slider';
// import ProductSorting from 'productComponents/ProductSorting';

class SectionGifts {
    constructor(root) {
        this.root = document.querySelector(root);

        /* Elements */
        // this.tabs = document.querySelector('.gift__tabs');
        // this.slider = document.querySelector('.gift-slider')
        // this.cards = Array.from(document.querySelectorAll('.card'));

        /* Instances */
        // this.productSorting = new ProductSorting(rootElement);


        this.slider = new Slider();
        this.additinalSliderSettings = {
            // cellAlign: 'left'
        }
    }

    _initFilterTabsUI() {
        const filterButtons = Array.from(this.root.querySelectorAll('.btn-filter'));

        filterButtons.forEach(item => {
            item.addEventListener('click', (e) => {
                filterButtons.forEach(item => {
                    item.classList.remove('active');
                })

                e.target.classList.add('active');
            })
        })
    }

    _initSectionSlider() {
        const sliderContainer = this.root.querySelector('.gift-slider');
        this.slider.initSlider(sliderContainer, this.additinalSliderSettings);
        // console.log(this.slider.initSlider)
    }

    run() {
        if(!this.root) return;
        this._initFilterTabsUI();
        this._initSectionSlider();
        // this.productSorting.initFilterProducts(this.tabs, this.slider);
    }
}

export default SectionGifts