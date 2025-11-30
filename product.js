// ======= PRODUCTS DATA =======
const products = [
  {id:1, name:"Men's Casual Shirt", category:"men", price:50, img:"https://via.placeholder.com/200"},
  {id:2, name:"Men's Formal Suit", category:"men", price:120, img:"https://via.placeholder.com/200"},
  {id:3, name:"Women's Evening Dress", category:"women", price:80, img:"https://via.placeholder.com/200"},
  {id:4, name:"Women's Summer Dress", category:"women", price:60, img:"https://via.placeholder.com/200"},
  {id:5, name:"Men's Hoodie", category:"men", price:60, img:"https://via.placeholder.com/200"},
  {id:6, name:"Women's Casual Top", category:"women", price:45, img:"https://via.placeholder.com/200"}
];

// ======= SHOW CATEGORY =======
function showCategory(category, btn){
  const container = document.getElementById("productsContainer");
  container.innerHTML = '';

  // Highlight active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const filtered = products.filter(p => p.category === category);
  filtered.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Price: $${p.price}</p>
        <label>Quantity:
          <input type="number" id="qty-${p.id}" value="1" min="1">
        </label>
        <button onclick="goToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// ======= GO TO CART.HTML WITH PRODUCT =======
function goToCart(id){
  const product = products.find(p => p.id === id);
  const qty = parseInt(document.getElementById(`qty-${id}`).value);

  // Pass data via URL parameters
  const url = `cart.html?id=${product.id}&name=${encodeURIComponent(product.name)}&price=${product.price}&qty=${qty}&img=${encodeURIComponent(product.img)}`;
  window.location.href = url;
}

// ======= INIT =======
showCategory('men', document.querySelector('.filter-btn.active'));
