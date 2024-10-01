import {cart} from "./cart.js";
import {products} from "./products/iphone16-products.js";

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="iphone-container">
    <img src="${product.image}" class="iphone-set">
    <p class="iphone-title">
      ${product.name}
    </p>
    <p class="iphone-price">
      ${(product.priceCents / 100).toFixed(2)}€
    </p>
    <button class="iphone-button
      js-add-to-cart"
      data-product-id="${product.id}">
      Add
    </button>
    </div>
  `;
});

document.querySelector('.js-products-grid').
innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;

      let matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      }else{
        cart.push({
          productId: productId,
          quantity: 1
        });
      }

    console.log(cart);
      
      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;
    });
  });