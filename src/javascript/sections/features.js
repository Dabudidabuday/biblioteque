/* Invert header colors on feachers screen*/
const features = document.querySelector('.features');

if(features) {
    const header = document.querySelector('.header');
    const btnHeader = Array.from(header.querySelectorAll('.line'))
    const logo = header.querySelector('.logo-desktop svg');
    const svgIcons = Array.from(header.querySelectorAll('.btn-group svg path'));
    
    function revertHeaderColors() {
        if(features.classList.contains('active')) {
            header.querySelector('.line').style.backgroundColor="#000";
            header.querySelector('.link').style.color="#000";
            logo.style.fill="#000";
            svgIcons.forEach(item => {
                item.style.stroke="#000";
            })
        
            btnHeader.forEach(item => {item.style.backgroundColor="#000"});
        }
    }

    /* Open-close feachers screen*/
    const screenFeatures = document.querySelector('.features');
    const btnFeachers = document.querySelector('#btn-features');

    btnFeachers.addEventListener('click', function() {
        screenFeatures.classList.add('active');
        screenFeatures.style.top="0";
        setTimeout(() => {
            revertHeaderColors()
        }, 500);
    })
}