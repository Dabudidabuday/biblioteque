class Slider {
  constructor(rootElement) {
    this.rootElement = document.querySelector(rootElement);
  }

  initSlider(root, additionalSettings) {
    const container = root;
    const defaultSettings = {
      contain: true,
      pageDots: false,
      // freeScroll: false
      cellAlign: 'center',
      wrapAround: true
    };

    const sliderOptions = Object.assign(defaultSettings, additionalSettings)
    const slider = new Flickity(container, sliderOptions);
  }
  
  run() {
    if(!this.rootElement) return;
    const checkoutPage = document.querySelector('.checkout-page');

    if(checkoutPage) return;

    const stepCart = document.querySelector('.step--cart');
    const desktop = window.matchMedia("(min-width: 768px)");
    var sliderContainer = document.querySelector('.recommended__product-list');
    var flkty = new Flickity( sliderContainer, {
      // cellAlign: 'left',
      contain: true,
      wrapAround: true,
      pageDots: false,
      freeScroll: false
    });

    if(stepCart || !desktop.matches) {
      flkty.destroy();
    }
  }
}

export default Slider
