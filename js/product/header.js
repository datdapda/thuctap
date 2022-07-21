const header = document.querySelector("#headerJS");
const footer = document.querySelector("#footerJS");
function renderHeaderFooter(){
    header.innerHTML=`
        <section class="hotline-phone-ring-wrap">
            <div class="hotline-phone-ring">
                <div class="hotline-phone-ring-circle"></div>
                <div class="hotline-phone-ring-circle-fill"></div>
                <div class="hotline-phone-ring-img-circle"> <a href="tel:0938103176" class="pps-btn-img">
                    <i style="color:#fff;font-size:25px;" class="fa fa-mobile"></i> </a>
                </div>
            </div>
        </section>
        <section class="header">
            <div class="container Header">
                <div class="SignUp col-lg-7 "  id="login">
                    <ul>
                        <li><a href="#" class="signup"><i class="fa fa-key"></i> Đăng ký  | </a></li>
                        <li><a href="#" class="signin"><i class="fa fa-user"></i> Đăng nhập</a></li>
                        <li data-toggle="modal"
                        data-target="#exampleModal"
                        data-whatever="@mdo"><a href="#"><i class="fa fa-hand-o-right"></i> Theo dõi đơn hàng</a></li>
                        <li><a href="/404.html">Tra cứu bảo hành</a></li>
                    </ul>
                </div>
                <div class="SignUp col-lg-7 Logined" id="logined">
                    <ul>
                        <li><a href="#" onclick ="QuanTri()"><i class="fa fa-user"></i> Trang cá nhân  | </a></li>
                        <li><a href="/Index.html" id="linkLogin">Thoát</a></li>
                        <li data-toggle="modal"
                        data-target="#exampleModal"
                        data-whatever="@mdo"><a href="#"><i class="fa fa-hand-o-right"></i> Theo dõi đơn hàng</a></li>
                        <li><a href="/404.html">Tra cứu bảo hành</a></li>
                    </ul>
                </div>
                <div class="search-input col-lg-3">
                    <input type="text" placeholder="Tìm kiếm">
                    <div class="autocom-box">
                    
                    </div>
                    <div class="icon"><i class="fa fa-search"></i></div>
                </div>
                <div class="follow col-lg-2">
                    <ul>
                        <li><a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.google.com/"><i class="fa fa-google"></i></a></li>
                        <li><a href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://youtube.com"><i class="fa fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="headerBar">
            <div class="container HeaderBar">
                <div class="logo col-lg-8">
                    <a href="/Index.html"><img src="/img/logo.jpg" alt=""></a>
                </div>
                <div class="LienHe col-lg-4">
                    <ul>
                        <li class="Phone"><i class="fa fa-headphones"></i><a href="tel:0938103176"> Hotline tư vấn: 0938103176</a> </li>
                        <li>
                            <div class="GioHang">
                                <i class="fa fa-shopping-basket" onclick="showcart();"></i>
                                <ul class="GioHangLink">
                                    <li><a href="/GioHang.html">Giỏ hàng</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="FlowGH">
            <!-- Đăng nhập -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                <div class="modal-dialog" role="document">
                <!-- Form đăng nhập -->
                    <div class="modal-content" style="background-image: url(/img/banner1.jpg);">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="exampleModalLabel" style="color: #fff;"> Theo dõi đơn hàng</h4>
                        </div>
                    <!-- Khung đăng nhập -->
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="recipient-name" class="control-label" style="color: #fff;">Vui lòng nhập mã đơn hàng</label>
                                    <input type="text" required="required" class="form-control" >
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="control-label"style="color: #fff;">Vui lòng nhập email đặt hàng</label>
                                    <input type="password" required="required" class="form-control" >
                                </div>
                            </form>
                            <span style="text-align:center;"><a href="/404.html"style="color: #fff;">Mọi thắc mắc vui lòng liên hệ hotline</a></span>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary"><a href="/Login/Index.html" style="color: black;">Apply</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Đăng ký -->
        </section>
        <section class="headerPhu">
            <div class="container Menu-chose" style="margin-bottom: 20px;">
                <label for="toggle-menu" class="btn-toggle-menu"><i class="fa fa-bars"></i></label>
                <input type="checkbox" id="toggle-menu">
                <ul class="navMenu">
                    <li class="chose1"><a href="/Index.html"><i class="fa fa-home" style="font-size: 22px;"></i></a></li>
                    <li class="chose2"><a href="#">MÁY ẢNH, MÁY QUAY <i class="fa fa-caret-down"></i></a>
                        <!-- menu ẩn -->
                        <ul class="navMenu2">
                            <li><a href="/404.html">Máy ảnh Lomography</a></li>
                            <li><a href="/404.html">Máy ảnh Panasonic</a></li>
                            <li><a href="/404.html">Máy ảnh FUJI</a></li>
                            <li><a href="/404.html">Máy ảnh SONY</a></li>
                            <li><a href="/404.html">Máy quay 360</a></li>
                            <li><a href="/404.html">Máy quay GoPro</a></li>
                            <li><a href="/404.html">Máy ảnh Sigma</a></li>
                            <li><a href="/404.html">Máy ảnh Leica</a></li>
                            <li><a href="/404.html">Máy ảnh Ricoh</a></li>
                            <li><a href="/404.html">Thiết bị quay phim DJI</a></li>
                            <li><a href="/404.html">Máy quay phim SONY</a></li>
                            <li><a href="/404.html">Insta360 Camera hành động</a></li>
                        </ul>
                    </li>
                    <li class="chose3"><a href="#">ỐNG KÍNH <i class="fa fa-caret-down"></i></a>
                        <!-- menu ẩn -->
                        <ul class="navMenu2">
                            <li><a href="/404.html">Ống kính Laowa</a></li>
                            <li><a href="/404.html">Ống kính FUJI</a></li>
                            <li><a href="/404.html">Ống kính Tokina</a></li>
                            <li><a href="/404.html">Ống kính Viltrox</a></li>
                            <li><a href="/404.html">Ống kính Sony</a></li>
                            <li><a href="/404.html">Ống kính SamYang</a></li>
                            <li><a href="/404.html">Ống kính Sigma</a></li>
                            <li><a href="/404.html">Ống kính Tamron Sony</a></li>
                            <li><a href="/404.html">Ống kính Carl Zeiss</a></li>
                        </ul>
                    </li>
                    <li class="chose4"><a href="#">PHỤ KIỆN <i class="fa fa-caret-down"></i></a>
                        <!-- menu ẩn -->
                        <ul class="navMenu2">
                            <li><a href="/404.html">Phụ kiện DJI</a></li>
                            <li><a href="/404.html">Phụ kiện Peak Design</a></li>
                            <li><a href="/404.html">Phụ kiện Sunnylife</a></li>
                            <li><a href="/404.html">Kính lọc Polarpro</a></li>
                            <li><a href="/404.html">Phụ kiện máy ảnh</a></li>
                            <li><a href="/404.html">Phụ kiện cam hành động</a></li>
                            <li><a href="/404.html">Phụ kiện ống kính </a></li>
                            <li><a href="/404.html">Phụ kiện quay phim</a></li>
                            <li><a href="/404.html">Chân máy ảnh</a></li>
                            <li><a href="/404.html">Thiết bị vệ sinh- Chống ẩm</a></li>
                            <li><a href="/404.html">Gói phần mềm</a></li>
                            <li><a href="/404.html">Phụ kiện khác</a></li>
                        </ul>
                    </li>
                    <li class="chose5"><a href="#">ÂM THANH / PLAYSTATION <i class="fa fa-caret-down"></i></a>
        
                        <!-- menu ẩn -->
                        <ul class="navMenu2">
                            <li><a href="/404.html">JBL</a></li>
                            <li><a href="/404.html">Harman Kardon</a></li>
                            <li><a href="/404.html">B&O</a></li>
                            <li><a href="/404.html">Apple</a></li>
                            <li><a href="/404.html">Phantom</a></li>
                            <li><a href="/404.html">Âm thanh LG</a></li>
                            <li><a href="/404.html">Tai nghe nhạc sony</a></li>
                            <li><a href="/404.html">Loa di động sony</a></li>
                            <li><a href="/404.html">Máy ghi âm sony</a></li>
                            <li><a href="/404.html">Máy chơi game Playstation</a></li>
                            <li><a href="/404.html">Tai nghe không dây Huawei</a></li>
                        </ul>
                    </li>
                    <li class="chose6"><a href="/404.html">SP CÔNG NGHỆ <i class="fa fa-caret-down"></i></a>
                        <ul class="navMenu2">
                            <li><a href="/404.html">Pelican Case</a></li>
                            <li><a href="/404.html">Sản phẩm Apple</a></li>
                            <li><a href="/404.html">Thiết bị liveStream</a></li>
                            <li><a href="/404.html">Thiết bị đeo tay</a></li>
                            <li><a href="/404.html">Máy chiếu mini</a></li>
                            <li><a href="/404.html">Phụ kiến Camping</a></li>
        
                        </ul>
                    </li>
                    <li class="chose7"><a href="/404.html">HÀNG THANH LÝ <i class="fa fa-caret-down"></i></a>
                        <ul class="navMenu2">
                            <li><a href="/404.html">Máy ảnh</a></li>
                            <li><a href="/404.html">Ống kính / Flash</a></li>
                            <li><a href="/404.html">Phụ kiến máy ảnh</a></li>
                            <li><a href="/404.html">Thiết bị âm thanh</a></li>
                            <li><a href="/404.html">Các sản phẩm côn nghệ</a></li>
        
                        </ul>
                    </li>
                    <li class="chose8"><a href="/404.html">TIN TỨC <i class="fa fa-caret-down"></i></a>
                        <ul class="navMenu2">
                            <li><a href="/404.html">Khuyến mãi</a></li>
                            <li><a href="/404.html">Đồng hồ sức khỏe</a></li>
                            <li><a href="/404.html">Tin tức công nghệ</a></li>
                            <li><a href="/404.html">Đánh giá sản phẩm</a></li>
                            <li><a href="/404.html">Góc ảnh Sony Alpha</a></li>
                            <li><a href="/404.html">Góc kỹ thuật Sony Alpha</a></li>
                        </ul>
                    </li>
                    <li class="chose9"><a href="/404.html">LIÊN HỆ <i class="fa fa-caret-down"></i></a>
                        <ul class="navMenu2">
                            <li><a href="/404.html">Hướng dẫn mua hàng</a></li>
                            <li><a href="/404.html">Hướng dẫn bảo hành</a></li>
                            <li><a href="/404.html">Tài khoản ngân hàng</a></li>
                            <li><a href="/404.html">Liên hệ Carashop</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
        <section class="Cart">
        
            <div class="cart col-lg-4" id="showCart" style="padding: 0;">
                <div class="TenSP">
                    <span class="col-lg-2">Ảnh</span>
                    <span class="col-lg-5">Tên sản phẩm</span>
                    <span class="col-lg-3">Số lượng</span>
                    <span class="col-lg-2">Đơn giá</span>
                </div>
                <hr>
                <div class="cart-items">
                </div>
                <div class="cart-footer" style="text-align: center;">
                    <div class="subtotal">
                        Tổng tiền (0 sản phẩm): $0
                    </div>
                    <div class="checkout" onclick="ThanhToan()">
                        Nhấn để thanh toán
                        <script>
                            
                        </script>
                    </div>
                </div>
            </div>
        </section>
        <section class="banner">
        <div class="Banner container" style="padding: 0px; margin-bottom: 20px;">
            <img src="/img/banner.jpg" alt="" width="100%" >
        </div>
    </section>
    `
  footer.innerHTML=`
  <div class=" container footer">

            <!-- footer email feedback -->
    
            <div class="email-feedback">
                <label for="newsletter1" class="visually-hidden">ĐĂNG KÝ NHẬN EMAIL THÔNG BÁO KHUYẾN MÃI HOẶC ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ</label>
                <div class="input-email">
                    <input id="newsletter1" type="text" class="form-control" placeholder="Nhập email hoặc số điện thoại của bạn">
                    <button class="btn btn-primary" type="button">Gửi</button>
                  </div>
            </div>
    
            <!-- footer feedback -->
    
            <footer>
              <div class="row feed-back">
                <div class="col-xs-auto col-sm-3 col-md-3">
                    <h5>HỖ TRỢ KHÁCH HÀNG</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Hướng dẫn mua hàng trực tuyến</a></li>
                        <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Hướng dẫn thanh toán</a></li>
                        <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Hướng dẫn mua hàng trả góp</a></li>
                        <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">In hóa đơn điện tử</a></li>
                        <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Góp ý, khiếu nại</a></li>
                    </ul>
                </div>
          
                <div class="col-xs-auto col-sm-3 col-md-3">
                    <h5>CHÍNH SÁCH CHUNG</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Chính sách, quy định chung</a></li>
                        <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Chính sách vận chuyển</a></li>
                        <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Chính sách bảo hành</a></li>
                        <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Chính sách đổi trả và hoàn tiền</a></li>
                        <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Bảo mật thông tin khách hàng</a></li>
                    </ul>
                </div>
          
                <div class="col-xs-auto col-sm-3 col-md-3">
                    <h5>THÔNG TIN KHUYẾN MÃI</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Thông tin khuyến mãi</a></li>
                        <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Sản phẩm khuyến mãi</a></li>
                        <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Sản phẩm bán chạy</a></li>
                        <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Sản phẩm mới</a></li>
                    </ul>
                </div>
          
                <div class="col-xs-auto col-sm-3 col-md-3">
                    <h5>GIỚI THIỆU CÔNG TY</h5>
                    <ul class="nav flex-column">
                      <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Giới thiệu công ty</a></li>
                      <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Thông tin liên hệ</a></li>
                      <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Thông tin tuyển dụng</a></li>
                      <li class="nav-item mb-2"><a href="/404.html" class="nav-link p-0 text-muted">Tin tức</a></li>
                    </ul>
                  </div>
                </div>
    
    
                <!-- footer info công ty -->
    
                <div class="py-4 my-4 info">
                    <p class="col-xs-auto col-sm-10 col-md-10" style="text-align: center;">&copy; 2021 Company, Inc. All rights reserved.</p>
                    <ul class="list-unstyled col-xs-auto col-sm-2 col-md-2">
                        <li class="col-xs-1"><a class="link-dark" href="/404.html"><i class="fa fa-twitter" style="color: #fff ;"></i></a></li>
                        <li class="col-xs-1"><a class="link-dark" href="/404.html"><i class="fa fa-instagram"style="color: #fff ;"></i></a></li>
                        <li class="col-xs-1"><a class="link-dark" href="/404.html"><i class="fa fa-facebook"style="color: #fff;"></i></a></li>
                    </ul>
                </div>
            </footer>
        </div>
  `
}
function ThanhToan(){
    location.href = "/GioHang.html"
  }
