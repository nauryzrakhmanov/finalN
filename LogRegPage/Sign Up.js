
function myValidation(){
    var name = $("#name").val();
    var password = $("#pass").val();
    var email = $("#email").val(); 
    if (email==null || email==""){
      alert("Please write your email");  
      var error = document.getElementById("email");
      error.classList.add("error");
    return false;  
  }
  else {
      var sucess = document.getElementById("email");
      sucess.classList.remove("error"); 
  }

    if (name==null || name==""){
        alert("You forgot to write your Name");  
        var error = document.getElementById("name");
        error.classList.add("error");
      return false;  
    }
    else {
        var sucess = document.getElementById("name");
        sucess.classList.remove("error"); 
    }

    if(password ==null || password=="" ){  
        var error = document.getElementById("pass");
        error.classList.add("error");  
      return false;  
      }
      else {
        var sucess = document.getElementById("pass");
        sucess.classList.remove("error");
    }

    saveData();  
}

function saveData(){

  let email,name,pass;
  
  name = $("#name").val();
  
  email = $("#email").val();
  
  pass = $("#pass").val();
  

  let user_records=new Array();
  
  user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records.some((v)=>{return v.email==email}))
  {
  alert("This email is already registered");
  }

  else {
  user_records.push({

  "name":name,

  "email":email,

  "pass":pass,


  })

  localStorage.setItem("users",JSON.stringify(user_records));
  
  alert("Saved");
  }
  }