import Registration from "pages/admin/registration/Registration";

class Admin {
    constructor(root) {
        this.root = document.querySelector(root);
        this.registration = new Registration('.registration-page');
    }

    run() {
        if(!this.root) return;
        this.registration.run();
    }
}

export default Admin