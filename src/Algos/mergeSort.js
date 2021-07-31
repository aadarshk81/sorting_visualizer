import funcs from "./main"

let fast = 0;   //speed 

//merges two sorted array
//purple shows start and end points
//yellow shows the elements that are compared
//cyan shows the larger of two elemnets being compared and processed
//red shows the position where the smaller of the two would be placed
//green shows the sorted array
async function merge(arr,start,mid,end,max_num){
    console.log("start = "+start+"mid = "+mid+"end = "+end+"max = "+max_num);

    //marks the start and end position of the array being sorted
    arr[start].style.backgroundColor = "purple";
    arr[end].style.backgroundColor = "purple";
    await funcs.waitforme(fast);

    let i = start;
    let j = mid+1;
    let k = start;// position where the least of ith and jth pos element would be placed

    //auxiliary array to store the sorted array
    const aux = [];

    while(i<=mid && j<=end){
        console.log("i = "+i+"j = "+j+"k = "+k);

        //do not change the colour if start or end position element
        //otherwise change it to yellow to show the elements being compared
        if(arr[i].style.backgroundColor!=="purple")
            arr[i].style.backgroundColor = "yellow";
        if(arr[j].style.backgroundColor!=="purple")
            arr[j].style.backgroundColor = "yellow";
        await funcs.waitforme(fast);

        //if ith position element is smaller than jth one
        if(parseInt(arr[i].style.height)%max_num<=parseInt(arr[j].style.height)%max_num){

            //show bigger elemnet by cyan and the position that smaller should go by red
            //don't change if start or end position element
            if(arr[j].style.backgroundColor!=="purple")
                arr[j].style.backgroundColor = "cyan";
            if(arr[k].style.backgroundColor!=="purple")
                arr[k].style.backgroundColor = "red";
            await funcs.waitforme(fast);

            //get the height of smaller element
            let num = (parseInt(arr[k].style.height)+(parseInt(arr[i].style.height)%max_num)*max_num);
            console.log(num);

            //stores the num to auxiliary array kth pos
            aux[k] = num;

            //console.log(num);
            //console.log(arr[k]);
            if(arr[i].style.backgroundColor!=="purple")
                arr[i].style.backgroundColor = "cyan";
            if(arr[k].style.backgroundColor!=="purple")
                arr[k].style.backgroundColor = "cyan";
            k++;
            i++; 
        } 
        //else if ith pos element is not smaller than jth
        else {
            //show bigger element by cyan and the position that smaller should go by red
            //don't change if start or end position element
            if(arr[i].style.backgroundColor!=="purple")
                arr[i].style.backgroundColor = "cyan";
            if(arr[k].style.backgroundColor!=="purple")
                arr[k].style.backgroundColor = "red";
            await funcs.waitforme(fast);

            let num = (parseInt(arr[k].style.height)+(parseInt(arr[j].style.height)%max_num)*max_num);
            console.log(num);

            aux[k]=num;
            if(arr[j].style.backgroundColor!=="purple")
                arr[j].style.backgroundColor = "cyan";
            if(arr[k].style.backgroundColor!=="purple")
                arr[k].style.backgroundColor = "cyan";
            k++;
            j++;
        }

    }

    //if ith position doesn't reaches mid then process that too
    while(i<=mid){

        if(arr[i].style.backgroundColor!=="purple")
            arr[i].style.backgroundColor = "yellow";
        if(arr[k].style.backgroundColor!=="purple")
            arr[k].style.backgroundColor = "red";
        await funcs.waitforme(fast);

        let num = (parseInt(arr[k].style.height)+(parseInt(arr[i].style.height)%max_num)*max_num);
        aux[k]=num;

        if(arr[i].style.backgroundColor!=="purple")
            arr[i].style.backgroundColor = "cyan";
        if(arr[k].style.backgroundColor!=="purple")
            arr[k].style.backgroundColor = "cyan";
        k++;
        i++; 
    }
    //if jth position doesn't reaches end then process that too
    while(j<=end){

        if(arr[j].style.backgroundColor!=="purple")
            arr[j].style.backgroundColor = "yellow";
        if(arr[k].style.backgroundColor!=="purple")
            arr[k].style.backgroundColor = "red";
        await funcs.waitforme(fast);

        let num = (parseInt(arr[k].style.height)+(parseInt(arr[j].style.height)%max_num)*max_num);
        console.log(num);
        aux[k]=num;

        if(arr[j].style.backgroundColor!=="purple")
            arr[j].style.backgroundColor = "cyan";
        if(arr[k].style.backgroundColor!=="purple")
            arr[k].style.backgroundColor = "cyan";
        k++;
        j++;
    }
    
    //change the heights of the array from ith to jth position
    for(i=start; i<=end; i++){
        //replace the ith arr elements to that of ith aux array element
        let num = Math.floor(aux[i]/max_num);
        arr[i].style.height = `${num}px`;
        //show the sorted element in green
        arr[i].style.backgroundColor = "green";
        console.log("i = "+i+" "+arr[i].style.height);
    }
    
}

//recursive function to break array into two and then sorts the array
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
    
    await mergeSort(arr,0,n-1,max_num);
}
export default async function mS(speed){
    fast = speed;
    //disable all the speed and array size buttons
    funcs.disable();
    console.log(".array-bar");

    //get the elements of the array
    var arr = document.querySelectorAll(".array-bar");
    let n = arr.length;
    /* 
    for(let i=0; i<n; i++)
    {console.log(arr[i]);} 
    */
    //console.log(n);

    //call mergeSort function
    await mergeSortStart(arr,n);
    /* 
    for(let i=0; i<n; i++)
    {console.log(arr[i].style.height);} 
    */
   //enable the buttons
    funcs.enable();
}