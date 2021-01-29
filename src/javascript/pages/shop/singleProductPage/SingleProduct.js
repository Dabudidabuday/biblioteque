import CapacityTabs from "./components/CapacityTabs";
import Feedback from "./components/Feedback";
import ProductGallery from "./components/ProductGallery";
import SectionNew from "./components/SectionNew";
import TextTabs from "./components/TextTabs";
import Tooltip from "./components/Tooltip";

class SingleProduct {
    constructor(rootElement) {
        this.root = rootElement;
        this.textTabs = new TextTabs('.single-product__description__tabs');
        this.sectionNew = new SectionNew('.section-new');
        this.productGallery = new ProductGallery('.hero__preview');
        this.capacityTabs = new CapacityTabs('.capacity-modifications');
        this.feedback = new Feedback('.feedback');
        this.tooltip = new Tooltip('.tooltip');
    } 

    run() {
        if(!this.root) return;  
        this.textTabs.run();
        this.sectionNew.run();
        this.productGallery.run();
        this.capacityTabs.run();
        this.feedback.run();
        this.tooltip.run();
    }
}

export default SingleProduct