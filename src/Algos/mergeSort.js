import funcs from "./main"

let fast = 10;
async function merge(arr,start,mid,end,max_num){
    console.log("start = "+start+"mid = "+mid+"end = "+end+"max = "+max_num);
    let i = start;
    let j = mid+1;
    let k = start;
    const aux = [];
    while(i<=mid && j<=end){
        console.log("i = "+i+"j = "+j+"k = "+k);
        
        arr[i].style.backgroundColor = "yellow";
        arr[j].style.backgroundColor = "yellow";
        await funcs.waitforme(fast);
        if(parseInt(arr[i].style.height)%max_num<=parseInt(arr[j].style.height)%max_num){
            arr[j].style.backgroundColor = "blue";
            arr[k].style.backgroundColor = "red";
            await funcs.waitforme(fast);
            let num = (parseInt(arr[k].style.height)+(parseInt(arr[i].style.height)%max_num)*max_num);
            console.log(num);

            aux[k] = num;

            //console.log(num);
            //console.log(arr[k]);
            arr[i].style.backgroundColor = "blue";
            arr[k].style.backgroundColor = "blue";
            k++;
            i++; 
        } else {
            arr[i].style.backgroundColor = "blue";
            arr[k].style.backgroundColor = "red";
            await funcs.waitforme(fast);
            let num = (parseInt(arr[k].style.height)+(parseInt(arr[j].style.height)%max_num)*max_num);
            console.log(num);

            aux[k]=num;
            arr[j].style.backgroundColor = "blue";
            arr[k].style.backgroundColor = "blue";
            k++;
            j++;
        }

    }
    while(i<=mid){
        arr[i].style.backgroundColor = "yellow";
        arr[k].style.backgroundColor = "red";
        await funcs.waitforme(fast);
        let num = (parseInt(arr[k].style.height)+(parseInt(arr[i].style.height)%max_num)*max_num);
        aux[k]=num;
        arr[i].style.backgroundColor = "blue";
        arr[k].style.backgroundColor = "blue";
        k++;
        i++; 
    }
    while(j<=end){
        arr[j].style.backgroundColor = "yellow";
        arr[k].style.backgroundColor = "red";
        await funcs.waitforme(fast);
        let num = (parseInt(arr[k].style.height)+(parseInt(arr[j].style.height)%max_num)*max_num);
        console.log(num);
        aux[k]=num;
        arr[j].style.backgroundColor = "blue";
        arr[k].style.backgroundColor = "blue";
        k++;
        j++;
    }
    
    for(i=start; i<=end; i++){
        let num = Math.floor(aux[i]/max_num);
        arr[i].style.height = `${num}px`;
        arr[i].style.backgroundColor = "green";
        console.log("i = "+i+" "+arr[i].style.height);
    }
    
}

async function mergeSort(arr, start, end, max_num){
    if(start<end){
        let mid = Math.floor((start+end)/2);
        await mergeSort(arr,start,mid,max_num);
        await mergeSort(arr,mid+1,end,max_num);
        await merge(arr,start,mid,end,max_num);
    }
}

async function mergeSortStart(arr,n){
    var max_num = 0;
    for(var i=0; i<n; i++){
        if(parseInt(arr[i].style.height)>max_num){
            max_num = parseInt(arr[i].style.height);
        }
    }
    max_num = max_num+1;
    console.log("Max num = "+max_num);
    
    mergeSort(arr,0,n-1,max_num);
}
export default async function mS(speed){
    fast = speed;
    funcs.disable();
    console.log(".array-bar");
    var arr = document.querySelectorAll(".array-bar");
    let n = arr.length;
    for(let i=0; i<n; i++)
    {console.log(arr[i].style.height);}
    //console.log(n);
    mergeSortStart(arr,n);
    for(let i=0; i<n; i++)
    {console.log(arr[i].style.height);}
    funcs.enable();
}