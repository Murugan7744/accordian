var qus=document.querySelectorAll(".head");
var answer=document.querySelectorAll(".content");

 qus.forEach(function(element){

    element.addEventListener("click",function(){
         var icon=element.nextElementSibling.classList.contains("view");
              answer.forEach(function(ans){
                   ans.classList.remove("view");
              })
              if(icon==true){
                element.nextElementSibling.classList.remove("view");
                element.firstChild.nextElementSibling.nextElementSibling.style.transform="rotate(360deg)";
                
              } 
              else{
                element.nextElementSibling.classList.add("view");
                element.firstChild.nextElementSibling.nextElementSibling.style.transform="rotate(180deg)";
              }             
       })
})



