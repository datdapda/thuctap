

var input = document.getElementsByTagName('input');

var login = document.getElementById('login1');
var login1 = document.getElementById('login2');
var login2 = document.getElementById('login3');
var login3 = document.getElementById('login4');

var form = document.querySelector('form#login');
var form1 = document.querySelector('form#createAccount');
var form2 = document.querySelector('form#ForgerAccount');
var form3 = document.querySelector('form#ChangedPassForgerAccount');
var i=0;

 document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");
  const ForgetAccountForm = document.querySelector("#ForgerAccount");
  const changedPassAccountForm = document.querySelector("#ChangedPassForgerAccount");
  if(sessionStorage.getItem("login")==0){
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();

      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
      e.preventDefault();

      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
    });

    document.querySelector("#forget").addEventListener("click", e => {
      e.preventDefault();

      ForgerAccount.classList.remove("form--hidden");
      loginForm.classList.add("form--hidden");
    });

    document.querySelector("#linkLogin3").addEventListener("click", e => {
      e.preventDefault();

      loginForm.classList.remove("form--hidden");
      ForgetAccountForm.classList.add("form--hidden");
    });

    
  }
  else{
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();

      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
      e.preventDefault();

      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
    });

    document.querySelector("#forget").addEventListener("click", e => {
      e.preventDefault();

      ForgerAccount.classList.remove("form--hidden");
      loginForm.classList.add("form--hidden");
    });

    document.querySelector("#linkLogin3").addEventListener("click", e => {
      e.preventDefault();

      loginForm.classList.remove("form--hidden");
      ForgetAccountForm.classList.add("form--hidden");
    });

    
  } 
}); 

