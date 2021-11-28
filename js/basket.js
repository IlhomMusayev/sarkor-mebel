
const plusBtnElement= document.querySelectorAll('.plus');
const minusBtnElement= document.querySelectorAll('.minus');
const countInputElement= document.querySelectorAll('.count');
const priceProductElement = document.querySelectorAll('.price')
priceProductElement.forEach(function(item) {
    item.innerHTML = new Intl.NumberFormat('uz-Uz', { currency: 'UZS' }).format(parseInt(item.textContent)) + " sum"
})

function countProduct(e){
    const countProduct = parseInt(e.target.parentNode.querySelector('.count').value);
    const productPrice = e.target.parentNode.parentNode.parentNode.querySelector('.price').dataset.price;
    const productSumma = e.target.parentNode.parentNode.parentNode.querySelector('.price').textContent.split(',').join('');
    e.target.parentNode.parentNode.parentNode.querySelector('.price').textContent = new Intl.NumberFormat('uz-Uz', { currency: 'UZS' }).format(parseInt(countProduct * productPrice)) + " sum"
}
function countTotalProduct(){
    let allProductCount = 0
    countInputElement.forEach(function(item) {   
        allProductCount = allProductCount + parseInt(item.value)
    }) 
    let allProductPrice = 0
    priceProductElement.forEach(function(item) {
        allProductPrice = allProductPrice + parseInt(item.textContent.split(',').join(''))
    })
    document.querySelector('.total-price').textContent = new Intl.NumberFormat('uz-Uz', { currency: 'UZS' }).format(allProductPrice)
    document.querySelector('.total-product-count').textContent = allProductCount + " товар(ов)"
}

countTotalProduct()

plusBtnElement.forEach(function(item, i) {
    item.addEventListener('click', (e) => {
        if(e.target.parentNode.querySelector('.count').value > 0){
            e.target.parentNode.querySelector('.count').value++;
            countProduct(e)
            countTotalProduct()
        }
        else {
            alert("0 tadan kam mahsulat buyutma bera olmaysiz")
            e.target.parentNode.querySelector('.count').value = 1;
        }
    })
})
minusBtnElement.forEach(function(item, i) {
    item.addEventListener('click', (e) => {
        if(e.target.parentNode.querySelector('.count').value > 0){
            e.target.parentNode.querySelector('.count').value--;
            countProduct(e)
            countTotalProduct()
        }
        else{
            alert("0 tadan kam mahsulat buyutma bera olmaysiz")
            e.target.parentNode.querySelector('.count').value = 1;
        }
    })
})

