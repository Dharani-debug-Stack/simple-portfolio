const side=document.getElementById("side-Nav")
document.querySelector(".toggle").addEventListener("click",function()
{
    side.style.right="0";
})
document.querySelector(".closeNav").addEventListener("click",function()
{
    side.style.right="-50%";
})
let mainButton=document.querySelector(".mainBtn")

document.querySelector(".btn1").addEventListener("click",function()
{
mainButton.style.backgroundColor="white"
mainButton.style.color="black"
})
document.querySelector(".btn2").addEventListener("click",function()
{
mainButton.style.backgroundColor="white"
mainButton.style.color="black"
})
document.querySelector(".btn3").addEventListener("click",function()
{
mainButton.style.backgroundColor="white"
mainButton.style.color="black"
})

mainButton.addEventListener("click",function()
{
mainButton.style.backgroundColor="#3B82F6"
mainButton.style.color="white"
})


document.querySelector(".btn1").addEventListener("click",function()
{
let imageContainer=document.getElementById("image-container")
let divs=imageContainer.querySelectorAll("div")
for(let i=0;i<divs.length;i++){
    let div=divs[i]
    if(div.classList.contains("html")){
    div.style.display="block"
}
else{
    div.style.display="none"
}

}
})
document.querySelector(".btn2").addEventListener("click",function()
{
let imageContainer=document.getElementById("image-container")
let divs=imageContainer.querySelectorAll("div")
for(let i=0;i<divs.length;i++){
    let div=divs[i]
    if(div.classList.contains("tcss")){
    div.style.display="block"
}
else{
    div.style.display="none"
}

}
})
document.querySelector(".btn3").addEventListener("click",function()
{
let imageContainer=document.getElementById("image-container")
let divs=imageContainer.querySelectorAll("div")
for(let i=0;i<divs.length;i++){
    let div=divs[i]
    if(div.classList.contains("js")){
    div.style.display="block"
}
else{
    div.style.display="none"
}

}
})
document.querySelector(".mainBtn").addEventListener("click",function()
{
let imageContainer=document.getElementById("image-container")
let divs=imageContainer.querySelectorAll("div")

    
    
   
for(let i=0;i<divs.length;i++){
    let div=divs[i]
    
    div.style.display="block"
}
})