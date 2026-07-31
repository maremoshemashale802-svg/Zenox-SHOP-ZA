// Shopping Cart Counter
let cart = [];

// Add product to cart
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    // Update cart number
    document.getElementById("cart-count").innerText = cart.length;

    alert(name + " added to cart!");
}

// Search Products
function searchProducts() {

    let input = document.querySelector(".search input").value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(product => {

        let text = product.innerText.toLowerCase();

        if (text.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

}
