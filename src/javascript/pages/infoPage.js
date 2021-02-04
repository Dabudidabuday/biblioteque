class InfoPage {
    constructor(root) {
        this.root = document.querySelector(root);

    }
    //
    // _toggleInfoPosts() {
    //     const tabsButtons = Array.from(this.root.querySelectorAll('.btn-tab'));
    //
    //     tabsButtons.forEach(item => {
    //         item.addEventListener('click', (e) => {
    //             tabsButtons.forEach(item => item.classList.remove('active'));
    //
    //             e.target.classList.add('active');
    //         })
    //     })
    // }

    _controllerUI() {
        const buttons = Array.from(this.root.querySelectorAll('.btn-tab'));
        const tabsList = this.root.querySelector('.info__tabs');

        tabsList.addEventListener('click', (e) => {
            buttons.forEach(item => item.classList.remove('active'));

            e.target.classList.add('active');
        })
    }

    _tabContentUI() {
        const buttons = Array.from(this.root.querySelectorAll('.btn-tab'));
        const tabs = Array.from(this.root.querySelectorAll('.info__description .item'));

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

export default InfoPage