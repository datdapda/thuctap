let sugget = [
    {
        id:0,
        name:"Tai nghe Bluetooth",
    },
    {
        id:1,
        name:"Tai nghe EP Gaming",
    },
    {
        id:2,
        name:"Call of Duty",
    },
    {
        id:3,
        name:"Máy ảnh Sony Alpha A7 Mark III 50mm",
    },
    {
        id:4,
        name:"Máy ảnh Sony Alpha A7 Mark III 35mm",
    },
    {
        id:5,
        name:"Máy ảnh Sony Alpha A7S III",
    },
    {
        id:6,
        name:"Máy ảnh Fujifilm X-T4",
    },
    {
        id:7,
        name:"Máy ảnh sony Alpha A7C",
    },
    {
        id:8,
        name:"Máy ảnh Sony ZV-1",
    },
    {
        id:9,
        name:"Máy ảnh Fujifilm X100F",
    },
    {
        id:10,
        name:"Máy ảnh Fujifilm XF10",
    },
    {
        id:11,
        name:"Máy ảnh Fujifilm X-E3",
    },
    {
        id:12,
        name:"Máy chơi game Sony 4pro",
    },
    {
        id:13,
        name:"Máy chơi game Sony limited",
    },
    {
        id:14,
        name:"PlayStation Camera",
    },
    {
        id:15,
        name:"Máy chơi game Sony Megapack3",
    },
    {
        id:16,
        name:"Tay cầm Sony PS4",
    },
    {
        id:17,
        name:"Dead of Live",
    },
    {
        id:18,
        name:"Canon EF",
    },
    {
        id:19,
        name:"Canon RF 16mm",
    },
    {
        id:20,
        name:"Canon RF 100mm",
    },
    {
        id:21,
        name:"Sigma 24mm",
    },
    {
        id:22,
        name:"Sigma 90mm",
    },
    {
        id:23,
        name:"Fujifilm XF 23mm",
    },
    {
        id:24,
        name:"Balo máy ảnh PGYTECH",
    },
    {
        id:25,
        name:"Chân máy Peak",
    },
    {
        id:26,
        name:"Đèn Flash Sony",
    },
    {
        id:27,
        name:"PGYTECH MantisPod",
    },
    {
        id:28,
        name:"Đèn Flash Godox V1",
    },
    {
        id:29,
        name:"Đèn Flash Godox",
    },
    
]




const searchwrapper = document.querySelector(".search-input");
const inputbox = searchwrapper.querySelector("input");
const sugbox = searchwrapper.querySelector(".autocom-box");
const enter = document.getElementsByClassName("icon");

var id;
var CheckArray=[]

inputbox.onkeyup= (e)=>{
    var emptyArray= [];
    var emptyID= [];
    if(e.keyCode === 13){
        e.preventDefault();
        enterx.click();
    }
    let userData = e.target.value;
    if(userData){
        sugget.forEach(function search(item){
            var position = item.name.toLocaleLowerCase().search(userData.toLocaleLowerCase());
            if(item.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase(),position)){
                emptyArray.push(item.name);
                emptyID.push(item.id);
            }
        })
        emptyArray = emptyArray.map((data)=>{
            return data = '<li class="ClassList">'+ data +'</li>'
        });
        searchwrapper.classList.add("active");
        showSugget(emptyArray);
        allList = sugbox.querySelectorAll("li");
        CheckArray = emptyArray;
        for(let i = 0 ; i< allList.length;i++){
            allList[i].addEventListener("click",e=>{
                let selectUserData = allList[i].textContent;
                inputbox.value = selectUserData;
                id = emptyID[i];
                localStorage.setItem("id",id);
                searchwrapper.classList.remove("active");
                searchwrapper.querySelector(".icon").addEventListener("click",e=>{
                    location.href = "/Product.html";
                })
            })
        }
        if(allList.length > 1){
            searchwrapper.querySelector(".icon").addEventListener("click",e=>{
                localStorage.setItem("inputbox",inputbox.value);
                localStorage.setItem("Search",1);
                location.href=("/Group.html");
            })
        }
    }
    else
        searchwrapper.classList.remove("active");
    
}


function showSugget(list){
    let listdata;
    if(!list.length){   
        userValue = inputbox.value;
        listdata = '<li>'+ userValue +'</li>';
    }
    else{
        listdata = list.join('');
    }
    sugbox.innerHTML = listdata;
}

