// Write your code below:
let arr={}
let fullList = document.getElementById("list")
function handleFormSubmit(event){
    event.preventDefault()
    let username=document.getElementById("username").value
    let email=document.getElementById("email").value
    let phone=document.getElementById("phone").value
    let newLi=document.createElement("li")
    newLi.innerHTML=`${username}-${email}-${phone}`+'<button  class="delete-btn" type="button" ">Delete</button>'
    // newLi.onclick=deleter(event)
    newLi.setAttribute("onclick","deleter(event);");

    console.log(newLi,fullList)
    fullList.appendChild(newLi)
    console.log(username,email,phone)

    arr={
        "username":username,
        "phone": phone,
        "email":email
    }
    console.log(arr)
    localStorage.setItem(email,JSON.stringify(arr))
    console.log(JSON.parse(localStorage.getItem(email)))


  }

  function deleter(event){
    event.preventDefault()
    console.log("here")
    if(event.target.classList.contains("delete-btn")){
        const usrDetails=event.target.parentElement
        let email=usrDetails.firstChild.textContent.split("-")
        localStorage.removeItem(email[1])
        fullList.removeChild(usrDetails)
  }
}