const plusBtnElement= document.querySelector('.plus');
const minusBtnElement= document.querySelector('.minus');
const countInputElement= document.querySelector('.count');
const priceProductElement = document.querySelector('.price')


function countProductPrice(){
    const defoultPrice = priceProductElement.dataset.price;
    
    priceProductElement.textContent = new Intl.NumberFormat('uz-Uz', { currency: 'UZS' }).format(parseInt(defoultPrice * countInputElement.value)) + " sum"
}


plusBtnElement.addEventListener('click', (e) => {
    if(countInputElement.value > 0){
        countInputElement.value ++
        countProductPrice()
    }else{
        alert("Siz 0 dan kam mahsulot buyurtma bera olmaysiz!")
        countInputElement.value = 1
        countProductPrice()
    }
})

minusBtnElement.addEventListener('click', (e) => {
    if(countInputElement.value > 0){
        countInputElement.value --
        countProductPrice()
    }else{
        alert("Siz 0 dan kam mahsulot buyurtma bera olmaysiz!")
        countInputElement.value = 1
        countProductPrice()
    }
})