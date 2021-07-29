window.addEventListener('load', function () {
    const menuButton = document.querySelector('.button-menu');
    const navigation = document.querySelector('.navigation');

    document.addEventListener('click', function (e) {
        e.preventDefault();
        const target = e.target;
        if (navigation.classList.contains('active')) {
            if (
            !target.classList.contains('navigation') 
            && !target.classList.contains('menu') 
            && !target.classList.contains('menu-item') 
            && !target.classList.contains('menu-item-anchor')
            ) {

                navigation.classList.remove('active');
            }


        } else {
            if (target === menuButton) {
                navigation.classList.add('active');
            }
        }

    })
})