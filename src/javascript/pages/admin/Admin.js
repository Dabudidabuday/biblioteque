class Admin {
    constructor(root) {
        this.root = document.querySelector(root);
    }

    run() {
        if(!this.root) return;
        console.log('admin hello');
    }
}

export default Admin