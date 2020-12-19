/*
 Preview product image in the right side 
*/

const previewImage = document.querySelector('.order-preview__img img');

if(previewImage) {
    function setImage() {
        const cardsList = document.querySelector('.choose__details');
        const productCards = Array.from(cardsList.querySelectorAll('.card'));
        productCards.forEach(item => {
            let image = item.dataset.image;
    
            item.addEventListener('click', function() {
                previewImage.setAttribute('src', image);
            })
        })
    }
    
    setImage();
    
    const previewAnimation = function() {
        const tl = gsap.timeline();
    
        // tl.fromTo(previewImage, { duration: 0.7, opacity: 0, scale: 0.8}, { opacity: 1, scale: 1});
        tl.fromTo(previewImage, { duration: 1, opacity: 0, scale: 1.2}, { opacity: 1, scale: 1});
    }
    
    const config = {
        attributes: true,
        attributeFilter: ["src"],
      };
    
    const animateImage = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === "attributes" && mutation.attributeName === "src") {
            previewAnimation();
            observer.takeRecords();
            }
        }
    };
    
    const observer = new MutationObserver(animateImage);
    observer.observe(previewImage, config);
}

