import SearchBar from "../components/SearchBar";

class Header {
    constructor(root) {
        this.root = document.querySelector(root);
        this.searchBar = new SearchBar('.header__search-input');
    }



    run() {
        if(!this.root) return;

        this.searchBar.run();
    }
}

export default Header