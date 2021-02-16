/*  ISOTOPE FILTERING */

class FormFilter {
    constructor(htmlElement) {
        this.htmlElement = htmlElement;
    }

    _addressDelivery() {

    }

    run() {
        var elem = document.querySelector(this.htmlElement);
        if(!elem) return;

        var iso = new Isotope( elem, {
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            filter: '.pickup',
            masonry: {
                columnWidth: '.grid-item',
                // columnHeight: '.i',
                gutter: 20
            },
            stagger: 20,
            transitionDuration: '.6s',
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
        
        
        const formFilterButtons = document.querySelector('.form-delivery');
        
        formFilterButtons.addEventListener( 'click', function( event ) {
            if ( !matchesSelector( event.target, '.form-radio' ) ) {
                return;
            }
        
            var filterValue = event.target.getAttribute('data-filter');
        
            iso.arrange({ filter: filterValue });
        });

        const addressDeliveryCheckbox = document.querySelector('#address-delivery');

        addressDeliveryCheckbox.addEventListener('input', (event) => {
            let filterValue = event.target.getAttribute('data-filter');

            if(!event.target.checked) {
                const hideAddressDeliveryInputs = document.querySelectorAll('.hide-address-delivery')
                // iso.hideItemElements(hideAddressDeliveryInputs);
                // iso.getFilteredItemElements();
                iso.arrange({
                    filter: '.shipping'
                });
                // iso.layout();
            }

            // iso.arrange({ filter: filterValue });

            
        })
        
    }
}

export default FormFilter
