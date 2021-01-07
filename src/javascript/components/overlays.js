class Overlay {
    constructor(overlay, elements=[], className='active') {
        this.overlay = document.querySelector(overlay);
        this.elements = elements;
        this.className = className;
    }

    _listen() {
        if(!this.overlay) return;
        
        this.overlay.addEventListener('click', () => {

            this.elements.forEach(element => {
                const htmlElement = document.querySelector(element);
                
                const classNameExists = this._checkClasses(htmlElement);

                if(classNameExists) {
                    this._closeElements(htmlElement)
                }
            });
        })
    }

    _checkClasses(element) {
        if(!element) return false;

        if(element.classList.contains(this.className)) {
            return true
        } else {
            return false
        }
    }

    _closeElements(element) {
        element.classList.remove(this.className);
        this.overlay.classList.remove(this.className);
    }

    run() {
        this._listen()
    }
}

export default Overlay

