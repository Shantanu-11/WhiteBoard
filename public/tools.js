let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");

let pencilOptions = pencil.querySelector(".tool-options");
let eraserOptions = eraser.querySelector(".tool-options");

let pencilSizeInput = pencil.querySelector("input");
let eraserSizeInput = eraser.querySelector("input");

let pencilColors=pencil.querySelector(".pencil-colors div");

let activeTool = "pencil"; 

pencil.addEventListener("click" , function(e){
    if(activeTool == "pencil"){
        let disp=e.target.classList;
        console.log(e);
        if(disp.contains("hide")){
            disp.classList.add("unhide");
            disp.classList.remove("hide"); 
        }else if(disp.classList.contains("unhide")){
             disp.classList.remove("unhide");
             disp.classList.add("hide");
        }
       
    } else{ 
        activeTool = "pencil";
        ctx.strokeStyle = "black";
    }
})

eraser.addEventListener("click" , function(){
    if(activeTool == "eraser"){
    }
    else{
        activeTool = "eraser";
        ctx.strokeStyle = "white";
    }
})