import SectionNew from "./components/SectionNew";
import TextTabs from "./components/TextTabs";

class SingleProduct {
    constructor(rootElement) {
        this.root = rootElement;
        this.textTabs = new TextTabs('.single-product__description__tabs');
        this.sectionNew = new SectionNew('.section-new');
    }

    

    run() {
        if(!this.root) return;  
        this.textTabs.run();
        this.sectionNew.run();
    }
}

export default SingleProduct