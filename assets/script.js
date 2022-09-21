//minus and plus variables
let quantityDownLimestone = document.querySelector('.quantity-down-limestone')
let quantityUpLimestone = document.querySelector('.quantity-up-limestone')
let totalQuantityLimestone = document.querySelector('#quantity-number-limestone')
let quantityLimestone = 0
//remove variables
let removeButtonLimestone = document.querySelector('#remove-limestone')
let cartItemLimestone = document.querySelector('#cart-item-limestone')
//minus
quantityDownLimestone.addEventListener('click', function(){
    if (quantityLimestone >= 1){
        quantityLimestone -= 1
    } else {
        quantityLimestone = 0
    }
    totalQuantityLimestone.textContent = `${quantityLimestone}`
})
//plus
quantityUpLimestone.addEventListener('click', function(){
    quantityLimestone += 1
    totalQuantityLimestone.textContent = `${quantityLimestone}`
})
//remove working
removeButtonLimestone.addEventListener('click', function(){
    cartItemLimestone.remove()
})
// again but for bertrandite
let quantityDownBertrandite = document.querySelector('.quantity-down-bertrandite')
let quantityUpBertrandite = document.querySelector('.quantity-up-bertrandite')
let totalQuantityBertrandite = document.querySelector('#quantity-number-bertrandite')
let quantityBertrandite = 0
let removeButtonBertrandite = document.querySelector('#remove-bertrandite')
let cartItemBertrandite = document.querySelector('#cart-item-bertrandite')

//minus
    quantityDownBertrandite.addEventListener('click', function(){
    if (quantityBertrandite >= 1){
        quantityBertrandite -= 1
    } else {
        quantityBertrandite = 0
    }
    totalQuantityBertrandite.textContent = `${quantityBertrandite}`
})
//plus
quantityUpBertrandite.addEventListener('click', function(){
    quantityBertrandite += 1
    totalQuantityBertrandite.textContent = `${quantityBertrandite}`
})
//remove working
    removeButtonBertrandite.addEventListener('click', function(){
        cartItemBertrandite.remove()
    })
//total price
let totalPrice = document.querySelector('#total-price')
let total = 0
let totalLimestone = 0
let totalBertrandite = 0
let checkout = document.querySelector('.btn-checkout')
    checkout.addEventListener('click', function(){
        totalLimestone = quantityLimestone * 15
        totalBertrandite = quantityBertrandite * 45
        total = totalLimestone + totalBertrandite
        totalPrice.textContent = `$${total}.00`    
    })