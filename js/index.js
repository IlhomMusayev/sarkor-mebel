window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 2000);
}

function closeMenu () {
    document.getElementById('right-menu').style.cssText = 'display: block'
    document.getElementById('hidden-nav').style.cssText = 'display: none'
}

function openMenu () {
    document.getElementById('right-menu').style.cssText = 'display: none'
    document.getElementById('hidden-nav').style.cssText = 'display: block'
}