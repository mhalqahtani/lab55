let divImageContainer = document.getElementById("photo")




let img = document.createElement("img")
img.src=".\\Public\\images\\image.png"

img.width=650
img.height=550
divImageContainer.appendChild(img)




let deletButton = document.createElement("button")

deletButton.innerText="delete"
divImageContainer.appendChild(deletButton)


deletButton.addEventListener("click",function()
{
    img.remove();

    this.remove();



})

let zoomIn  = document.createElement("button")
let zoomOut  = document.createElement("button")

zoomIn.innerText="+"
zoomOut.innerText="-"




divImageContainer.appendChild(zoomIn)
divImageContainer.appendChild(zoomOut)

const scaleFactor =1.5;
zoomIn.addEventListener("click",function()
{
    img.width *=scaleFactor

    img.height *=scaleFactor



})


zoomOut.addEventListener("click",function()
{
    img.width /=scaleFactor

    img.height /=scaleFactor



})