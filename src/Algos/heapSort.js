import funcs from "./main";

let fast = 0;

//cyan for showing root in that particular heap
//yellow for elements to be swapped while calling heapify
//red for elements to be swapped while calling heap
//green for final position of element
async function heap(arr, n){

    //build heap
    for(let i= Math.floor(n/2)-1; i>=0; i--){
        await heapify(arr,n,i);
    }

    //take out element from heap 
    for(var i=n-1; i>0; i--){
        //show elements to be swapped by red
        arr[i].style.backgroundColor = "red";
        arr[0].style.backgroundColor = "red";
        await funcs.waitforme(fast);
        funcs.swap(arr[i],arr[0]);
        await funcs.waitforme(fast);

        //show final position of element in green
        arr[i].style.backgroundColor = "green";
        //again call heapify on the reduced heap
        await heapify(arr,i,0);
    }
    arr[0].style.backgroundColor = "green";
}

//heapify a subtree rooted with node i 
//i being the position in arr[]
async function heapify(arr, n, i){
    //n is heap size
    var largest = i;    //initialise largest as root
    var l = 2*i+1;  //left child being 2*i+1
    var r = 2*i+2;  //right child being 2*i+2

    //change root to cyan colour
    arr[largest].style.backgroundColor = "cyan";
    
    //if left child is larger than root
    if(l<n && parseInt(arr[l].style.height)>parseInt(arr[largest].style.height)){
        await funcs.waitforme(fast);
        //root now becomes left child so chnage it to cyan
        arr[largest].style.backgroundColor = "blue";
        arr[l].style.backgroundColor = "cyan";
        largest = l;
    }

    //if right child is larger than root
    if(r<n && parseInt(arr[r].style.height)>parseInt(arr[largest].style.height)){
        await funcs.waitforme(fast);
        //root now becomes right child so chnage it to cyan
        arr[largest].style.backgroundColor = "blue";
        arr[r].style.backgroundColor = "cyan";
        largest = r;
    }

    //if largest is not ith element
    if(largest!==i){
        //swap the largest and ith element and then heapify the remaining subtree
        //with root as the largest variable
        await funcs.waitforme(fast);
        arr[largest].style.backgroundColor = "yellow";
        arr[i].style.backgroundColor = "yellow";
        await funcs.waitforme(fast);
        funcs.swap(arr[i],arr[largest]);
        arr[i].style.backgroundColor = "blue";
        await heapify(arr,n,largest);
    }
}
export default async function hS(speed){
    fast = speed;
    funcs.disable();
    var arr = document.querySelectorAll(".array-bar");
    let n = arr.length;
    for(let i=0; i<n; i++)
    {console.log(arr[i]);}
    await heap(arr,n);
    for(let i=0; i<n; i++)
    {console.log(arr[i].style.height);}
    funcs.enable();
}