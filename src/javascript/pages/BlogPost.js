import RatingStars from "components/RatingStars";

class BlogPost {
    constructor(root) {
        this.root = document.querySelector(root);
        this.ratingStars = new RatingStars('.comments-form .rating');
    }

    run() {
        if(!this.root) return;
        this.ratingStars.run();
    }
}

export default BlogPost