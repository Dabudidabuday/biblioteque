class SectionBestsellers {
    constructor(root) {
        this.root = document.querySelector(root);
    }

    _tabsUI() {
        const tabs = Array.from(this.root.querySelectorAll('.btn-underline'));

        tabs.forEach(item => {
            item.addEventListener('click', (e) => {
                tabs.forEach(item => item.classList.remove('active'));

                e.target.classList.add('active');
            })
        })
    }

    run() {
        if(!this.root) return;
        this._tabsUI();
    }
}

export default SectionBestsellers