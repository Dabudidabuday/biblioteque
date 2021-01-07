class colorPalette {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.colorList = Array.from(document.querySelectorAll('.btn-color'));
    }

    _showHidePalette() {
        const palette = document.querySelector(this.rootElement);
        const btnShowPalette = document.querySelector('.btn-base__design');
        const tabs = document.querySelector('.tabs');

        tabs.addEventListener('click', function() {
            if(!btnShowPalette.classList.contains('active')) {
                palette.classList.remove('active');
            }
        })

        btnShowPalette.addEventListener('click', function() {
            palette.classList.add('active');
        })
    }

    _colorPaletteHandler() {
        this.colorList.forEach(item => { 
            item.addEventListener('click', (e) => {
                this.colorList.forEach(item => {
                    item.classList.remove('active');
                })
                e.target.classList.add('active');
            })
        })
    }

    run() {
        const palette = document.querySelector(this.rootElement);
        if(!palette) return;

        this._showHidePalette();
        this._colorPaletteHandler();
    }
}

export default colorPalette




