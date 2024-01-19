// Write your code below:

function handleFormSubmit(event){
    event.preventDefault();
    let userName=document.getElementById("username").value
    let email=document.getElementById("email").value
    let phone=document.getElementById("phone").value
    let obj={
      "Username":userName,
      "email": email,
      "phone": phone
    }
  
    localStorage.setItem("User Details",JSON.stringify(obj))
  
    console.log(obj)
  }
  
  module.exports=handleFormSubmit