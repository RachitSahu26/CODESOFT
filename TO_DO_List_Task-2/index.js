const inputText=document.getElementById("input-box");

const addTask=document.getElementById("add-btn");

const listArea=document.getElementById("list-area");

addTask.addEventListener("click",()=>{

    if(inputText.value===""){
        alert("please add something")
    }
else{

let listItem=document.createElement("li")

listItem.classList.add("List-Item");
listArea.appendChild(listItem);


// ...............................creating check box............................
let checkImg=document.createElement("img");
checkImg.src="./icon/bx-checkbox.svg";
checkImg.classList.add("check-img")
listItem.appendChild(checkImg);




// ...............................creating Text area ............................


let spanItem=document.createElement("span")

spanItem.classList.add("span-Item");

spanItem.innerHTML=inputText.value;

listItem.appendChild(spanItem);
inputText.value="";

// ...............................creating delete button............................
let closesImg=document.createElement("img");
closesImg.src="./icon/cross.png";
closesImg.classList.add("cross-img")
listItem.appendChild(closesImg);


closesImg.addEventListener("click",()=>{

    listArea.removeChild(listItem);

})












// /................................click even when i will click on chechbox.............//
checkImg.addEventListener("click", () => {
    if (checkImg.src.endsWith("bx-checkbox.svg")) {
      checkImg.src = "./icon/bx-checkbox-checked.svg";
      spanItem.style.textDecoration="line-through red";

    } else {
      checkImg.src = "./icon/bx-checkbox.svg";
    
      spanItem.style.textDecoration="none";
    
    }
  });
  
}
})
