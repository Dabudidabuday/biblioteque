class SectionFounder {
    constructor(root) {
        this.root = document.querySelector(root);
    }

    run() {
        if(!this.root) return;
        const btnShowMore = this.root.querySelector('.btn--show-more');
        const textShowMore = this.root.querySelector('.founder__secondary');
        btnShowMore.addEventListener('click', () => {
            textShowMore.classList.toggle('active');
            
            if(textShowMore.classList.contains('active')) {
                btnShowMore.textContent="Свернуть"
            } else {
                btnShowMore.textContent="Читать полностью"
            }
        })

        document.addEventListener('click', (e) => {
            
        })
    }
}

export default SectionFounder