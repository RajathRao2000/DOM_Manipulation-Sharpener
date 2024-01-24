// Write your code below:
let arr={}
let fullList = document.getElementById("list")
function displayLocalStorage(){
  let local={...localStorage}
  console.log(local)
  let uniqueIdArr=Object.keys(local)
  uniqueIdArr.forEach((key)=>{
    console.log(key)
    let localItem=localStorage.getItem(key)
    let itemsObj=JSON.parse(localItem)
    console.log("||",localItem,"||",itemsObj)
      let newLi=document.createElement("li")
      // newLi.className="list-group-item container text-right"
      newLi.classList.add("list-group-item","container")
      newLi.innerHTML=`<div style="display:none;">${itemsObj["uniqueId"]}</div>${itemsObj["expenceAmount"]}-${itemsObj["description"]}-${itemsObj["category"]}`+'&nbsp&nbsp<div class="btn-group text-right"><button  class=" delete-btn btn btn-danger" type="button" ">Delete Expense</button>'+'<button  class="edit-btn btn btn-primary" type="button" ">Edit Expense</button></div>'
      newLi.setAttribute("onclick","deleter(event);editer(event);");
  
      console.log(newLi,fullList)
      fullList.appendChild(newLi)
  })

}

displayLocalStorage()

function handleFormSubmit(event){
  event.preventDefault()
  let num=Math.floor(Math.random()*1000)
  console.log(num)
    while(Object.keys(localStorage).includes(num)){
      num=Math.random()*1000
    }
    let expenceAmount=document.getElementById("expenceAmount").value
    let description=document.getElementById("description").value
    let category=document.getElementById("category").value
    if(category=="--select--") return false
    // if()
    let newLi=document.createElement("li")
    newLi.className="list-group-item"
    newLi.innerHTML=`<div style="display:none;">${num}</div>${expenceAmount}-${description}-${category}`+'&nbsp&nbsp<div class="btn-group"><button  class="delete-btn btn btn-danger" type="button" ">Delete Expense</button>'+'<button  class="edit-btn btn btn-primary" type="button" ">Edit Expense</button></div>'
    // newLi.onclick=deleter(event)
    newLi.setAttribute("onclick","deleter(event);editer(event);");

    // console.log(newLi,fullList)
    fullList.appendChild(newLi)
    // console.log(expenceAmount,description,category)

    arr={
        "uniqueId":num,
        "expenceAmount":expenceAmount,
        "category": category,
        "description":description
    }
    // console.log(arr)
    localStorage.setItem(num,JSON.stringify(arr))
    console.log(JSON.parse(localStorage.getItem(num)))


  }

  function deleter(event){

    event.preventDefault()
    if(event.target.classList.contains("delete-btn")){

        const usrDetails=event.target.parentElement.parentElement
        const id=event.target.parentElement.parentElement.firstElementChild.textContent
        console.log("|",usrDetails,id)
        // let description=usrDetails.firstChild.textContent.split("-")
        localStorage.removeItem(id)
        fullList.removeChild(usrDetails)
  }
}

  function editer(event){
    event.preventDefault()
    if(event.target.classList.contains("edit-btn")){
        const usrDetails=event.target.parentElement.parentElement
        console.log(usrDetails)
        const id=event.target.parentElement.parentElement.firstElementChild.textContent
        let usrDetailsArr=usrDetails.firstChild.nextSibling.textContent.split("-")
        console.log(usrDetailsArr)
        // let usrDetailsArr=usrDetails.
        localStorage.removeItem(id)
        fullList.removeChild(usrDetails)

        document.getElementById("expenceAmount").value=usrDetailsArr[0]
        document.getElementById("description").value=usrDetailsArr[1]
        document.getElementById("list").value=usrDetailsArr[2]

  }
}