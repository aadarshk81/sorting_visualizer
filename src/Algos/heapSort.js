import funcs from "./main";

let fast = 0;

async function heap(arr, n){
    for(let i= Math.floor(n/2)-1; i>=0; i--){
        await heapify(arr,n,i);
    }
    for(var i=n-1; i>0; i--){
        arr[i].style.backgroundColor = "red";
        arr[0].style.backgroundColor = "red";
        await funcs.waitforme(fast);
        funcs.swap(arr[i],arr[0]);
        await funcs.waitforme(fast);
        arr[i].style.backgroundColor = "blue";
        await heapify(arr,i,0);
    }
    arr[0].style.backgroundColor = "blue";
}

async function heapify(arr, n, i){
    var largest = i;
    var l = 2*i+1;
    var r = 2*i+2;
    arr[largest].style.backgroundColor = "cyan";

    if(l<n && parseInt(arr[l].style.height)>parseInt(arr[largest].style.height)){
        await funcs.waitforme(fast);
        arr[l].style.backgroundColor = "cyan";
        largest = l;
    }
    if(r<n && parseInt(arr[r].style.height)>parseInt(arr[largest].style.height)){
        await funcs.waitforme(fast);
        arr[r].style.backgroundColor = "cyan";
        largest = r;
    }
    if(largest!==i){
        arr[largest].style.backgroundColor = "yellow";
        arr[i].style.backgroundColor = "yellow";
        await funcs.waitforme(fast);
        funcs.swap(arr[i],arr[largest]);

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