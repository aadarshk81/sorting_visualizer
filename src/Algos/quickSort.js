import funcs from "./main";
let fast=0;

//orange for pivot element
//red for current element
//pink if curr element greater than pivot
//yellow if curr element less than pivot
//green for sorted array
//turquoise for elements currently in process of partiotion
//purple for partition
async function partition(arr,l,r)
{

    let pivot = arr[l]; //setting first element as pivot of unsorted array
    arr[l].style.backgroundColor='orange';
    await funcs.waitforme(fast);

    //currently in process
    for(var p=l+1;p<=r;p++)
    arr[p].style.backgroundColor='turquoise';
    
    await funcs.waitforme(fast);

    let i = l+1;

    for(var j=l+1;j<=r;j++)
    {
        arr[j].style.backgroundColor = 'red';       //current element
        await funcs.waitforme(fast);

        //if current element less than pivot
        if(parseInt(arr[j].style.height)<parseInt(pivot.style.height))
        {
            funcs.swap(arr[j],arr[i]);  //swap current element to index next to element smaller that it.
            arr[i].style.backgroundColor = 'yellow';    //smaller than pivot
            if(i != j) arr[j].style.backgroundColor = 'pink';   //greater element than pivot

            i++;

            
            
            await funcs.waitforme(fast);
        }
        else{
            //if not less than pivot
            arr[j].style.backgroundColor = 'pink';
        }
    }

    //put pivot in position at junc of yellow and pink bars.
    funcs.swap(arr[i-1],arr[l]);

    arr[i-1].style.backgroundColor='purple';//partition coloured as purple
    
    await funcs.waitforme(fast);

    for(let k = 0; k < arr.length; k++){
        if(arr[k].style.backgroundColor != 'green' && arr[k].style.backgroundColor !='purple')
            arr[k].style.backgroundColor = 'cyan';
    }
    return i-1;
}

async function quickSort(arr,l,r)
{
    if(l < r){

        //elements before pivot set as sorted
        for(var i=0;i<l;i++)
        arr[i].style.backgroundColor='green';
        await funcs.waitforme(fast);

        let pivot_index = await partition(arr, l, r);
        await quickSort(arr, l, pivot_index - 1);
        await quickSort(arr, pivot_index + 1, r);
    }
    
}

export default async function qS(speed){
    fast = speed;
    funcs.disable();        //disabling buttons

    //getting the elements of array
    var arr = document.querySelectorAll(".array-bar");
    let n = arr.length;

    for(let i=0; i<n; i++)
    {console.log(arr[i].style.height);}

    await quickSort(arr,0, n-1);

    for(let i=0; i<n; i++)
    {console.log(arr[i].style.height);}

    funcs.enable();     //enabling buttons
}