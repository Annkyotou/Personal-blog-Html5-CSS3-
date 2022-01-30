function myFunction1(){
document.getElementById("demo").innerHTML = "我的第一段 JavaScript";
}
function myFunction2(){
    document.getElementById("demo").innerHTML = "我的第二段 JavaScript";
}


    var speedpic = 8;//速度数值越大速度越慢        
    document.getElementById("list2").innerHTML = document.getElementById("list1").innerHTML;
    function Marqueepic() {            
    if (document.getElementById("list2").offsetWidth - document.getElementById("list").scrollLeft <= 0) {                
    document.getElementById("list").scrollLeft -= document                        
    .getElementById("list1").offsetWidth;            
    } else {                
    document.getElementById("list").scrollLeft++;            
    }        
    }        
    var MyMarpic = setInterval(Marqueepic, speedpic);        
    document.getElementById("list").onmouseover = function() {            
    clearInterval(MyMarpic);        
    }        
    document.getElementById("list").onmouseout = function() {            
    MyMarpic = setInterval(Marqueepic, speedpic);        
    }    

