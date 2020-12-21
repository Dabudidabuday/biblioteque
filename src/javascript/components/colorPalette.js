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

        paletteTimeLine.set(palette, {
            height: 0,
            autoAlpha: 0,
            display: "none"
        })
        paletteTimeLine.to(palette, 1, {
            delay: 0.6,
            height: 'auto',
            autoAlpha: 1,
            display: "block",
            ease: Cubic.easeInOut,
            overwrite: "none"
          })
        // paletteTimeLine.from(colors, {y: 50 })
    }

    function hidePalette() {
        const paletteTimeLine = gsap.timeline();
        // paletteTimeLine.to(paletteList, { x: -250, opacity: 0, duration: 0.2 })
        // paletteTimeLine.to(palette, { display: 'none' })
    }

    /* Show palette */
    btnShowPalette.addEventListener('click', function() {
        palette.classList.add('active');
    })
}