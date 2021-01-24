import '../scss/index.scss';

import "regenerator-runtime/runtime.js";

/* App Components */
import './components/colorPalette.js';
import './components/forms.js';

/* Shop Components */
import './product/productsCards.js';
import './product/productPreview.js';


/* Class Based App */
import Overlay from './components/overlays.js';
import FormFilter from './components/forms.js';
import ProductPreview from './product/productPreview.js';
import ColorPalette from './components/colorPalette';
import HomeUi from './components/homeUi';
import ProductDetails from './product/productDetails';
import Accordion from './components/accordion.js';
import ProductSorting from './product/productSorting';
import CartUI from './sections/cartUI';
import Slider from './components/Slider';

/* PAGES */
import HomePage from './pages/shop/homePage/HomePage';
import CatalogPage from './pages/shop/catalogPage/CatalogPage';
import SingleProduct from './pages/shop/singleProductPage/SingleProduct';
class App {
    constructor() {
        this.overlay = new Overlay(
            '#overlay', 
            [
                '.modal--product-details', 
                '.modal--contacts', 
                '#modalPerfume', 
                '.navigation-menu', 
                '.product__show-more',
                '.mobile__catalog-bar',
                '.header__search-input'
            ], 
            'active'
            );
        this.homeUi = new HomeUi('.home');
        this.accordion = new Accordion('.accordion');
        this.productPreview = new ProductPreview('.order-preview__img img');
        this.productSorting = new ProductSorting('.choose__base');
        this.productDetails = new ProductDetails('.choose__details');
        this.colorPalette = new ColorPalette('.base__color-palette');
        this.formFilter = new FormFilter('.form-grid');
        this.cartUI = new CartUI('.product__show-more');
        this.slider = new Slider('.slider');
    
        /* SHOP pages  */
        this.home = new HomePage('.shop-home');
        this.catalog = new CatalogPage('.shop-catalog');
        this.singleProduct = new SingleProduct('.shop-single-product');
    }

    run() {
        this.homeUi.run();
        this.overlay.run();
        this.productPreview.run();
        this.colorPalette.run();
        this.productDetails.run();
        this.accordion.run();
        this.productSorting.run();
        this.formFilter.run();
        this.cartUI.run();
        this.slider.run();

        /* Shop pages */
        this.home.run();
        this.catalog.run(); 
        this.singleProduct.run();
    }
}

window.onload = () => {
    const app = new App();

    app.run();
}

const minus = Array.from(document.querySelectorAll('.btn-minus'));
const plus = Array.from(document.querySelectorAll('.btn-plus'));
const input = document.querySelector('.quantity-input');

minus.forEach(item => {
    const parent = item.closest('.quantity-group');
    const input = parent.querySelector('.quantity-input');

    item.addEventListener('click', function() {
        if(input.value === '1') return;
    
        input.value--;
    })
})

plus.forEach(item => {
    const parent = item.closest('.quantity-group');
    const input = parent.querySelector('.quantity-input');

    item.addEventListener('click', function() {
        input.value++;
    })
})

/*  Perfume modal open-close */
const modalPerfume = document.querySelector('#modalPerfume');

if(modalPerfume) {
    const btnDetails = document.querySelector('.order__perfume-details');
    const btnClose = document.querySelector('.btn-close');
    btnDetails.addEventListener('click', function() {
        modalPerfume.classList.add('active');
        overlay.classList.add('active');
    })
    
    btnClose.addEventListener('click', function() {
        modalPerfume.classList.remove('active');
        overlay.classList.remove('active');
    })
    
    /* thank-you page  */
    const btnFinal = document.querySelector('#btnFinal');
    
    btnFinal.addEventListener('click', function() {
        const order = document.querySelector('.order__product-list');
        const cart = document.querySelector('.cart__final');
        const newContent = document.querySelector('.cart__empty');
        
        order.style.display="none";
        cart.style.display="none";
        newContent.style.display="block";
    })
}

/* Checkout city-list buttons */
const cities = Array.from(document.querySelectorAll('.btn-link--underline'));

cities.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); 

        cities.forEach(item => {
            item.classList.remove('active');
        })

        item.classList.add('active');

        /* fill city-input on click city button */
        const itemValue = item.innerHTML;
        const inputCity = document.querySelector('#input-city');
        // console.log(inputCity.value=e.target.value);
        inputCity.value=itemValue;
    })
});

/* Custom Select */
const customSelect = Array.from(document.querySelectorAll('.custom-celect__input'));

customSelect.forEach(item => {
    item.addEventListener('click', function(e) {
        if(e.target) {
            const closestParent = e.target.closest('.custom-select');
            const arrow = closestParent.querySelector('.select-arrow');
            const selectBody = closestParent.querySelector('.custom-select__options');
            selectBody.classList.add('active');
            arrow.classList.add('active');

            
        }  
    })
})

/* закидываем выбранный пункт чекбокса в инпут селекта и закрываем селект */
const options = Array.from(document.querySelectorAll('.option__items .item'));

options.forEach(item => {
    item.addEventListener('click', function(e) {
        const value = e.target.textContent;
        const closestParent = item.closest('.custom-select');
        const selectInput = closestParent.querySelector('.custom-celect__input');

        selectInput.value = value;

        const localItems = Array.from(closestParent.querySelectorAll('.item'))

        localItems.forEach(item => {
            item.classList.remove('active')
        })

        e.target.classList.add('active');
        
        const items = closestParent.querySelector('.custom-select__options');
        const arrow = closestParent.querySelector('.select-arrow');
        
        setTimeout(() => {
            items.classList.remove('active');
            arrow.classList.remove('active');
        }, 600)
        
    })
})

/* слушаем документ на то, был ли клик снаружи селекта
*  Если да, то находим ближайшего родителя открытого текущего элемента, и закрываем его
*/
document.addEventListener('click', function(e) {
    customSelect.forEach(item => {
        const closestParent = item.closest('.custom-select');
        const selectBody = closestParent.querySelector('.custom-select__options');
        const arrow = closestParent.querySelector('.select-arrow');
        const isClickInsideSelect = item.contains(e.target);
        const isClickInsideSelectList = selectBody.contains(e.target);

        if(!isClickInsideSelect && !isClickInsideSelectList) {
            selectBody.classList.remove('active');
            arrow.classList.remove('active');
        } 
    })
});

/* hide form input labels when input have value */
const inputList = Array.from(document.querySelectorAll('.form-input'));

inputList.forEach(item => {
    item.addEventListener('input', function() {
        if(item.value != '') {
            const closestParent = item.closest('.input-wrapper');
            const label = closestParent.querySelector('.label');

            label.style.opacity="0";
        } else {
            const closestParent = item.closest('.input-wrapper');
            const label = closestParent.querySelector('.label');
            label.style.opacity="1";
        }
    })
})



/* show-hide modal-contacts */
const btnModalContacts = document.querySelector('#btnModalContacts');

if(btnModalContacts) {
    const modalContacts = document.querySelector('.modal--contacts');
    btnModalContacts.addEventListener('click', function() {
        const overlay = document.querySelector('#overlay');
        overlay.classList.add('active');
        modalContacts.classList.add('active');
    })
    
    const modalClose = document.querySelector('#btn-modal-close');
    
    modalClose.addEventListener('click', function() {
        overlay.classList.remove('active');
        modalContacts.classList.remove('active');
    })
}