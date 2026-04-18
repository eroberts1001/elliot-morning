let cart = [];
const cartCount = document.getElementById('cart-count');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    cart.push({ name, price });
    cartCount.textContent = cart.length;
    alert(`${name} added to cart!`);
  });
});
