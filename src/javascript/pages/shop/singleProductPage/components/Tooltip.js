class Tooltip {
    constructor(root) {
        this.root = document.querySelector(root);
    }

    _tooltipUI() {
        const btnOpen = document.querySelector('#btnTooltipOpen');

        btnOpen.addEventListener('click', () => {
            btnOpen.classList.toggle('active');
            this.root.classList.toggle('active');
        })

        window.addEventListener('click', (e) => {
            const isClickInsideTooltip = this.root.contains(e.target);

            if(!isClickInsideTooltip) {
                this.root.classList.remove('active');
            }
        })
    }

    _closeTooltipHandler() {
        // window.addEventListener('click', (e) => {
        //     console.log(e.target);
        //     if(
        //         !e.target.classList.contains('.tooltip') 
        //         && 
        //         this.root.classList.contains('active')
        //         &&
        //         e.target.closest('.tooltip')
        //     ) {
        //         console.log(e.target.classList.contains('.tooltip'));
        //         this.root.classList.remove('active');
        //     } else {
        //         this.root.classList.add('active');
        //     }
        // })


        /* слушаем документ на то, был ли клик снаружи селекта
        *  Если да, то находим ближайшего родителя открытого текущего элемента, и закрываем его
        */
        // document.addEventListener('click', function(e) {
        //     customSelect.forEach(item => {
        //         const closestParent = item.closest('.custom-select');
        //         const selectBody = closestParent.querySelector('.custom-select__options');
        //         const arrow = closestParent.querySelector('.select-arrow');
        //         const isClickInsideSelect = item.contains(e.target);
        //         const isClickInsideSelectList = selectBody.contains(e.target);
        //
        //         if(!isClickInsideSelect && !isClickInsideSelectList) {
        //             selectBody.classList.remove('active');
        //             arrow.classList.remove('active');
        //         }
        //     })
        // });
    }

    run() {
        if(!this.root) return;
        
        this._tooltipUI();

    }
}

export default Tooltip