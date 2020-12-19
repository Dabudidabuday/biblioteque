/* Close menu with click on overlay */


// function closeHandler(element) {
//     const overlay = document.querySelector('#overlay');
    
//     overlay.addEventListener('click', function() {
//         if(element.classList.contains('active')) {
//             element.classList.remove('active');
//             overlay.classList.remove('active'); 
//         }
//     })


// }


const overlay = document.querySelector('#overlay');
overlay.addEventListener('click', function() {
    const modalDetails = document.querySelector('.modal--product-details');
    const navMenu = document.querySelector('.navigation-menu');
    /* 
    * TODO 
    * Uncaught TypeError: Cannot read property 'classList' of null
    * В случае, если на текущей странице не находит нужный элемент
    */
   
    if(modalDetails.classList.contains('active')) {
        modalDetails.classList.remove('active');
        overlay.classList.remove('active');
    }

    if(navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    } 
})
