


const inputPass = document.getElementsByClassName("pass");
const Changpass = document.getElementById("changPass");

Changpass.onclick = () =>{
    if(inputPass[0].value != '' && inputPass[1].value != '' && inputPass[2].value != ''){
        if(inputPass[1].value != inputPass[2].value){
            inputPass[1].nextElementSibling.textContent = "Mật khẩu không giống";
            setTimeout(() => {
                inputPass[1].nextElementSibling.textContent = "";
            }, 2000);
            inputPass[2].nextElementSibling.textContent = "Mật khẩu không giống";
            setTimeout(() => {
                inputPass[2].nextElementSibling.textContent = "";
            }, 2000);
            inputPass[1].value='';
            inputPass[2].value='';
        }
        else{
            if(inputPass[0].value != localStorage.getItem("mk")){
                inputPass[0].nextElementSibling.textContent = "Mật khẩu sai";
                setTimeout(() => {
                    inputPass[0].nextElementSibling.textContent = "";
                }, 2000);
                inputPass[0].value='';
                inputPass[1].value='';
                inputPass[2].value='';
            }
            else {
                if(inputPass[0].value === localStorage.getItem("mk")){
                    localStorage.setItem("mk",inputPass[1].value);
                    alert("Bạn đã đổi mật khẩu thành công");
                    window.location= "/Index.html";
                }
            }
        }
    }
    else{
        if(inputPass[0].value == ""){
            inputPass[0].nextElementSibling.textContent = "Mật khẩu trống";
            setTimeout(() => {
                inputPass[0].nextElementSibling.textContent = "";
            }, 2000);
        }
        if(inputPass[1].value == ""){
            inputPass[1].nextElementSibling.textContent = "Mật khẩu trống";
            setTimeout(() => {
                inputPass[1].nextElementSibling.textContent = "";
            }, 2000);
        }
        if(inputPass[2].value == ""){
            inputPass[2].nextElementSibling.textContent = "Mật khẩu trống";
            setTimeout(() => {
                inputPass[2].nextElementSibling.textContent = "";
            }, 2000);
        }
    }
}
// SELECT ELEMENTS

const cartItemsEl = document.querySelector(".cart-items");

const subtotalEl = document.querySelector(".subtotal");

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
            <div class="item-info col-lg-2" onclick="removeItemFromCart(${item.id})">
                <img src="${item.imgSrc}" alt="${item.name}" width="75px" height="75px">
            </div>
            <h4 class="col-lg-5">${item.name}</h4>
            <div class="units col-lg-3">
                <button class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})" >-</button>
                <div class="number">${item.numberOfUnits}</div>
                <button class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})" >+</button>         
            </div>
            <div class="unit-price col-lg-2"style="text-align:center;">
                <small>$</small>${item.price}
            </div>
        </div> 
        <hr>
        
      `;
  });
}



// ADD TO CART
function addToCart(id) {
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();
  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));



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




// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);


  updateCart();
}


// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });
  updateCart();

}


// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();