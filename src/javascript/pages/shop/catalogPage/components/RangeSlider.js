class RangeSlider {
  constructor(root) {
    this.root = document.querySelector(root);
  }

  run() {
    if(!this.root) return;
    
    const minDollars = 500;
    const maxDollars = 15000;

    const inputMin = this.root.querySelector('#from');
    const inputMax = this.root.querySelector('#to');
    
    const minSlider = this.root.querySelector('#min');
    const maxSlider = this.root.querySelector('#max');


    function numberWithSpaces(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };


    function updateDollars() {
      let fromValue = (maxDollars - minDollars) * minSlider.value / 100 + minDollars;
      let toValue   = (maxDollars - minDollars) * maxSlider.value / 100 + minDollars;

      inputMin.value = `${numberWithSpaces(Math.floor(fromValue))}`;
      inputMax.value   = `${numberWithSpaces(Math.floor(toValue))}`;
    };

    maxSlider.addEventListener('input', () => {
      let minValue = parseInt(minSlider.value);
      let maxValue = parseInt(maxSlider.value);
       
      if (maxValue < minValue + 10) {
        minSlider.value = maxValue - 10;
          
        if (minValue === parseInt(minSlider.min)) {
          maxSlider.value = 10;
        }
      };
    
      updateDollars();
    });
    
    minSlider.addEventListener('input', () => {
      let minValue = parseInt(minSlider.value);
      let maxValue = parseInt(maxSlider.value);

      if (minValue > maxValue - 10) {
        maxSlider.value = minValue + 10;
          
        if (maxValue === parseInt(maxSlider.max)) {
          minSlider.value = parseInt(maxSlider.max) - 10;
        };
      };
    
      updateDollars()
    });
    
    
  };
}

export default RangeSlider

