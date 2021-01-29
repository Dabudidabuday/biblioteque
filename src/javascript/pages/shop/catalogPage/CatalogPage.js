import Hero from './sections/Hero';
import SectionReview from './sections/SectionReview';
import Filters from 'components/catalog/Filters';
import SectionCatalog from './sections/SectionCatalog.js';
import MobileControls from './components/MobileControls';
import RangeSlider from './components/RangeSlider';
import SearchBar from 'components/SearchBar';

class CatalogPage {
    constructor(rootElement) {
        this.root = rootElement;
        this.filters = new Filters('.sidebar--filter');
        this.hero = new Hero(this.root);
        this.sectionReview = new SectionReview('.section-review');
        this.catalog = new SectionCatalog('.catalog');
        this.mobileControls = new MobileControls('.mobile__catalog-bar');
        this.rangeSlider = new RangeSlider('.sidebar__filters');
        this.rangeSliderMobile = new RangeSlider('.filter-controls');
        this.searchBar = new SearchBar('.header__search-input')
    }

    run() {
        this.hero.run();
        this.filters.run();
        this.sectionReview.run();
        this.catalog.run();
        this.mobileControls.run();
        this.rangeSlider.run();
        this.rangeSliderMobile.run();
        this.searchBar.run();
    }
}

export default CatalogPage