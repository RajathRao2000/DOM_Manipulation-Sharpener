// Write your code below:
let arr={}
let fullList = document.getElementById("list")
function handleFormSubmit(event){
    event.preventDefault()
    let expenceAmount=document.getElementById("expenceAmount").value
    let description=document.getElementById("description").value
    let category=document.getElementById("category").value
    let newLi=document.createElement("li")
    if(category=="--select--") return false
    newLi.innerHTML=`${expenceAmount}-${description}-${category}`+'<button  class="delete-btn btn btn-danger" type="button" ">Delete Expense</button>'+'<button  class="edit-btn btn btn-primary" type="button" ">Edit Expense</button>'
    // newLi.onclick=deleter(event)
    newLi.setAttribute("onclick","deleter(event);editer(event);");

    console.log(newLi,fullList)
    fullList.appendChild(newLi)
    console.log(expenceAmount,description,category)

    arr={
        "expenceAmount":expenceAmount,
        "category": category,
        "description":description
    }
    console.log(arr)
    localStorage.setItem(description,JSON.stringify(arr))
    console.log(JSON.parse(localStorage.getItem(description)))


  }

  function deleter(event){
    event.preventDefault()
    if(event.target.classList.contains("delete-btn")){
        const usrDetails=event.target.parentElement
        let description=usrDetails.firstChild.textContent.split("-")
        localStorage.removeItem(description[1])
        fullList.removeChild(usrDetails)
  }
}

  function editer(event){
    event.preventDefault()
    if(event.target.classList.contains("edit-btn")){
        const usrDetails=event.target.parentElement
        let usrDetailsArr=usrDetails.firstChild.textContent.split("-")
        localStorage.removeItem(usrDetailsArr[1])
        fullList.removeChild(usrDetails)

        document.getElementById("expenceAmount").value=usrDetailsArr[0]
        document.getElementById("description").value=usrDetailsArr[1]
        document.getElementById("category").value=usrDetailsArr[2]

  }
}