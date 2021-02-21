import Registration from "pages/admin/registration/Registration";
import Shop from 'pages/shop/Shop';

class Admin {
    constructor(root) {
        this.root = document.querySelector(root);
        this.registration = new Registration('.registration-page');
        this.shop = new Shop(root);
    }

    run() {
        if(!this.root) return;
        this.registration.run();
        this.shop._navMenuUI();
    }
}

export default Admin