let name = localStorage.getItem('name')?localStorage.getItem('name'):''
console.log(name);

if(name!=''){

    alert('Please visit profile');
    window.location.href="profile.html";

}

function saveData(){

let email,pass;

email=document.getElementById("email").value;
psw=document.getElementById("pass").value;

let user_records=new Array();

user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email && v.pass==pass})){

alert("Entered");

let current_user=user_records.filter((v)=>{return v.email==email && v.pass==pass})[0]
 localStorage.setItem('name',current_user.name);
 localStorage.setItem('email',current_user.email);

  window.location.href="../Main/main.html"
}
else
{
  alert('Error');
}

}