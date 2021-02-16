class OrderPreview {
    constructor(root) {
        this.root = document.querySelector(root);
    }

    _toggleOrderPreview() {
        const btnShowHide = document.querySelector('#showOrderPreview');
        const orderList = document.querySelector('.order-list');

        btnShowHide.addEventListener('click', () => {
            orderList.classList.toggle('active');

            if(orderList.classList.contains('active')) {
                btnShowHide.innerHTML="Свернуть";
            } else {
                btnShowHide.innerHTML="Подробнее";
            }
        })
    }

    run() {
        if(!this.root) return;
        this._toggleOrderPreview();
    }
}

export default OrderPreview