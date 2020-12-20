const palette = document.querySelector('.base__color-palette')

if(palette) {
    const paletteTitle = palette.querySelector('.palette__title');
    const paletteList = document.querySelector('.color-list');
    let colors = Array.from(paletteList.querySelectorAll('.btn-color'));
    const btnShowPalette = document.querySelector('.btn-base__design');

    /* conditions of palette tab buttons */
    colors.forEach(item => {
        item.addEventListener('click', function(e) {
            colors.forEach(item => {
                item.classList.remove('active');
            })

            e.target.classList.add('active');
        })
    })

    function showHidePalettehandler() {
        const tabs = document.querySelector('.tabs');

        tabs.addEventListener('click', function() {
            if(btnShowPalette.classList.contains('active')) {
                showPalette()
            } else {
                palette.classList.remove('active');
                hidePalette();
            }
        })
    }

    showHidePalettehandler()

    function showPalette() {
        const paletteTimeLine = gsap.timeline();
        paletteTimeLine.to(palette, { display: 'block', height: '100%', duration: 0.6 })
        paletteTimeLine.from(colors, { y: 50, opacity: 0, duration: 0.2, stagger: 0.1 })
        // paletteTimeLine.from(paletteTitle, { opacity: 0, duration: 0.3 })
        // paletteTimeLine.from(colors, { y: 50, duration: 0.4, stagger: 0.1, opacity: 0 })
    }

    function hidePalette() {
        const paletteTimeLine = gsap.timeline();
        paletteTimeLine.to(paletteList, { x: -450, opacity: 0, duration: 0.2 })
        paletteTimeLine.to(palette, { display: 'none' })
    }

    /* Show palette */
    btnShowPalette.addEventListener('click', function() {
        palette.classList.add('active');
    })
}