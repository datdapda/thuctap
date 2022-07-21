

// SELECT ELEMENTS

const cartItemsEl = document.querySelector(".cart-items");
const cartItemsEl2 = document.querySelector(".cart-items2");

const subtotalEl = document.querySelector(".subtotal");
const subtotalEl1 = document.querySelector(".subtotal1");

const totalItemsInCartEl = document.querySelector(".total-items-in-cart");




function showcart(){
  var x = document.getElementById("showCart");
  if(x.style.display == "block"){
      x.style.display = "none";
  }else 
      x.style.display = "block";
}


// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `

    <div class="cart-item">
            <div class="item-info col-lg-2">
                <img src="${item.imgSrc}" alt="${item.name}" width="75px" height="75px">
            </div>
            <h4 class="col-lg-5">${item.name}</h4>
            <div class="units col-lg-3">
                <div class="number">${item.numberOfUnits}</div>
            </div>
            <div class="unit-price col-lg-2"style="text-align:center;">
                <small>$</small>${item.price}
            </div>
        </div> 
        <hr>
        
      `;
  });
}

function renderCartItems1() {
  cartItemsEl2.innerHTML = ""; // clear cart element
  cart1.forEach((item) => {
    cartItemsEl2.innerHTML += `

        <div class="cart-item2 col-lg-12">
            <div class="item-info col-lg-2">
                <img src="${item.imgSrc}" alt="${item.name}" width="75px" height="75px">
            </div>
            <h4 class="col-lg-5">${item.name}</h4>
            <div class="units col-lg-3">
                <div class="number">${item.numberOfUnits}</div>
            </div>
            <div class="unit-price col-lg-2"style="text-align:center;">
                <small>$</small>${item.price}
            </div>
        </div>
         
        <hr style="clear:both;">
        
      `;
  });
}



// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();
  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));


  renderCartItems1();
  renderSubtotal1();
  localStorage.setItem("CART", JSON.stringify(cart1));

  // save cart to local storage
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  subtotalEl.innerHTML = `Tổng (${totalItems} sản phẩm): $${totalPrice.toFixed(2)}`;
}
function renderSubtotal1() {
  let totalPrice = 0,
    totalItems = 0;

  cart1.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  subtotalEl.innerHTML = `Tổng (${totalItems} sản phẩm): $${totalPrice.toFixed(2)}`;
}





// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
let cart1 = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();