window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 2000);
}

// Menu
function closeMenu () {
    if(window.screen.width < 768) {
        console.log('salom');
        document.getElementById('hidden-nav').style.cssText = 'display: none'
        document.querySelector('.mini_menu_btn').style.cssText = 'display: block'
        document.querySelector('.header__right').style.cssText = 'display: none'
        document.querySelector('#hidden-nav').style.animationName = 'close__mini__menu__run'
        return;
    }
    document.getElementById('right-menu').style.cssText = 'display: block'
    document.getElementById('hidden-nav').style.cssText = 'display: none'
}

function openMenu () {
    document.getElementById('right-menu').style.cssText = 'display: none'
    document.getElementById('hidden-nav').style.cssText = 'display: block'
}
function openMiniMenu () {
    document.getElementById('hidden-nav').style.cssText = 'display: block'
    document.querySelector('.mini_menu_btn').style.cssText = 'display: none'
    document.querySelector('.header__right').style.cssText = 'display: none'
    document.getElementById('hidden-nav').style.animationName = 'mini__menu__run'
}
// end Menu

// Alert

const addBtnElement = document.querySelector('.btn-add');
const alertElement = document.querySelector('.alert');
addBtnElement.addEventListener('click', function () {
    alertElement.style.display = 'block';
    setTimeout(function () {
        alertElement.style.display = 'none';
    }, 3000);
})
