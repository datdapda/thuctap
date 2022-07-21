// SELECT ELEMENTS

const cartItemsEl = document.querySelector(".cart-items");

const subtotalEl = document.querySelector(".subtotal");

const totalItemsInCartEl = document.querySelector(".total-items-in-cart");





function showcart() {
    var x = document.getElementById("showCart");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else
        x.style.display = "block";
}

function addToCart(id) {
    window.alert("Bạn đã thêm vào giỏ hàng");
    // check if prodcut already exist in cart
    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id);
    } else {
        const item = products.find((products) => products.id === id);

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

const ThongTinChiTiet = document.querySelector(".ThongTinChiTiet");
const linkChose = document.querySelector(".linkChose");
const imgSlide = document.querySelector(".imgSlide");

const idInfo = localStorage.getItem("id");

const myInfo = products.find(function(product) {
    return product.id == idInfo;
});


function renderProdcuts() {
    ThongTinChiTiet.innerHTML = `
        <h3 style="margin-left: -15px; margin-top: 0; text-align: center;" class="item-title">${myInfo.name}</h3>
        <div class="row">
            <!-- ------ ThongTin ---------- -->
            <div class="top">
                <div class="top-FeedBack">
                    <ul>
                        <li>Mã SP: <span>${myInfo.maSP}</span></li>
                        <li>Đánh giá:
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </li>
                        <li>Bình luận: <span>3</span></li>
                        <li>Lượt xem: <span>7848</span> </li>
                    </ul>
                </div>
            </div>
            <!-- ------ Gia ---------- -->
            <div class="middle">
                <div class="middle-money">
                    <h4 class="item-price">$${myInfo.price}</h4>
                </div>
                <div class="VAT">
                    <span>Giá đã bao gồm phí VAT</span>
                    <span>Bảo hàng 24 tháng</span>
                </div>
            </div>
            <!-- ------ Order ---------- -->
            <div class="Order" style="text-align: center;">
                <div class="row order">
                    <div class="SL">
                        <span>Số lượng: </span>
                    </div>
                    <div class="">
                        <input type="number" min="1" value="1">
                    </div>
                    <div class="">
                        <input type="button" value="Thêm vào giỏ hàng" onclick="addToCart(${myInfo.id})">
                    </div>
                </div>
            </div>
            <div class="buttonOrder">
                <div class="DatMua">
                    <button onclick="ThongBaoMua(${myInfo.id})">
                        <span>Đặt mua ngay</span>
                        <p>Giao hàng tận nơi nhanh chóng</p>
                    </button>
                    
                </div>
                <div class="TraGop">
                    <button class="visa" onclick="TraGop()">
                        <span>Trả góp qua thẻ visa,master</span>
                        <p>Chỉ từ 1.999.917đ/tháng (12 tháng)</p>
                    </button>
                    <button class="hoso"  onclick="TraGop()">
                        <span>Trả góp hồ sơ duyệt 15phút</span>
                        <p>Chỉ từ 3.999.834đ/ tháng (6 tháng)</p>
                    </button>
                    <script>
                        function TraGop(){
                            window.location="/404.html";
                        }
                    </script>
                </div>
            </div>

        </div>
    `;
    linkChose.innerHTML = `
        <ul class="link">
            <li>
                <a href="/Index.html">Trang chủ</a>
                <i class="fa fa-chevron-right"></i>
            </li>
            <li>
                <a href="${myInfo.theloaiSrc}">${myInfo.theloai}</a>
                <i class="fa fa-chevron-right"></i>
            </li>
            <li>
                <a href="/Product.html">${myInfo.name}</a>
            </li>
        </ul>
    `
    imgSlide.innerHTML = `
        <div class="item active item-img">
            <img src="${myInfo.srcImg1}" alt="...">
        </div>
        <div class="item">
            <img src="${myInfo.srcImg2}" alt="...">
        </div>
        <div class="item">
            <img src="${myInfo.srcImg3}" alt="...">
        </div>
        <div class="item">
            <img src="${myInfo.srcImg4}" alt="...">
        </div>
    `
}



renderProdcuts();

function ThongBaoMua(id) {
    if (localStorage.getItem("tk") == null && localStorage.getItem("mk") == null) {
        alert("Vui lòng đăng nhập để xác nhận mua");
        location.href = "/index.html"
    } else {
        addToCart(id)
        location.href = "/GioHang.html"
    }
}

function layIDChuyenTrang(id) {
    localStorage.setItem("id", id);
    location.href = "/Product.html";
}

const productsMany = document.querySelector(".productsMany");

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function render() {
    const arrayRandom = []
    for (let i = 0; i < 4; i++) {
        const numberRandom = randomIntFromInterval(1, 29)
        for (let j = 0; j < i; j++) {
            if (numberRandom == arrayRandom[j])
                arrayRandom.splice(j, 1);
        }
        arrayRandom.push(numberRandom)
    }
    if (arrayRandom.length < 4) {
        arrayRandom.push(randomIntFromInterval(1, 29))
    }
    products.forEach((product) => {
        for (let i = 0; i < arrayRandom.length; i++) {
            if (product.id === arrayRandom[i]) {
                productsMany.innerHTML += `
                    <div class="card">
                        <a href="#" onclick = "layIDChuyenTrang(${product.id})"><img class="img-product" src="${product.imgSrc}" alt="..."></a>
                        <div class="card-top">
                            <h3 class="card-title" style="text-align: center;"><a href="#" onclick = "layIDChuyenTrang(${product.id})" style="color: black;">${product.name}</a></h3>
                        </div>
                        <p class="card-user"><span>$${product.price}</span></p>
                        <input type="number" min="1" value="1" style="display: none;">
                        <button onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
                    </div>
                `;
            }
        }
    });
}
render()