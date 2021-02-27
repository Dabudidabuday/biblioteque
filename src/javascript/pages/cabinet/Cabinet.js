import MyAccount from './myAccount/MyAccount';
import Addresses from "pages/cabinet/Addresses";
import Orders from "pages/cabinet/myAccount/Orders";
import WishList from "pages/cabinet/WishList";

class Cabinet {
    constructor(root) {
        this.root = document.querySelector(root);
        this.myAccount = new MyAccount();
        this.addresses = new Addresses('.tabDelivery');
        this.orders = new Orders('.tabOrders');
        this.wishList = new WishList('.tabWishList');
    }

    _backToCabinet() {
        const tabsContent = Array.from(document.querySelectorAll('.cabinet-grid .main'));
        const sidebar = document.querySelector('.cabinet__sidebar');
        const btnBackToCabinet = document.querySelector('.back-to-cabinet');

        /* close tabs content and hide btn-back */
        btnBackToCabinet.addEventListener('click', () => {
            tabsContent.forEach(item => item.classList.remove('active'));
            sidebar.style.display="flex";
            btnBackToCabinet.classList.remove('active');
        })
    }

    _hideSidebarOnClick() {
        const tabsContent = Array.from(document.querySelectorAll('.cabinet-grid .main'));
        const sidebar = document.querySelector('.cabinet__sidebar');
        const btnBackToCabinet = document.querySelector('.back-to-cabinet');

        sidebar.addEventListener('click', () => {
            tabsContent.forEach(item => {
                if(item.classList.contains('active')) {
                    sidebar.style.display="none";
                    btnBackToCabinet.classList.add('active');
                }
            })
        })
    }

    _mobileCabinet() {
        const btnCabinet = document.querySelector('.btn-cabinet--mobile');
        const backToCabinet = document.querySelector('#btn-navigation-open');
        const tabsContent = Array.from(document.querySelectorAll('.cabinet-grid .main'));
        const sidebar = document.querySelector('.cabinet__sidebar');

        btnCabinet.addEventListener('click', () => {
            /* imitating click to cabinet */
            backToCabinet.click();

            /* close all tabs contents */
            tabsContent.forEach(item => item.classList.remove('active'));

            /*  show sidebar */
            sidebar.style.display="flex";
        })
    }


    _sidebarTabsUI() {
        const tabsButtons = Array.from(this.root.querySelectorAll('.sidebar__button'));
        const mainWrappers = Array.from(document.querySelectorAll('.main'));

        tabsButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const currentId = e.target.id;

                mainWrappers.forEach(tabContent => {
                    const tabClass = Array.from(tabContent.classList);

                    if(tabClass[1] === currentId) {
                        mainWrappers.forEach(item => item.classList.remove('active'))

                        tabContent.classList.add('active');
                    }
                })
            })
        })
    }

    run() {
        if(!this.root) return;
        this.myAccount.run();
        this.addresses.run();
        this.orders.run();
        this.wishList.run();
        this._sidebarTabsUI();

        const mobile = window.matchMedia('(max-width: 992px)');
        if(mobile.matches) {
            this._mobileCabinet();
            this._hideSidebarOnClick();
            this._backToCabinet();
        }
    }
}

export default Cabinet