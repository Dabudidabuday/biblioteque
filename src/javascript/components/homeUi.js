class HomeUI {
    constructor(rootElement) {
        this.rootElement = document.querySelector(rootElement);
        this.header = document.querySelector('.header');
        this.features = document.querySelector('.features');
        this.overlay = document.querySelector('#overlay');
    }

    _revertHeaderColors() {
        const btnHeader = Array.from(this.header.querySelectorAll('.line'));
        const logo = this.header.querySelector('.logo-desktop svg');
        const svgIcons = Array.from(this.header.querySelectorAll('.btn-group svg path'));

        this.header.style.zIndex="10";
        this.header.querySelector('.line').style.backgroundColor="#000";
        this.header.querySelector('.link').style.color="#000";

        logo.style.fill="#000";
        svgIcons.forEach(item => {
            item.style.stroke="#000";
        })
    
        btnHeader.forEach(item => {item.style.backgroundColor="#000"});
    }

    _returnHeaderColors() {
        const btnHeader = Array.from(this.header.querySelectorAll('.line'));
        const logo = this.header.querySelector('.logo-desktop svg');
        const svgIcons = Array.from(this.header.querySelectorAll('.btn-group svg path'));

        this.header.querySelector('.line').style.backgroundColor="#fff";
        this.header.querySelector('.link').style.color="#fff";
        logo.style.fill="#fff";

        svgIcons.forEach(item => {
            item.style.stroke="#fff";
        })
        btnHeader.forEach(item => {item.style.backgroundColor="#fff"});
    }

    run() {
        if(!this.rootElement) return;
        
        const navMenu = document.querySelector('.navigation-menu');
        const btnNavOpen = document.querySelector('#btn-navigation-open');
        const btnNavClose = document.querySelector('#btn-navigation-close');
        const mobile = window.matchMedia("(max-width: 768px)");

        btnNavOpen.addEventListener('click', () => {
            btnNavOpen.classList.toggle('active');
            navMenu.classList.toggle('active');
            this.overlay.classList.toggle('active');
            
            if(navMenu.classList.contains('active') && mobile.matches) {
                setTimeout(() => {

                    this._revertHeaderColors();
                }, 500)
            }

            if(!navMenu.classList.contains('active') && mobile.matches) {
                setTimeout(() => {
                    this._returnHeaderColors();
                }, 400)
            }
        })

        btnNavClose.addEventListener('click', function() {
            navMenu.classList.remove('active');
            this.overlay.classList.remove('active');
        })        
    
        const screenFeatures = document.querySelector('.features');
        const btnOpenFeachers = document.querySelector('#btn-features');
        const btnCloseFeatures = document.querySelector('#btn-features-close');
    
        btnOpenFeachers.addEventListener('click', () => {
            screenFeatures.classList.add('active');
            this.header.classList.add('header-in-features');

            setTimeout(() => {
                if(this.features.classList.contains('active')) {
                    this._revertHeaderColors();
                }
            }, 500);
        })
    
        btnCloseFeatures.addEventListener('click', () => {
            this.header.classList.remove('header-in-features');
            this.features.classList.remove('active');
            this._returnHeaderColors();
        })
    }
}

export default HomeUI


