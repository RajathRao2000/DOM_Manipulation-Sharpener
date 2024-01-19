// Write your code below:
// let form=document.querySelector("form")
function handleFormSubmit(event){
    event.preventDefault()
  let Username=document.getElementById("username").value
  let Email=document.getElementById("email").value
  let Phone=document.getElementById("phone").value
    console.log("u",Username,"e",Email)
  localStorage.setItem("Username","Username")
  localStorage.setItem("Email",Email)
  localStorage.setItem("Phone Number",Phone)
    console.log(localStorage.getItem("Phone Number"))
    console.log(localStorage.getItem("Email"))
    console.log(localStorage.getItem("Username"))
  
    
    }
  
  module.exports=handleFormSubmit