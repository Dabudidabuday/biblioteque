class Cursor {
    _customCursorMove (e) {
        const cursor = document.querySelector('#cursor');
        const cursorSmall = document.querySelector('#cursor--small');   
        const { clientX: x, clientY: y } = e;
        cursor.style.transform = `translate(${x - 15}px, ${y - 15}px)`;
        cursorSmall.style.transform = `translate(${x - 4}px, ${y - 4}px)`;

        /* click condition */
        
    }

    run() {
        window.addEventListener('mousemove', this._customCursorMove);

        window.addEventListener('click', function() {
            const cursor = document.querySelector('#cursor');
            const cursorSmall = document.querySelector('#cursor--small'); 

            cursor.classList.add('expand');
            cursorSmall.classList.add('expand');
            setTimeout(() => {
                cursorSmall.classList.remove('expand');
                cursor.classList.remove('expand');
            }, 300)
        })
    }
}

export default Cursor