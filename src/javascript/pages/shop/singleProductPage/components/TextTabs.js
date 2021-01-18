class TextTabs {
    constructor(rootElement) {
        this.root = document.querySelector(rootElement);
    }

    _controllerUI() {
        const buttons = Array.from(this.root.querySelectorAll('.btn-tab'));
        const tabsList = this.root.querySelector('.tabs-list');

        tabsList.addEventListener('click', (e) => {
            buttons.forEach(item => item.classList.remove('active'));

            e.target.classList.add('active');
        })
    }

    _tabContentUI() {
        const buttons = Array.from(this.root.querySelectorAll('.btn-tab'));
        const tabs = Array.from(this.root.querySelectorAll('.tab-text'));

        buttons.forEach(item => {
            item.addEventListener('click', (e) => {
                const tabClasses = Array.from(e.target.classList);
                const currentClass = tabClasses[1];

                tabs.forEach(item => {
                    item.classList.remove('active');

                    if(item.classList.contains(currentClass)) {
                        item.classList.add('active')
                    }
                })
            })
        })
    }

    run() {
        if(!this.root) return;

        this._controllerUI();
        this._tabContentUI();
    }
}

export default TextTabs