const dsNV = [
    {
        id: 1,
        MaNV:"MNV001",
        MaCV:"MCV001",
        img: "/img/Ava.png",
        name: "Nguyễn Thành Đạt",
        CMND:"026006749",
        NgaySinh:"12/04/2000",
        NoiSinh:"TPHCM",
        ChucVu:"Admin",
        Luong: 2000,
        ngaycong: 30,
        tinhtrang: "Đang làm việc",

    },
    {
        id: 2,
        MaNV:"MNV002",
        MaCV:"MCV002",
        img: "/img/Ava.png",
        name: "Nguyễn Anh Tuấn ",
        CMND:"0443212354",
        NgaySinh:"12/04/2000",
        NoiSinh:"TPHCM",
        ChucVu:"Quản trị viên",
        Luong: 1500,
        ngaycong: 30,
        tinhtrang: "Đang làm việc",

    },
    {
        id: 3,
        MaNV:"MNV003",
        MaCV:"MCV003",
        name: "Trần Hải Ngọc",
        CMND:"343214564",
        NgaySinh:"12/04/2000",
        NoiSinh:"TPHCM",
        ChucVu:"Quản trị viên",
        img: "/img/Ava.png",
        Luong: 1500,
        ngaycong: 30,
        tinhtrang: "Đang làm việc",

    },
    {
        id: 4,
        MaNV:"MNV004",
        MaCV:"MCV004",
        name: "Lê Trọng Quyền",
        CMND:"3716024774",
        NgaySinh:"12/04/2000",
        NoiSinh:"TPHCM",
        ChucVu:"Coder",
        img: "/img/Ava.png",
        ngaycong: 30,
        Luong: 1200,
        tinhtrang: "Đang làm việc",

    },
    
    {
        id: 5,
        MaNV:"MNV005",
        MaCV:"MCV005",
        name: "Nguyễn Thành Đạt",
        CMND:"3718087744",
        NgaySinh:"12/04/2000",
        NoiSinh:"TPHCM",
        ChucVu:"Coder",
        img: "/img/Ava.png",
        ngaycong: 30,
        Luong: 1200,
        tinhtrang: "Đang làm việc",
    },
    {
        id: 6,
        MaNV:"MNV006",
        MaCV:"MCV006",
        name: "Lê Ngọc Vân Thảo",
        CMND:"026007416",
        NgaySinh:"12/04/2000",
        NoiSinh:"TPHCM",
        ChucVu:"Marketing",
        img: "/img/Ava.png",
        ngaycong: 30,
        Luong: 1000,
        tinhtrang: "Đang làm việc",

    },
    {
        id: 7,
        MaNV:"MNV007",
        MaCV:"MCV007",
        name: "Nguyễn Hồng Hiếu",
        CMND:"024854185",
        NgaySinh:"12/04/2000",
        NoiSinh:"TPHCM",
        ChucVu:"Marketing",
        img: "/img/Ava.png",
        ngaycong: 30,
        Luong: 1000,
        tinhtrang: "Đang làm việc",

    },
    {
        id: 8,
        MaNV:"MNV008",
        MaCV:"MCV008",
        name: "Phạm Lê Gia Hân",
        CMND:"026006749",
        NgaySinh:"12/04/2000",
        NoiSinh:"TPHCM",
        ChucVu:"Quản lý",
        img: "/img/Ava.png",
        ngaycong: 30,
        Luong: 500,
        tinhtrang: "Đang làm việc",

    },

]

  


const content = document.querySelector(".dsNV");
const content2 = document.querySelector(".dsCV");
const content3 = document.querySelector(".dsLuong");
const content4 = document.querySelector(".dsNhanVien");
const content5 = document.querySelector(".dsProduct");
const tong = document.querySelector(".Tong");
const tong2 = document.querySelector(".Tong2");
const tong3 = document.querySelector(".Tong3");
const tong4 = document.querySelector(".Tong4");

function renderNV(){
    dsNV.forEach((dsNV) => {
        content.innerHTML += `
            <tr>
                <td>${dsNV.id}</td>
                <td>${dsNV.MaNV}</td>
                <td>${dsNV.name}</td>
                <td>${dsNV.NoiSinh}</td>
            </tr>
        `
    });
    dsNV.forEach((dsNV)=>{
        content2.innerHTML += `
            <tr>
                <td>${dsNV.id}</td>
                <td>${dsNV.MaCV}</td>
                <td>${dsNV.name}</td>
                <td>${dsNV.ChucVu}</td>
            </tr>
        `
    });
    dsNV.forEach((dsNV)=>{
        content3.innerHTML+=`
        <tr>
            <td>${dsNV.id}</td>
            <td>${dsNV.MaNV}</td>
            <td><img src="${dsNV.img}" alt=""></img></td>
            <td>${dsNV.name}</td>
            <td>$${dsNV.Luong}</td>
            <td>s${dsNV.ngaycong}</td>
            <td>$${dsNV.ngaycong * dsNV.Luong}</td>
        </tr>
        `
    });
    dsNV.forEach((dsNV)=>{
        content4.innerHTML+=`
        <tr>
            <td>${dsNV.id}</td>
            <td>${dsNV.MaNV}</td>
            <td><img src="${dsNV.img}" alt=""></img></td>
            <td>${dsNV.name}</td>
            <td>${dsNV.NgaySinh}</td>
            <td>${dsNV.NoiSinh}</td>
            <td>${dsNV.CMND}</td>
            <td><span>${dsNV.tinhtrang}</span></td>
            <td><i class="fa fa-edit"></i></td>
            <td><i class="fas fa-trash-alt"></i></td>
        </tr>
        `

    });
    var i=1;
    products.forEach((products)=>{
        content5.innerHTML +=`
        <tr>
            <td>${i++}</td>
            <td>${products.maSP}</td>
            <td><img src="${products.imgSrc}" alt=""></img></td>
            <td class="NameProduct">${products.name}</td>
            <td>$${products.price}</td>
            <td>${products.instock}</td>
            <td><span>${products.tinhtrang}</span></td>
            <td><i class="fa fa-edit"></i></td>
            <td><i class="fas fa-trash-alt"></i></td>
        </tr>
        `
    })


    tong.innerHTML=`<span>Showing 1 to ${dsNV.length} of 10 entries</span>`
    tong2.innerHTML=`<span>Showing 1 to ${dsNV.length} of 10 entries</span>`
    tong3.innerHTML=`<span>Showing 1 to ${dsNV.length} of 10 entries</span>`

}
renderNV();

document.querySelector(".Out").addEventListener("click",e=>{

    localStorage.removeItem("tk");
    localStorage.removeItem("mk");
    window.location = "/index.html";
})