form.onsubmit = ()=> {return false}
form1.onsubmit = ()=> {return false}
form2.onsubmit = ()=> {return false}
form3.onsubmit = ()=> {return false}
login.onclick = ()  => {
/* Check tai khoan */
  const tk= input[0].value;
  const mk=input[1].value;
  
  if( (input[0].value != "") &&  (input[1].value != "") ){
    const myInfo = account.find(function (accountInfo) {
      return tk == accountInfo.username;
    });
    if(myInfo == undefined){
      alert("Tài khoản hoặc mật khẩu không đúng");
      input[0].value = '';
      input[1].value = '';
    }
    else if(myInfo.password != mk){
      alert("Tài khoản hoặc mật khẩu không đúng");
      input[0].value = '';
      input[1].value = '';
    }
    else{
      localStorage.setItem("tk",tk);
      localStorage.setItem("mk",mk);
      form.onsubmit = ()=> {return 1};  
    }
  }
  
/* Check vi tri trong */  
  else {
    if(input[0].value == ""){
      input[0].nextElementSibling.textContent = "Tên tài khoản trống";
      setTimeout(() => {
        input[0].nextElementSibling.textContent = "";
      }, 2000);
    }
    if(input[1].value == ""){
      input[1].nextElementSibling.textContent = "Mật khẩu trống";
      setTimeout(() => {
        input[1].nextElementSibling.textContent = "";
      }, 2000);
    }
  }
}
var Createaccount= {}
/* Dang ky */
login1.onclick = ()  => {
  /* Check tai khoan */
  if( (input[2].value != "") &&  (input[3].value != "") &&  (input[4].value != "") &&  (input[5].value != "") ){
    const tk = input[2].value;
    const myInfo2 = account.find(function (accountInfo) {
      return tk == accountInfo.username;
    });
    if(myInfo2 != undefined){
      if(myInfo2.username === input[2].value){
        input[2].nextElementSibling.textContent = "Tài khoản đã có người sử dụng";
        setTimeout(() => {
          input[2].nextElementSibling.textContent = "";
        }, 2000);
      }
      else if(myInfo2.Email === input[3].value){
        input[3].nextElementSibling.textContent = "Email đã có người sử dụng";
        setTimeout(() => {
          input[3].nextElementSibling.textContent = "";
        }, 2000);
      }
    
    }
    else if(input[4].value === input[5].value){
      Createaccount ={
        'username': input[2].value,
        'password': input[4].value,
        'quyen':"user",
        'Email':input[3].value,
      }
      account.push(Createaccount);
      localStorage.setItem("tk",input[2].value);
      localStorage.setItem("mk",input[4].value);
      form1.onsubmit = ()=> {return 1}
    }
    else if(input[4].value != input[5].value){
      input[4].nextElementSibling.textContent = "Mật khẩu không đúng";
      setTimeout(() => {
        input[4].nextElementSibling.textContent = "";
      }, 2000);
      input[5].nextElementSibling.textContent = "Mật khẩu không đúng";
      setTimeout(() => {
        input[5].nextElementSibling.textContent = "";
      }, 2000);
      setTimeout(() => {
        input[2].value = '';
        input[3].value = '';
        input[4].value = '';
        input[5].value = '';
      }, 2000);
      
    }
  }
  
  /* Check vi tri trong */  
  else {
    if(input[2].value == ""){
      input[2].nextElementSibling.textContent = "Tên tài khoản trống";
      setTimeout(() => {
        input[2].nextElementSibling.textContent = "";
      }, 2000);
    }
    if(input[3].value == ""){
      input[3].nextElementSibling.textContent = "Email trống";
      setTimeout(() => {
        input[3].nextElementSibling.textContent = "";
      }, 2000);
    }
    if(input[4].value == ""){
      input[4].nextElementSibling.textContent = "Mật khẩu trống";
      setTimeout(() => {
        input[4].nextElementSibling.textContent = "";
      }, 2000);
    }
    if(input[5].value == ""){
      input[5].nextElementSibling.textContent = "Mật khẩu trống";
      setTimeout(() => {
        input[5].nextElementSibling.textContent = "";
      }, 2000);
    }
  }
}
/* Check Account forget*/
login2.onclick =()=>{
  const username = input[6].value;
  const email = input[7].value;
  if( (input[6].value != "") &&  (input[7].value != "") ){
    const myInfo = account.find(function (accountInfo) {
      return username == accountInfo.username;
    });
    if(myInfo == undefined){
      alert("Tài khoản hoặc email không đúng");
      input[6].value = '';
      input[7].value = '';
    }
    else if(myInfo.Email != email){
      alert("Tài khoản hoặc email không đúng");
      input[6].value = '';
      input[7].value = '';
    }
    else if(myInfo.username != username){
      alert("Tài khoản hoặc email không đúng");
      input[6].value = '';
      input[7].value = '';
    }
    else{
      localStorage.setItem("tk",username);
      const ForgetAccountForm = document.querySelector("#ForgerAccount");
      const changedPassAccountForm = document.querySelector("#ChangedPassForgerAccount");
      ForgetAccountForm.classList.add("form--hidden");
      changedPassAccountForm.classList.remove("form--hidden");
    }
  }
  else {
    if(input[6].value == ""){
      input[6].nextElementSibling.textContent = "Tên tài khoản trống";
      setTimeout(() => {
        input[6].nextElementSibling.textContent = "";
      }, 2000);
    }
    if(input[7].value == ""){
      input[7].nextElementSibling.textContent = "Email trống";
      setTimeout(() => {
        input[7].nextElementSibling.textContent = "";
      }, 2000);
    }
  }
}
linkLogin4.onclick =()=>{
  var tk = localStorage.getItem("tk");
  const password = input[8].value;
  const AcceptPassword = input[9].value;
  if( password != AcceptPassword ){
    input[8].nextElementSibling.textContent = "Mật khẩu không đúng";
    setTimeout(() => {
      input[8].nextElementSibling.textContent = "";
    }, 2000);
    input[9].nextElementSibling.textContent = "Mật khẩu xác nhận không đúng";
    setTimeout(() => {
      input[9].nextElementSibling.textContent = "";
    }, 2000);
  }
  else{
    localStorage.setItem("tk",tk);
    localStorage.setItem("mk",password);
    form3.onsubmit = ()=> {return 1};  
  }
}
  




  
