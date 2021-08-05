window.addEventListener('load', function () {
    const menuButton = document.querySelector('.button-menu');
    const navigation = document.querySelector('.navigation');
    const close = document.querySelector('.menu-item-close-text');

    document.addEventListener('click', function (e) {
        e.preventDefault();
        const target = e.target;
        if (navigation.classList.contains('active')) {
            if (target === close) {

                navigation.classList.remove('active');
            }


        } else {
            if (target === menuButton) {
                navigation.classList.add('active');
            }
        }

    })
})