import Hero from './components/Hero';
class HomePage {
    constructor(rootElement) {
        this.root = rootElement;

        this.hero = new Hero(this.root);
    }

    run() {
        this.hero.run();
    }
}

export default HomePage