// (function(){

    let screen= document.querySelector(".screen");
    let button = document.querySelectorAll(".btn");
    let equal = document.querySelector(".equal-btn");
    let clear = document.querySelector(".clear-btn");
    let del = document.querySelector(".delete-btn");
    
    button.forEach(function(button){
            button.addEventListener("click", function(e){
                let value = e.target.value;
                screen.value+=value;
            }) 
    })

    equal.addEventListener("click",function(e){
        if(screen.value == ""){
            screen.value == "";
        }
        else{
            let ans = eval(screen.value);
            screen.value = ans;
        }
    })

    clear.addEventListener("click",function(e){
        screen.value="";
    })
    
    del.addEventListener("click",function(e){
       screen.value = screen.value.toString().slice(0,-1);
      console.log(screen.value);
    })

// })()

