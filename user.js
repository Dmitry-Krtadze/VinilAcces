const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let profile = document.getElementById('profile');
let url = 'https://my-json-server.typicode.com/Dmitry-Krtadze/Vinil';

let urlRequest = new XMLHttpRequest();

userRequest = new XMLHttpRequest();
userRequest.open('GET',`${url}/users/${id}`);
userRequest.responseType = 'json';
userRequest.onload = function(){
    let user = userRequest.response;
    profile.innerHTML = `
        <h1>${user.name}</h1>
        <h2>${user.sirname}</h2>
        <img class="profile-img" src="${user.photo_url}">
        <p>Balanse: ${user.balance}</p> 
    `
}
userRequest.send();




let productsGrid = document.getElementById('user-products-grid');
let productRequest = new XMLHttpRequest();

productRequest.open('GET', `${url}/products?author_id=${id}`);
productRequest.responseType = 'json';
productRequest.onload = function(){
    let products = productRequest.response;
    productsGrid.innerHTML = null;
    products.forEach(p => {
        productsGrid.innerHTML += `
            <div class="product">
                <h2 class='product-name'>${p.name}</h2>
                <img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
                <p class='pruduct-price'>
                    <b>Price: </b>${p.price}
                </p>
                <p class=''product-description>
                    <b>Description: </b> ${p.description}
                </p>
            
            </div>

        
        
        `;
    });
}
productRequest.send();






