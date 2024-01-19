// Add input element inside form, before button, to take fruit description
const form=document.querySelector("form")
const inputDes=document.createElement("input")
inputDes.placeholder="Enter Description"
inputDes.id="Fruit-Description"
inputDes.type="text"
const addFruitBtn=document.querySelector("button")
form.insertBefore(inputDes,addFruitBtn)

// Show the fruit description in italics on the next line
const fruits=document.querySelector(".fruits")
form.addEventListener("submit",function(event){
  event.preventDefault()
  const FruitName=document.getElementById("fruit-to-add").value
  const FruitDesc=document.getElementById("Fruit-Description").value
  ///insert fruit into list
  const newLi=document.createElement("li")
  newLi.className="fruit"
  const newp=document.createElement("p")
  newp.innerText=FruitDesc
  newp.style.fontStyle="italic"
  newLi.innerHTML=FruitName+newp.outerHTML+'<button class="delete-btn">x</button>'

  //insert new list to fruitList
  fruits.appendChild(newLi)

})


// Create a filter that shows only those fruits whose either name or description or both matches the entered text


const filter=document.getElementById("filter")

filter.addEventListener("keyup",function(event){
  const textEntered = event.target.value.toLowerCase();
  const fruitItems=document.getElementsByClassName("fruit")
  // console.log(fruitItems[4].firstElementChild.textContent.toLowerCase())
  for(let i=0;i<fruitItems.length;i++){
    const currentFruitText=fruitItems[i].firstChild.textContent.toLowerCase();
    let currentFruitDesc;
    if(fruitItems[i].firstElementChild.nodeName=="P"){

       currentFruitDesc=fruitItems[i].firstElementChild.textContent.toLowerCase()
    }else{
       currentFruitDesc=-1
    }

    if(currentFruitText.indexOf(textEntered)>-1 || currentFruitDesc.indexOf(textEntered)>-1){
      fruitItems[i].style.display="flex"
    }else{
      fruitItems[i].style.display="none"
    }

  }
})