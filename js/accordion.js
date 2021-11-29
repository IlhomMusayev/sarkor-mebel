const accordionBtnElement = document.querySelectorAll('.btn_accordion');

const plusMinusBtn = document.querySelectorAll('.plusminus');

const accordionCollapseElements = document.querySelectorAll('.accordion-collapse');

accordionBtnElement.forEach(function(element) {
    element.addEventListener('click', function() {
        console.log(element.parentNode.parentNode.querySelector('.plusminus'));
        if(element.parentNode.parentNode.querySelector('.accordion-collapse').classList[2] === "show"){
            element.parentNode.parentNode.querySelector('.plusminus').classList.add('active')
        }else{
            element.parentNode.parentNode.querySelector('.plusminus').classList.remove('active')
        }
    });
    console.log(element.parentNode.parentNode.querySelector('.plusminus'));
    if(element.parentNode.parentNode.querySelector('.accordion-collapse').classList[2] === "show"){
        console.log('slom');
        element.parentNode.parentNode.querySelector('.plusminus').classList.add('active')
    }else{
        element.parentNode.parentNode.querySelector('.plusminus').classList.remove('active')
    }
})