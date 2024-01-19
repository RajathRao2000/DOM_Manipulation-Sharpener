// Write your code below:
let mainDiv=document.querySelectorAll("div")
console.log(mainDiv)
let subHead=document.createElement("h3")
let text=document.createTextNode("Buy high quality organic fruits online")
subHead.appendChild(text)
subHead.style.fontStyle="italic"
console.log(subHead)
mainDiv[0].appendChild(subHead)

let text1=document.createTextNode("Total fruits: 4")
let para=document.createElement("p")
para.appendChild(text1)
let ul=document.querySelector("ul")
mainDiv[1].insertBefore(para,ul)
para.id="fruits-total"