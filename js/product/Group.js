
const productsE2 = document.querySelector(".products2");
const productsE3 = document.querySelector(".products3");
const cartItemsEl = document.querySelector(".cart-items");

const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");


const renderIntro = document.querySelector(".Introduc");
const InputValue = localStorage.getItem("inputbox");

const ListGroup = document.querySelector(".main")
const nameList = ListGroup.querySelector("h3");
const list123 = document.querySelector(".List");
let i=0;
let j=0;

const ArrayIntro1 = [
    {
        imgSrc: "/img/Intro1.jpg",
        imgSrc2: "/img/Intro2.jpg",
        imgSrc3: "/img/Intro3.jpg",
        imgSrc4: "/img/Intro4.jpg",
        imgSrc5: "/img/Intro5.jpg",
    },
    {
        imgSrc: "/img/IntroAT1.jpg",
        imgSrc2: "/img/IntroAT2.jpg",
        imgSrc3: "/img/IntroAT3.jpg",
        imgSrc4: "/img/IntroAT4.jpg",
        imgSrc5: "/img/IntroAT5.jpg",
    }
]
const listChoseSP =[
    {
        TheLoai: "Máy ảnh Panasonic",
        TheLoai2: "Máy quay phim sony",
        TheLoai3: "Máy quay GoPro",
        TheLoai4: "Máy ảnh Sigma",
        TheLoai5: "Máy ảnh Leica",
        TheLoai6: "Máy quay 360",
        TheLoai7:"Máy ảnh Nikon",
        TheLoai8:"Máy ảnh Pentax",
        TheLoai9:"Máy ảnh Canon",
        TheLoai10:"Máy ảnh Olympus",

    },
     {
        TheLoai: "Ống kính Panasonic",
        TheLoai2: "Ống kính sony",
        TheLoai3: "Máy quay GoPro",
        TheLoai4: "Ống kính Sigma",
        TheLoai5: "Ống kính Leica",
        TheLoai6: "Ống kính 360",
        TheLoai7:"Ống kính Nikon",
        TheLoai8:"Ống kính Pentax",
        TheLoai9:"Ống kính Canon",
        TheLoai10:"Ống kính Olympus",
    },
    {
        TheLoai: "Phụ kiện Peak Design",
        TheLoai2: "Phụ kiện DJI",
        TheLoai3: "Phụ kiện Sunnylife",
        TheLoai4: "Phụ kiện cam hành động",
        TheLoai5: "Chân máy ảnh",
        TheLoai6: "Balo - Túi",
        TheLoai7:"Phụ kiện máy ảnh",
        TheLoai8:"Chụp sản phẩm",
        TheLoai9:"Gói phần mềm",
        TheLoai10:"Phụ kiện khác",
    },
    {
        TheLoai: "Harman Kardon",
        TheLoai2: "Apple",
        TheLoai3: "JBL",
        TheLoai4: "Âm thanh LG",
        TheLoai5: "Máy chơi game Playstation",
        TheLoai6: "Máy ghi âm Sony",
        TheLoai7:"Tai nghe nhạc Sony",
        TheLoai8:"Loa di động Sony",
        TheLoai9:"Phantom",
        TheLoai10:"Tai nghe khác",
    } 
]
    
    
    




