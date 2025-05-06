const inputt =document.querySelector("input") ;
const AddBtn = document.querySelector("button")
const ultag = document.querySelector("ul")

AddBtn.addEventListener("click",function(){

    // here we work on input function 
    const value = inputt.value;
    // console.log(value);    
    const liTag = document.createElement("li")
    liTag.innerText = value
    // console.log(liTag);
    ultag.appendChild(liTag)
    inputt.value = ""
 

       // here we work on remove btn function
    const delbtn = document.createElement("button");
    delbtn.innerText = "X"
    // console.log(delbtn);
    liTag.appendChild(delbtn)

    delbtn.addEventListener("click",function(){
        liTag.remove()
    })

})