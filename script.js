// script.js
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.getElementsByClassName('add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
  
    Array.from(addToCartButtons).forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
  
        const price = parseFloat(button.getAttribute('data-price'));
        const name = button.getAttribute('data-name');
  
        const item = document.createElement('li');
        item.textContent = name + ' - R$ ' + price.toFixed(2);
  
        cartItemsList.appendChild(item);
  
        totalPrice += price;
        totalPriceElement.textContent = 'Total: R$ ' + totalPrice.toFixed(2);
      });
    });
  });