document.querySelector(".chose").innerHTML=`
    <select class="select" name="select" onchange="window.open(this.options[this.selectedIndex].value,'_blank')">
    <option selected="selected">--Lọc sản phẩm--</option>
    <option>Đánh giá</option>
    <option>Từ A -> Z</option>
    <option>Mới cập nhật</option>
    <option>Giá tăng dần</option>
    <option>Giá giảm dần</option>
    </select>
`
window.onload = () => {
    if(localStorage.getItem("inputbox") != null){
        document.querySelector(".chose")
        ArrayIntro1.forEach((Intro)=>{
            if((InputValue === "Phụ kiện" || InputValue ==="Âm thanh") && i==1  ){
                renderIntro.innerHTML+=`
                    <div class="item"><img src="${Intro.imgSrc}" alt=""></div>
                    <div class="item"><img src="${Intro.imgSrc2}" alt=""></div>
                    <div class="item"><img src="${Intro.imgSrc3}" alt=""></div>
                    <div class="item"><img src="${Intro.imgSrc4}" alt=""></div>
                    <div class="item"><img src="${Intro.imgSrc5}" alt=""></div>
                `
            }
            else if((InputValue === "Máy ảnh" || InputValue ==="Ống kính") && i==0){
                renderIntro.innerHTML+=`
                <div class="item"><img src="${Intro.imgSrc}" alt=""></div>
                <div class="item"><img src="${Intro.imgSrc2}" alt=""></div>
                <div class="item"><img src="${Intro.imgSrc3}" alt=""></div>
                <div class="item"><img src="${Intro.imgSrc4}" alt=""></div>
                <div class="item"><img src="${Intro.imgSrc5}" alt=""></div>
                `
                
            }
            i++;
        })
        
        listChoseSP.forEach((list)=>{
            if(InputValue === "Máy ảnh" && j==0){
                nameList.innerHTML=`Máy ảnh Sony chính hãng`
                list123.innerHTML+=`
                    <li><a href="/404.html">${list.TheLoai}</a></li>
                    <li><a href="/404.html">${list.TheLoai2}</a></li>
                    <li><a href="/404.html">${list.TheLoai3}</a></li>
                    <li><a href="/404.html">${list.TheLoai4}</a></li>
                    <li><a href="/404.html">${list.TheLoai5}</a></li>
                    <li><a href="/404.html">${list.TheLoai6}</a></li>
                    <li><a href="/404.html">${list.TheLoai7}</a></li>
                    <li><a href="/404.html">${list.TheLoai8}</a></li>
                    <li><a href="/404.html">${list.TheLoai9}</a></li>
                    <li><a href="/404.html">${list.TheLoai10}</a></li>
                `
            }
            else if( InputValue === "Ống kính" && j==1  ){
                nameList.innerHTML=`Ống kính Sony chính hãng`
                list123.innerHTML+=`
                    <li><a href="/404.html">${list.TheLoai}</a></li>
                    <li><a href="/404.html">${list.TheLoai2}</a></li>
                    <li><a href="/404.html">${list.TheLoai3}</a></li>
                    <li><a href="/404.html">${list.TheLoai4}</a></li>
                    <li><a href="/404.html">${list.TheLoai5}</a></li>
                    <li><a href="/404.html">${list.TheLoai6}</a></li>
                    <li><a href="/404.html">${list.TheLoai7}</a></li>
                    <li><a href="/404.html">${list.TheLoai8}</a></li>
                    <li><a href="/404.html">${list.TheLoai9}</a></li>
                    <li><a href="/404.html">${list.TheLoai10}</a></li>
                `
            }
            else if( InputValue === "Phụ kiện" && j==2  ){
                nameList.innerHTML=`Phụ kiện chính hãng`
                list123.innerHTML+=`
                    <li><a href="/404.html">${list.TheLoai}</a></li>
                    <li><a href="/404.html">${list.TheLoai2}</a></li>
                    <li><a href="/404.html">${list.TheLoai3}</a></li>
                    <li><a href="/404.html">${list.TheLoai4}</a></li>
                    <li><a href="/404.html">${list.TheLoai5}</a></li>
                    <li><a href="/404.html">${list.TheLoai6}</a></li>
                    <li><a href="/404.html">${list.TheLoai7}</a></li>
                    <li><a href="/404.html">${list.TheLoai8}</a></li>
                    <li><a href="/404.html">${list.TheLoai9}</a></li>
                    <li><a href="/404.html">${list.TheLoai10}</a></li>
                `
            }
            else if( InputValue === "Âm thanh" && j==3  ){
                nameList.innerHTML=`PlayStation chính hãng`
                list123.innerHTML+=`
                    <li><a href="/404.html">${list.TheLoai}</a></li>
                    <li><a href="/404.html">${list.TheLoai2}</a></li>
                    <li><a href="/404.html">${list.TheLoai3}</a></li>
                    <li><a href="/404.html">${list.TheLoai4}</a></li>
                    <li><a href="/404.html">${list.TheLoai5}</a></li>
                    <li><a href="/404.html">${list.TheLoai6}</a></li>
                    <li><a href="/404.html">${list.TheLoai7}</a></li>
                    <li><a href="/404.html">${list.TheLoai8}</a></li>
                    <li><a href="/404.html">${list.TheLoai9}</a></li>
                    <li><a href="/404.html">${list.TheLoai10}</a></li>
                `
            }
            j++;
        })
        var x =1;
        products.forEach((products)=>{

/* tìm kiếm input */
            if(localStorage.getItem("Search") == 1){
                document.querySelector(".Introduc").classList.add("hidden")
                document.querySelector(".listGroupProduct").classList.add("hidden")
                nameList.innerHTML=`Tìm kiếm sản phẩm`
                document.querySelector(".searched").innerHTML=`
                    ${x-1} kết quả tìm kiếm "${InputValue}"
                `
                var position =  products.name.toLocaleLowerCase().search(InputValue.toLocaleLowerCase());
                
                if(products.name.toLocaleLowerCase().startsWith(InputValue.toLocaleLowerCase(),position)  ){
                    x+=1;
                    if( x> 18){
                        productsE3.innerHTML += `
                            <div class="card">
                                <a href="#" onclick = "layIDChuyenTrang(${products.id})"><img class="img-product" src="${products.imgSrc}" alt="..."></a>
                                <div class="card-top">
                                    <h3 class="card-title" style="text-align: center;"><a href="#" onclick = "layIDChuyenTrang(${products.id})" style="color: black;">${products.name}</a></h3>
                                </div>
                                <p class="card-user"><span>$${products.price}</span></p>
                                <input type="number" min="1" value="1" style="display: none;">
                                <button onclick="addToCart2(${products.id})">Thêm vào giỏ hàng</button>
                            </div>
                        `;
                        
                    }
                    else if(x <= 18){
                        productsE2.innerHTML += `
                            <div class="card">
                                <a href="#" onclick = "layIDChuyenTrang(${products.id})"><img class="img-product" src="${products.imgSrc}" alt="..."></a>
                                <div class="card-top">
                                    <h3 class="card-title" style="text-align: center;"><a href="#" onclick = "layIDChuyenTrang(${products.id})" style="color: black;">${products.name}</a></h3>
                                </div>
                                <p class="card-user"><span>$${products.price}</span></p>
                                <input type="number" min="1" value="1" style="display: none;">
                                <button onclick="addToCart2(${products.id})">Thêm vào giỏ hàng</button>
                            </div>
                            `;
                    }
                    
                }
                
            }

            /* tìm kiếm bằng menu */
            else if(localStorage.getItem("Search") == 2){
                
                var position1 =  products.theloai.toLocaleLowerCase().search(InputValue.toLocaleLowerCase());
                if(products.theloai.toLocaleLowerCase().startsWith(InputValue.toLocaleLowerCase(),position1) ){
                    x+=1;
                    if( x> 18){
                        productsE3.innerHTML += `
                            <div class="card">
                                <a href="#" onclick = "layIDChuyenTrang(${products.id})"><img class="img-product" src="${products.imgSrc}" alt="..."></a>
                                <div class="card-top">
                                    <h3 class="card-title" style="text-align: center;"><a href="#" onclick = "layIDChuyenTrang(${products.id})" style="color: black;">${products.name}</a></h3>
                                </div>
                                <p class="card-user"><span>$${products.price}</span></p>
                                <input type="number" min="1" value="1" style="display: none;">
                                <button onclick="addToCart2(${products.id})">Thêm vào giỏ hàng</button>
                            </div>
                        `;
                        
                    }
                    else if(x <= 18){
                        productsE2.innerHTML += `
                            <div class="card">
                                <a href="#" onclick = "layIDChuyenTrang(${products.id})"><img class="img-product" src="${products.imgSrc}" alt="..."></a>
                                <div class="card-top">
                                    <h3 class="card-title" style="text-align: center;"><a href="#" onclick = "layIDChuyenTrang(${products.id})" style="color: black;">${products.name}</a></h3>
                                </div>
                                <p class="card-user"><span>$${products.price}</span></p>
                                <input type="number" min="1" value="1" style="display: none;">
                                <button onclick="addToCart2(${products.id})">Thêm vào giỏ hàng</button>
                            </div>
                            `;
                    }
                
                }
            }
        })
        const CheckProduct= document.getElementsByClassName("card");
        if(CheckProduct.length == 0){
            productsE2.innerHTML=`
                <h1 style="text-align:center;width:100%">Không tìm thấy sản phẩm</h1>
            `
        }
        
    }
}




function layIDChuyenTrang(id){
    localStorage.setItem("id",id);
    location.href = "/Product.html";
}




function showcart(){
    var x = document.getElementById("showCart");
    if(x.style.display == "block"){
        x.style.display = "none";
    }else 
        x.style.display = "block";
}

function addToCart2(id) {
  // check if prodcut already exist in cart
    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id);
    } else {
        const item = products2.find((products2) => products2.id === id);

        cart.push({
        ...item,
        numberOfUnits: 1,
        });
}

    updateCart();
}

function updateCart() {
    renderCartItems();
    renderSubtotal();
    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart));
  
    // save cart to local storage
}

function renderSubtotal() {
    let totalPrice = 0,
      totalItems = 0;
  
    cart.forEach((item) => {
      totalPrice += item.price * item.numberOfUnits;
      totalItems += item.numberOfUnits;
    });
  
    subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
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
        } 
        else if (action === "plus" && numberOfUnits < item.instock) {
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
