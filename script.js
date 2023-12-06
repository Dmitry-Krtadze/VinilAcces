let productsGrid = document.getElementById('products-grid');
let productsAray = [];
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/Dmitry-Krtadze/Vinil';

xhr.open('GET', url + '/products');
xhr.responseType = 'json';
xhr.onload = function(){
    let products = xhr.response;
    productsGrid.innerHTML = null;
    products.forEach(p => {
        productsAray.push(p);
        let pElem = document.createElement('div');
        pElem.classList.add('product');
        pElem.innerHTML = `
            <h2 class='product-name'>${p.name}</h2>
            <img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
            <p class='product-price'><b>Price: </b>${p.price}</p>
            <p class='product-price'><b>Description: </b>${p.description}</p>
            <a href='userPage.html?id=${p.author_id}'>Seller profile</a>
            <button>Buy</button>
        `;
        productsGrid.append(pElem);
    });
}
xhr.send();