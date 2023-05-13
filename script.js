// Example JavaScript code for the e-commerce site

// Function to fetch and display featured products
function fetchFeaturedProducts() {
    // Make an API call or perform any necessary logic to fetch featured products
    const featuredProducts = [
        { name: 'Product 1', price: 19.99 },
        { name: 'Product 2', price: 24.99 },
        { name: 'Product 3', price: 29.99 }
    ];

    // Get the featured products section element
    const featuredSection = document.querySelector('.featured-products');

    // Generate the HTML for each featured product and append it to the section
    featuredProducts.forEach(product => {
        const productHTML = `
      <div class="product">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
        featuredSection.innerHTML += productHTML;
    });
}

// Function to fetch and display new arrival products
function fetchNewArrivalProducts() {
    // Make an API call or perform any necessary logic to fetch new arrival products
    const newArrivalProducts = [
        { name: 'Product A', price: 39.99 },
        { name: 'Product B', price: 49.99 },
        { name: 'Product C', price: 59.99 }
    ];

    // Get the new arrivals section element
    const newArrivalSection = document.querySelector('.new-arrivals');

    // Generate the HTML for each new arrival product and append it to the section
    newArrivalProducts.forEach(product => {
        const productHTML = `
      <div class="product">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
        newArrivalSection.innerHTML += productHTML;
    });
}

// Call the functions to fetch and display the products
fetchFeaturedProducts();
fetchNewArrivalProducts();
