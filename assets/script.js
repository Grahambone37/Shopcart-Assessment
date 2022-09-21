//minus and plus variables
let quantityDown = document.querySelector('#quantity-down')
let quantityUp = document.querySelector('#quantity-up')
let totalQuantity = document.querySelector('#quantity-number')
let quantity = 0
//remove variables
let removeButton = document.querySelector('.remove')
let cartItem = document.querySelector('.cart-item')
//minus
    quantityDown.addEventListener('click', function(){
    if (quantity >= 1){
        quantity -= 1
    } else {
        quantity = 0
    }
    totalQuantity.textContent = `${quantity}`
})
//plus
quantityUp.addEventListener('click', function(){
    quantity += 1
    totalQuantity.textContent = `${quantity}`
})
//remove working
    removeButton.addEventListener('click', function(){
        cartItem.remove()
    })
    