class CapacityTabs {
    constructor(root) {
        this.root = document.querySelector(root);
    }

    _tabshandlers() {
        const tabs = Array.from(this.root.querySelectorAll('.capacity-button'));

        tabs.forEach(item => {
            item.addEventListener('click', (e) => {
                tabs.forEach(item => item.classList.remove('active'));

                e.target.classList.add('active');
            })
        })
    }

    run() {
        if(!this.root) return;

        this._tabshandlers();
    }
}

export default CapacityTabs