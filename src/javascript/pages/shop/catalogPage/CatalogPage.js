import Hero from './sections/Hero';
import SectionReview from './sections/SectionReview';
import Filters from 'components/catalog/Filters';
import SectionCatalog from './sections/SectionCatalog.js';
import MobileControls from './components/MobileControls';
class CatalogPage {
    constructor(rootElement) {
        this.root = rootElement;
        this.filters = new Filters('.sidebar--filter');
        
        this.hero = new Hero(this.root);
        this.sectionReview = new SectionReview('.section-review');
        this.catalog = new SectionCatalog('.catalog');
        this.mobileControls = new MobileControls('.mobile__catalog-bar');
    }

    run() {
        this.hero.run();
        this.filters.run();
        this.sectionReview.run();
        this.catalog.run();
        this.mobileControls.run();
    }
}

export default CatalogPage