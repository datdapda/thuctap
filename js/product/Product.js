const products = [
  {
    id: 0,
    name: "Tai nghe Bluetooth AirPods Pro Wireless Charge Apple MWP22",
    price: 213,
    instock: 100,
    tinhtrang: "Còn hàng",
    imgSrc: "/img/Sản phẩm/New/New1.png",
    maSP: "BAP22",
    theloai: "Phụ kiện",
    theloaiSrc:"/PhuKien.html",
    srcImg1: "/img/Sản phẩm/New/New1QC.jpg",
    srcImg2: "/img/Sản phẩm/New/New1QC2.jpg",
    srcImg3: "/img/Sản phẩm/New/New1QC3.jpg",
    srcImg4: "/img/Sản phẩm/New/New1QC4.jpg",
  },
  {
    id: 1,
    name: "Tai nghe EP Gaming Asus Rog Cetra II Core",
    price: 48.9,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/New/New2.png",
    maSP: "EGAII",
    theloai: "Phụ kiện",
    theloaiSrc:"/PhuKien.html",
    srcImg1: "/img/Sản phẩm/New/New2QC.jpg",
    srcImg2: "/img/Sản phẩm/New/New2QC2.jpg",
    srcImg3: "/img/Sản phẩm/New/New2QC3.jpg",
    srcImg4: "/img/Sản phẩm/New/New2QC4.jpg",
  },
  {
    id: 2,
    name: "Call of Duty: WWII - Gold US",
    price: 38.26,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/New/New3.png",
    maSP: "CODII",
    theloai: "Âm thanh / PlayStation",
    theloaiSrc:"/AmThanh.html",
    srcImg1: "/img/Sản phẩm/New/New3QC.jpg",
    srcImg2: "/img/Sản phẩm/New/New3QC2.jpg",
    srcImg3: "/img/Sản phẩm/New/New3QC3.jpg",
    srcImg4: "/img/Sản phẩm/New/New3QC4.jpg",
  },
  {
    id: 3,
    name: "Máy ảnh Sony Alpha A7 Mark III + Lens FE 50mm",
    price: 1826,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/New/New4.png",
    maSP: "SAAM3",
    theloai: "Máy ảnh",
    theloaiSrc:"/MayAnh.html",
    srcImg1: "/img/Sản phẩm/New/New4QC.jpg",
    srcImg2: "/img/Sản phẩm/New/New4QC2.jpg",
    srcImg3: "/img/Sản phẩm/New/New4QC3.jpg",
    srcImg4: "/img/Sản phẩm/New/New4QC4.jpg",
  },
  {
    id: 4,
    name: "Máy ảnh Sony Alpha A7 Mark III + Lens FE 35mm",
    price: 999.56,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/New/New5.png",
    maSP: "SAAM4",
    theloai: "Máy ảnh",
    theloaiSrc:"/MayAnh.html",
    srcImg1: "/img/Sản phẩm/New/New5QC.jpg",
    srcImg2: "/img/Sản phẩm/New/New5QC2.jpg",
    srcImg3: "/img/Sản phẩm/New/New5QC3.jpg",
    srcImg4: "/img/Sản phẩm/New/New5QC4.jpg",
  },
  {
    id: 5,
    name: "Máy ảnh Sony Alpha A7S III",
    price: 3521.56,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/New/New6.png",
    maSP: "SAA7S",
    theloai: "Máy ảnh",
    theloaiSrc:"/MayAnh.html",
    srcImg1: "/img/Sản phẩm/New/New6QC.jpg",
    srcImg2: "/img/Sản phẩm/New/New6QC2.jpg",
    srcImg3: "/img/Sản phẩm/New/New6QC3.jpg",
    srcImg4: "/img/Sản phẩm/New/New6QC4.jpg",
  },
  


  {
    id: 6,
    name: "Máy ảnh Fujifilm X-T4",
    price: 1652.13,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/MayAnh/MA1.png",
    maSP: "FFXT4",
    theloai: "Máy ảnh",
    theloaiSrc:"/MayAnh.html",
    srcImg1: "/img/Sản phẩm/MayAnh/MA1QC.jpg",
    srcImg2: "/img/Sản phẩm/MayAnh/MA1QC2.jpg",
    srcImg3: "/img/Sản phẩm/MayAnh/MA1QC3.jpg",
    srcImg4: "/img/Sản phẩm/MayAnh/MA1QC4.jpg",
    

  },
  {
    id: 7,
    name: "Máy ảnh sony Alpha A7C",
    price: 1695.6,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/MayAnh/MA2.png",
    maSP: "SAA7C",
    theloai: "Máy ảnh",
    theloaiSrc:"/MayAnh.html",
    srcImg1: "/img/Sản phẩm/MayAnh/MA2QC.jpg",
    srcImg2: "/img/Sản phẩm/MayAnh/MA2QC2.jpg",
    srcImg3: "/img/Sản phẩm/MayAnh/MA2QC3.jpg",
    srcImg4: "/img/Sản phẩm/MayAnh/MA2QC4.jpg",
  },
  {
    id: 8,
    name: "Máy ảnh Sony ZV-1",
    price: 739.08,
    instock: 100,
    imgSrc: "/img/Sản phẩm/MayAnh/MA3.png",
    maSP: "SZV1",
    tinhtrang: "Còn hàng",

    theloai: "Máy ảnh",
    theloaiSrc:"/MayAnh.html",
    srcImg1: "/img/Sản phẩm/MayAnh/MA3QC.jpg",
    srcImg2: "/img/Sản phẩm/MayAnh/MA3QC2.jpg",
    srcImg3: "/img/Sản phẩm/MayAnh/MA3QC3.jpg",
    srcImg4: "/img/Sản phẩm/MayAnh/MA3QC4.jpg",
  },
  {
    id: 9,
    name: "Máy ảnh Fujifilm X100F",
    price: 869.52,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/MayAnh/MA4.png",
    maSP: "FLX1F",
    theloai: "Máy ảnh",
    theloaiSrc:"/MayAnh.html",
    srcImg1: "/img/Sản phẩm/MayAnh/MA4QC.jpg",
    srcImg2: "/img/Sản phẩm/MayAnh/MA4QC2.jpg",
    srcImg3: "/img/Sản phẩm/MayAnh/MA4QC3.jpg",
    srcImg4: "/img/Sản phẩm/MayAnh/MA4QC4.jpg",
  },
  {
    id: 10,
    name: "Máy ảnh Fujifilm XF10",
    price: 347.78,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/MayAnh/MA5.png",
    maSP: "FFXF1",
    theloai: "Máy ảnh",
    theloaiSrc:"/MayAnh.html",
    srcImg1: "/img/Sản phẩm/MayAnh/MA5QC.jpg",
    srcImg2: "/img/Sản phẩm/MayAnh/MA5QC2.jpg",
    srcImg3: "/img/Sản phẩm/MayAnh/MA5QC3.jpg",
    srcImg4: "/img/Sản phẩm/MayAnh/MA5QC4.jpg",
  },
  {
    id: 11,
    name: "Máy ảnh Fujifilm X-E3",
    price: 1043.3,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/MayAnh/MA6.png",
    maSP: "FFXE3",
    theloai: "Máy ảnh",
    theloaiSrc:"/MayAnh.html",
    srcImg1: "/img/Sản phẩm/MayAnh/MA6QC.jpg",
    srcImg2: "/img/Sản phẩm/MayAnh/MA6QC2.jpg",
    srcImg3: "/img/Sản phẩm/MayAnh/MA6QC3.jpg",
    srcImg4: "/img/Sản phẩm/MayAnh/MA6QC4.jpg",
  },



  {
    id: 12,
    name: "Máy chơi game Sony Playstation 4 Pro 1TB - OM 2",
    price: 500,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/AmThanh/PS1.png",
    maSP: "PL1TB",
    theloai:"Âm thanh / PlayStation",
    theloaiSrc:"/AmThanh.html",
    srcImg1: "/img/Sản phẩm/AmThanh/PS1QC.jpg",
    srcImg2: "/img/Sản phẩm/AmThanh/PS1QC2.jpg",
    srcImg3: "/img/Sản phẩm/AmThanh/PS1QC3.jpg",
    srcImg4: "/img/Sản phẩm/AmThanh/PS1QC4.jpg",
  },
  {
    id: 13,
    name: "Máy chơi game Sony PlayStation Classic - Limited",
    price: 1695.6,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/AmThanh/PS2.png",
    maSP: "PLCLT",
    theloai:"Âm thanh / PlayStation",
    theloaiSrc:"/AmThanh.html",
    srcImg1: "/img/Sản phẩm/AmThanh/PS2QC.jpg",
    srcImg2: "/img/Sản phẩm/AmThanh/PS2QC2.jpg",
    srcImg3: "/img/Sản phẩm/AmThanh/PS2QC3.jpg",
    srcImg4: "/img/Sản phẩm/AmThanh/PS2QC4.jpg",
  },
  {
    id: 14,
    name: "PlayStation Camera",
    price: 130.4,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/AmThanh/PS3.png",
    maSP: "PLCMR",
    theloai:"Âm thanh / PlayStation",
    theloaiSrc:"/AmThanh.html",
    srcImg1: "/img/Sản phẩm/AmThanh/PS3QC.jpg",
    srcImg2: "/img/Sản phẩm/AmThanh/PS3QC2.jpg",
    srcImg3: "/img/Sản phẩm/AmThanh/PS3QC3.jpg",
    srcImg4: "/img/Sản phẩm/AmThanh/PS3QC4.jpg",
  },
  {
    id: 15,
    name: "Máy chơi game Sony Playstation 4 Slim 1TB MegaPack 3",
    price: 391.26,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/AmThanh/PS4.png",
    maSP: "PL1TM",
    theloai:"Âm thanh / PlayStation",
    theloaiSrc:"/AmThanh.html",
    srcImg1: "/img/Sản phẩm/AmThanh/PS4QC.jpg",
    srcImg2: "/img/Sản phẩm/AmThanh/PS4QC2.jpg",
    srcImg3: "/img/Sản phẩm/AmThanh/PS4QC3.jpg",
    srcImg4: "/img/Sản phẩm/AmThanh/PS4QC4.jpg",
  },
  {
    id: 16,
    name: "Tay cầm Sony PS4 Dualshock Dark Blue",
    price: 56.47,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/AmThanh/PS5.png",
    maSP: "PS4DB",
    theloai:"Âm thanh / PlayStation",
    theloaiSrc:"/AmThanh.html",
    srcImg1: "/img/Sản phẩm/AmThanh/PS5QC.jpg",
    srcImg2: "/img/Sản phẩm/AmThanh/PS5QC2.jpg",
    srcImg3: "/img/Sản phẩm/AmThanh/PS5QC3.jpg",
    srcImg4: "/img/Sản phẩm/AmThanh/PS5QC4.jpg",
  },
  {
    id: 17,
    name: "Dead of Live 6",
    price: 62.17,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/AmThanh/PS6.png",
    maSP: "DOL6",
    theloai:"Âm thanh / PlayStation",
    theloaiSrc:"/AmThanh.html",
    srcImg1: "/img/Sản phẩm/AmThanh/PS6QC.jpg",
    srcImg2: "/img/Sản phẩm/AmThanh/PS6QC2.jpg",
    srcImg3: "/img/Sản phẩm/AmThanh/PS6QC3.jpg",
    srcImg4: "/img/Sản phẩm/AmThanh/PS6QC4.jpg",
  },



  {
    id: 18,
    name: "Canon EF 35mm f/1.4L II USM",
    price: 499.95,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/OngKinh/OK1.png",
    maSP: "CNEF2",
    theloai:"Ống Kính",
    theloaiSrc:"/OngKinh.html",
    srcImg1: "/img/Sản phẩm/OngKinh/OK1QC.jpg",
    srcImg2: "/img/Sản phẩm/OngKinh/OK1QC2.jpg",
    srcImg3: "/img/Sản phẩm/OngKinh/OK1QC3.jpg",
    srcImg4: "/img/Sản phẩm/OngKinh/OK1QC3.jpg",
  },
  {
    id: 19,
    name: "Canon RF 16mm f/2.8 STM",
    price: 239.08,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/OngKinh/OK2.png",
    maSP: "CNRF16",
    theloai:"Ống Kính",
    theloaiSrc:"/OngKinh.html",
    srcImg1: "/img/Sản phẩm/OngKinh/OK2QC.jpg",
    srcImg2: "/img/Sản phẩm/OngKinh/OK2QC2.jpg",
    srcImg3: "/img/Sản phẩm/OngKinh/OK2QC3.jpg",
    srcImg4: "/img/Sản phẩm/OngKinh/OK2QC3.jpg",
  },
  {
    id: 20,
    name: "Canon RF 100-400mm f/5.6-8 IS USM",
    price: 847.78,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/OngKinh/OK3.png",
    maSP: "CNRF10",
    theloai:"Ống Kính",
    theloaiSrc:"/OngKinh.html",
    srcImg1: "/img/Sản phẩm/OngKinh/OK3QC.jpg",
    srcImg2: "/img/Sản phẩm/OngKinh/OK3QC2.jpg",
    srcImg3: "/img/Sản phẩm/OngKinh/OK3QC3.jpg",
    srcImg4: "/img/Sản phẩm/OngKinh/OK3QC3.jpg",

  },
  {
    id: 21,
    name: "Sigma 24mm f/2 DG DN (C) for Leica L",
    price: 673.87,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/OngKinh/OK4.png",
    maSP: "SG24",
    theloai:"Ống Kính",
    theloaiSrc:"/OngKinh.html",
    srcImg1: "/img/Sản phẩm/OngKinh/OK4QC.jpg",
    srcImg2: "/img/Sản phẩm/OngKinh/OK4QC2.jpg",
    srcImg3: "/img/Sản phẩm/OngKinh/OK4QC3.jpg",
    srcImg4: "/img/Sản phẩm/OngKinh/OK4QC3.jpg",
  },
  {
    id: 22,
    name: "Sigma 90mm f/2.8 DG DN (C) for Leica L",
    price: 673.87,
    instock: 100,
    tinhtrang: "Còn hàng",

      imgSrc: "/img/Sản phẩm/OngKinh/OK5.png",
    maSP: "SG90",
    theloai:"Ống Kính",
    theloaiSrc:"/OngKinh.html",
    srcImg1: "/img/Sản phẩm/OngKinh/OK5QC.jpg",
    srcImg2: "/img/Sản phẩm/OngKinh/OK5QC2.jpg",
    srcImg3: "/img/Sản phẩm/OngKinh/OK5QC3.jpg",
    srcImg4: "/img/Sản phẩm/OngKinh/OK5QC3.jpg",
  },
  {
    id: 23,
    name: "Fujifilm XF 23mm f/1.4 R LM WR",
    price: 952.17,
    instock: 100,
    tinhtrang: "Còn hàng",

      imgSrc: "/img/Sản phẩm/OngKinh/OK6.png",
    maSP: "FFXF23",
    theloai:"Ống Kính",
    theloaiSrc:"/OngKinh.html",
    srcImg1: "/img/Sản phẩm/OngKinh/OK6QC.jpg",
    srcImg2: "/img/Sản phẩm/OngKinh/OK6QC2.jpg",
    srcImg3: "/img/Sản phẩm/OngKinh/OK6QC3.jpg",
    srcImg4: "/img/Sản phẩm/OngKinh/OK6QC3.jpg",
  },



  {
    id: 24,
    name: "Balo máy ảnh PGYTECH OneMo 25L + Túi đeo chéo",
    price: 182.17,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/PhuKien/PK1.png",
    maSP: "PGYO25",
    theloai: "Phụ kiện",
    theloaiSrc:"/PhuKien.html",
    srcImg1: "/img/Sản phẩm/PhuKien/PK1QC.jpg",
    srcImg2: "/img/Sản phẩm/PhuKien/PK1QC2.jpg",
    srcImg3: "/img/Sản phẩm/PhuKien/PK1QC3.jpg",
    srcImg4: "/img/Sản phẩm/PhuKien/PK1QC4.jpg",
  },
  {
    id: 25,
    name: "Chân máy Peak Design Travel Tripod | Aluminum",
    price: 347.4,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/PhuKien/PK2.png",
    maSP: "PDTTA",
    theloai: "Phụ kiện",
    theloaiSrc:"/PhuKien.html",
    srcImg1: "/img/Sản phẩm/PhuKien/PK2QC.jpg",
    srcImg2: "/img/Sản phẩm/PhuKien/PK2QC2.jpg",
    srcImg3: "/img/Sản phẩm/PhuKien/PK2QC3.jpg",
    srcImg4: "/img/Sản phẩm/PhuKien/PK2QC4.jpg",
  },
  {
    id: 26,
    name: "Đèn Flash Sony HVL-F28RM",
    price: 247.4,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/PhuKien/PK3.png",
    maSP: "SHVLF",
    theloai: "Phụ kiện",
    theloaiSrc:"/PhuKien.html",
    srcImg1: "/img/Sản phẩm/PhuKien/PK3QC.jpg",
    srcImg2: "/img/Sản phẩm/PhuKien/PK3QC2.jpg",
    srcImg3: "/img/Sản phẩm/PhuKien/PK3QC3.jpg",
    srcImg4: "/img/Sản phẩm/PhuKien/PK3QC4.jpg",
  },
  {
    id: 27,
    name: "PGYTECH MantisPod Pro Vlogging Tripod",
    price: 145.65,
    instock: 100,
    tinhtrang: "Còn hàng",

    imgSrc: "/img/Sản phẩm/PhuKien/PK4.png",
    maSP: "PGYTP",
    theloai: "Phụ kiện",
    theloaiSrc:"/PhuKien.html",
    srcImg1: "/img/Sản phẩm/PhuKien/PK4QC.jpg",
    srcImg2: "/img/Sản phẩm/PhuKien/PK4QC2.jpg",
    srcImg3: "/img/Sản phẩm/PhuKien/PK4QC3.jpg",
    srcImg4: "/img/Sản phẩm/PhuKien/PK4QC4.jpg",
  },
  {
    id: 28,
    name: "Đèn Flash Godox V1 cho Canon",
    price: 164.78,
    instock: 100,
    tinhtrang: "Còn hàng",

      imgSrc: "/img/Sản phẩm/PhuKien/PK5.png",
    maSP: "FGV1",
    theloai: "Phụ kiện",
    theloaiSrc:"/PhuKien.html",
    srcImg1: "/img/Sản phẩm/PhuKien/PK5QC.jpg",
    srcImg2: "/img/Sản phẩm/PhuKien/PK5QC2.jpg",
    srcImg3: "/img/Sản phẩm/PhuKien/PK5QC3.jpg",
    srcImg4: "/img/Sản phẩm/PhuKien/PK5QC4.jpg",
  },
  {
    id: 29,
    name: "Đèn Flash Godox QT400IIM",
    price: 264.9,
    instock: 100,
    tinhtrang: "Còn hàng",

      imgSrc: "/img/Sản phẩm/PhuKien/PK6.png",
    maSP: "FGQT4",
    theloai: "Phụ kiện",
    theloaiSrc:"/PhuKien.html",
    srcImg1: "/img/Sản phẩm/PhuKien/PK6QC.jpg",
    srcImg2: "/img/Sản phẩm/PhuKien/PK6QC2.jpg",
    srcImg3: "/img/Sản phẩm/PhuKien/PK6QC3.jpg",
    srcImg4: "/img/Sản phẩm/PhuKien/PK6QC4.jpg",
  },

  
];


