const funcs = {
//for swapping two elements
 swap(el1, el2) {
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
},

//wait 
 waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
},

 disable() {
    document.getElementsByClassName("b")[0].disabled=true;
    
    document.getElementsByClassName("slide")[0].disabled=true;
    document.getElementsByClassName("slide")[1].disabled=true;
    var cells = document.getElementsByClassName("a"); 
for (var i = 0; i < cells.length; i++) { 
    cells[i].disabled = true;
}
},

 enable() {
     
     document.getElementsByClassName("b")[0].disabled=false;
     document.getElementsByClassName("slide")[0].disabled=false;
     document.getElementsByClassName("slide")[1].disabled=false;

     var cells = document.getElementsByClassName("a"); 
for (var i = 0; i < cells.length; i++) { 
    cells[i].disabled = false;
}

     const arr = document.querySelectorAll(".array-bar");

     for(var i=0;i<arr.length;i++)
     {
         arr[i].style.backgroundColor = 'blue';
     }
    
}
}
export default funcs;