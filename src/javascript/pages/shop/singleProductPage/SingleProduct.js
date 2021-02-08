import CapacityTabs from "./components/CapacityTabs";
import Feedback from "./components/Feedback";
import ProductGallery from "./components/ProductGallery";
import SectionNew from "./components/SectionNew";
import TextTabs from "./components/TextTabs";
import Tooltip from "./components/Tooltip";
import RatingStars from 'components/RatingStars';
import SectionRecommended from "pages/shop/singleProductPage/components/SectionRecommended";

class SingleProduct {
    constructor(rootElement) {
        this.root = rootElement;
        this.textTabs = new TextTabs('.single-product__description__tabs');
        this.sectionNew = new SectionNew('.section-new');
        this.productGallery = new ProductGallery('.hero__preview');
        this.capacityTabs = new CapacityTabs('.capacity-modifications');
        this.feedback = new Feedback('.feedback');
        this.tooltip = new Tooltip('.tooltip');
        this.ratingStars = new RatingStars('.comments-form .rating');
        this.sectionRecommended = new SectionRecommended('.section-recommended');
    } 

    run() {
        if(!this.root) return;  
        this.textTabs.run();
        this.sectionNew.run();
        this.productGallery.run();
        this.capacityTabs.run();
        this.feedback.run();
        this.tooltip.run();
        this.ratingStars.run();
        this.sectionRecommended.run();
    }
}

export default SingleProduct