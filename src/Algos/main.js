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
    document.getElementById("new-array").disabled=true;
    

    document.getElementById("arr_sz").disabled=true;
    

    document.getElementById("speed_input").disabled=true;
    
},

 enable() {
     document.getElementById("new-array").disabled=false;
    

     document.getElementById("arr_sz").disabled=false;
    

     document.getElementById("speed_input").disabled=false;

     const arr = document.querySelectorAll(".array-bar");

     for(var i=0;i<arr.length;i++)
     {
         arr[i].style.backgroundColor = 'blue';
     }
    
}
}
export default funcs;