renderHeaderFooter();


var name = localStorage.getItem("tk");
var pass = localStorage.getItem("mk");

function QuanTri(){
  if(name == "admin" && pass ==  "admin"){
      location.href ="/QuanTri.html"
  }
  else if(name != null && pass != null ){
      location.href = "/Profile.html"
  }
}



const login = document.querySelector("#login");
const LoginEd = document.querySelector("#logined");
const background = document.querySelector("#background");
document.addEventListener("DOMContentLoaded", () => {


    account.forEach((Account) => {
        if(name === Account.username && pass === Account.password){
            login.classList.add("Logined");
            LoginEd.classList.remove("Logined");
            document.querySelector("#linkLogin").addEventListener("click", e => {
              e.preventDefault();
        
              login.classList.remove("Logined");
              LoginEd.classList.add("Logined");
              localStorage.removeItem("tk");
              localStorage.removeItem("mk");
              window.location = "/index.html";
        
            });
        }
        else if(name != Account.username && pass != Account.password){
            login.classList.add("Logined");
            LoginEd.classList.remove("Logined");
            document.querySelector("#linkLogin").addEventListener("click", e => {
              e.preventDefault();
        
              login.classList.remove("Logined");
              LoginEd.classList.add("Logined");
              localStorage.removeItem("tk");
              localStorage.removeItem("mk");
              window.location = "/index.html";
        
            });
        }
    });
});
document.querySelector(".signup").addEventListener("click",e=>{
    var i=0;
    sessionStorage.setItem("login",i);
    location.href="/login.html";
    
  });
  document.querySelector(".signin").addEventListener("click",e=>{
    var i=1;
    sessionStorage.setItem("login",i);
    location.href="/login.html";
  
  });
login.classList.remove("Logined");
LoginEd.classList.add("Logined");

const chose2 = document.querySelector(".chose2")
const chose3 = document.querySelector(".chose3")
const chose4 = document.querySelector(".chose4")
const chose5 = document.querySelector(".chose5")

chose2.addEventListener("click",e=>{
    localStorage.setItem("Search",2);
    localStorage.setItem("inputbox","Máy ảnh")
  location.href="/Group.html"
})
chose3.addEventListener("click",e=>{
    localStorage.setItem("Search",2);
    localStorage.setItem("inputbox","Ống kính")
  location.href="/Group.html"
})
chose4.addEventListener("click",e=>{
    localStorage.setItem("Search",2);
    localStorage.setItem("inputbox","Phụ kiện")
  location.href="/Group.html"
})
chose5.addEventListener("click",e=>{
    localStorage.setItem("Search",2);
    localStorage.setItem("inputbox","Âm thanh")
  location.href="/Group.html"
})