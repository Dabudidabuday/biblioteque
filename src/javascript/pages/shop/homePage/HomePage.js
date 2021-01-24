import SectionGifts from './sections/SectionGifts';

import Header from './sections/Header';
import Hero from './sections/Hero';
import SectionFounder from './sections/SectionFounder';
import SectionBestsellers from './sections/SectionBestsellers';

class HomePage {
    constructor(rootElement) {
        this.root = rootElement;

        this.hero = new Hero(this.root);

        this.sectionFounder = new SectionFounder('.section-founder');
        this.sectionGifts = new SectionGifts('.section-gifts');
        this.sectionBestsellers = new SectionBestsellers('.section-bestsellers');
        this.header = new Header('.shop-home .header');
    }

    run() {
        this.hero.run();
        this.sectionFounder.run();
        this.sectionGifts.run();
        this.sectionBestsellers.run();
        this.header.run();
    }
}

export default HomePage