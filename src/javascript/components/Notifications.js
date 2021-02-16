class Notifications {
    constructor(root) {
        this.root = document.querySelector(root)
    }

    _createNotification() {
        const div = document.createElement('div');
        const parent = document.querySelector('.order-preview__img');

        div.classList.add('notification');
        div.textContent="Композиция выбрана"

        parent.appendChild(div);
    }

    notificationSuccess() {
        this._createNotification();

        const notification = document.querySelector('.notification');

        notification.classList.add('notification--success');
        notification.textContent="Композиция выбрана";

        this._removeNotification(notification);
    }

    notificationError() {
        this._createNotification();

        const notification = document.querySelector('.notification');

        notification.classList.add('notification--error');
        notification.textContent="Выберите композицию";

        this._removeNotification(notification);
    }

    _removeNotification(notification) {
        setTimeout(() => {
            notification.remove();
        }, 2500);
    }

    run() {
        this._createNotification();
    }
}

export default Notifications