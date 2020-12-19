

const chooseBase = document.querySelector('.choose__base');

if(chooseBase) {
    
    /* Filter tabs*/
    const filterButtons = Array.from(chooseBase.querySelectorAll('.btn-filter'));
    filterButtons.forEach(item => {
        item.addEventListener('click', function(e) {
            filterButtons.forEach(item => {
                item.classList.remove('active');
            })

            e.target.classList.add('active');

            const productCards = Array.from(document.querySelectorAll('.card'));
            productCards.forEach(item => {
                item.classList.remove('active');
                
            })

            const btnNextStep = document.querySelector('.btn-next');
            btnNextStep.classList.remove('active');
            btnNextStep.classList.remove('btn-active');
        })
    })

    /*  ISOTOPE FILTERING */
    var elem = document.querySelector('.choose__details');
    var iso = new Isotope( elem, {
        itemSelector: '.card',
        layoutMode: 'masonry',
        masonry: {
            columnWidth: '.grid-sizer',
            columnHeight: '.grid-sizer',
            gutter: 20
        },
        stagger: 70,
        transitionDuration: '0.5s',
        /* default
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        }
        */
    });

    chooseBase.addEventListener( 'click', function( event ) {
        if ( !matchesSelector( event.target, 'button' ) ) {
            return;
        }

        var filterValue = event.target.getAttribute('data-filter');

        iso.arrange({ filter: filterValue });
    });

    /* choose base description */
    const baseDescription = document.querySelector('.base-description');
    const btnReadMore = document.querySelector('.read-more');

    btnReadMore.addEventListener('click', function() {
        baseDescription.classList.toggle('active');

        if(baseDescription.classList.contains('active')) {
            btnReadMore.textContent='Свернуть';
        } else {
            btnReadMore.textContent="Подробнее";
        }
    })



    /* STEP 2 - design base dtn active color palette of forms */
    const btnDesign = document.querySelector('.btn-base__design');

    btnDesign.addEventListener('click', function() {

    })
}