let selectedProduct = "";

function openPopup(name) {
  selectedProduct = name;
  document.getElementById("popup-title").innerText = name;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function addToCart() {
  let size = document.getElementById("size").value;
  let color = document.getElementById("color").value;
  let qty = document.getElementById("qty").value;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: selectedProduct,
    size, color, qty
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
  closePopup();
}
