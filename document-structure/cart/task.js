document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const quantityValue = product.querySelector('.product__quantity-value');
        const decreaseQuantityButton = product.querySelector('.product__quantity-control_dec');
        const increaseQuantityButton = product.querySelector('.product__quantity-control_inc');
        const addButton = product.querySelector('.product__add');
        const productId = product.getAttribute('data-id');
        const productImage = product.querySelector('.product__image') ? product.querySelector('.product__image').src : '';

        increaseQuantityButton.addEventListener('click', () => {
            const currentQuantity = parseInt(quantityValue.textContent) || 0;
            quantityValue.textContent = currentQuantity + 1;
        });

        decreaseQuantityButton.addEventListener('click', () => {
            const currentQuantity = parseInt(quantityValue.textContent) || 1;
            if (currentQuantity > 1) {
                quantityValue.textContent = currentQuantity - 1;
            }
        });

        addButton.addEventListener('click', () => {
            addToCart(productId, productImage, parseInt(quantityValue.textContent) || 1);
        });
    });

    function addToCart(id, image, quantity) {
        const cartProducts = document.querySelector('.cart__products');
        let existingProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);

        if (existingProduct) {
            const countElement = existingProduct.querySelector('.cart__product-count');
            countElement.textContent = parseInt(countElement.textContent) + quantity;
        } else {
            const newCartProduct = document.createElement('div');
            newCartProduct.classList.add('cart__product');
            newCartProduct.setAttribute('data-id', id);
            newCartProduct.innerHTML = `
                <img class="cart__product-image" src="${image}">
                <div class="cart__product-count">${quantity}</div>
            `;
            cartProducts.appendChild(newCartProduct);
        }
    }
});