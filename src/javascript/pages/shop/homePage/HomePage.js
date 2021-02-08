import SectionGifts from './sections/SectionGifts';

import Header from './sections/Header';
import Hero from './sections/Hero';
import SectionFounder from './sections/SectionFounder';
import SectionBestsellers from './sections/SectionBestsellers';
import SectionStores from "pages/shop/homePage/sections/SectionStores";
import SectionInvite from "pages/shop/homePage/sections/SectionInvite";
import SectionPosts from "pages/shop/homePage/sections/SectionPosts";

class HomePage {
    constructor(rootElement) {
        this.root = rootElement;

        this.header = new Header('.shop-home .header');
        this.hero = new Hero(this.root);
        this.sectionFounder = new SectionFounder('.section-founder');
        this.sectionGifts = new SectionGifts('.section-gifts');
        this.sectionBestsellers = new SectionBestsellers('.section-bestsellers');
        this.sectionStores = new SectionStores('.section-stores');
        this.sectionInvite = new SectionInvite('.section-invite');
        this.sectionPosts = new SectionPosts('.section-posts');
    }

    run() {
        this.hero.run();
        this.sectionFounder.run();
        this.sectionGifts.run();
        this.sectionBestsellers.run();
        this.header.run();
        this.sectionStores.run();
        this.sectionInvite.run();
        this.sectionPosts.run();
    }
}

export default HomePage