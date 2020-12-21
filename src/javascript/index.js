import '../scss/index.scss';

/* App Components */
// import './components/cursor.js';
import './components/accordion.js';
import './components/sidebar-navigation.js';
import './components/overlays.js';
import './components/colorPalette.js';
import './components/textCards.js';

/* Shop Components */
import './product/productsCards.js';
import './product/sorting.js';
import './product/steps.js';
import './product/productPreview.js';

/* UI Sections */
import './sections/features.js';

/* Class Based App */
import Cursor from './components/cursor.js';
import Overlay from './components/overlays.js';
import ProductPreview from './product/productPreview.js';

class App {
    constructor() {
        this.cursor = new Cursor();
        this.overlay = new Overlay('#overlay', ['.modal--product-details', '.navigation-menu'], 'active');
        // this.productPreview = new ProductPreview('.choose__details', )
    }

    run() {
        this.cursor.run();
        this.overlay.run()
    }
}

window.onload = () => {
    const app = new App();

    app.run();
}