// Write your code below:
let arr=[]
function handleFormSubmit(event){
    event.preventDefault()
    let username=document.getElementById("username").value
    let email=document.getElementById("email").value
    let phone=document.getElementById("phone").value
    let fullList = document.getElementById("list")
    let newLi=document.createElement("li")
    newLi.innerHTML=`${username}-${email}-${phone}`
    console.log(newLi,fullList)
    fullList.appendChild(newLi)
    console.log(username,email,phone)

    arr.push({
        "username":username,
        "phone": phone,
        "email":email
    })
    list.append()
    console.log(arr)
    localStorage.setItem("user details",JSON.stringify(arr))
    console.log(JSON.parse(localStorage.getItem("user details")))


  }