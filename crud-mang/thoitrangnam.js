// Array to store products
let products =  [
    {
        id: 1,
        name: "Quần kaki",
        code: "TC143NA",
        price: "250.000",
        image: "https://fashionminhthu.com.vn/wp-content/uploads/2021/06/quan-kaki-nam-7.jpg"
    },
    {
        id: 2,
        name: "Áo sơ mi nam",
        code: "TC1342NA",
        price: "380.000",
        image: "https://zizoou.com/cdn/shop/files/Ao-khoac-soc-ke-form-rong-oversize-Ao-jacket-caro-trang-den-10-2-2-ZiZoou-Store.jpg?v=1698750440"
    },
    {
        id: 3,
        name: "Quần tây",
        code: "TC323",
        price: "270.000",
        image: "https://fashionminhthu.com.vn/wp-content/uploads/2021/03/Cach-chon-quan-Kaki-nam-1.jpg"
    },
  
];;


// Function to list products
function listProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-3 mb-3 card'; 

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        cardBody.innerHTML = `
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Code: ${product.code}</p>
            <p class="card-text">Price: ${product.price}</p>
            <img src="${product.image}" class="img-fluid mb-2" alt="${product.name}">
            <button class="btn btn-primary mr-2" onclick="editProduct(${product.id})">Edit</button>
            <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
        `;

        card.appendChild(cardBody);
        productList.appendChild(card);
    });
}

// Function to add product
function addProduct() {
    const id = document.getElementById('idInput').value;
    const name = document.getElementById('nameInput').value;
    const code = document.getElementById('codeInput').value;
    const price = document.getElementById('priceInput').value;
    const image = document.getElementById('imageInput').value;

    const product = { id, name, code, price, image };
    products.push(product);

    listProducts();

    // Clear input fields after adding product
    document.getElementById('idInput').value = '';
    document.getElementById('nameInput').value = '';
    document.getElementById('codeInput').value = '';
    document.getElementById('priceInput').value = '';
    document.getElementById('imageInput').value = '';
}

// Function to edit product
function editProduct(id) {
    const newName = prompt('Enter new name:');
    const newCode = prompt('Enter new code:');
    const newPrice = prompt('Enter new price:');
    const newImage = prompt('Enter new image URL:');

    products.forEach(product => {
        if (product.id === id) {
            product.name = newName || product.name;
            product.code = newCode || product.code;
            product.price = newPrice || product.price;
            product.image = newImage || product.image;
        }
    });

    listProducts();
}

// Function to delete product
function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    listProducts();
}
