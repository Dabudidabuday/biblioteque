
class Slider {
  constructor(rootElement, sliders=[]) {
    this.rootElement = document.querySelector(rootElement);
    this.sliders = sliders;
  }

  initSlider(root, additionalSettings) {
    const container = root;
    const defaultSettings = {
      contain: true,
      pageDots: false,
      // freeScroll: false
      cellAlign: 'left',
      wrapAround: true
    };

    const sliderOptions = Object.assign(defaultSettings, additionalSettings)

    const slider = new Flickity(container, sliderOptions);
  }
  
  run() {
    if(!this.rootElement) return;
    
    const desktop = window.matchMedia("(min-width: 768px)");

    if(desktop.matches) {
      var sliderContainer = document.querySelector('.recommended__product-list');
      var flkty = new Flickity( sliderContainer, {
        // cellAlign: 'left',
        contain: true,
        // wrapAround: true,
        pageDots: false,
        freeScroll: false
      });
    }
  }
}

export default Slider
